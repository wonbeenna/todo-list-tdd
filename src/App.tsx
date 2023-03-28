import React from 'react';
import './App.css';
import List from './components/list/List';
import Add from './components/add/Add';

function App() {
  const handleAddTodo = (todoValue: string) => {
    console.log(todoValue);
  };

  return (
    <div className="App">
      <header>
        <h1>TODO APP</h1>
      </header>
      <main>
        <List />
        <Add onAddList={handleAddTodo} />
      </main>
    </div>
  );
}

export default App;
