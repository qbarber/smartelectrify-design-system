import { useState } from 'react';
import { Button } from '../src/primitives/Button';
import { Card, CardContent, CardHeader } from '../src/primitives/Card';
import { HomeProfileForm, HomeProfile } from '../src/components/HomeProfileForm';
import { EquipmentCard, Equipment } from '../src/components/EquipmentCard';
import { CheckIcon, ZapIcon } from 'lucide-react';

const STEPS = [
  { id: 1, title: 'Home Profile', description: 'Tell us about your home and current energy usage' },
  { id: 2, title: 'Equipment Selection', description: 'Choose the upgrades you want to explore' },
  { id: 3, title: 'Review & Calculate', description: 'Review your selections and calculate your savings' },
];

const EQUIPMENT_OPTIONS: Array<{ equipment: Equipment; title: string; description: string; icon: React.ReactNode }> = [
  {
    equipment: {
      type: 'heat_pump',
      cost: 12000,
      installation: 3000,
      incentives: { federal: 2000, state: 1500, utility: 500 },
    },
    title: 'Heat Pump',
    description: 'Replace your furnace with an efficient heat pump for heating and cooling',
    icon: <ZapIcon className="w-5 h-5" />,
  },
  {
    equipment: {
      type: 'solar',
      cost: 18000,
      installation: 2000,
      incentives: { federal: 5400, state: 2000, utility: 0 },
    },
    title: 'Solar Panels',
    description: 'Generate your own clean electricity from rooftop solar',
    icon: <ZapIcon className="w-5 h-5" />,
  },
  {
    equipment: {
      type: 'battery',
      cost: 10000,
      installation: 1500,
      incentives: { federal: 3000, state: 1000, utility: 0 },
    },
    title: 'Battery Storage',
    description: 'Store solar energy for use at night or during outages',
    icon: <ZapIcon className="w-5 h-5" />,
  },
  {
    equipment: {
      type: 'panel_upgrade',
      cost: 3000,
      installation: 1500,
      incentives: { federal: 0, state: 500, utility: 0 },
    },
    title: 'Panel Upgrade',
    description: 'Upgrade your electrical panel to support new equipment',
    icon: <ZapIcon className="w-5 h-5" />,
  },
];

export const CalculatorPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [homeProfile, setHomeProfile] = useState<HomeProfile>({
    address: '',
    zipCode: '',
    squareFootage: 2000,
    currentHeating: 'gas',
    avgMonthlyElectricBill: 150,
    avgMonthlyGasBill: 120,
  });
  const [selectedEquipment, setSelectedEquipment] = useState<Set<string>>(new Set());

  const handleEquipmentToggle = (equipment: Equipment) => {
    const newSelected = new Set(selectedEquipment);
    if (newSelected.has(equipment.type)) {
      newSelected.delete(equipment.type);
    } else {
      newSelected.add(equipment.type);
    }
    setSelectedEquipment(newSelected);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCalculate = () => {
    console.log('Calculating with:', { homeProfile, selectedEquipment: Array.from(selectedEquipment) });
  };

  const renderProgressIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {STEPS.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
              currentStep > step.id
                ? 'bg-emerald-600 text-white'
                : currentStep === step.id
                ? 'bg-emerald-600 text-white'
                : 'bg-stone-200 text-stone-500'
            }`}
          >
            {currentStep > step.id ? <CheckIcon className="w-5 h-5" /> : step.id}
          </div>
          {index < STEPS.length - 1 && (
            <div
              className={`w-16 h-1 mx-2 ${
                currentStep > step.id ? 'bg-emerald-600' : 'bg-stone-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderStepContent = () => {
    const step = STEPS[currentStep - 1];

    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">{step.title}</h2>
          <p className="text-stone-600">{step.description}</p>
        </div>

        {currentStep === 1 && (
          <HomeProfileForm value={homeProfile} onChange={setHomeProfile} />
        )}

        {currentStep === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EQUIPMENT_OPTIONS.map((option) => (
              <EquipmentCard
                key={option.equipment.type}
                equipment={option.equipment}
                title={option.title}
                description={option.description}
                icon={option.icon}
                selected={selectedEquipment.has(option.equipment.type)}
                onSelect={handleEquipmentToggle}
              />
            ))}
          </div>
        )}

        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-stone-900">Review Your Selections</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-stone-50 rounded-lg">
                  <p className="text-sm text-stone-500 mb-1">ZIP Code</p>
                  <p className="font-medium text-stone-900">{homeProfile.zipCode || 'Not entered'}</p>
                </div>
                <div className="p-4 bg-stone-50 rounded-lg">
                  <p className="text-sm text-stone-500 mb-1">Home Size</p>
                  <p className="font-medium text-stone-900">{homeProfile.squareFootage.toLocaleString()} sq ft</p>
                </div>
                <div className="p-4 bg-stone-50 rounded-lg">
                  <p className="text-sm text-stone-500 mb-1">Current Heating</p>
                  <p className="font-medium text-stone-900 capitalize">{homeProfile.currentHeating}</p>
                </div>
                <div className="p-4 bg-stone-50 rounded-lg">
                  <p className="text-sm text-stone-500 mb-1">Monthly Bills</p>
                  <p className="font-medium text-stone-900">
                    Electric: ${homeProfile.avgMonthlyElectricBill}/mo | Gas: ${homeProfile.avgMonthlyGasBill}/mo
                  </p>
                </div>
                <div className="p-4 bg-stone-50 rounded-lg">
                  <p className="text-sm text-stone-500 mb-1">Selected Equipment</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedEquipment.size === 0 ? (
                      <p className="text-stone-500">No equipment selected</p>
                    ) : (
                      Array.from(selectedEquipment).map((type) => (
                        <span
                          key={type}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium capitalize"
                        >
                          {type.replace('_', ' ')}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {renderProgressIndicator()}
        {renderStepContent()}

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="secondary"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </Button>
          {currentStep < 3 ? (
            <Button
              variant="primary"
              onClick={handleNext}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Next
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleCalculate}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Calculate My Savings
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
