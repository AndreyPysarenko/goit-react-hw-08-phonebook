import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { appReducer } from './appState/slice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  appState: appReducer,
};
