module.exports = {
  stories: ["../app/**/stories.@(mdx|js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    // TODO: This is a temporary workaround since Storybook version 6 does not support PostCSS v8
    // Needs to be checked again and eventually removed with version 7 of Storybook
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}`)
    return config
  }
};
