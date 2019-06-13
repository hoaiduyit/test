export const SET_CHARITIES = 'SET_CHARITIES';
export const SET_DONATES = 'SET_DONATES';
export const ADD_DONATE = 'ADD_DONATE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const setDonates = payload => ({
  type: SET_DONATES,
  payload,
});

export const setCharities = payload => ({
  type: SET_CHARITIES,
  payload,
});

export const updateDonate = payload => ({
  type: ADD_DONATE,
  payload,
});

export const updateMessage = payload => ({
  type: UPDATE_MESSAGE,
  payload,
});

export const getCharities = () => dispatch => {
  fetch('http://localhost:3001/charities')
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch(setCharities(data));
    });
  fetch('http://localhost:3001/payments')
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch(setDonates(data));
    });
};
