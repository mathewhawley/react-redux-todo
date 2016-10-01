import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { TodoItem } from '../TodoItem';

const TodoList = ({ items }) => {
  return (
    <ul>
      {items ? items.map((item) => <TodoItem key={item.id} item={item}/>) : ''}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.todos,
  };
};

TodoList.displayName = 'TodoList';
TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
};

export { TodoList };
export default connect(mapStateToProps)(TodoList);
