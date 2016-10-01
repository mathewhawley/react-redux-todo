import React, { PropTypes } from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
    </ul>
  );
};

TodoList.displayName = 'TodoList';
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
};

export default TodoList;
