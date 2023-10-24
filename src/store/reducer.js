import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { appReducer } from './appState/slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { authReducer } from './auth/slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const persistedReducer = persistReducer(persistConfig, authReducer)

export const reducer = {
  auth: persistedReducer,
  contacts: contactsReducer,
  filter: filterReducer,
  appState: appReducer,
};
