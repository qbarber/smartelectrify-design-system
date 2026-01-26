import React, { useState, Component } from 'react';
import {
  Button,
  Input,
  Select,
  Card,
  CardHeader,
  CardContent,
  AddressInput,
  HomeProfileForm,
  EquipmentCard,
  StatCard,
  ROIDashboard,
  ScenarioTable,
  GridIntensityChart,
  SavingsChart } from
'./src';
import type {
  HomeProfile,
  Equipment,
  ROIData,
  Scenario,
  GridData,
  CostComparison } from
'./src';
import {
  ZapIcon,
  SunIcon,
  BatteryIcon,
  PlugIcon,
  DollarSignIcon,
  LeafIcon } from
'lucide-react';
export const ComponentPreview = () => {
  const [address, setAddress] = useState('');
  const [homeProfile, setHomeProfile] = useState<HomeProfile>({
    address: '123 Main St, Boston, MA',
    zipCode: '02101',
    squareFootage: 2000,
    currentHeating: 'gas',
    avgMonthlyElectricBill: 150,
    avgMonthlyGasBill: 120
  });
  const [selectedEquipment, setSelectedEquipment] = useState<string>();
  const [selectedScenario, setSelectedScenario] = useState<string>();
  const sampleEquipment: Equipment[] = [
  {
    type: 'heat_pump',
    cost: 12000,
    installation: 3000,
    incentives: {
      federal: 2000,
      state: 1500,
      utility: 500
    }
  },
  {
    type: 'solar',
    cost: 18000,
    installation: 2000,
    incentives: {
      federal: 6000,
      state: 2000,
      utility: 1000
    }
  },
  {
    type: 'battery',
    cost: 10000,
    installation: 1500,
    incentives: {
      federal: 3000,
      state: 1000,
      utility: 500
    }
  }];

  const roiData: ROIData = {
    upfrontCost: 35000,
    totalIncentives: 16500,
    netCost: 18500,
    annualSavings: 2400,
    paybackYears: 7.7,
    carbonReduction_tons: 4.2
  };
  const scenarios: Scenario[] = [
  {
    name: 'Heat Pump Only',
    equipment: [
    {
      type: 'heat_pump',
      name: 'Heat Pump'
    }],

    upfrontCost: 15000,
    totalIncentives: 4000,
    netCost: 11000,
    annualSavings: 1200,
    paybackYears: 9.2,
    carbonReduction_tons: 2.1,
    sequenceOrder: 1
  },
  {
    name: 'Solar + Heat Pump',
    equipment: [
    {
      type: 'solar',
      name: 'Solar'
    },
    {
      type: 'heat_pump',
      name: 'Heat Pump'
    }],

    upfrontCost: 35000,
    totalIncentives: 13000,
    netCost: 22000,
    annualSavings: 3200,
    paybackYears: 6.9,
    carbonReduction_tons: 5.8,
    sequenceOrder: 2
  },
  {
    name: 'Full Electrification',
    equipment: [
    {
      type: 'solar',
      name: 'Solar'
    },
    {
      type: 'heat_pump',
      name: 'Heat Pump'
    },
    {
      type: 'battery',
      name: 'Battery'
    }],

    upfrontCost: 46500,
    totalIncentives: 17500,
    netCost: 29000,
    annualSavings: 4100,
    paybackYears: 7.1,
    carbonReduction_tons: 7.2,
    sequenceOrder: 3
  }];

  const gridData: GridData[] = Array.from(
    {
      length: 24
    },
    (_, i) => ({
      hour: i,
      carbonIntensity: 800 + Math.sin(i / 3.8) * 300 + Math.random() * 100,
      recommendation:
      i >= 10 && i <= 16 ?
      'optimal' :
      i >= 6 && i <= 9 || i >= 17 && i <= 20 ?
      'good' :
      'avoid'
    })
  );
  const savingsData: CostComparison[] = Array.from(
    {
      length: 16
    },
    (_, i) => ({
      year: i,
      fossilFuelCost: i * 3200 + i * i * 50,
      electrifiedCost: 18500 + i * 1800,
      cumulativeSavings: Math.max(
        0,
        i * 3200 + i * i * 50 - (18500 + i * 1800)
      )
    })
  );
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            SmartElectrify Component Library
          </h1>
          <p className="text-lg text-slate-600">
            Reusable components for home electrification ROI calculators
          </p>
        </div>

        {/* Primitives Section */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Primitives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h3 className="font-semibold text-slate-900">Buttons</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                  <Button variant="primary" size="lg">
                    Large
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold text-slate-900">
                  Inputs & Selects
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input label="Text Input" placeholder="Enter text..." />
                  <Input label="With Error" error="This field is required" />
                  <Input label="With Helper" helperText="This is helper text" />
                  <Select
                    label="Select Dropdown"
                    options={[
                    {
                      value: 'option1',
                      label: 'Option 1'
                    },
                    {
                      value: 'option2',
                      label: 'Option 2'
                    }]
                    }
                    placeholder="Choose an option" />

                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Components */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Form Components
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <AddressInput
                value={address}
                onChange={setAddress}
                onValidate={async (addr) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return addr.length > 10;
                }} />

            </div>
            <div>
              <HomeProfileForm value={homeProfile} onChange={setHomeProfile} />
            </div>
          </div>
        </section>

        {/* Equipment Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Equipment Selection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EquipmentCard
              equipment={sampleEquipment[0]}
              title="Heat Pump"
              description="Replace your gas furnace with an efficient electric heat pump"
              icon={<ZapIcon className="w-6 h-6" />}
              selected={selectedEquipment === 'heat_pump'}
              onSelect={() => setSelectedEquipment('heat_pump')} />

            <EquipmentCard
              equipment={sampleEquipment[1]}
              title="Solar Panels"
              description="Generate clean electricity from your roof"
              icon={<SunIcon className="w-6 h-6" />}
              selected={selectedEquipment === 'solar'}
              onSelect={() => setSelectedEquipment('solar')} />

            <EquipmentCard
              equipment={sampleEquipment[2]}
              title="Battery Storage"
              description="Store solar energy for use anytime"
              icon={<BatteryIcon className="w-6 h-6" />}
              selected={selectedEquipment === 'battery'}
              onSelect={() => setSelectedEquipment('battery')} />

          </div>
        </section>

        {/* Stat Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Stat Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              label="Net Investment"
              value="$18,500"
              icon={<DollarSignIcon className="w-6 h-6" />}
              variant="info" />

            <StatCard
              label="Annual Savings"
              value="$2,400"
              change={{
                value: 15,
                type: 'increase',
                label: 'vs last year'
              }}
              icon={<DollarSignIcon className="w-6 h-6" />}
              variant="success" />

            <StatCard
              label="Payback Period"
              value="7.7 years"
              icon={<PlugIcon className="w-6 h-6" />}
              variant="warning" />

            <StatCard
              label="CO₂ Reduction"
              value="4.2 tons/yr"
              icon={<LeafIcon className="w-6 h-6" />}
              variant="success" />

          </div>
        </section>

        {/* ROI Dashboard */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            ROI Dashboard
          </h2>
          <ROIDashboard data={roiData} />
        </section>

        {/* Scenario Comparison */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Scenario Comparison
          </h2>
          <ScenarioTable
            scenarios={scenarios}
            selectedScenario={selectedScenario}
            onSelectScenario={setSelectedScenario} />

        </section>

        {/* Charts */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Data Visualizations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GridIntensityChart data={gridData} />
            <div className="lg:col-span-2">
              <SavingsChart data={savingsData} />
            </div>
          </div>
        </section>
      </div>
    </div>);

};