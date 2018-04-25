import { createSelector } from 'reselect';

const selectMerchantsListState = () => state => state.merchantsList;

export function selectMerchantsList() {
  return createSelector(
    selectMerchantsListState(),
    state => state.merchants,
  );
}
