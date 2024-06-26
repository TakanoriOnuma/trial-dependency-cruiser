import { FC, ReactNode, MouseEventHandler } from 'react';

// components直下のindexをimportすると循環参照になる
// import { LocalCounter } from '~/components';

export type OperandButtonProps = {
  /** 左につけるか右につけるか */
  position?: 'left' | 'right';
  /** 円形表示にするか */
  circular?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

/**
 * +や-などの計算をするボタン
 */
export const OperandButton: FC<OperandButtonProps> = ({
  onClick,
  children,
}) => {
  return <button onClick={onClick}>{children}</button>;
};
