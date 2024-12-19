import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./Models/UserModel.js";
import PreventionTipsModel from "./Models/PreventionTipsModel.js"
import bcrypt from 'bcrypt';
import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//Database connection
const connectString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@voiceofawarenesscluster.p8cx5.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority&appName=VoiceOfAwarenessCluster`
mongoose.connect(connectString);

app.listen(process.env.PORT, () => {
  console.log("You are connected");
});

//Express Post route for create account
app.post("/registerUser", async (req, res) => {
  try {

    const name = req.body.name;
    const phoneNo = req.body.phoneNo;
    const email = req.body.email;
    const password = req.body.password;

    const user = new UserModel({
      name: name,
      phoneNo : phoneNo,
      email: email,
      password: password,
    });

   

    await user.save();
    res.send({ user: user, msg: "User data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});



//Express Post route for Login

app.post("/login",async (req, res) =>{
try {
  const {email,password} = req.body;
  const user = await UserModel.findOne({email: email});
  
  if(!user){
    res.send({msg:"Couldn't find the user"})
  } else if(user.password !== password){
    res.send({msg:"Password is incorrect"})

  }else{
    res.send({msg:"Login Successfully", user:user})

  }
  
  
} catch (error) {
  res.status(500).json({ error: "An unexpected error occurred" });
}
})


//POST API-logout 
app.post("/logout", async (req, res) => {
  res.send({ msg: "logout successful" })
 })


 




//POST API - addTip
app.post("/addTip", async (req, res) => {
  try {
    const preventionTip = req.body.preventionTip;
    const whyItIsImportant = req.body.whyItIsImportant;
    const howToApply = req.body.howToApply;
    const whoCanHelp = req.body.whoCanHelp;

    const tip = new PreventionTipsModel({
       preventionTip : preventionTip,
       whyItIsImportant : whyItIsImportant,
       howToApply : howToApply,
       whoCanHelp : whoCanHelp,
    });

    await tip.save();
    res.send({ tip: tip, msg: "The Tip Added Successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

//Get API - get/fetching PreventionTips collection

app.get("/getTips",async(req,res)=>{
  try{
    const tips = await PreventionTipsModel.find({}).sort({ createdAt: -1 }); 
    const countTips = await PreventionTipsModel.countDocuments({});
    res.send({ tips: tips, count: countTips });
  }catch(error){
    console.error(err); 
    res.status(500).json({ error: "An error occurred" }); 
  }
});


//PUT API - likeTip

app.put("/likeTip/:tipId/", async (req, res) => {
  const tipId = req.params.tipId;
  const userId = req.body.userId;

  try {
    //search the tipId if it exists
    const tipToUpdate = await PreventionTipsModel.findOne({ _id: tipId });

    if (!tipToUpdate) {
      return res.status(404).json({ msg: "Tip not found." });
    }

    //Search the user Id from the array of users who liked the post.
    const userIndex = tipToUpdate.likes.users.indexOf(userId);

    //indexOf method returns the index of the first occurrence of a specified value in an array.
    //If the value is not found, it returns -1.

    //This code will toogle from like to unlike
    if (userIndex !== -1) {
      // User has already liked the post, so unlike it
      const udpatedTip = await PreventionTipsModel.findOneAndUpdate(
        { _id: tipId },
        {
          $inc: { "likes.count": -1 }, // Decrement the like count $inc and $pull are update operators
          $pull: { "likes.users": userId }, // Remove userId from the users array
        },
        { new: true } // Return the modified document
      );

      res.json({ tip: udpatedTip, msg: "Tip unliked." });
    } else {
      // User hasn't liked the post, so like it
      const udpatedTip = await PreventionTipsModel.findOneAndUpdate(
        { _id: tipId },
        {
          $inc: { "likes.count": 1 }, // Increment the like count
          $addToSet: { "likes.users": userId }, // Add userId to the users array if not already present
        },
        { new: true } // Return the modified document
      );

      res.json({ tip: udpatedTip, msg: "Tip liked." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
})
app.get("/getUsers", async (req, res) => {
  try {
    // Fetch all users from the "UserModel" collection, sorted by createdAt in descending order
    const users = await UserModel.find({}).sort({ _id: -1 });

    const countUser = await UserModel.countDocuments({});

    res.send({ users: users, count: countUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });

  }
  //DELETE API - Delete User
  app.delete("/deleteUser/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await UserModel.findByIdAndDelete(id);
  
      if (!user) {
        return res.status(404).send({ msg: "User not found" });
      }
  
      res.send({ msg: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
});


// DELETE API - Delete Tip

app.delete("/deleteTip/:id", async (req, res) => {
  const { id } = req.params;


  try {
    const tip = await PreventionTipsModel.findByIdAndDelete(id);

 
    if (!tip) {
      return res.status(404).send({ msg: "Tip not found" });

    }

 
    res.send({ msg: "Tip deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



//UPDATE API - Update User Profile


app.put("/updateUserProfile/:_id/", async (req, res) => {
  // Retrieve the value from the route
  const _id = req.params._id;
  // Retrieve the values from the request body
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phoneNo = req.body.phoneNo;

  try {
    // Search for the user that will be updated using the findOne method
    const userToUpdate = await UserModel.findOne({ _id: _id });

    if (!userToUpdate) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's name and phone number
    userToUpdate.name = name;
    userToUpdate.email = email;
    userToUpdate.phoneNo = phoneNo;

    // If the user changed the password, change the password in the DB to the new hashed password
    if (password !== userToUpdate.password) {
      const hashedpassword = await bcrypt.hash(password, 10);
      userToUpdate.password = hashedpassword;
    }

    // Save the updated user
    await userToUpdate.save(); // Make sure to save the changes

    // Return the updated user as a response
    res.send({ user: userToUpdate, msg: "Updated." });

  } catch (err) {
    res.status(500).json({ error: err });
  }
});



