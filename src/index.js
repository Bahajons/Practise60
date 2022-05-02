import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import App from './App';
import { createStore } from 'redux';
import { rootReducer } from './redux/reducers';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);