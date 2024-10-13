import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "emails",
  initialState: {
    read: [],
    unread: [],
    favorites: [],
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
    addToFavorites: (state, action) => {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
    removeFromFavorites: (state, action) => {
      return {
        ...state,
        favorites: state.favorites.filter(
          (email) => email.id !== action.payload
        ),
      };
    },
  },
});

export const { addData, updateUnread, addToFavorites, removeFromFavorites } =
  emailSlice.actions;

export default emailSlice.reducer;
