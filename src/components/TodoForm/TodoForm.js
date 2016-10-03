import React, { PropTypes } from 'react';
import { addTodoAction } from '../../actions/todoActions';

const TodoForm = ({ dispatch }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type='text'
        autoFocus={true}
        onKeyPress={
          (event) => {
            const { charCode, target } = event;

            if (charCode === 13 && target.value.trim()) {
              dispatch(addTodoAction(target.value));
              target.value = ''; // eslint-disable-line no-param-reassign
            }
          }
        }
      />
    </form>
  );
};

TodoForm.displayName = 'TodoForm';
TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export { TodoForm };
