# React Component Library

A modern, accessible, and highly customizable React component library built with **TypeScript**, **Tailwind CSS**, and **Vite**. Documented and tested with **Storybook**.

---

## 🚀 Setup Instructions

Follow these steps to get the project running locally.

### 1. Clone the repository

```bash

git clone [https://github.com/Terrad77/react-component-library.git](https://github.com/Terrad77/react-component-library.git)
cd react-component-library

```

### 2. Install dependencies

```bash

npm install

```

### 3. Start development environment

To see the components in isolation, launch Storybook:

```bash

npm run storybook

```

Environment will be available at: <http://localhost:6006>

## 📦 Component Overview

### 1. Button Component

A versatile button component with multiple variants, sizes, and states.

**Props:**

- `variant`: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `loading`: boolean
- `fullWidth`: boolean

**States:**

- Default
- Hover
- Active
- Disabled
- Loading

![Button Variants](/public/screenshots/button-variants.png)
![Button Sizes](/public/screenshots/button-sizes.png)
![Button States](/public/screenshots/button-states.png)

### 2. Smart Input Components

An advanced input component with multiple features.

**Features:**

- Multiple input types (text, password, email, number, tel, search)
  ![Input Types](/public/screenshots/input-types.png)
  ![Input States](/public/screenshots/input-states.png)
  !

### 3. Toast Notifications

A flexible toast notification system with various types and positions.

### 4. Sidebar Menu

A responsive sidebar menu with nested items and collapsible sections.
