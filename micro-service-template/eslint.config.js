import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'import/order': [
        'error',
        {
          groups: ['type', 'builtin', 'external', 'internal', ['sibling', 'parent', 'index'], 'unknown'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'axios*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'logLevel*',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@styles/*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@hooks/*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@store/*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@features/*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@components/*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@pages/*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@pages/*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@context/*',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@services/*',
              group: 'internal',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  }
);
