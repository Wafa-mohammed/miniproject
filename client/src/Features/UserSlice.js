import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks
// Login
export const login = createAsyncThunk("users/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email: userData.email,
      password: userData.password,
    });
    const { user, msg } = response.data;
    return { user, msg };
  } catch (error) {
    return rejectWithValue(error.response?.data?.msg || "Login failed");
  }
});

// Logout
export const logout = createAsyncThunk("users/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/logout`);
    return { msg: response.data.msg };
  } catch (error) {
    return rejectWithValue("Logout failed");
  }
});

// Register User
export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/registerUser`, userData);
      const { user, msg } = response.data;
      return { user, msg };
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Registration failed");
    }
  }
);

// Get Users
export const getUsers = createAsyncThunk("users/getUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/getUsers`);
    return response.data.users;
  } catch (error) {
    return rejectWithValue("Failed to fetch users");
  }
});

// Delete User
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/deleteUser/${userId}`);
      return { userId, msg: response.data.msg };
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Error deleting user");
    }
  }
);


// Thunk for update user profile  
export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile", // Action type string for Redux
  async (userData) => {
    try {
      // Log the user data being sent for debugging purposes
      // console.log(userData);

      // Send a PUT request to the server to update the user profile
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/updateUserProfile/${userData._id}`, // API endpoint for updating user profile
        {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          phoneNo: userData.phoneNo,
        },
        {
          headers: { 
            "Content-Type": "application/json",  // Use "application/json" for JSON requests
          },
        }
      );

      // Extract the updated user data from the server response
      const user = response.data.user;

      // Return the updated user data, which will be used by Redux to update the state
      return user;
    } catch (error) {
      // Log any errors that occur during the request
      console.error('Error updating user profile:', error);
      
      // Optionally, return an error message to be handled in Redux
      throw error; // or dispatch an error action if you want to show error feedback
    }
  }
);




// Initial State
const initialState = {
  status: "idle",
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  msg: null,
  isLogin: false,
  users: [],
};

// Slice
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}, // Placeholder for any non-async reducers
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.msg = action.payload.msg;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.msg = action.payload;
      })

      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogin = true;
        state.user = action.payload.user;
        state.msg = action.payload.msg;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isLogin = false;
        state.user = null;
        state.msg = action.payload;
      })

      // Logout
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogin = false;
        state.user = null;
        state.msg = action.payload.msg;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.msg = action.payload;
      })

      // Get Users
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.msg = action.payload;
      })

      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = state.users.filter((user) => user._id !== action.payload.userId);
        state.msg = action.payload.msg;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.msg = action.payload;
      })
      // Handle updateProfile
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUserProfile.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userSlice.reducer;
