import React, { PropTypes } from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li>{todo.text}</li>
  );
};

TodoItem.displayName = 'TodoItem';
TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};

export default TodoItem;
