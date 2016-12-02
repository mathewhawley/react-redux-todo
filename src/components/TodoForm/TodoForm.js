import React, { PropTypes } from 'react';
import { addTodoAction } from '../../actions/todoActions';
import styles from './TodoForm.css';

const TodoForm = ({ dispatch }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label
        id='input-label'
        htmlFor='input'
        className='visuallyHidden'
      >
        What do you still need to do?
      </label>
      <input
        id='input'
        className={styles.input}
        type='text'
        maxLength={70}
        placeholder='To do or not to do...'
        autoFocus={true}
        onKeyPress={(event) => {
          if (event.charCode === 13 && event.target.value.trim()) {
            dispatch(addTodoAction(event.target.value));
            event.target.value = ''; // eslint-disable-line no-param-reassign
          }
        }}
        aria-labelledby='input-label'
      />
    </form>
  );
};

TodoForm.displayName = 'TodoForm';
TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export { TodoForm };
