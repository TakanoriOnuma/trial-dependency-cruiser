import { StoryObj, Meta } from '@storybook/react';

import { LocalCounter } from './LocalCounter';

type Story = StoryObj<typeof LocalCounter>;

const meta: Meta<typeof LocalCounter> = {
  title: 'LocalCounter',
  component: LocalCounter,
};

export default meta;

export const Base: Story = {};

export const InitialCount: Story = {
  args: {
    initialCount: 10,
  },
};
