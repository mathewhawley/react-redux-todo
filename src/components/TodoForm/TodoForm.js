import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../../actions/todoActions';

export const TodoForm = ({ dispatch }) => {
  let input;

  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      if (!input.value.trim()) {
        return;
      }

      dispatch(addTodoAction(input.value));
      input.value = '';
    }}>
      <input type='text' ref={(node) => { input = node; }}></input>
    </form>
  );
};

TodoForm.displayName = 'TodoForm';
TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(TodoForm);
