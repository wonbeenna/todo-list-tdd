import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../List';
import userEvent from '@testing-library/user-event';

const todoList = [
  { id: '1', value: 'test', isChecked: false },
  { id: '2', value: 'test', isChecked: false },
  { id: '3', value: 'test', isChecked: false }
];

describe('리스트', () => {
  it('리스트에서 todo를 삭제 할 수 있는 버튼이 있다.', () => {
    const onClick = jest.fn();
    const onConfirm = jest.fn();

    render(<List todoList={todoList} onDelete={onClick} onConfirm={onConfirm} />);

    const deleteButton = screen.getByTestId('delete-button-1');

    expect(deleteButton).toBeInTheDocument();
  });

  it('todo를 삭제한 경우 list에서 제거 된다.', () => {
    const onClick = jest.fn();
    const onConfirm = jest.fn();

    render(<List todoList={todoList} onDelete={onClick} onConfirm={onConfirm} />);

    const deleteButton = screen.getByTestId('delete-button-1');

    userEvent.click(deleteButton);

    expect(onClick).toHaveBeenCalledWith([
      { id: '2', value: 'test', isChecked: false },
      { id: '3', value: 'test', isChecked: false }
    ]);
  });

  it('리스트에 체크박스가 있다.', () => {
    const onClick = jest.fn();
    const onConfirm = jest.fn();

    render(<List todoList={todoList} onDelete={onClick} onConfirm={onConfirm} />);
    const checkbox = screen.getByTestId('checkbox-1');

    expect(checkbox).toBeInTheDocument();
  });

  it('체크박스를 클릭하면 todo가 완료처리 된다.', () => {
    const onClick = jest.fn();
    const onConfirm = jest.fn();

    render(<List todoList={todoList} onDelete={onClick} onConfirm={onConfirm} />);

    const checkbox = screen.getByTestId('checkbox-1');

    userEvent.click(checkbox);

    expect(onConfirm).toHaveBeenCalledWith([
      { id: '1', value: 'test', isChecked: true },
      { id: '2', value: 'test', isChecked: false },
      { id: '3', value: 'test', isChecked: false }
    ]);
  });

  it('완료처리 된 todo는 완료 list로 이동 된다.', () => {});

  it('완료 list에서 체크박스 해제시 list로 돌아 간다.', () => {});
});
