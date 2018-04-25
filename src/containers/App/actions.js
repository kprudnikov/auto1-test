import {
  SET_LOADER,
  LOAD_MERCHANTS_LIST_SEND,
  LOAD_MERCHANTS_LIST_SUCCESS,
  UPDATE_MERCHANT_SEND,
  UPDATE_MERCHANT_SUCCESS,
  REMOVE_MERCHANT_SEND,
  REMOVE_MERCHANT_SUCCESS,
} from './constants';

export function setLoader(payload) {
  return {
    type: SET_LOADER,
    payload,
  };
}

export function loadMerchantsListSend () {
  return {
    type: LOAD_MERCHANTS_LIST_SEND,
  };
}

export function loadMerchantsListSuccess (payload) {
  return {
    type: LOAD_MERCHANTS_LIST_SUCCESS,
    payload,
  };
}

export function updateMerchantSend (id, data) {
  return {
    type: UPDATE_MERCHANT_SEND,
    payload: {
      id,
      data,
    }
  };
}

export function updateMerchantSuccess () {
  return {
    type: UPDATE_MERCHANT_SUCCESS,
  };
}

export function removeMerchantSend (id) {
  return {
    type: REMOVE_MERCHANT_SEND,
    payload: id,
  };
}

export function removeMerchantSuccess () {
  return {
    type: REMOVE_MERCHANT_SUCCESS,
  };
}

