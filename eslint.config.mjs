// import js from "@eslint/js";
// import globals from "globals";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
//   pluginReact.configs.flat.recommended,
// ]);

//4.1
//  import globals from "globals";
//  import pluginJs from "@eslint/js";
//  import pluginReact from "eslint-plugin-react";
//  import pluginSecurity from "eslint-plugin-security";
//  /** @type {import('eslint').Linter.Config[]} */
//  export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   {
//     plugins: {
//       security: pluginSecurity
//     },
//     rules: {
//       ...pluginJs.configs.recommended.rules,
//       ...pluginReact.configs.flat.recommended.rules,
//       "security/detect-eval-with-expression": "error",
//     }
//   }
//  ];

//4.2
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";
import pluginSecurityNode from "eslint-plugin-security-node"; // ✅ Add this

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node, // ✅ For Node.js
      },
    },
    plugins: {
      react: pluginReact,
      security: pluginSecurity,
      "security-node": pluginSecurityNode, // ✅ Register the plugin
    },
    rules: {
      // Built-in rules
      ...pluginJs.configs.recommended.rules,
      // React rules
      ...pluginReact.configs.recommended.rules,
      // Security rules
      "security/detect-eval-with-expression": "error",
      "security-node/detect-disable-mustache-escape": "warn",
      "security-node/detect-insecure-cookies": "warn",
      "security-node/detect-no-csrf-before-method-override": "warn",
      // Add more rules as needed from the plugin docs
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
