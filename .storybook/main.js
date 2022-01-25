module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    // not working with storybook-builder-vite, import {fn} from jest-mock error
    // "@storybook/addon-interactions", // must be listed after @storybook/addon-actions or @storybook/addon-essentials.
  ],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
  features: {
    // on demand
    storyStoreV7: true,
    // https://storybook.js.org/addons/@storybook/addon-interactions
    interactionsDebugger: true,
  },
  // without this , msw won't work in storybook
  staticDirs: ["../public"],
};
