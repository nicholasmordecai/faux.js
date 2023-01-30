module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module",
        "ecmaVersion": "ES2016"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eol-last": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ]
    }
};