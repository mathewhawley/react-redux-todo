import React, { PropTypes } from 'react';
import styles from './TodoItem.css';

const TodoItem = ({
  text,
  completed,
  toggleTodo,
  deleteTodo,
}) => {
  const baseClass = completed ? styles.complete : styles.base;

  return (
    <li className={baseClass} onClick={toggleTodo}>
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
  completed: PropTypes.bool.isRequred,
};

export { TodoItem };
