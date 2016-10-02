import React from 'react';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import Filter from '../Filter';

const App = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
      <Filter />
    </div>
  );
};

App.displayName = 'App';

export default App;
