import { FC } from 'react';

import { OperandButton } from '../OperandButton';

export type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const Counter: FC<CounterProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <OperandButton onClick={onDecrement}>-</OperandButton>
      <span style={{ padding: '0 5px' }}>{count}</span>
      <OperandButton onClick={onIncrement}>+</OperandButton>
    </div>
  );
};
