<p style="display: flex; justify-content: center; align-items: center;">
  <img src="./docs/_images/react.svg" alt="React Logo" width="80" height="80"/>
  <img src="./docs/_images/plus.png" alt="Plus Icon" width="20" height="20" style="margin: 0 10px;"/>
  <img src="./docs/_images/vite.png" alt="Vite Logo" width="80" height="80"/> 
  <img src="./docs/_images/plus.png" alt="Plus Icon" width="20" height="20" style="margin: 0 10px;"/>
  <img src="./docs/_images/typescript.png" alt="TypeScript Logo" width="80" height="80"/>
</p>

## 🚀 Introduction

Welcome to this **Vite template** repository! If you're looking for a modern, 2024-ready React-based template with all the essential tools and technologies pre-configured, you're in the right place.

## 🛠️ Features

- **React + TypeScript**: Robust and scalable web setup.
- **Vite**: Fast build tool.
- **Code Quality Tools**: Ensure clean and maintainable code with:
  - **Husky**: Enforce consistent commit messages.
  - **Prettier**: Automatically format your code.
  - **ESLint**: Catch and fix common errors.
- **TailwindCSS**: Utility-first CSS framework.
- **Redux**: State management.
- **Prebuilt UI Components**: Ready-to-use components to speed up development.

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>=20.x)
- pnpm (>=6.x)

### Installation

1. **Fork the Repository**: This will create a copy of this repository under your GitHub account.
   <img src="./docs/_images/fork.png" style="width: 600px;" alt="Fork Repository" />

2. **Use This Template**: Navigate to your forked repository and click on **Use this template**.
   <img src="./docs/_images/use-this-template.png" style="width: 600px;" alt="Use This Template" />

3. **Create a New Repository**: Follow the prompts to create a new repository from the template.
   <img src="./docs/_images/create-new-repository.png" style="width: 600px;" alt="Create New Repository" />

4. **Clone the Repository**: Clone the newly created repository to your local machine.
   <img src="./docs/_images/code.png" style="width: 600px;" alt="Clone Repository" />

   ```
   git clone https://github.com/your-repo/my-project-template.git
   cd my-project-template

   ```

5. **Install Dependencies**: Navigate to the cloned repository and install the dependencies.

   ```sh

   pnpm install // prefered
   ```

### Project Structure

This project follows a structured approach to organize its files and folders. Below is an overview of the directory layout:

#### 📁 Top-Level Files

- 📄 **.github/**
  - 📄 **workflows/\*.yml**: Github workflow.
- 📄 **.husky/**
  - 📄 **pre-commit**: pre-commit hooks.
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
