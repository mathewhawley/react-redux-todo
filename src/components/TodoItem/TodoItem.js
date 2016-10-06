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
      <p className={styles.text}>
        {text}
      </p>
      <div className={styles.meta}>
        <time className={styles.time}>
          Yesterday
        </time>
        <button className={styles.delete} onClick={deleteTodo}>
          Delete
        </button>
      </div>
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
