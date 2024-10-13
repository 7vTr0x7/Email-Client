import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "emails",
  initialState: {
    read: [],
    unread: [],
    favorite: [],
  },
  reducers: {
    addData: (state, action) => {
      return {
        ...state,
        read: action.payload,
        unread: action.payload,
      };
    },
    updateUnread: (state, action) => {
      return {
        ...state,
        unread: state.unread.filter((email) => email.id !== action.payload),
      };
    },
  },
});

export const { addData, updateUnread } = emailSlice.actions;

export default emailSlice.reducer;
