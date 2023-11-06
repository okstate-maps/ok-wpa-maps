import React from 'react';

import { createRoot } from 'react-dom/client';
import ReactGA from "react-ga4";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('G-EQMR17KKJG');
ReactGA.send("pageview");

const domNode =document.getElementById('root');
const root = createRoot(
 domNode 
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
