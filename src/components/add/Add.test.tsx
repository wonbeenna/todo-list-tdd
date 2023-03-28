import React from 'react';
import { render, screen } from '@testing-library/react';
import Add from './Add';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Todo 리스트 추가', () => {
  it('입력할 수 있는 인풋이 있어야 한다.', () => {
    render(<Add />);

    const input = screen.getByTestId('add-input');

    expect(input).toBeInTheDocument();
  });

  it('입력할 수 있는 버튼이 있어야 한다.', () => {
    render(<Add />);

    const button = screen.getByRole('button', {
      name: '추가하기'
    });

    expect(button).toBeInTheDocument();
  });

  describe('입력이 완료 되어 추가하기 버튼클릭시', () => {
    it('인풋은 비어야 한다.', () => {
      render(<Add />);

      const input = screen.getByTestId('add-input');
      const button = screen.getByRole('button', {
        name: '추가하기'
      });

      userEvent.click(button);

      expect(input).toHaveValue('');
    });

    it('입력된 인풋 값을 넘겨준다', () => {
      const onAddList = jest.fn();
      render(<Add onAddList={onAddList} />);

      const input = screen.getByTestId('add-input');
      const button = screen.getByRole('button', {
        name: '추가하기'
      });

      act(() => {
        userEvent.type(input, 'test');
      });

      act(() => {
        userEvent.click(button);
      });

      expect(onAddList).toBeCalledWith('test');
    });
  });
});
