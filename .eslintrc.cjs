/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier",
    ],
    rules: {
        indent: "off",
        "vue/html-indent": "off",
    },
    overrides: [
        {
            files: ["src/*.vue"],
            rules: {
                "max-len": "off", // disables line length check
            },
        },
    ],
}
