import {
  LOAD_MERCHANTS_LIST_SUCCESS,
  UPDATE_MERCHANT_SUCCESS,
  REMOVE_MERCHANT_SUCCESS,
} from '../App/constants';

const initialState = {
  merchants: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_MERCHANTS_LIST_SUCCESS:
      return {
        ...state,
        merchants: action.payload,
      };
    case UPDATE_MERCHANT_SUCCESS:

      return {
        ...state,

      };
    case REMOVE_MERCHANT_SUCCESS:
      // return state.setIn(['favorites', action.recipeId], true);
    default:
      return state;
  }
}
