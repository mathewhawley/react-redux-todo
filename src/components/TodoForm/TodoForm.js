import React, { PropTypes } from 'react';
import { addTodoAction } from '../../actions/todoActions';
import { visuallyHidden } from '../../styles/utilities.css';
import styles from './TodoForm.css';

const TodoForm = ({ dispatch }) => {
  const keyPresshandler = (event) => {
    const { target } = event;
    if (event.charCode === 13 && target.value.trim()) {
      dispatch(addTodoAction(target.value));
      target.value = ''; // eslint-disable-line no-param-reassign
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        <span className={visuallyHidden}>What do you still need to do?</span>
        <input
          className={styles.input}
          type='text'
          maxLength={70}
          placeholder='To do or not to do...'
          autoFocus={true}
          onKeyPress={keyPresshandler}
        />
      </label>
    </form>
  );
};

TodoForm.displayName = 'TodoForm';
TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export { TodoForm };
