import { createSlice } from '@reduxjs/toolkit';
import {
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
  handleFetchContactsFulfilled,
  handleLogOutFulfilled,
} from './helpers';
import { addContact, deleteContact, fetchContacts } from './operations';
import { initialState } from './initialState';
import { logOut } from './auth/operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
  },
});

export const contactsReducer = contactsSlice.reducer;
