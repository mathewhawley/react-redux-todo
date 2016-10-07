import React from 'react';
import { TodoFormContainer } from '../TodoForm/TodoFormContainer';
import { TodoListContainer } from '../TodoList/TodoListContainer';
import { Banner } from '../Banner';
import styles from './App.css';

const App = () => {
  return (
    <div>
      <Banner />
      <main className={styles.main}>
        <TodoFormContainer />
        <TodoListContainer />
      </main>
    </div>
  );
};

App.displayName = 'App';

export default App;
