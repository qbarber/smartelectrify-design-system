import React, { useState } from 'react';
import { Input } from '../primitives/Input';
import { Button } from '../primitives/Button';
export interface AddressInputProps {
  value: string;
  onChange: (value: string) => void;
  onValidate?: (address: string) => Promise<boolean>;
  placeholder?: string;
  error?: string;
  'data-id'?: string;
}
export const AddressInput = ({
  value,
  onChange,
  onValidate,
  placeholder = 'Enter your home address',
  error,
  'data-id': dataId
}: AddressInputProps) => {
  const [isValidating, setIsValidating] = useState(false);
  const [validationError, setValidationError] = useState<string>();
  const handleValidate = async () => {
    if (!onValidate) return;
    setIsValidating(true);
    setValidationError(undefined);
    try {
      const isValid = await onValidate(value);
      if (!isValid) {
        setValidationError(
          'Unable to validate address. Please check and try again.'
        );
      }
    } catch (err) {
      setValidationError('Validation failed. Please try again.');
    } finally {
      setIsValidating(false);
    }
  };
  return (
    <div className="w-full" data-id={dataId}>
      <div className="flex gap-2">
        <div className="flex-1">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            error={error || validationError}
            label="Home Address"
            type="text"
            disabled={isValidating} />

        </div>
        {onValidate &&
        <Button
          onClick={handleValidate}
          disabled={!value || isValidating}
          className="mt-6">

            {isValidating ? 'Validating...' : 'Validate'}
          </Button>
        }
      </div>
    </div>);

};