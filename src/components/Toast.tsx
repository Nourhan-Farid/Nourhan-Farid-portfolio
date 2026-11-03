import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-950/50 border border-accent-500/40 text-slate-100 px-4 py-3 rounded-xl shadow-2xl shadow-accent-950/40 animate-slide-up backdrop-blur-md"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-accent-400">
        <CheckCircle2 className="h-5 w-5" />
      </div>
      <p className="text-sm font-medium text-slate-200">{message}</p>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="ml-2 text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-slate-800"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
