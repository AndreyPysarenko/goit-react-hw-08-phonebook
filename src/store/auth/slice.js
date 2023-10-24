import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { login, logOut, fetchCurrentUser, registerUser } from './operations';
import {
  handleFetchCurrentUserFulfilled,
  handleFetchCurrentUserRejected,
  handleLogOutFulfilled,
  handleLogOutRejected,
  handleLoginFulfilled,
  handleLoginRejected,
  handleRegisterUserFulfilled,
  handleRegisterUserRejected,
} from './helpers';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, handleRegisterUserFulfilled)
      .addCase(registerUser.rejected, handleRegisterUserRejected)
      .addCase(login.fulfilled, handleLoginFulfilled)
      .addCase(login.rejected, handleLoginRejected)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logOut.rejected, handleLogOutRejected)
      .addCase(fetchCurrentUser.fulfilled, handleFetchCurrentUserFulfilled)
      .addCase(fetchCurrentUser.rejected, handleFetchCurrentUserRejected);
  },
});

export const authReducer = authSlice.reducer;
