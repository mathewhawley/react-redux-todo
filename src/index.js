if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';

ReactDOM.render(
  <App>
    Hello, world!
  </App>,
  document.getElementById('root')
);
