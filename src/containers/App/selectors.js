import { createSelector } from 'reselect';

const selectGlobal = () => state => state.global;

export function selectShowLoader() {
  return createSelector(
    selectGlobal(),
    globalState => globalState.showLoader,
  );
}
