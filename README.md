<p align="center">
  <img src="https://media3.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=6c09b952f26cn8gocpfbyhkfit4z4ktpt4nwi7ba49rl0jam&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="React Logo" height="120"/>
  <img src="./docs/_images/vite.png" alt="Vite Logo"  height="120"/> 
  <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-typescript-11492969-9325304.png?f=webp" alt="TypeScript Logo"  height="120"/>
</p>

<h1 align="center">React Template</h1>
<p align="center">
🚀 Modern React Template: 2024-Ready and Pre-Configured! 🚀
</p>
<br>
<p align="center">
<a href="https://mermaid.live/"><b>Live Projects!</b></a>
</p>
<p align="center">
<a href="https://https://github.com/deepumandal/vite-template/blob/master/README.md">📖 Documentation </a> |
<a href="https://github.com/deepumandal/vite-template?tab=readme-ov-file#get-started">🚀 Getting Started</a> |
<a href="https://discord.gg/deepumandal" title="Discord invite">🙌 Join Us</a>
</p>

<div align="center">
    <img src="https://img.shields.io/github/actions/workflow/status/deepumandal/vite-template/build.yml" alt="Build" />
    <img src="https://img.shields.io/github/license/deepumandal/vite-template" alt="License" />
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4" alt="Prettier" />
    <img src="https://img.shields.io/badge/vite-^4.0.0-blue" alt="Vite" />
    <img src="https://img.shields.io/badge/typescript-4.0+-blue" alt="TypeScript" />
    <img src="https://img.shields.io/badge/react-^18.0.0-blue" alt="React" />
    <img src="https://img.shields.io/badge/redux-^4.0.0-blue" alt="Redux" />
    <img src="https://img.shields.io/badge/tailwindcss-^3.0.0-blue" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen" alt="Contributions" />
    <img src="https://img.shields.io/github/issues-raw/deepumandal/vite-template" alt="Open Issues" />
</div>

# Objective

Welcome to the **Vite Template** project! 🚀

This template is designed to supercharge your frontend development experience by providing a pre-configured setup that reduces the repetitive tasks you often face when starting a new project. Whether you're a seasoned developer or just getting started, this template has everything you need to kickstart your next project with minimal hassle.

# Table of Contents

1. [Introduction](#introduction)
2. [Key Features](#key-features)
3. [Why Vite?](#why-vite)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Development Workflow](#development-workflow)
7. [Built-in Tools](#built-in-tools)
8. [Configuration](#configuration)
9. [Pros and Cons](#pros-and-cons)
10. [Contribution Guidelines](#contribution-guidelines)
11. [Flowcharts](#flowcharts)
12. [FAQ](#faq)
13. [License](#license)

## Introduction

This Vite template aims to streamline the process of setting up a new frontend project. With modern tools and best practices built-in, you can focus more on developing your application and less on configuring your environment.

## Key Features

### ⚡ Vite + React + TypeScript

- **Fast Build System:** Leverage the speed of Vite with the flexibility of React and TypeScript.
- **Hot Module Replacement (HMR):** Instant updates during development for a seamless experience.

### 🎨 Pre-Built UI Components

- **TailwindCSS Integration:** Responsive, utility-first CSS framework for rapid UI development.
- **Pre-Configured Components:** A set of reusable UI components to get you started quickly.
- **Custom Color Palette:** Easily adjustable to match your brand or project theme.

### 🛠️ Developer Tools

- **Husky:** Pre-commit hooks to ensure code quality.
- **Prettier + ESLint:** Automated code formatting and linting for a consistent codebase.
- **YAML Workflows:** Pre-configured GitHub Actions for CI/CD pipelines.
- **Redux Integration:** State management with minimal setup.

### 📚 Documentation

- **Comprehensive Docs:** In-depth documentation to guide you through the setup and usage.
- **Modern Design:** User-friendly and easy-to-navigate documentation structure.

## Why Vite?

Vite is a next-generation frontend build tool that significantly improves the development experience. It leverages native ES modules in the browser for faster builds and hot module replacement. Here are some reasons to choose Vite:

- **Performance**: Instant server start and fast HMR.
- **Simplicity**: Minimal configuration required to get started.
- **Modern**: Supports the latest JavaScript and CSS features.
- **Extensible**: Easy to integrate with other tools and libraries.

## Getting Started

### Prerequisites

- Node.js (version 14.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/vite-template.git
   cd vite-template
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

## Project Structure

```plaintext
vite-template/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.vue
│   ├── main.js
│   └── router.js
├── .eslintrc.js
├── .prettierrc
├── index.html
├── package.json
└── vite.config.js
```

- public/: Static assets.
- src/: Main source code.
- assets/: Static files like images and fonts.
- components/: Reusable components.
- pages/: Page components.
- styles/: Global styles.
- App.vue: Root component.
- main.js: Entry point.
- router.js: Routing configuration.

## Development Workflow

### Commands

- **Start Development Server**: `npm run dev` or `yarn dev`
- **Build for Production**: `npm run build` or `yarn build`
- **Preview Production Build**: `npm run serve` or `yarn serve`
- **Lint Code**: `npm run lint` or `yarn lint`
- **Format Code**: `npm run format` or `yarn format`

### Recommended Extensions

#### VSCode Extensions:

- **ESLint**
- **Prettier - Code formatter**

## Built-in Tools

- **Vite**: Fast and optimized development build tool.
- **ESLint**: Linting to maintain code quality.
- **Prettier**: Code formatting for consistency.
- **Tailwind CSS**: Utility-first CSS framework.
- **TypeScript**: Optional support for TypeScript.

## Configuration

### ESLint

ESLint is pre-configured with a set of rules to maintain code quality. You can customize the configuration in `.eslintrc.js`.

### Prettier

Prettier is used for code formatting. You can adjust the settings in `.prettierrc`.

### Tailwind CSS

Tailwind CSS is included for utility-first styling. The configuration is available in `tailwind.config.js`.

## Pros and Cons

### Pros

- **Fast Development**: Instant server start and fast HMR.
- **Minimal Configuration**: Get started quickly without extensive setup.
- **Modern Features**: Leverage the latest JavaScript and CSS.
- **Extensible**: Easily integrate with other tools.

### Cons

- **Learning Curve**: Requires understanding of modern JavaScript and tooling.
- **Initial Setup**: Some initial setup required for new developers.

## Contribution Guidelines

We welcome contributions from the community. Please follow these steps to contribute:

1. Fork the repository and clone your fork.
2. Create a new branch: `git checkout -b my-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature`
4. Push to the branch:`git push origin my-feature`
5. Open a pull request.

## Flowcharts

### Development Workflow

```plaintext
+---------------------+
| Clone Repository    |
+---------+-----------+
          |
          v
+---------+-----------+
| Install Dependencies|
+---------+-----------+
          |
          v
+---------+-----------+
| Start Dev Server    |
+---------+-----------+
          |
          v
+---------+-----------+
| Develop & Test      |
+---------+-----------+
          |
          v
+---------+-----------+
| Build for Production|
+---------+-----------+
```

### Contribution Process

```plaintext
+---------------------+
| Fork Repository     |
+---------+-----------+
          |
          v
+---------+-----------+
| Create Branch       |
+---------+-----------+
          |
          v
+---------+-----------+
| Make Changes        |
+---------+-----------+
          |
          v
+---------+-----------+
| Commit Changes      |
+---------+-----------+
          |
          v
+---------+-----------+
| Push to Branch      |
+---------+-----------+
          |
          v
+---------+-----------+
| Open Pull Request   |
+---------------------+
```

## FAQ

### Why use Vite over traditional build tools like Webpack?

Vite offers a faster development experience due to its instant server start and fast HMR, leveraging native ES modules.

### Can I use this template with TypeScript?

Yes, TypeScript support is built-in. You can easily switch to TypeScript by renaming your files to `.ts` and `.tsx`.

### How do I add a new dependency?

You can add a new dependency using npm or yarn:

```sh
npm install <dependency-name>
# or
yarn add <dependency-name>
```

### How do I customize the ESLint or Prettier configuration?

You can modify the configuration files `.eslintrc.js` and `.prettierrc` to fit your preferences.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

Thank you for using our Vite template! If you have any questions or feedback, feel free to open an issue or contribute to the project. Happy coding!
