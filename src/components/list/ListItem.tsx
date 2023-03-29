import React from 'react';
import { TodoList } from '../../App';

interface ListItemProps {
  todo: TodoList;
  onDelete: (todo: TodoList) => void;
  onConfirm: (todoItem: TodoList, e: boolean) => void;
}

const ListItem = ({ todo, onDelete, onConfirm }: ListItemProps) => {
  const handleDelete = () => {
    onDelete(todo);
  };

  const handleConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    onConfirm(todo, e.target.checked);
  };

  return (
    <li>
      <input type="checkbox" data-testid={`checkbox-${todo.id}`} onChange={handleConfirm} />
      <div>{todo.value}</div>
      <button type="button" data-testid={`delete-button-${todo.id}`} onClick={handleDelete}>
        삭제하기
      </button>
    </li>
  );
};

export default ListItem;
