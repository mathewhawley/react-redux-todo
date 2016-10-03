import React, { PropTypes } from 'react';
import { TodoItem } from '../TodoItem';

const TodoList = ({ todos, handleClick }) => {
  return (
    <ul>
      {todos.map(
        (todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              handleClick={() => handleClick(todo.id)}
            />
          );
        })
      }
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
  handleClick: PropTypes.func.isRequired,
};

export { TodoList };
