'use client'

import * as React from 'react'
import { MapPin, Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'

export interface AddressInputProps {
  value?: string
  onChange?: (address: string) => void
  onSelect?: (address: string, details?: any) => void
  label?: string
  placeholder?: string
  error?: boolean
  errorMessage?: string
  helperText?: string
  disabled?: boolean
  className?: string
}

// Mock address suggestions for demo
const MOCK_ADDRESSES = [
  '123 Main St, San Francisco, CA 94102',
  '456 Market St, San Francisco, CA 94103',
  '789 Valencia St, San Francisco, CA 94110',
  '321 Mission St, San Francisco, CA 94105',
  '654 Folsom St, San Francisco, CA 94107',
]

export const AddressInput = React.forwardRef<HTMLDivElement, AddressInputProps>(
  (
    {
      value = '',
      onChange,
      onSelect,
      label,
      placeholder = 'Enter your address...',
      error,
      errorMessage,
      helperText,
      disabled,
      className,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = React.useState(value)
    const [isOpen, setIsOpen] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [suggestions, setSuggestions] = React.useState<string[]>([])
    const containerRef = React.useRef<HTMLDivElement>(null)
    const inputId = React.useId()

    // Mock loading and filtering
    React.useEffect(() => {
      if (inputValue.length < 3) {
        setSuggestions([])
        setIsOpen(false)
        return
      }

      setIsLoading(true)

      // Simulate API delay
      const timer = setTimeout(() => {
        const filtered = MOCK_ADDRESSES.filter(addr =>
          addr.toLowerCase().includes(inputValue.toLowerCase())
        )
        setSuggestions(filtered)
        setIsOpen(filtered.length > 0)
        setIsLoading(false)
      }, 300)

      return () => clearTimeout(timer)
    }, [inputValue])

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInputValue(newValue)
      onChange?.(newValue)
    }

    const handleSelect = (address: string) => {
      setInputValue(address)
      onChange?.(address)
      onSelect?.(address)
      setIsOpen(false)
    }

    return (
      <div className={cn('w-full', className)} ref={ref}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-stone-900"
          >
            {label}
          </label>
        )}

        <div ref={containerRef} className="relative">
          {/* Input */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
            <input
              id={inputId}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={placeholder}
              disabled={disabled}
              aria-invalid={error ? 'true' : 'false'}
              className={cn(
                'h-12 w-full rounded-lg border border-stone-300 bg-white pl-10 pr-10 text-base text-stone-900 placeholder:text-stone-400 transition-all duration-200 outline-none',
                'focus:border-primary-600 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2',
                error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                disabled && 'cursor-not-allowed bg-stone-50 opacity-50'
              )}
            />
            {isLoading && (
              <Loader2 className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin text-stone-400" />
            )}
          </div>

          {/* Dropdown */}
          {isOpen && suggestions.length > 0 && (
            <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-lg border border-stone-200 bg-white shadow-lg">
              <div className="max-h-60 overflow-y-auto p-1">
                {suggestions.map((address, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(address)}
                    className="flex cursor-pointer items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-stone-100"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-stone-400" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-stone-900">
                        {address.split(',')[0]}
                      </p>
                      <p className="text-xs text-stone-500">
                        {address.split(',').slice(1).join(',').trim()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Helper text */}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-stone-600">{helperText}</p>
        )}

        {/* Error message */}
        {error && errorMessage && (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)

AddressInput.displayName = 'AddressInput'