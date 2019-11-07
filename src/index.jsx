import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

const rootEl = document.getElementById('root');

ReactDOM.render(
   <Provider store={configureStore()}>
      <div style={{ padding: 15 }}>
    hello world
      </div>
  </Provider>,
  rootEl
);
