import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://1bf69e1db47b4e1fb77d3efa51a81c5a@o377947.ingest.sentry.io/5200695"});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
