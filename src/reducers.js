import { combineReducers } from 'redux';

import  appReducer from './containers/App/reducer';
import  merchantsListReducer from './containers/MerchantsList/reducer';

export default combineReducers({
  global: appReducer,
  merchantsList: merchantsListReducer,
});
