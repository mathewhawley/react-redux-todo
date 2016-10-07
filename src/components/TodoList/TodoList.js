import React, { PropTypes } from 'react';
import { TodoItem } from '../TodoItem';
import styles from './TodoList.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const renderTodos = todos.map((todo) => (
    <TodoItem
      {...todo}
      key={todo.id}
      clickToggle={() => toggleTodo(todo.id)}
      deleteTodo={() => deleteTodo(todo.id)}
      keyPressToggle={(event) => {
        if (event.charCode === 13) {
          toggleTodo(todo.id);
        }
      }}
    />
  ));

  return (
    <ul className={styles.base}>
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
    createdAt: PropTypes.number.isRequired,
  })),
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export { TodoList };
