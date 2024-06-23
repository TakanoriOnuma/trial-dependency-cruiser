import { useState } from 'react';

/**
 * カウンターを管理するカスタムフック
 * @param initialCount - 初期値
 */
export const useCounter = (initialCount?: number) => {
  const [count, setCount] = useState(initialCount ?? 0);

  return {
    count,
    resetCount: (count?: number) => setCount(count ?? 0),
    increment: () => setCount((prev) => prev + 1),
    decrement: () => setCount((prev) => prev - 1),
  };
};
