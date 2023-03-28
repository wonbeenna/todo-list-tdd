import React, { useState } from 'react';

interface AddProps {
  onAddList?: (value: string) => void;
}

const Add = ({ onAddList }: AddProps) => {
  const [todoValue, setTodoValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const handleButtonClick = () => {
    onAddList?.(todoValue);
    setTodoValue('');
  };

  return (
    <div>
      <input type="text" data-testid="add-input" value={todoValue} onChange={handleChange} />
      <button type="button" onClick={handleButtonClick}>
        추가하기
      </button>
    </div>
  );
};

export default Add;
