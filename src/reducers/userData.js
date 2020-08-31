import {
  UPDATE_USER_DATA,
} from '../constants/actionTypes';

const defaultState = { userData: localStorage.getItem('userData') ? localStorage.getItem('userData') : [] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
