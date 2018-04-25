import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getMerchants,
  createMerchant,
  updateMerchant,
  removeMerchant,
} from '../../api';

import {
  LOAD_MERCHANTS_LIST_SEND,
  UPDATE_MERCHANT_SEND,
  REMOVE_MERCHANT_SEND,
} from './constants';

import {
  setLoader,
  loadMerchantsListSuccess,
  updateMerchantSuccess,
  removeMerchantSuccess,
} from './actions';

function* loadMerchantsListSaga () {
  yield put(setLoader(true));
  const merchants = yield call(getMerchants);

  if (merchants) {
    yield put(loadMerchantsListSuccess(merchants));
  }

  yield put(setLoader(false));
}

function* updateMerchantSaga (action) {
  yield put(setLoader(true));
  yield null;
}

function* removeMerchantSaga (action) {
  yield put(setLoader(true));
  yield null;
}

// function* loginSendSaga() {
//   try {
//     const data = yield call(login);
//     if (data.token) {
//       yield put(push('/recipes'));
//     }
//   } catch (e) {
//     alert(e);
//     // const message = e.message || 'Something went wrong';
//     // yield put(setLoader(false));
//     // yield put(setErrorMessage(message));
//   }
// }
//
// function* loadRecipesListSendSaga() {
//   try {
//     const data = yield call(getRecipes);
//     if (data) {
//       yield put(loadRecipesListSuccess(data));
//     }
//   } catch (e) {
//     alert(e);
//   }
// }

const sagasCombiner = [
  { signal: LOAD_MERCHANTS_LIST_SEND, saga: loadMerchantsListSaga },
  { signal: UPDATE_MERCHANT_SEND, saga: updateMerchantSaga },
  { signal: REMOVE_MERCHANT_SEND, saga: removeMerchantSaga },
];

export default function sagasHandler() {
  return sagasCombiner.map(el =>
    function* () { // eslint-disable-line func-names
      yield takeLatest(el.signal, el.saga);
    });
}
