import React, { PropTypes } from 'react';

export const TodoItem = ({ item }) => {
  return (
    <li>{item.text}</li>
  );
};

TodoItem.displayName = 'TodoItem';
TodoItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};
