import React, { PropTypes } from 'react';
import { addTodoAction } from '../../actions/todoActions';
import styles from './TodoForm.css';

const TodoForm = ({ dispatch }) => {
  const keyPresshandler = (event) => {
    const { charCode, target } = event;

    if (charCode === 13 && target.value.trim()) {
      dispatch(addTodoAction(target.value));
      target.value = ''; // eslint-disable-line no-param-reassign
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        className={styles.input}
        type='text'
        maxLength={70}
        placeholder='Ornare ligula magna inceptos...'
        autoFocus={true}
        onKeyPress={keyPresshandler}
      />
    </form>
  );
};

TodoForm.displayName = 'TodoForm';
TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export { TodoForm };
