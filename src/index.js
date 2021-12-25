import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';
import App from './tutorial-8/App';
// import './css/index.css';

WebFontLoader.load({
  google: {
    families: ['Open Sans:300,400,700'],
  },
});

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
