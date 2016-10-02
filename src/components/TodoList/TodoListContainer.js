import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { TodoList } from './TodoList';

const getTodos = (state) => {
  return state.todos;
};

const getTodosSelector = createSelector(
  [getTodos],
  (todos) => todos
);

const mapStateToProps = (state) => {
  return {
    todos: getTodosSelector(state),
  };
};

export default connect(mapStateToProps)(TodoList);
