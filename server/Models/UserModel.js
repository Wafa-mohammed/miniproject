import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic:{
    type:String,
    default:"user.png"
  },
  type:{
    type:String,
    default:"U"
  }

});
const UserModel = mongoose.model("users", UserSchema);
export default UserModel;