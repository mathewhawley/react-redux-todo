import React, { PropTypes } from 'react';
import { TodoItem } from '../TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const renderTodos = todos.map((todo) => (
    <TodoItem
      {...todo}
      key={todo.id}
      toggleTodo={() => toggleTodo(todo.id)}
      deleteTodo={() => deleteTodo(todo.id)}
    />
  ));

  return (
    <ul>
      {renderTodos}
    </ul>
  );
};

TodoList.displayName = 'TodoList';
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export { TodoList };
