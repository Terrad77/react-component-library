import { useState, useRef } from 'react';
import styles from './Input.module.css';

export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'search';

export interface InputProps {
  /** Input type */
  type?: InputType;
  /** Input value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Input label */
  label?: string;
  /** HTML id attribute */
  id?: string;
  /** Required field */
  required?: boolean;
  /** Show clear button */
  clearable?: boolean;
  /** Show password toggle */
  showPasswordToggle?: boolean;
  /** Prefix element (icon or text) */
  prefix?: React.ReactNode;
  /** Suffix element (icon or text) */
  suffix?: React.ReactNode;
  /** Value change handler */
  onChange?: (value: string) => void;
  /** Focus handler */
  onFocus?: () => void;
  /** Blur handler */
  onBlur?: () => void;
  /** Read-only state */
  readOnly?: boolean;
  /** Click handler for the input field */
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

export const Input = ({
  type = 'text',
  value = '',
  placeholder = '',
  disabled = false,
  error = '',
  helperText = '',
  label = '',
  id,
  required = false,
  clearable = false,
  showPasswordToggle = type === 'password',
  prefix,
  suffix,
  onChange,
  onFocus,
  onBlur,
  readOnly = false,
  onClick,
  className = '',
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const generatedId = id || `input-${Math.random().toString(36).substring(2, 11)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setInputValue('');
    onChange?.('');
    inputRef.current?.focus();
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const getInputType = () => {
    if (type === 'password' && showPasswordToggle) {
      return showPassword ? 'text' : 'password';
    }
    return type;
  };

  const hasValue = inputValue.length > 0;
  const showClearButton = clearable && hasValue && !disabled;
  const isPasswordType = type === 'password';

  return (
    <div className={`${styles['input-wrapper']} ${className}`}>
      {label && (
        <label htmlFor={generatedId} className={styles['input-label']}>
          {label}
          {required && <span className={styles['input-required']}>*</span>}
        </label>
      )}

      <div
        className={`${styles['input-container']} ${
          isFocused ? styles['input-container--focused'] : ''
        } ${error ? styles['input-container--error'] : ''} ${
          disabled ? styles['input-container--disabled'] : ''
        }`}
      >
        {prefix && <span className={styles['input-prefix']}>{prefix}</span>}
        <input
          ref={inputRef}
          id={generatedId}
          type={getInputType()}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          readOnly={readOnly}
          onClick={onClick}
          className={styles['input-field']}
        />

        <div className={styles['input-suffix-container']}>
          {showClearButton && (
            <button
              type="button"
              className={styles['input-clear-button']}
              onClick={handleClear}
              aria-label="Clear input"
            >
              <svg className={styles['input-clear-icon']} viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          )}

          {isPasswordType && showPasswordToggle && (
            <button
              type="button"
              className={styles['input-password-toggle']}
              onClick={handleTogglePassword}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg className={styles['input-eye-icon']} viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              ) : (
                <svg className={styles['input-eye-off-icon']} viewBox="0 0 24 24">
                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                </svg>
              )}
            </button>
          )}

          {suffix && !showClearButton && !isPasswordType && (
            <span className={styles['input-suffix']}>{suffix}</span>
          )}
        </div>
      </div>

      {(error || helperText) && (
        <div
          className={`${styles['input-message']} ${error ? styles['input-message--error'] : ''}`}
        >
          {error || helperText}
        </div>
      )}
    </div>
  );
};
