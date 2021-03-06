import React, { PropTypes } from 'react';
import moment from 'moment';
import styles from './TodoItem.css';

const TodoItem = ({
  text,
  completed,
  createdAt,
  keyPressToggle,
  clickToggle,
  deleteTodo,
}) => {
  const baseClass = completed ? styles.complete : styles.base;
  const timeSince = moment(createdAt).fromNow();
  const ISO = moment(createdAt).toISOString();

  return (
    <li
      tabIndex={0}
      className={baseClass}
      onClick={clickToggle}
      onKeyPress={keyPressToggle}
    >
      <p className={styles.text}>
        {text}
      </p>
      <div className={styles.meta}>
        <time
          dateTime={ISO}
          className={styles.time}
          aria-label={`Added ${timeSince}`}
        >
          {timeSince}
        </time>
        <button
          className={styles.delete}
          onClick={deleteTodo}
          aria-label={`Delete ${text}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

TodoItem.displayName = 'TodoItem';
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  createdAt: PropTypes.number.isRequired,
  clickToggle: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  keyPressToggle: PropTypes.func.isRequired,
};

export { TodoItem };
