/* eslint-disable import-x/no-named-as-default-member, import-x/default */
import js from "@eslint/js";
import importX from "eslint-plugin-import-x";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tailwindcss from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    files: [
      "eslint.config.js",
      "postcss.config.js",
      "tailwind.config.js",
      "vite.config.js",
    ],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: { ...globals.node, ...globals.es2023 },
    },
    rules: {
      "no-shadow": "warn",
      "no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "import-x/order": [
        "warn",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          alphabetize: { order: "asc" },
        },
      ],
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.es2020 },
      parserOptions: {
        jsxPragma: null,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react": react,
      "react-hooks": reactHooks,
      "tailwindcss": tailwindcss,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...tailwindcss.configs["flat/recommended"][1].rules,
      "@typescript-eslint/no-shadow": "error",
      "react/self-closing-comp": "warn",
      "react/jsx-no-leaked-render": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-sort-props": [
        "warn",
        {
          shorthandLast: true,
          multiline: "last",
          reservedFirst: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "import-x/order": [
        "warn",
        {
          groups: ["builtin", "external", "parent", "sibling", "index", "type"],
          alphabetize: { order: "asc" },
        },
      ],
    },
    settings: {
      tailwindcss: {
        callees: ["twMerge", "cva"],
      },
    },
  },
];
