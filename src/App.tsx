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
  const [confirmTodoList, setConfirmTodoList] = useState<TodoList[]>([]);

  const handleAddTodo = (todoValue: string) => {
    setTodoList((prevState) => [...prevState, { id: uuid(), value: todoValue, isChecked: false }]);
  };

  const handleDelete = (todoItems: TodoList[]) => {
    setTodoList(todoItems);
  };

  const handleConfirmDelete = (todoItems: TodoList[]) => {
    setConfirmTodoList(todoItems);
  };

  const handleConfirm = (todoItems: TodoList[]) => {
    setTodoList(todoItems.filter((todo) => !todo.isChecked));
    setConfirmTodoList((prevState) => [...prevState, ...todoItems.filter((todo) => todo.isChecked)]);
  };

  const handleCancel = (todoItems: TodoList[]) => {
    setTodoList((prevState) => [...prevState, ...todoItems.filter((todo) => !todo.isChecked)]);
    setConfirmTodoList(todoItems.filter((todo) => todo.isChecked));
  };

  return (
    <div className="App">
      <header>
        <h1>TODO APP</h1>
      </header>
      <main>
        <Add onAddList={handleAddTodo} />
        <div className="App-main">
          <List todoList={todoList} onDelete={handleDelete} onConfirm={handleConfirm} />
          <ConfirmList todoList={confirmTodoList} onDelete={handleConfirmDelete} onCancel={handleCancel} />
        </div>
      </main>
    </div>
  );
}

export default App;
