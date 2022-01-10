module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  // parser: '@typescript-eslint/parser',
  // parseOptions: {
  //   ecmaVersion: 2021,
  // },
  plugins: [],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': ['error'],
    'no-nonoctal-decimal-escape': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-useless-backreference': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/no-reserved-props': 'off',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
  },
};
