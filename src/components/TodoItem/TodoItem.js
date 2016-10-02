import React, { PropTypes } from 'react';

const TodoItem = ({ text, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {text}
    </li>
  );
};

TodoItem.displayName = 'TodoItem';
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TodoItem;
