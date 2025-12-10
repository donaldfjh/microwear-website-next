"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import "./Toast.css";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
  closing?: boolean;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const closeToast = useCallback(
    (id: number) => {
      setToasts((prev) =>
        prev.map((toast) =>
          toast.id === id ? { ...toast, closing: true } : toast
        )
      );

      setTimeout(() => {
        removeToast(id);
      }, 300); // Match animation duration
    },
    [removeToast]
  );

  const showToast = useCallback(
    (message: string, type: ToastType = "info") => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type }]);

      // Auto remove after 3 seconds
      setTimeout(() => {
        closeToast(id);
      }, 3000);
    },
    [closeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast toast-${toast.type} ${
              toast.closing ? "toast-closing" : ""
            }`}
          >
            <span>{toast.message}</span>
            <button
              className="toast-close"
              onClick={() => closeToast(toast.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
