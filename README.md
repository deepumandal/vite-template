# Project Structure

This project follows a structured approach to organize its files and folders. Below is an overview of the directory layout:

## 📁 Top-Level Files
- 📄 **.github/**
  - 📄 **workflows/codeql.yml**: Configuration for CodeQL analysis.
- 📄 **.husky/**
  - 📄 **pre-commit**: Script to run before commits.
- 📄 **public/**
  - 📄 **vite.svg**: SVG image used in the application.
- 📄 **src/**
  - 📁 **@types/**
    - 📄 **commonTypes.ts**: Common type definitions for the project.
  - 📁 **assets/**
    - 📁 **fonts/**: Fonts used in the application.
    - 📁 **svg/**: SVG images used in the application.
      - 📄 **react.svg**: SVG image for React.
  - 📁 **styles/**
    - 📁 **Container/**
      - 📄 **index.css**: Container styles.
    - 📁 **model/**
      - 📄 **index.css**: Model styles.
    - 📄 **index.css**: Global styles.
  - 📁 **components/**
    - 📁 **HOC/**: Higher-Order Components.
      - 📄 **index.ts**: Entry point for HOC components.
    - 📁 **theme/**: Theming components.
      - 📄 **index.ts**: Theme index.
      - 📄 **theme-provider.tsx**: Theme provider component.
    - 📁 **ui/**: Various UI components.
      - 📄 **Accordion.tsx**: Accordion component.
      - 📄 **Avatar.tsx**: Avatar component.
      - 📄 **Badge.tsx**: Badge component.
      - 📄 **Block.tsx**: Block component.
      - 📄 **Breadcrumb.tsx**: Breadcrumb component.
      - 📁 **Button/**
        - 📄 **button.tsx**: Button component.
        - 📄 **ButtonVariants.ts**: Button variants.
      - 📄 **CheckBox.tsx**: CheckBox component.
      - 📄 **ConfirmationDialog.tsx**: Confirmation dialog component.
      - 📄 **Container.tsx**: Container component.
      - 📄 **ContextMenu.tsx**: Context menu component.
      - 📄 **Flex.tsx**: Flexbox layout component.
      - 📁 **Grid/**
        - 📄 **GridItem.tsx**: Grid item component.
        - 📄 **Grid.tsx**: Grid container component.
      - 📄 **HoverCard.tsx**: Hover card component.
      - 📄 **Model.tsx**: Model component.
      - 📄 **Separator.tsx**: Separator component.
      - 📄 **Skeleton.tsx**: Skeleton loader component.
      - 📄 **ToolTip.tsx**: Tooltip component.
      - 📄 **Typography.tsx**: Typography components.
    - 📁 **hooks/**
      - 📄 **useTheme.ts**: Hook for theme management.
      - 📄 **index.ts**: Exports for hooks.
    - 📁 **shared/**
      - 📄 **index.ts**: Entry point for shared components.
  - 📄 **App.tsx**: Main application component.
  - 📄 **main.tsx**: Entry point for the React application.
  - 📄 **tailwind.css**: Tailwind CSS configuration.
  - 📄 **vite-env.d.ts**: TypeScript definitions for Vite.

## 📄 Configuration Files
- 📄 **.eslintignore**: ESLint ignore file.
- 📄 **.eslintrc.cjs**: ESLint configuration.
- 📄 **.gitignore**: Git ignore file.
- 📄 **LICENCE.md**: Project license information.
- 📄 **README.md**: Project documentation.
- 📄 **SECURITY.md**: Security guidelines.
- 📄 **cspell.json**: Spell checker configuration.
- 📄 **index.html**: HTML template.
- 📄 **package.json**: Project metadata and dependencies.
- 📄 **pnpm-lock.yaml**: PNPM lock file for dependency versions.
- 📄 **postcss.config.js**: PostCSS configuration.
- 📄 **tailwind.config.js**: Tailwind CSS configuration.
- 📄 **tsconfig.json**: TypeScript configuration.
- 📄 **tsconfig.node.json**: Node-specific TypeScript configuration.
- 📄 **vite.config.ts**: Vite configuration file.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
