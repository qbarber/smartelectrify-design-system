import { useState, useEffect, useCallback } from 'react';
import { Button } from '../primitives/Button';
import { Input } from '../primitives/Input';
import { Card, CardContent, CardHeader } from '../primitives/Card';
import { XIcon, CheckIcon } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'signup' | 'login';
  onSubmit?: (data: { email: string; password: string; name?: string }) => void;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export const AuthModal = ({
  isOpen,
  onClose,
  mode: initialMode = 'signup',
  onSubmit,
}: AuthModalProps) => {
  const [mode, setMode] = useState<'signup' | 'login'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>({});

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPassword('');
      setName('');
      setErrors({});
      setTouched({});
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (validateForm() && onSubmit) {
      onSubmit({
        email,
        password,
        ...(mode === 'signup' && name ? { name } : {}),
      });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleMode = () => {
    setMode(mode === 'signup' ? 'login' : 'signup');
    setErrors({});
    setTouched({});
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <Card className="max-w-md w-full bg-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 transition-colors"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <CardHeader className="pb-2">
          <h2 className="text-2xl font-semibold text-stone-900">
            {mode === 'signup' ? 'Save Your Calculation' : 'Welcome Back'}
          </h2>
          {mode === 'signup' && (
            <p className="text-stone-600 mt-1">
              Create an account to access your results anytime
            </p>
          )}
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              error={touched.email && !!errors.email}
              errorMessage={touched.email ? errors.email : undefined}
              required
            />

            {mode === 'signup' && (
              <Input
                label="Name (optional)"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
              error={touched.password && !!errors.password}
              errorMessage={touched.password ? errors.password : undefined}
              required
            />

            {mode === 'login' && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-stone-500 hover:text-stone-700"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {mode === 'signup' && (
              <div className="bg-emerald-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-stone-700">
                  <CheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Compare multiple scenarios side-by-side</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-700">
                  <CheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Access your results from any device</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-700">
                  <CheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Get updates when incentives change</span>
                </div>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              {mode === 'signup' ? 'Create Account' : 'Log In'}
            </Button>
          </form>

          <p className="text-sm text-center text-stone-600 mt-4">
            {mode === 'signup' ? (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Log in
                </button>
              </>
            ) : (
              <>
                New here?{' '}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Sign up
                </button>
              </>
            )}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
