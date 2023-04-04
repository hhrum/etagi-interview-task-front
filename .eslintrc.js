module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'eslint-plugin-prettier'],
  rules: {
    'import/prefer-default-export': [0],
    'prettier/prettier': [2, { endOfLine: 'auto' }, { usePrettierrc: true }],
    'react/jsx-uses-react': [0],
    'react/react-in-jsx-scope': [0],
    'react/require-default-props': [0],

    'no-console': [1],
    'no-unused-vars': [1],
    '@typescript-eslint/no-unused-vars': [1],
    '@typescript-eslint/ban-types': [2],
    '@typescript-eslint/no-explicit-any': [2],

    'no-param-reassign': ['error', { props: false }],

    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'linebreak-style': [0],
    'max-len': [2, 100],
  },
}
