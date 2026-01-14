# React Component Library

A modern, accessible, and highly customizable React component library built with **TypeScript**, **Tailwind CSS**, **CSS Modules** and **Vite**. Documented and tested with **Storybook**.

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

### 1. 🎨 Button Component

A versatile button component with multiple variants, sizes and states.
Features:

- 5 visual variants: primary, secondary, success, danger, warning
- 3 sizes: small, medium, large
- Multiple states: default, hover, active, disabled, loading
- Support for left/right icons
- Full-width option
- Type-safe with TypeScript

**Props:**

```typescript
variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
size?: 'small' | 'medium' | 'large'
disabled?: boolean
loading?: boolean
fullWidth?: boolean
iconLeft?: React.ReactNode
iconRight?: React.ReactNode
type?: 'button' | 'submit' | 'reset'
```

![Button Variants](/public/screenshots/button-variants.png)
![Button Sizes](/public/screenshots/button-sizes.png)
![Button States](/public/screenshots/button-states.png)

### 2. 📝 Smart Input Components

An advanced input component with built-in validation and interactive features.

**Features:**

- Multiple input types: text, password, email, number, tel, search
- Clearable input with "×" button
- Password visibility toggle
- Prefix and suffix elements (icons/text)
- Built-in validation with error messages
- Helper text support
- Read-only mode with copy functionality
- Required field indicator
- Disabled state

**Props:**

```typescript

type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search'
label?: string
placeholder?: string
error?: string
helperText?: string
disabled?: boolean
required?: boolean
clearable?: boolean
showPasswordToggle?: boolean
prefix?: React.ReactNode
suffix?: React.ReactNode
readOnly?: boolean
onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
```

![Input Types](/public/screenshots/input-types.png)
![Input States](/public/screenshots/input-states.png)
!

### 3. 🔔 Toast Notifications

A flexible toast notification system with various types and positions.

**Features:**

- 4 notification types: success, error, warning, info
- Multiple positions: top-right, top-left, bottom-right, bottom-left
- Auto-dismiss with progress indicator
- Manual dismiss option
- Smooth animations

### 4. 📊 Sidebar Menu

A responsive sidebar menu with nested items and collapsible sections.

**Features:**

- Nested menu items with expand/collapse
- Icons and badges support
- Active state highlighting
- Collapsible sidebar
- Keyboard navigation support
- Disabled menu items

### 5. 🎯 Usage Examples

**Button Usage:**

```tsx
import { Button } from './components/Button/Button';

<Button variant="primary" size="medium" loading={isLoading} iconLeft="📎" onClick={handleClick}>
  Upload File
</Button>;
```

**Input Usage:**

```tsx
import { Input } from './components/Input/Input';

<Input
  type="email"
  label="Email Address"
  placeholder="user@example.com"
  error={emailError}
  clearable
  required
  onChange={setEmail}
/>;
```

**Toast Usage:**

```tsx
import { Toast, ToastContainer } from './components/Toast/Toast';

<ToastContainer position="top-right">
  <Toast type="success" message="Operation completed successfully!" autoClose={5000} />
</ToastContainer>;
```

### 6. 🛠 Development

**Project Structure**
text

src/
├── components/ # React components
│ ├── Button/ # Button component
│ │ ├── Button.tsx
│ │ ├── Button.module.css
│ │ └── Button.stories.tsx
│ ├── Input/ # Input component
│ ├── Toast/ # Toast component
│ └── SidebarMenu/ # SidebarMenu component
├── App.tsx # Demo application
└── main.tsx # Entry point
**Building Components**

```bash
# Build the library
npm run build

# Build Storybook
npm run build-storybook

# Run tests
npm test

```

**Adding New Components**
1.Create component folder in src/components/ 2. Implement component with TypeScript interfaces 3. Add CSS module styles 4. Create Storybook stories 5. Update main exports in src/components/index.ts

### 7. 🧪 Testing & Documentation

**Storybook**
All components are documented in Storybook with:

- Interactive controls
- Code examples
- Prop documentation
- Visual testing

**TypeScript**
Full TypeScript support with:

- Type definitions for all props
- IntelliSense in IDEs
- Compile-time error checking

### 8. 📁 Available Scripts

In the project directory, you can run:

npm run dev - Start Vite development server
npm run build - Build for production
npm run preview - Preview production build
npm run storybook - Start Storybook
npm run build-storybook - Build Storybook
npm run lint - Run ESLint
npm run type-check - Run TypeScript type checking

### 9. 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'feat: add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

### 9. 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://mit-license.org/) file for details.

🙏 Acknowledgments

- Built with Vite
- Component documentation with Storybook
- Type-safe with TypeScript
