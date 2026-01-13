import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'search'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    clearable: { control: 'boolean' },
    showPasswordToggle: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'Text Input',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    required: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    showPasswordToggle: true,
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    clearable: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address',
    value: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Cannot edit this',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '+1 (555) 123-4567',
    helperText: 'Enter your phone number with country code',
  },
};

export const WithPrefixSuffix: Story = {
  args: {
    label: 'Price',
    placeholder: '0.00',
    prefix: '$',
    suffix: 'USD',
  },
};

export const Clearable: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    clearable: true,
    value: 'Search term',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '320px',
      }}
    >
      <Input label="Text" placeholder="Enter text" />
      <Input type="password" label="Password" placeholder="Enter password" showPasswordToggle />
      <Input type="email" label="Email" placeholder="Enter email" clearable />
      <Input label="With Error" placeholder="Error example" error="This field is required" />
      <Input label="Disabled" placeholder="Disabled" disabled />
      <Input label="With Prefix" placeholder="Enter amount" prefix="$" />
    </div>
  ),
};
