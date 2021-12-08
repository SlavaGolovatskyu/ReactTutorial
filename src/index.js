import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';
import App from './tutorial-6/App';
// import './css/index.css';

WebFontLoader.load({
  google: {
    families: ['Open Sans:300,400,700'],
  },
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
