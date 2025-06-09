
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import usersReducer from "./registrationFormSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: usersReducer,
  },
});

export default store;
