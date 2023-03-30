import React from 'react';
import { TodoList } from '../../App';
import ListItem from './ListItem';
import styled from 'styled-components';

interface ConfirmListProps {
  todoList: TodoList[];
  onDelete: (todo: TodoList[]) => void;
  onCancel: (todo: TodoList[]) => void;
}

const ConfirmList = ({ todoList, onDelete, onCancel }: ConfirmListProps) => {
  const handleDelete = (todoItem: TodoList) => {
    onDelete(todoList.filter((todo) => todo.id !== todoItem.id));
  };

  const handleCancel = (todoItem: TodoList, checked: boolean) => {
    onCancel(todoList.map((todo) => (todo.id === todoItem.id ? { ...todo, isChecked: !checked } : todo)));
  };

  return (
    <Ul>
      <div>confirm</div>
      {todoList.map((todo) => (
        <ListItem key={todo.id} todo={todo} onDelete={handleDelete} onCancel={handleCancel} />
      ))}
    </Ul>
  );
};

export default ConfirmList;

const Ul = styled.ul`
  list-style: none;
`;
