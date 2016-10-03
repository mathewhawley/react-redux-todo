import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { TodoList } from './TodoList';
import { toggleTodoAction } from '../../actions/todoActions';
import { FILTERS } from '../../constants/filterConstants';
import { createObjectLookup } from '../../utils';

const getTodos = (state) => state.todos;
const getFilter = (state) => state.filter;

const getVisibleTodos = createObjectLookup({
  [FILTERS.SHOW_ALL]: (todos) => todos,
  [FILTERS.SHOW_ACTIVE]: (todos) => todos.filter((todo) => !todo.completed),
  [FILTERS.SHOW_COMPLETED]: (todos) => todos.filter((todo) => todo.completed),
});

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

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export { TodoListContainer };
