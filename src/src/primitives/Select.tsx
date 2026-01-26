import React, { forwardRef } from 'react';
export interface SelectOption {
  value: string;
  label: string;
}
export interface SelectProps extends
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  placeholder?: string;
  'data-id'?: string;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
  {
    label,
    options,
    error,
    helperText,
    placeholder,
    className = '',
    'data-id': dataId,
    id,
    ...props
  },
  ref) =>
  {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div className="w-full" data-id={dataId}>
        {label &&
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-slate-700 mb-1">

            {label}
          </label>
        }
        <select
          ref={ref}
          id={selectId}
          className={`w-full px-3 py-2 border rounded-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors ${error ? 'border-red-500' : 'border-slate-300'} ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
          error ?
          `${selectId}-error` :
          helperText ?
          `${selectId}-helper` :
          undefined
          }
          {...props}>

          {placeholder &&
          <option value="" disabled>
              {placeholder}
            </option>
          }
          {options.map((option) =>
          <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )}
        </select>
        {error &&
        <p id={`${selectId}-error`} className="mt-1 text-sm text-red-600">
            {error}
          </p>
        }
        {helperText && !error &&
        <p id={`${selectId}-helper`} className="mt-1 text-sm text-slate-500">
            {helperText}
          </p>
        }
      </div>);

  }
);
Select.displayName = 'Select';