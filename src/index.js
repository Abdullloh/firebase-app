import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
ReactDOM.render(
  <Provider store={store}>
        <PersistGate  persistor={persistor}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </PersistGate>
    </Provider>,
  document.getElementById('root')
);


