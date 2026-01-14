# 🎯 Project Overview

This is a test assessment for building a small React component library using Storybook. The library includes three reusable UI components with different states and props. Components are displayed in Storybook with visual variations, and screenshots of those states are included below.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

- React 18+

### Installation

1.**Clone and install:**

`````bash
git clone https://github.com/Terrad77/react-component-library.git
cd react-component-library
npm install


2. **Run Storybook for component documentation:**

```bash
npm run storybook

Storybook will open at <http://localhost:6006>

    Run the demo application:

Demo app will open at <http://localhost:5173>

## 📦 Component Library

### 1. Button Component

A versatile button component with multiple variants, sizes, and interactive states.

Features:

    5 variants (primary, secondary, success, danger, warning)

    3 sizes (small, medium, large)

    Loading state with spinner

    Full-width option

    Icon support (left and right)

    Disabled state

Props:

````typescript

<Button variant="primary" size="medium" onClick={handleClick}>
  Click me
</Button>


### 2. Smart Input Component

An advanced input component with multiple types, password visibility toggle, and clearable functionality.

Features:

    Multiple input types (text, password, email, number, tel, search)

    Password visibility toggle (show/hide password)

    Clearable input field

    Validation error states

    Prefix and suffix elements

    Helper text and labels

    Required field indicator

Props:

```
import { Input } from './components';

<Input
  type="password"
  label="Password"
  placeholder="Enter password"
  showPasswordToggle
  clearable
  value={password}
  onChange={setPassword}
/>
```

### 3. Toast Component

A notification component with auto-dismiss, progress indicator, and multiple types.

Features:

    4 toast types (success, error, warning, info)

    6 configurable positions

    Auto-dismiss with progress bar

    Manual close button

    Toast container for multiple notifications

    Title and message support

Props:

```

import { Toast, ToastContainer } from './components';
 <ToastContainer position="top-right">
  <Toast
    type="success"
    title="Success!"
    message="Operation completed successfully"
    autoClose={5000}
  />
</ToastContainer>
```

📸 Screenshots

Button Component States
![Button Variants](/public/screenshots/button.jpg)

input Types and States
![Input Types](/public/screenshots/input.jpg)
![Input Types](/public/screenshots/input_var.jpg)

Main menu
![Main Menu](/public/screenshots/Mmenu_default.jpg)
![Main Menu](/public/screenshots/Mmenu_collapsed.jpg)
![Main Menu](/public/screenshots/Mmenu_without_title.jpg)
![Main Menu](/public/screenshots/Mmenu_with_custom_items.jpg)

toast Notifications
![Toast Notifications](/public/screenshots/toast.jpg)
![Toast Notifications](/public/screenshots/toast_var.jpg)

📁 Project Structure

react-component-library/
├── src/
│ ├── components/
│ │ ├── Button/
│ │ │ ├── Button.tsx # Button component implementation
│ │ │ └── Button.css # Button styles
│ │ ├── Input/
│ │ │ ├── Input.tsx # Smart Input component implementation
│ │ │ └── Input.css # Input styles
│ │ └── Toast/
│ │ ├── Toast.tsx # Toast component implementation
│ │ └── Toast.css # Toast styles
│ ├── stories/
│ │ ├── Button/
│ │ │ └── Button.stories.tsx # Button Storybook stories
│ │ ├── Input/
│ │ │ └── Input.stories.tsx # Input Storybook stories
│ │ └── Toast/
│ │ └── Toast.stories.tsx # Toast Storybook stories
│ ├── App.tsx # Demo application
│ ├── App.css # Demo application styles
│ └── index.ts # Component exports
├── public/
├── screenshots/ # Component screenshots (to be added)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .storybook/ # Storybook configuration
├── README.md # This file
└── ... (other config files)

🛠️ Development Commands
Command Description
npm run dev Start the demo application
npm run storybook Start Storybook for component documentation
npm run build-storybook Build Storybook for deployment
npm run build Build the component library
npm run lint Run ESLint for code quality
npm run type-check Run TypeScript type checking
📸 How to Capture Screenshots

    Start Storybook:

    Navigate to each component story:

        Open http://localhost:6006

        Go to "Components" → "Button" (repeat for Input and Toast)

    Capture screenshots:

        For each component state mentioned above

        Save as PNG files in /screenshots/ folder

        Name files as indicated in the screenshot comments

    Screenshot recommendations:

        Use browser dev tools to set consistent viewport size

        Include the Storybook controls panel for context

        Capture both light and interactive states where applicable

✅ Assessment Requirements Checklist

    Storybook-based UI component system

    Three reusable UI components

        Button component (multiple states and variants)

        Smart Input component (multi-type, password visibility, clearable)

        Toast component (multiple types, auto-dismiss)

    Components displayed in Storybook with visual variations

    Screenshots of component states included in README

    Setup instructions provided

    Component overview with props and usage examples

🔧 Technical Implementation Details

    Framework: React 18 with TypeScript

    Build Tool: Vite

    Documentation: Storybook 8

    Styling: Vanilla CSS with BEM-like naming convention

    Type Safety: Full TypeScript support with strict mode

    Code Quality: ESLint configured with React/TypeScript rules

📝 Component Design Principles

    Consistency: Uniform API design across all components

    Accessibility: ARIA labels, keyboard navigation, focus management

    Customizability: CSS classes for easy styling overrides

    Type Safety: Full TypeScript support with exported types

    Performance: Optimized re-renders, minimal dependencies

📄 License

MIT License - see the LICENSE file for details.
👤 Author

Terrad77 - [\[https://github.com/Terrad77\]]

This project was created as a test assessment for a Front-end JS Engineer position.
`````
