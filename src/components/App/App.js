import React from 'react';
import { TodoFormContainer } from '../TodoForm/TodoFormContainer';
import { TodoListContainer } from '../TodoList/TodoListContainer';
import { Banner } from '../Banner';

const App = () => {
  return (
    <div>
      <Banner />
      <main>
        <TodoFormContainer />
        <TodoListContainer />
      </main>
    </div>
  );
};

App.displayName = 'App';

export default App;
