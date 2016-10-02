import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { configureStore } from './store';
import { loadState, saveState } from './lib/localStorage';

const store = configureStore(loadState());

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
