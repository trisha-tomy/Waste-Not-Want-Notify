import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase';

const root = document.getElementById('root');

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig} appName="otherApp">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

reportWebVitals();