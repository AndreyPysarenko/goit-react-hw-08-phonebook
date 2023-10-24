import { toast } from 'react-toastify';

export const handleRegisterUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  toast.success('Registration completed successfully');
};

export const handleRegisterUserRejected = () => {
  toast.warn('Please complete the registration form!');
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  toast.success('Welcome to our website');
};

export const handleLoginRejected = () => {
  toast.warn('Please enter email and password!');
};

export const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  toast.success('Bye bye, come visit us again');
};

export const handleLogOutRejected = () => {
  toast.warn('Something went wrong, try reload the page!');
};

export const handleFetchCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
};

export const handleFetchCurrentUserRejected = state => {
  state.isLoggedIn = false;
  state.token = null;
};
