export const UPDATE_TOTAL_DONATE = 'UPDATE_TOTAL_DONATE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const updateTotalDonate = payload => ({
  type: UPDATE_TOTAL_DONATE,
  payload,
});

export const updateMessage = payload => ({
  type: UPDATE_MESSAGE,
  payload,
});
