import { toast } from 'react-toastify';

export const handleFetchContactsFulfilled = (state, { payload }) => {
  state.items = payload;
};

export const handleAddContactFulfilled = (state, { payload }) => {
  state.items.push(payload);
  toast.success('The contact has been added');
};

export const handleDeleteContactFulfilled = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
  toast.success('The contact has been delete');
};

export const handleLogOutFulfilled = (state, { payload }) => {
  state.items = null;
};
