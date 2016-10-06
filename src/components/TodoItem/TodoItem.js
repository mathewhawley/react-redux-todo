import React, { PropTypes } from 'react';
import moment from 'moment';
import styles from './TodoItem.css';

const TodoItem = ({
  text,
  completed,
  createdAt,
  toggleTodo,
  deleteTodo,
}) => {
  const baseClass = completed ? styles.complete : styles.base;
  const timeSince = moment(createdAt).from(Date.now());
  const ISO = moment(createdAt).toISOString();

  return (
    <li className={baseClass} onClick={toggleTodo}>
      <p className={styles.text}>
        {text}
      </p>
      <div className={styles.meta}>
        <time dateTime={ISO} className={styles.time}>
          {timeSince}
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
  completed: PropTypes.bool.isRequred,
  createdAt: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export { TodoItem };
