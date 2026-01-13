// src/components/Toast/Toast.tsx
import { useEffect, useState, useCallback } from 'react';
import './Toast.css';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center';

export interface ToastProps {
  /** Toast type */
  type?: ToastType;
  /** Toast title */
  title?: string;
  /** Toast message */
  message: string;
  /** Position on screen */
  position?: ToastPosition;
  /** Auto close duration in milliseconds */
  autoClose?: number | false;
  /** Show close button */
  closeButton?: boolean;
  /** Show progress bar */
  showProgress?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Toast ID */
  id?: string;
  /** Additional CSS classes */
  className?: string;
}

export const Toast = ({
  type = 'info',
  title,
  message,
  position = 'top-right',
  autoClose = 5000,
  closeButton = true,
  showProgress = true,
  onClose,
  id,
  className = '',
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  // Use useCallback to memoize handleClose function
  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (autoClose !== false) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev <= 0) {
            clearInterval(interval);
            handleClose(); // Now handleClose is defined
            return 0;
          }
          return prev - 100 / (autoClose / 50);
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [autoClose, handleClose]); // Add handleClose to dependencies

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="toast-icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        );
      case 'error':
        return (
          <svg className="toast-icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="toast-icon" viewBox="0 0 24 24">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg className="toast-icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        );
    }
  };

  const getTypeClass = () => {
    switch (type) {
      case 'success':
        return 'toast--success';
      case 'error':
        return 'toast--error';
      case 'warning':
        return 'toast--warning';
      case 'info':
        return 'toast--info';
      default:
        return '';
    }
  };

  return (
    <div
      className={`toast ${getTypeClass()} toast--${position} ${className}`}
      id={id}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-content">
        <div className="toast-icon-wrapper">{getIcon()}</div>

        <div className="toast-body">
          {title && <div className="toast-title">{title}</div>}
          <div className="toast-message">{message}</div>
        </div>

        {closeButton && (
          <button
            type="button"
            className="toast-close"
            onClick={handleClose}
            aria-label="Close notification"
          >
            <svg className="toast-close-icon" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        )}
      </div>

      {showProgress && autoClose !== false && (
        <div className="toast-progress">
          <div className="toast-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
};

export interface ToastContainerProps {
  /** Container position */
  position?: ToastPosition;
  /** Toast components */
  children: React.ReactNode;
}

export const ToastContainer = ({ position = 'top-right', children }: ToastContainerProps) => {
  return <div className={`toast-container toast-container--${position}`}>{children}</div>;
};
