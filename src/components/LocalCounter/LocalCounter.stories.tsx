import { StoryObj, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/test';

import { LocalCounter } from './LocalCounter';

type Story = StoryObj<typeof LocalCounter>;

const meta: Meta<typeof LocalCounter> = {
  title: 'LocalCounter',
  component: LocalCounter,
};

export default meta;

export const Base: Story = {};

export const Play: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: '+' }));
    await userEvent.click(canvas.getByRole('button', { name: '+' }));
    await userEvent.click(canvas.getByRole('button', { name: '+' }));
  },
};

export const InitialCount: Story = {
  args: {
    initialCount: 10,
  },
};
