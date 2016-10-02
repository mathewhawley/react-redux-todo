import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { TodoList } from './TodoList';
import { toggleTodoAction } from '../../actions/todoActions';

const getTodos = (state) => state.todos;
const getFilter = (state) => state.filter;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

const getTodosSelector = createSelector(
  [getTodos, getFilter],
  getVisibleTodos
);

const mapStateToProps = (state) => ({
  todos: getTodosSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleClick(id) {
    dispatch(toggleTodoAction(id));
  },
});

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
