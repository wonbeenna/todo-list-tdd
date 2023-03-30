import React from 'react';
import { TodoList } from '../../App';
import ListItem from './ListItem';
import styled from 'styled-components';

interface ListProps {
  todoList: TodoList[];
  onDelete: (todo: TodoList[]) => void;
  onConfirm: (todo: TodoList[]) => void;
}

const List = ({ todoList, onDelete, onConfirm }: ListProps) => {
  const handleDelete = (todoItem: TodoList) => {
    onDelete(todoList.filter((todo) => todo.id !== todoItem.id));
  };

  const handleConfirm = (todoItem: TodoList, checked: boolean) => {
    onConfirm(todoList.map((todo) => (todo.id === todoItem.id ? { ...todo, isChecked: checked } : todo)));
  };

  return (
    <Ul>
      <div>list</div>
      {todoList.map((todo) => (
        <ListItem key={todo.id} todo={todo} onDelete={handleDelete} onConfirm={handleConfirm} />
      ))}
    </Ul>
  );
};

export default List;

const Ul = styled.ul`
  list-style: none;
`;
