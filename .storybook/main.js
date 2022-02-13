module.exports = {
    stories: ["../app/**/*.stories.@(js|jsx)"],
    addons: [
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss"),
                },
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-essentials",
    ],
    framework: "@storybook/react",
};
