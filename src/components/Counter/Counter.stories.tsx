import { StoryObj, Meta } from '@storybook/react';

import { Counter } from './Counter';

type Story = StoryObj<typeof Counter>;

const meta: Meta<typeof Counter> = {
  title: 'Counter',
  component: Counter,
  args: {
    count: 0,
  },
};

export default meta;

export const Base: Story = {};
