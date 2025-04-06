module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'jsx-ally'],
    rules: {
      semi: 'error',
      '@typescript-eslint/no-unused-vars': 'error',   // 'warn' 을 'error' 로 취급급
      "import/no-unresolved": "off",
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
}


// Linting 실행 : yarn eslint . --ext .js,.jsx,.ts,.tsx