import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
  filter: filterReducer,
  todos: todoReducer,
});
