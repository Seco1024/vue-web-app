/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    root: true,
    extends: [
        "plugin:vue/essential", // 使用 essential 規範
        "eslint:recommended", // 使用 ESLint 推薦規範
        "@vue/eslint-config-prettier",
    ],
    rules: {
        indent: "off",
        "vue/html-indent": "off",
        "prettier/prettier": ["error", { endOfLine: "lf" }],
        "vue/multi-word-component-names": "off",
    },
    overrides: [
        {
            files: ["src/*.vue"],
            rules: {},
        },
    ],
    plugins: ["prettier"],
}
