import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import chatReducer from "./chatSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer
  }
});
