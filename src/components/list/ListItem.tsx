import React from 'react';
import { TodoList } from '../../App';
import styled from 'styled-components';

interface ListItemProps {
  todo: TodoList;
  onDelete?: (todo: TodoList) => void;
  onConfirm?: (todoItem: TodoList, e: boolean) => void;
  onCancel?: (todoItem: TodoList, e: boolean) => void;
}

const ListItem = ({ todo, onDelete, onConfirm, onCancel }: ListItemProps) => {
  const handleDelete = () => {
    onDelete?.(todo);
  };

  const handleConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (todo.isChecked) {
      return onCancel?.(todo, !e.target.checked);
    }
    return onConfirm?.(todo, e.target.checked);
  };

  return (
    <Li>
      <input type="checkbox" checked={todo.isChecked} data-testid={`checkbox-${todo.id}`} onChange={handleConfirm} />
      <div>{todo.value}</div>
      <button type="button" data-testid={`delete-button-${todo.id}`} onClick={handleDelete}>
        삭제하기
      </button>
    </Li>
  );
};

export default ListItem;

const Li = styled.li`
  display: flex;
`;
