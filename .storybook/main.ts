import { StorybookConfig } from '@storybook/react-vite';

const storybookConfig: StorybookConfig = {
  framework: '@storybook/react-vite',
  addons: ['@storybook/addon-essentials'],
  stories: ['../src/**/*.stories.tsx'],
};

export default storybookConfig;
