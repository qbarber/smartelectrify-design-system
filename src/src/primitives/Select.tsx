'use client'

import * as React from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '../lib/utils'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  label?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  helperText?: string
  searchable?: boolean
  className?: string
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Select an option',
      label,
      disabled,
      error,
      errorMessage,
      helperText,
      searchable = false,
      className,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState('')
    const selectRef = React.useRef<HTMLDivElement>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const selectId = React.useId()
    const helperTextId = `${selectId}-helper`
    const errorMessageId = `${selectId}-error`

    const selectedOption = options.find((opt) => opt.value === value)

    const filteredOptions = searchable
      ? options.filter((option) =>
          option.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : options

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          selectRef.current &&
          !selectRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false)
          setSearchQuery('')
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

    // Focus input when opening in searchable mode
    React.useEffect(() => {
      if (isOpen && searchable && inputRef.current) {
        inputRef.current.focus()
      }
    }, [isOpen, searchable])

    // Keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return

      if (event.key === 'Escape') {
        setIsOpen(false)
        setSearchQuery('')
      } else if (event.key === 'Enter' || event.key === ' ') {
        if (!searchable || !isOpen) {
          event.preventDefault()
          setIsOpen(!isOpen)
        }
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        }
      }
    }

    const handleSelect = (optionValue: string) => {
      onChange?.(optionValue)
      setIsOpen(false)
      setSearchQuery('')
    }

    return (
      <div className={cn('w-full', className)} ref={ref}>
        {label && (
          <label
            htmlFor={selectId}
            className="mb-1.5 block text-sm font-medium text-stone-900"
          >
            {label}
          </label>
        )}

        <div
          ref={selectRef}
          className="relative"
          onKeyDown={handleKeyDown}
        >
          {/* Trigger */}
          <div
            id={selectId}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={`${selectId}-listbox`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error
                ? errorMessageId
                : helperText
                  ? helperTextId
                  : undefined
            }
            tabIndex={disabled ? -1 : 0}
            onClick={() => {
              if (!disabled) {
                setIsOpen(!isOpen)
              }
            }}
            className={cn(
              // Base styles
              'flex h-12 w-full cursor-pointer items-center justify-between rounded-lg border border-stone-300 bg-white px-3 text-base transition-all duration-200 outline-none',
              // Focus state - YOUR emerald (not blue)
              'focus:border-primary-600 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2',
              // Open state
              isOpen && 'border-primary-600 ring-2 ring-primary-600 ring-offset-2',
              // Error state
              error &&
                'border-red-500 focus:border-red-500 focus:ring-red-500',
              error && isOpen && 'border-red-500 ring-red-500',
              // Disabled state
              disabled &&
                'cursor-not-allowed bg-stone-50 opacity-50'
            )}
          >
            <span
              className={cn(
                'block truncate text-stone-900',
                !selectedOption && 'text-stone-400'
              )}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown
              className={cn(
                'h-5 w-5 text-stone-400 transition-transform duration-200',
                isOpen && 'rotate-180'
              )}
            />
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div
              id={`${selectId}-listbox`}
              role="listbox"
              aria-labelledby={selectId}
              className="absolute z-50 mt-2 w-full overflow-hidden rounded-lg border border-stone-200 bg-white shadow-lg animate-in fade-in-0 zoom-in-95"
            >
              {/* Searchable Input */}
              {searchable && (
                <div className="border-b border-stone-200 p-2">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type or select an option"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 w-full rounded-md border border-stone-300 bg-white px-3 text-base text-stone-900 placeholder:text-stone-400 outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}

              {/* Options */}
              <div className="max-h-60 overflow-y-auto p-1">
                {filteredOptions.length === 0 ? (
                  <div className="px-3 py-2 text-sm text-stone-500">
                    No options found
                  </div>
                ) : (
                  filteredOptions.map((option) => (
                    <div
                      key={option.value}
                      role="option"
                      aria-selected={option.value === value}
                      onClick={() => handleSelect(option.value)}
                      className={cn(
                        'flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-base transition-colors',
                        // Hover state
                        'hover:bg-stone-100',
                        // Selected state - YOUR emerald
                        option.value === value
                          ? 'bg-emerald-50 text-emerald-900'
                          : 'text-stone-900'
                      )}
                    >
                      <span>{option.label}</span>
                      {option.value === value && (
                        <Check className="h-5 w-5 text-emerald-600" />
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Helper text */}
        {helperText && !error && (
          <p
            id={helperTextId}
            className="mt-1.5 text-sm text-stone-600"
          >
            {helperText}
          </p>
        )}

        {/* Error message */}
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

Select.displayName = 'Select'

export { Select }