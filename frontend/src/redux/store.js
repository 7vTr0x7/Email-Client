import { configureStore } from "@reduxjs/toolkit";
import emailsReducer from "./slices/emailSlice";

const store = configureStore({
  reducer: {
    emails: emailsReducer,
  },
});

export default store;
