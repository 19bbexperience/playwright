import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,
      
      // ✅ Modern Rule 1: Flags generic/brittle string selections over clean selectors
      'playwright/prefer-native-locators': 'warn',

      // ✅ Modern Rule 2: Bans raw selector methods that target plain dynamic text strings
      'playwright/no-raw-locators': 'error',
    },
  }
);

