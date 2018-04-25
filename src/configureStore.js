import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import globalSagas from './containers/App/sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState) => {
  const enhancers = [];

  enhancers.push(applyMiddleware(sagaMiddleware));

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(
    reducers,
    preloadedState,
    compose(
      ...enhancers
    )
  );

  store.runSaga = sagaMiddleware.run;

  globalSagas().forEach((saga) => {
    sagaMiddleware.run(saga);
  });

  return store;
};

export default configureStore;
