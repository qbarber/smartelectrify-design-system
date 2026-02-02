'use client'
import * as React from 'react'
import { cn } from '../lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: boolean
  errorMessage?: string
  inputSize?: 'sm' | 'md' | 'lg'
  success?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      helperText,
      error,
      errorMessage,
      inputSize = 'md',
      success,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId()
    const helperTextId = `${inputId}-helper`
    const errorMessageId = `${inputId}-error`

    const sizeClasses = {
      sm: 'h-10 text-sm',
      md: 'h-12 text-base',
      lg: 'h-14 text-lg',
    }

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id || inputId}
            className="mb-1.5 block text-sm font-medium text-stone-900"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id || inputId}
          ref={ref}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error
              ? errorMessageId
              : helperText
                ? helperTextId
                : undefined
          }
          className={cn(
            // Base styles
            'w-full rounded-lg border border-stone-300 bg-white px-3 text-stone-900 placeholder:text-stone-400 transition-all duration-200 outline-none',
            // Size variants
            sizeClasses[inputSize],
            // Focus state - YOUR emerald color (not Bonsai blue)
            'focus:border-primary-600 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2',
            // Error state
            error &&
              'border-red-500 focus:border-red-500 focus:ring-red-500',
            // Success state
            success &&
              'border-green-500 focus:border-green-500 focus:ring-green-500',
            // Disabled state
            disabled &&
              'cursor-not-allowed bg-stone-50 opacity-50',
            className
          )}
          {...props}
        />
        {helperText && !error && (
          <p
            id={helperTextId}
            className="mt-1.5 text-sm text-stone-600"
          >
            {helperText}
          </p>
        )}
        {error && errorMessage && (
          <p
            id={errorMessageId}
            className="mt-1.5 text-sm text-red-600"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }