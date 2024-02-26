import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk } from "./thunk";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  user: {
    id: "",
    avatar: null,
    name: "",
    email: "",
    favorites: [],
  },

};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.error = null;
        state.idToken = action.payload.user.idToken;
      })
      .addCase(registerThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      //-------------- LOG IN --------------------
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.idToken = action.payload.idToken;
        state.error = null;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      // ---------------- LOG OUT -----------------
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.error = null; 
        state.isLoading = false; 
        state.idToken = null; 
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
  },
});

// export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
