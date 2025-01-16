/** @type { import('@storybook/vue-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(j|t)s'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
