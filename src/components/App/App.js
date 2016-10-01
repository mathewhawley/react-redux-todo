import React from 'react';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const App = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

App.displayName = 'App';

export default App;
