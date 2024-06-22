//
import { FC } from 'react';

import { Counter, useCounter } from '../Counter';

export type LocalCounterProps = {
  initialCount?: number;
};

export const LocalCounter: FC<LocalCounterProps> = ({ initialCount }) => {
  const { count, increment, decrement } = useCounter(initialCount);

  return (
    <Counter count={count} onIncrement={increment} onDecrement={decrement} />
  );
};
