import React, { forwardRef } from 'react';
export interface InputProps extends
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  'data-id'?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
  {
    label,
    error,
    helperText,
    className = '',
    'data-id': dataId,
    id,
    ...props
  },
  ref) =>
  {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div className="w-full" data-id={dataId}>
        {label &&
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-700 mb-1">

            {label}
          </label>
        }
        <input
          ref={ref}
          id={inputId}
          className={`w-full px-3 py-2 border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors ${error ? 'border-red-500' : 'border-slate-300'} ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
          error ?
          `${inputId}-error` :
          helperText ?
          `${inputId}-helper` :
          undefined
          }
          {...props} />

        {error &&
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600">
            {error}
          </p>
        }
        {helperText && !error &&
        <p id={`${inputId}-helper`} className="mt-1 text-sm text-slate-500">
            {helperText}
          </p>
        }
      </div>);

  }
);
Input.displayName = 'Input';