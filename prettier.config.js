module.exports = {
    importOrder: [
        "react",
        "remix",
        "graphql",
        "components",
        "utilities",
        "^[./]",
        "<THIRD_PARTY_MODULES>",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
    semi: true,
    singleQuote: false,
    tabWidth: 4,
};
