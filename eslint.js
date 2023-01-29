module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
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