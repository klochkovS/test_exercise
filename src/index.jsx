import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './Containers/AppContainer';
import storeFactory from './store/index';

const store = storeFactory();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
