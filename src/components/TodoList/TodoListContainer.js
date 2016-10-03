import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { TodoList } from './TodoList';
import { FILTERS } from '../../constants/filterConstants';
import { toggleTodoAction, deleteTodoAction } from '../../actions/todoActions';
import { createObjectLookup } from '../../utils';

const getTodos = (state) => state.todos;
const getFilter = (state) => state.filter;

const showAllTodos = (todos) => todos;
const showActiveTodos = (todos) => todos.filter((todo) => !todo.completed);
const showCompletedTodos = (todos) => todos.filter((todo) => todo.completed);

const getVisibleTodos = createObjectLookup({
  [FILTERS.SHOW_ALL]: showAllTodos,
  [FILTERS.SHOW_ACTIVE]: showActiveTodos,
  [FILTERS.SHOW_COMPLETED]: showCompletedTodos,
});

const getTodosSelector = createSelector(
  [getTodos, getFilter],
  getVisibleTodos,
);

const mapStateToProps = (state) => ({
  todos: getTodosSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo(id) {
    dispatch(toggleTodoAction(id));
  },
  deleteTodo(id) {
    dispatch(deleteTodoAction(id));
  },
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export { TodoListContainer };
