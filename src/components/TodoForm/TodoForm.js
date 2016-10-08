import React, { PropTypes } from 'react';
import { addTodoAction } from '../../actions/todoActions';
import styles from './TodoForm.css';

const TodoForm = ({ dispatch }) => {
  const keyPressHandler = (event) => {
    const { target } = event;
    if (event.charCode === 13 && target.value.trim()) {
      dispatch(addTodoAction(target.value));
      target.value = ''; // eslint-disable-line no-param-reassign
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
        <label
          id='todo-input-label'
          htmlFor='todo-input'
          className='visuallyHidden'
        >
          What do you still need to do?
        </label>
        <input
          id='todo-input'
          className={styles.input}
          type='text'
          maxLength={70}
          placeholder='To do or not to do...'
          autoFocus={true}
          onKeyPress={keyPressHandler}
          aria-labelledby='todo-input-label'
        />
    </form>
  );
};

TodoForm.displayName = 'TodoForm';
TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export { TodoForm };
