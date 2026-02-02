import { Button } from '../src/primitives/Button';
import { ROIDashboard, ROIData } from '../src/components/ROIDashboard';
import { ScenarioTable, Scenario } from '../src/components/ScenarioTable';
import { GridIntensityChart, GridData } from '../src/components/GridIntensityChart';
import { SavingsChart, CostComparison } from '../src/components/SavingsChart';
import { DownloadIcon, SaveIcon, RefreshCwIcon } from 'lucide-react';

const mockROIData: ROIData = {
  upfrontCost: 35000,
  totalIncentives: 12400,
  netCost: 22600,
  annualSavings: 2800,
  paybackYears: 8.1,
  carbonReduction_tons: 4.2,
};

const mockScenarios: Scenario[] = [
  {
    name: 'Heat Pump Only',
    equipment: [{ type: 'heat_pump', name: 'Heat Pump' }],
    upfrontCost: 15000,
    totalIncentives: 4000,
    netCost: 11000,
    annualSavings: 1200,
    paybackYears: 9.2,
    carbonReduction_tons: 2.1,
    sequenceOrder: 1,
  },
  {
    name: 'Heat Pump + Solar',
    equipment: [
      { type: 'heat_pump', name: 'Heat Pump' },
      { type: 'solar', name: 'Solar Panels' },
    ],
    upfrontCost: 35000,
    totalIncentives: 11400,
    netCost: 23600,
    annualSavings: 2500,
    paybackYears: 9.4,
    carbonReduction_tons: 3.8,
    sequenceOrder: 2,
  },
  {
    name: 'Full Electrification',
    equipment: [
      { type: 'heat_pump', name: 'Heat Pump' },
      { type: 'solar', name: 'Solar Panels' },
      { type: 'battery', name: 'Battery Storage' },
    ],
    upfrontCost: 45000,
    totalIncentives: 14400,
    netCost: 30600,
    annualSavings: 3200,
    paybackYears: 9.6,
    carbonReduction_tons: 4.5,
    sequenceOrder: 3,
  },
];

const mockGridData: GridData[] = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  carbonIntensity: Math.sin((i - 6) * 0.3) * 150 + 200 + Math.random() * 50,
  recommendation: i >= 10 && i <= 16 ? 'optimal' : i >= 17 && i <= 21 ? 'avoid' : 'good',
}));

const mockCostData: CostComparison[] = Array.from({ length: 16 }, (_, i) => ({
  year: i,
  fossilFuelCost: 3000 + i * 200 + i * i * 10,
  electrifiedCost: i === 0 ? 22600 : 1200 + i * 50,
  cumulativeSavings: i === 0 ? -22600 : (3000 + i * 200) * i - (1200 + i * 50) * i - 22600,
}));

export const ResultsPage = () => {
  const handleDownloadPDF = () => {
    console.log('Downloading PDF...');
  };

  const handleSaveCalculation = () => {
    console.log('Saving calculation...');
  };

  const handleStartNew = () => {
    console.log('Starting new calculation...');
  };

  return (
    <div className="min-h-screen bg-stone-50 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-stone-900 mb-2">Your Electrification Plan</h1>
          <p className="text-stone-600">Based on your home profile and selected equipment</p>
        </div>

        <div className="space-y-8">
          <ROIDashboard data={mockROIData} />

          <ScenarioTable scenarios={mockScenarios} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GridIntensityChart data={mockGridData} />
            <SavingsChart data={mockCostData} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" onClick={handleDownloadPDF}>
              <DownloadIcon className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button
              variant="primary"
              onClick={handleSaveCalculation}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <SaveIcon className="w-4 h-4 mr-2" />
              Save This Calculation
            </Button>
          </div>
          <button
            onClick={handleStartNew}
            className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2"
          >
            <RefreshCwIcon className="w-4 h-4" />
            Start New Calculation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
