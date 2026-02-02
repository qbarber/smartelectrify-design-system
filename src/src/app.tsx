import { Button } from "./primitives/Button";
import { Card } from "./primitives/Card";
import { Input } from "./primitives/Input";
import { Select } from "./primitives/Select";
import { AddressInput } from "./primitives/AddressInput";
import { HomeProfileForm } from "./primitives/HomeProfileForm";
import { EquipmentCard } from "./primitives/EquipmentCard";
import { StatCard } from "./primitives/StatCard";
import { ROIDashboard } from "./primitives/ROIDashboard";
import { ScenarioTable } from "./primitives/ScenarioTable";
import { GridIntensityChart } from "./primitives/GridIntensityChart";
import { SavingsChart } from "./primitives/SavingsChart";
export default function App() {
  return (
    <div className="min-h-screen bg-background p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-stone-900 mb-12">
          SmartElectrify Component Library
        </h1>

        {/* Buttons */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">
            Button Component
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-stone-500 mb-2">Primary</p>
              <Button variant="primary">Calculate Savings</Button>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-2">Secondary</p>
              <Button variant="secondary">Learn More</Button>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-2">Ghost</p>
              <Button variant="ghost">Cancel</Button>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-2">Loading State</p>
              <Button variant="primary" loading={true}>
                Processing...
              </Button>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-2">Sizes</p>
              <div className="flex gap-3 items-end">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Cards */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-stone-900">
            Card Component
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Default Card</h3>
              <p className="text-sm text-stone-500">
                With shadow-sm and border
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Standard Card</h3>
              <p className="text-sm text-stone-500">Clean and spacious</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Info Card</h3>
              <p className="text-sm text-stone-500">Displays information</p>
            </Card>
          </div>
        </div>

        {/* Inputs */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">
            Input Component
          </h2>
          <div className="space-y-4 max-w-md">
            <Input label="Email Address" placeholder="you@example.com" />
            <Input
              label="With Helper Text"
              helperText="We'll never share your email"
              placeholder="Enter your email"
            />
            <Input
              label="Error State"
              error
              errorMessage="This field is required"
              placeholder="Required field"
            />
          </div>
        </Card>

        {/* Select */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">
            Select Component
          </h2>
          <div className="space-y-4 max-w-md">
            <Select
              label="Heating Type"
              options={[
                { value: "gas", label: "Natural Gas" },
                { value: "electric", label: "Electric Resistance" },
                { value: "oil", label: "Heating Oil" },
                { value: "propane", label: "Propane" },
              ]}
              placeholder="Select heating type..."
            />
            <Select
              label="Searchable Dropdown"
              searchable
              options={[
                { value: "ca", label: "California" },
                { value: "ny", label: "New York" },
                { value: "tx", label: "Texas" },
                { value: "fl", label: "Florida" },
                { value: "wa", label: "Washington" },
              ]}
              placeholder="Type to search..."
            />
          </div>
        </Card>

        {/* Address Input */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">
            Address Input Component
          </h2>
          <div className="max-w-md">
            <AddressInput
              label="Home Address"
              placeholder="Start typing your address..."
              helperText="Type at least 3 characters to see suggestions"
            />
          </div>
        </Card>
        {/* Home Profile Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-stone-900 mb-6">
            Home Profile Form Component
          </h2>
          <HomeProfileForm
            onSubmit={(data) => {
              console.log("Form submitted:", data);
              alert(`Form submitted! Check console for data.`);
            }}
          />
        </Card>
        {/* Equipment Cards - ADD THIS SECTION */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-stone-900">
            Equipment Card Component
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <EquipmentCard
              title="Heat Pump"
              description="Energy-efficient heating & cooling"
              cost={12500}
              savings={850}
              badge="Most Popular"
              selected={true}
              features={[
                "Heats and cools your home",
                "Up to 300% efficiency",
                "15-year lifespan",
              ]}
            />
            <EquipmentCard
              title="Solar Panels"
              description="Generate clean electricity"
              cost={18500}
              savings={1200}
              features={[
                "6kW system",
                "25-year warranty",
                "Net metering eligible",
              ]}
            />
            <EquipmentCard
              title="Battery Storage"
              description="Store solar energy"
              cost={8500}
              savings={450}
              features={["10kWh capacity", "Backup power", "10-year warranty"]}
            />
          </div>
        </div>
        {/* Stat Cards */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-stone-900">
            Stat Card Component
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <StatCard
              label="Total Savings"
              value="$2,450"
              trend={{ value: 12, isPositive: true }}
              description="Annual energy savings"
            />
            <StatCard
              label="Carbon Reduced"
              value="3.2 tons"
              trend={{ value: 8, isPositive: true }}
              description="CO₂ emissions avoided"
            />
            <StatCard
              label="Energy Efficiency"
              value="94%"
              description="Home efficiency score"
            />
          </div>
        </div>
        {/* ROI Dashboard */}
        <ROIDashboard
          data={{
            upfrontCost: 25000,
            incentives: 8500,
            netCost: 16500,
            annualSavings: 1850,
            paybackPeriod: 9,
            carbonReduction: 3.2,
          }}
        />
        {/* Scenario Table */}
        <ScenarioTable
          scenarios={[
            {
              name: "Heat Pump Only",
              upfrontCost: 12500,
              annualSavings: 850,
              paybackYears: 15,
              carbonReduction: 2.1,
            },
            {
              name: "Heat Pump + Solar",
              upfrontCost: 31000,
              annualSavings: 2050,
              paybackYears: 15,
              carbonReduction: 5.3,
              isRecommended: true,
            },
            {
              name: "Full Electrification",
              upfrontCost: 45000,
              annualSavings: 2900,
              paybackYears: 16,
              carbonReduction: 7.8,
            },
          ]}
        />
        {/* Grid Intensity Chart */}
        <GridIntensityChart />
        {/* Savings Chart */}
        <SavingsChart />
      </div>
    </div>
  );
}
