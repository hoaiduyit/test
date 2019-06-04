import { SET_DONATES, UPDATE_MESSAGE, SET_CHARITIES } from '../actions/donate';

const initState = {
  charities: [],
  donates: [],
  message: '',
};

const donateReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_CHARITIES:
      return {
        ...state,
        charities: action.payload,
      };
    case SET_DONATES:
      return {
        ...state,
        donates: action.payload,
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default donateReducer;