import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      // ваші інші налаштування...
    },
    rules: {
      'prettier/prettier': 'error', // Додає Prettier як правило
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig, // Останнім має йти конфіг Prettier
];
