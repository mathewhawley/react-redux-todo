import React, { PropTypes } from 'react';
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
      <input
        type='text'
        autoFocus={true}
        ref={(node) => input = node} // eslint-disable-line no-return-assign
      />
    </form>
  );
};

TodoForm.displayName = 'TodoForm';
TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
