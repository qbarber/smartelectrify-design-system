import { useState } from 'react';
import { Button } from '../src/primitives/Button';
import { Card, CardContent } from '../src/primitives/Card';
import { CalculatorIcon, PlusIcon, EyeIcon } from 'lucide-react';

interface SavedCalculation {
  id: string;
  name: string;
  dateSaved: string;
  annualSavings: number;
  paybackYears: number;
  address: string;
}

const mockSavedCalculations: SavedCalculation[] = [
  {
    id: '1',
    name: 'Full Electrification Plan',
    dateSaved: 'January 28, 2026',
    annualSavings: 3200,
    paybackYears: 9.6,
    address: '123 Main St, Boston, MA',
  },
  {
    id: '2',
    name: 'Heat Pump Only',
    dateSaved: 'January 25, 2026',
    annualSavings: 1200,
    paybackYears: 9.2,
    address: '123 Main St, Boston, MA',
  },
  {
    id: '3',
    name: 'Solar + Battery',
    dateSaved: 'January 20, 2026',
    annualSavings: 2100,
    paybackYears: 10.5,
    address: '456 Oak Ave, Cambridge, MA',
  },
];

export const DashboardPage = () => {
  const [calculations] = useState<SavedCalculation[]>(mockSavedCalculations);
  const showEmptyState = false;

  const handleViewDetails = (id: string) => {
    console.log('Viewing calculation:', id);
  };

  const handleCreateNew = () => {
    console.log('Creating new calculation...');
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (showEmptyState) {
    return (
      <div className="min-h-screen bg-stone-50 py-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-6">
            <CalculatorIcon className="w-10 h-10 text-stone-400" />
          </div>
          <h2 className="text-2xl font-bold text-stone-900 mb-3">No saved calculations yet</h2>
          <p className="text-stone-600 mb-8">
            Start your first calculation to compare scenarios and track savings
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleCreateNew}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Start Your First Calculation
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-stone-900">Your Saved Calculations</h1>
            <p className="text-stone-600 mt-1">Compare and track your electrification scenarios</p>
          </div>
          <Button
            variant="primary"
            onClick={handleCreateNew}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Create New Calculation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculations.map((calc) => (
            <Card key={calc.id} interactive>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-stone-900 text-lg">{calc.name}</h3>
                    <p className="text-sm text-stone-500 mt-1">{calc.dateSaved}</p>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-emerald-700 mb-1">Annual Savings</p>
                    <p className="text-2xl font-bold text-emerald-600">
                      {formatCurrency(calc.annualSavings)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">Payback Period</span>
                    <span className="font-medium text-stone-900">{calc.paybackYears} years</span>
                  </div>

                  <div className="text-sm text-stone-500 truncate">{calc.address}</div>

                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => handleViewDetails(calc.id)}
                  >
                    <EyeIcon className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
