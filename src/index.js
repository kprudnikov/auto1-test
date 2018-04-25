import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './containers/App';
import MerchantsList from './containers/MerchantsList';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App>
      <MerchantsList />
    </App>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
