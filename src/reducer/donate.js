import { UPDATE_TOTAL_DONATE, UPDATE_MESSAGE } from '../actions/donate';

const initState = {
  donate: {},
  message: '',
};

const donateReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case UPDATE_TOTAL_DONATE:
      return {
        ...state,
        donate: action.payload.donate,
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default donateReducer;