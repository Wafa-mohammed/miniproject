import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//Create the thunk for add tip
export const addTip = createAsyncThunk(
    "tips/addTip",
    async(tipData)=>{
      try{
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/addTip`,{
            preventionTip : tipData.preventionTip,
            whyItIsImportant : tipData.whyItIsImportant,
            howToApply : tipData.howToApply,
            whoCanHelp : tipData.whoCanHelp, 
          });
  
          console.log(response)
          const tip = response.data.tip;
          return tip;
  
      } catch (error) {
        const msg = error.message; 
        return {msg}
       
      }
    }
  ); 

//Create the thunk for get tip

export const getTips = createAsyncThunk("tips/getTips",async()=>{
  try{
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/getTips`); 
      console.log(response); 
      return response.data.tips; 
  }
  catch(error){
      console.log(error); 
  }
});

// Create the thunk for likes
export const likeTip = createAsyncThunk("tips/likeTip", async (tipData) => {
  try {
    //Pass along the URL the tipId
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/likeTip/${tipData.tipId}`,
      {
        userId: tipData.userId,
      }
    );
    const tip = response.data.tip;
    return tip;
  } catch (error) {
    console.log(error);
  }
});


// Delete Tip
export const deleteTip = createAsyncThunk(
  "tips/deleteTip",
  async (tipId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/deleteTip/${tipId}`);
      return { tipId, msg: response.data.msg };
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Error deleting tip");
    }
  }
);



const initialState = {
    status: "idle",
    tips: [],
    likes: [],
    
    
  };




  export const tipSlice = createSlice({
    name: "tips", //name of the state
    initialState, // initial value of the state
    reducers: {},  
    extraReducers: (builder) => { 
        builder
            .addCase(addTip.pending, (state)=>{
              state.status = "loading";
            })
  
            .addCase(addTip.fulfilled, (state, action) => { 
              console.log(action.payload);
              state.status = "succeeded";
              state.tips.unshift(action.payload);

            }) 
              
            .addCase(addTip.rejected, (state, action) => { 
              state.status = "failed";
              state.error = action.error.message;
 
            })

            .addCase(getTips.pending, (state)=>{
              state.status = "loading";
            })
  
            .addCase(getTips.fulfilled, (state, action) => { 
              state.status = "succeeded";
              console.log(action.payload);
              state.tips = action.payload;

            }) 
              
            .addCase(getTips.rejected, (state, action) => { 
              state.status = "failed";
              state.error = action.error.message;
 
            })

            .addCase(likeTip.pending, (state) => {
              state.status = "loading";
            })
            .addCase(likeTip.fulfilled, (state, action) => {
              state.status = "succeeded";
              //Search the tip id from the tips state
              const updatedTipIndex = state.tips.findIndex(
                (tip) => tip._id === action.payload._id
              );
      
              //If found, update the likes property of the found tip to the current value of the likes
              if (updatedTipIndex !== -1) {
                state.tips[updatedTipIndex].likes = action.payload.likes;
              }
            })
            .addCase(likeTip.rejected, (state, action) => {
              state.status = "failed";
              state.error = action.error.message;
            })

            .addCase(deleteTip.pending, (state) => {
              state.isLoading = true;
            })
            .addCase(deleteTip.fulfilled, (state, action) => {
              state.isLoading = false;
              state.tips = state.tips.filter((tip) => tip._id !== action.payload);
              state.msg = action.payload.msg;
            })
            .addCase(deleteTip.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.msg = action.payload;
            });
      

  
           
      
      }, 
  });
  
  
  export default tipSlice.reducer;
  