import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastContainer } from "../components/Toast/Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
    },
    position: {
      control: { type: "select" },
      options: [
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
        "top-center",
        "bottom-center",
      ],
    },
    autoClose: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: "success",
    title: "Success!",
    message: "Your changes have been saved successfully.",
    autoClose: 5000,
  },
};

export const Error: Story = {
  args: {
    type: "error",
    title: "Error!",
    message: "Something went wrong. Please try again.",
    autoClose: false,
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Warning",
    message: "Your session will expire in 5 minutes.",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    title: "Information",
    message: "New features are available in the latest update.",
  },
};

export const WithoutTitle: Story = {
  args: {
    type: "success",
    message: "Operation completed successfully.",
  },
};

export const WithoutCloseButton: Story = {
  args: {
    type: "info",
    title: "Persistent",
    message: "This toast requires manual dismissal.",
    closeButton: false,
    autoClose: false,
    showProgress: false,
  },
};

export const DifferentPositions: Story = {
  render: () => (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h3>Top Right (Default)</h3>
        <div style={{ position: "relative", height: "100px" }}>
          <Toast
            type="info"
            title="Top Right"
            message="Default position"
            position="top-right"
          />
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Bottom Left</h3>
        <div style={{ position: "relative", height: "100px" }}>
          <Toast
            type="success"
            title="Bottom Left"
            message="Different position"
            position="bottom-left"
          />
        </div>
      </div>
    </div>
  ),
};

export const ToastContainerExample: Story = {
  render: () => (
    <ToastContainer position="top-right">
      <Toast type="success" title="Success" message="Operation completed" />
      <Toast type="error" title="Error" message="Something went wrong" />
      <Toast type="warning" title="Warning" message="Please check your input" />
    </ToastContainer>
  ),
};
