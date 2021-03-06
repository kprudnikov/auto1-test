import { SET_LOADER } from './constants';

const initialState = {
  showLoader: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        showLoader: action.payload,
      };
    default:
      return state;
  }
}
