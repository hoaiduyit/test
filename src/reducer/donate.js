import {
  SET_DONATES,
  UPDATE_MESSAGE,
  SET_CHARITIES,
  ADD_DONATE,
} from '../actions/donate';

const initState = {
  charities: [],
  donates: [],
  donateItem: {},
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
    case ADD_DONATE:
      return {
        ...state,
        donateItem: action.payload,
      };
    default:
      return state;
  }
};

export default donateReducer;
