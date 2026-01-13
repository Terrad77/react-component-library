export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  /** Button style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** HTML button type */
  type?: ButtonType;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Icon displayed before text */
  iconLeft?: React.ReactNode;
  /** Icon displayed after text */
  iconRight?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  loading = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  onClick,
  children,
  className = "",
}: ButtonProps) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`button button--${variant} button--${size} ${
        disabled ? "button--disabled" : ""
      } ${loading ? "button--loading" : ""} ${
        fullWidth ? "button--full-width" : ""
      } ${className}`}
      disabled={disabled || loading}
      onClick={handleClick}
      type={type}
    >
      {loading && (
        <span className="button__loader">
          <svg className="button__spinner" viewBox="0 0 50 50">
            <circle
              className="button__spinner-path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            />
          </svg>
        </span>
      )}
      {!loading && iconLeft && (
        <span className="button__icon-left">{iconLeft}</span>
      )}
      <span className="button__content">{children}</span>
      {!loading && iconRight && (
        <span className="button__icon-right">{iconRight}</span>
      )}
    </button>
  );
};
