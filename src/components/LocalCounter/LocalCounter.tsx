import { FC } from 'react';

import { Counter, useCounter } from '../Counter';
// こっちの書き方だと循環参照になる
// import { Counter, useCounter } from '~/components';

export type LocalCounterProps = {
  initialCount?: number;
};

export const LocalCounter: FC<LocalCounterProps> = ({ initialCount }) => {
  const { count, increment, decrement } = useCounter(initialCount);

  return (
    <Counter count={count} onIncrement={increment} onDecrement={decrement} />
  );
};
