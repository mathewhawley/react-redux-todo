import { createStore } from 'redux';
import { rootReducer } from '../reducers';

export const configureStore = () => {
  const store = createStore(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // See https://github.com/reactjs/react-redux/releases/tag/v2.0.0
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
