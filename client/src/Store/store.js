import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "../Features/UserSlice";
import tipReducer from "../Features/TipSlice";

export const store = configureStore({
  reducer: {
    users:usersReducer,
    tips : tipReducer
  },
})
