import { createSlice } from '@reduxjs/toolkit';
import {
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
  handleFetchContactsFulfilled,
} from './helpers';
import { addContact, deleteContact, fetchContacts } from './operations';
import { initialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
