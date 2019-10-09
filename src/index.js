import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import showResults from './showResults';
import MaterialUiForm from './MaterialUiForm';
import BasicForm from './BasicForm';

const rootEl = document.getElementById('root');

ReactDOM.render(
   <Provider store={store}>
      <div style={{ padding: 15 }}>
        <BasicForm />
      </div>
  </Provider>,
  rootEl
);
