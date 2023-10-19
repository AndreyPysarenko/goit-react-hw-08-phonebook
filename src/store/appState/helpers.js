export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, actions) => {
  state.isLoading = false;
  state.error = actions.error.message;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
