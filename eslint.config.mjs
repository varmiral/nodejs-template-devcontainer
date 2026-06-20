import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist/']),
  {
    files: ['**/*.?(c|m)[jt]s?(x)'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
    ],
  },
  {
    files: ['**/*.?(c|m)js?(x)'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
