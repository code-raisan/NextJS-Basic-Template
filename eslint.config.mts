import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import nextjs from "@next/eslint-plugin-next";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    files: [
      "./src/**/*.{js,ts,mjs,mts,cjs,cts,jsx,tsx}"
    ]
  },
  {
    ignores: [
      "**/next.config.mts",
      "**/build/",
      "**/dist/",
      "**/.next/"
    ]
  },
  {
    name: "eslint/recommended",
    rules: eslint.configs.recommended.rules,
  },
  ...tseslint.configs.recommended,
  {
    name: "next/core-web-vitals",
    plugins: {
      "@next/next": nextjs,
    },
    rules: {
      ...nextjs.configs.recommended.rules,
      ...nextjs.configs["core-web-vitals"].rules,
    }
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/semi": "warn",
      "quotes": ["warn", "double", {"avoidEscape": true, "allowTemplateLiterals": true }],
    },
  }
]



/*import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["src/**\/*.ts"],
  languageOptions: {
    globals: {
      "console": "readonly"
    }
  },
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
  ],
  rules: {
    "semi": "warn",
    "no-unused-vars": "warn",
    "eqeqeq": "error",
    "semi": ["warn", "always"],
    "quotes": ["warn", "double", {"avoidEscape": true, "allowTemplateLiterals": true }],
    "linebreak-style": ["error", "unix"],
    "no-var": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-undef": "error",
    /* "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-explicit-any": "error"
  }
});
*/
