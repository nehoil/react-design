import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from '../src/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
reportWebVitals();
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt event has fired')
  e.prompt()
});