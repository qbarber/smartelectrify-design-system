import { useState, useEffect, useCallback } from 'react';
import { Button } from '../primitives/Button';
import { Input } from '../primitives/Input';
import { Card, CardContent, CardHeader } from '../primitives/Card';
import { XIcon, CheckIcon } from 'lucide-react';

interface CalculationData {
  annualSavings: number;
  paybackYears: number;
  equipment: string;
}

interface SaveCalculationModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn?: boolean;
  calculationData: CalculationData;
  onSave?: (data: { name?: string; email?: string }) => void;
  onDownloadPDF?: () => void;
}

export const SaveCalculationModal = ({
  isOpen,
  onClose,
  isLoggedIn = false,
  calculationData,
  onSave,
  onDownloadPDF,
}: SaveCalculationModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setEmail('');
      setEmailError('');
      setEmailTouched(false);
    }
  }, [isOpen]);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, handleEscape]);

  const validateEmail = (): boolean => {
    if (!isLoggedIn && !email) {
      setEmailError('Email is required');
      return false;
    }
    if (!isLoggedIn && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSave = () => {
    if (!isLoggedIn) {
      setEmailTouched(true);
      if (!validateEmail()) return;
    }

    if (onSave) {
      onSave({
        name: name || undefined,
        email: !isLoggedIn ? email : undefined,
      });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <Card className="max-w-lg w-full bg-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 transition-colors"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <CardHeader className="pb-2">
          <h2 className="text-2xl font-semibold text-stone-900">
            Save This Calculation
          </h2>
          <p className="text-stone-600 mt-1">
            Access your results anytime and compare scenarios
          </p>
        </CardHeader>

        <CardContent>
          <div className="space-y-5">
            <div className="bg-stone-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-600">Annual Savings:</span>
                <span className="font-semibold text-stone-900">
                  {formatCurrency(calculationData.annualSavings)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Payback Period:</span>
                <span className="font-semibold text-stone-900">
                  {calculationData.paybackYears} years
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Equipment:</span>
                <span className="font-semibold text-stone-900">
                  {calculationData.equipment}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Input
                label="Name this calculation (optional)"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="My Home Electrification Plan"
              />

              {!isLoggedIn && (
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                    setEmailTouched(true);
                    validateEmail();
                  }}
                  error={emailTouched && !!emailError}
                  errorMessage={emailTouched ? emailError : undefined}
                  helperText="We'll send you a copy of your results"
                  required
                />
              )}
            </div>

            <div className="bg-emerald-50 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-stone-700">
                <CheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Save and compare multiple scenarios</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-700">
                <CheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>View detailed results on any device</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-700">
                <CheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Track when incentives change in your area</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={onDownloadPDF}
                className="flex-1 text-stone-600"
              >
                Download PDF Instead
              </Button>
              <Button
                variant="primary"
                onClick={handleSave}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              >
                Save Calculation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaveCalculationModal;
