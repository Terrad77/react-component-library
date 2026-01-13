import { useState } from 'react';
import { Button, Input, Toast, ToastContainer, SidebarMenu, type MenuItem } from './components';
import './App.css';

// icons for SidebarMenu
const DashboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

// dtata for SidebarMenu
const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <DashboardIcon />,
    active: true,
  },
  {
    id: 'users',
    label: 'Users',
    icon: <UsersIcon />,
    badge: 3,
    children: [
      {
        id: 'all-users',
        label: 'All Users',
      },
      {
        id: 'admins',
        label: 'Administrators',
      },
      {
        id: 'customers',
        label: 'Customers',
        badge: 'New',
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
    children: [
      {
        id: 'general',
        label: 'General Settings',
      },
      {
        id: 'security',
        label: 'Security',
      },
      {
        id: 'notifications',
        label: 'Notifications',
      },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <DashboardIcon />,
    disabled: true,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const [toasts, setToasts] = useState<
    Array<{
      id: number;
      type: 'success' | 'error' | 'warning' | 'info';
      message: string;
    }>
  >([]);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  // Функция для добавления тостов
  const addToast = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message }]);

    // Автоматическое удаление через 5 секунд
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  // Обработчик кликов в меню с правильным типом
  const handleMenuClick = (item: MenuItem) => {
    console.log('Menu item clicked:', item);
    addToast('info', `${item.label} clicked`);
  };

  return (
    <div className="app">
      {/* Sidebar Menu */}
      <SidebarMenu
        items={menuItems}
        title="React Component Library"
        collapsed={isMenuCollapsed}
        onItemClick={handleMenuClick}
      />

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <h1>React Component Library</h1>
          <p className="subtitle">
            A collection of reusable React components built with TypeScript and Storybook
          </p>

          <div className="demo-counter">
            <Button variant="primary" size="large" onClick={() => setCount(count + 1)}>
              Count is {count}
            </Button>
            <p className="counter-text">Click the button to increment the counter</p>
          </div>
        </div>

        {/* Component Showcase */}
        <div className="components-showcase">
          {/* Button Components Section */}
          <section className="component-section">
            <h2>Button Components</h2>
            <p className="section-description">Buttons with various styles, sizes, and states</p>

            <div className="component-grid">
              <div className="component-demo">
                <h3>Variants</h3>
                <div className="demo-group">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="warning">Warning</Button>
                </div>
              </div>

              <div className="component-demo">
                <h3>Sizes</h3>
                <div className="demo-group">
                  <Button size="small">Small</Button>
                  <Button size="medium">Medium</Button>
                  <Button size="large">Large</Button>
                </div>
              </div>

              <div className="component-demo">
                <h3>States</h3>
                <div className="demo-group">
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Input Components Section */}
          <section className="component-section">
            <h2>Smart Input Components</h2>
            <p className="section-description">
              Input fields with advanced features like password toggle and clear button
            </p>

            <div className="component-grid">
              <div className="component-demo">
                <h3>Text Input</h3>
                <Input
                  label="Username"
                  placeholder="Enter your username"
                  value={inputValue}
                  onChange={setInputValue}
                  clearable
                />
                <p className="demo-value">Value: {inputValue}</p>
              </div>

              <div className="component-demo">
                <h3>Password Input</h3>
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={setPassword}
                  showPasswordToggle
                />
              </div>

              <div className="component-demo">
                <h3>Email with Validation</h3>
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="user@example.com"
                  error={
                    inputValue && !inputValue.includes('@') ? 'Please enter a valid email' : ''
                  }
                  onChange={setInputValue}
                  clearable
                />
              </div>
            </div>
          </section>

          {/* Toast Demo Section */}
          <section className="component-section">
            <h2>Toast Notifications</h2>
            <p className="section-description">
              Interactive notifications with auto-dismiss and progress indicator
            </p>

            <div className="demo-group">
              <Button
                variant="success"
                onClick={() => addToast('success', 'Operation completed successfully!')}
              >
                Show Success Toast
              </Button>
              <Button variant="danger" onClick={() => addToast('error', 'Something went wrong!')}>
                Show Error Toast
              </Button>
              <Button
                variant="warning"
                onClick={() => addToast('warning', 'Warning: This action cannot be undone')}
              >
                Show Warning Toast
              </Button>
              <Button variant="primary" onClick={() => addToast('info', 'New message received')}>
                Show Info Toast
              </Button>
              <Button variant="secondary" onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}>
                {isMenuCollapsed ? 'Expand Menu' : 'Collapse Menu'}
              </Button>
            </div>
          </section>

          {/* Installation Instructions */}
          <section className="component-section">
            <h2>Installation & Usage</h2>
            <div className="code-block">
              <pre>
                <code>
                  {`// Installation
npm install react-component-library

// Usage
import { Button, Input, Toast } from 'react-component-library';

// Import CSS
import 'react-component-library/dist/style.css';`}
                </code>
              </pre>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>Built with React, TypeScript, and Storybook</p>
          <p>Check out the Storybook documentation for detailed component APIs</p>
          <div className="footer-links">
            <Button
              variant="secondary"
              size="small"
              onClick={() => window.open('http://localhost:6006', '_blank')}
            >
              Open Storybook
            </Button>
            <Button
              variant="secondary"
              size="small"
              onClick={() =>
                window.open('https://github.com/Terrad77/react-component-library', '_blank')
              }
            >
              View GitHub
            </Button>
          </div>
        </footer>
      </main>

      {/* Toast Container */}
      <ToastContainer position="top-right">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            position="top-right"
            autoClose={5000}
            onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
          />
        ))}
      </ToastContainer>
    </div>
  );
}

export default App;
