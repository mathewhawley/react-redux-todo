import React, { PropTypes } from 'react';

const TodoItem = ({ text, toggleTodo, deleteTodo }) => {
  return (
    <li onClick={toggleTodo}>
      {text}
      <button onClick={deleteTodo}>
        Delete
      </button>
    </li>
  );
};

TodoItem.displayName = 'TodoItem';
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export { TodoItem };
