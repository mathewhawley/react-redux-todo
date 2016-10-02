import React from 'react';
import { TodoFormContainer } from '../TodoForm/TodoFormContainer';
import { TodoListContainer } from '../TodoList/TodoListContainer';
import { Filter } from '../Filter';

const App = () => {
  return (
    <div>
      <TodoFormContainer />
      <TodoListContainer />
      <Filter />
    </div>
  );
};

App.displayName = 'App';

export default App;
