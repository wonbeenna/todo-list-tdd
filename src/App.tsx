import React, { useState } from 'react';
import './App.css';
import List from './components/list/List';
import Add from './components/add/Add';
import ConfirmList from './components/list/ConfirmList';
import { v4 as uuid } from 'uuid';

export interface TodoList {
  id: string;
  value: string;
  isChecked: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  const handleAddTodo = (todoValue: string) => {
    setTodoList((prevState) => [...prevState, { id: uuid(), value: todoValue, isChecked: false }]);
  };

  const handleDelete = (todoItems: TodoList[]) => {
    setTodoList(todoItems);
  };

  const handleConfirm = (todoItems: TodoList[]) => {
    setTodoList(todoItems);
  };

  return (
    <div className="App">
      <header>
        <h1>TODO APP</h1>
      </header>
      <main>
        <Add onAddList={handleAddTodo} />
        <List todoList={todoList} onDelete={handleDelete} onConfirm={handleConfirm} />
        <ConfirmList />
      </main>
    </div>
  );
}

export default App;
