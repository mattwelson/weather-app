import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/html-vite",
    options: {},
  },

  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  viteFinal: async (config: any) => {
    // Add any Qwik-specific Vite configuration here if needed
    return config;
  }
};

export default config;
