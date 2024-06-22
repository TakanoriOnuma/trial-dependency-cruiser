//
import { StoryObj, Meta } from '@storybook/react';
import { fn, within, userEvent, expect } from '@storybook/test';

import { Counter } from './Counter';

type Story = StoryObj<typeof Counter>;

const meta: Meta<typeof Counter> = {
  title: 'Counter',
  component: Counter,
  args: {
    count: 0,
    onIncrement: fn(),
    onDecrement: fn(),
  },
};

export default meta;

export const Base: Story = {};

export const Play: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: '+' }));
    expect(args.onIncrement).toHaveBeenCalled();
  },
};
