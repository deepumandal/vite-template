module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // project: "./tsconfig.app.json", facing Error: Cannot read file 'C:\Users\devwo\OneDrive\Desktop\Projects\tsconfig.json'.
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react-refresh", "react"],
  rules: {
    // built in vite rules
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],

    // prettier rules for code foramting
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        printWidth: 80,
        trailingComma: "es5",
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: "always"
      }
    ],

    // react rules
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }]
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {
        directory: "./tsconfig.json"
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};

/**
 * need to implement more things here 
 *  "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended"
 */
