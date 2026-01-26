
## Overview

A comprehensive component library for building home electrification ROI calculators. This library provides reusable, accessible components for address input, equipment selection, financial projections, grid carbon intensity visualization, and scenario comparison. Designed specifically for applications helping homeowners understand costs, savings, and environmental impact of heat pumps, solar panels, and battery storage.

## Available Imports

**Primitives:**
- `Button` - (named export) Primary, secondary, and ghost button variants with size options
- `Input` - (named export) Text/number input with label, error, and helper text support
- `Select` - (named export) Dropdown select with label and error handling
- `Card` - (named export) Container component with Header, Content, and Footer subcomponents

**Form Components:**
- `AddressInput` - (named export) Specialized address input with optional validation
- `HomeProfileForm` - (named export) Complete form for collecting home details (address, heating type, bills, etc.)
- `EquipmentCard` - (named export) Selectable equipment card showing costs, incentives, and net price

**Data Display:**
- `StatCard` - (named export) Metric display card with optional trend indicator and icon
- `ROIDashboard` - (named export) Comprehensive ROI breakdown showing costs, savings, payback, and carbon reduction
- `ScenarioTable` - (named export) Side-by-side comparison table for multiple upgrade scenarios

**Visualizations:**
- `GridIntensityChart` - (named export) 24-hour carbon intensity chart using Recharts
- `SavingsChart` - (named export) 15-year cost comparison timeline using Recharts

**Types:**
- `ButtonProps` - (named export) Props for Button component
- `InputProps` - (named export) Props for Input component
- `SelectProps` - (named export) Props for Select component
- `SelectOption` - (named export) Option shape for Select component
- `CardProps`, `CardHeaderProps`, `CardContentProps`, `CardFooterProps` - (named export) Props for Card components
- `AddressInputProps` - (named export) Props for AddressInput component
- `HomeProfileFormProps` - (named export) Props for HomeProfileForm component
- `HomeProfile` - (named export) Data shape for home profile
- `EquipmentCardProps` - (named export) Props for EquipmentCard component
- `Equipment` - (named export) Data shape for equipment
- `StatCardProps` - (named export) Props for StatCard component
- `ROIDashboardProps` - (named export) Props for ROIDashboard component
- `ROIData` - (named export) Data shape for ROI metrics
- `ScenarioTableProps` - (named export) Props for ScenarioTable component
- `Scenario` - (named export) Data shape for scenarios
- `GridIntensityChartProps` - (named export) Props for GridIntensityChart component
- `GridData` - (named export) Data shape for grid intensity data
- `SavingsChartProps` - (named export) Props for SavingsChart component
- `CostComparison` - (named export) Data shape for cost comparison data

**Constants:**
- `COLORS` - (named export) Design system color palette
- `SPACING` - (named export) Design system spacing scale
- `TYPOGRAPHY` - (named export) Design system typography styles
- `EQUIPMENT_TYPES` - (named export) Equipment type labels
- `HEATING_TYPES` - (named export) Heating system type labels

## Component Props & Types

### Primitives

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  'data-id'?: string
}

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  'data-id'?: string
}

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  options: SelectOption[]
  error?: string
  helperText?: string
  placeholder?: string
  'data-id'?: string
}

interface CardProps {
  children: React.ReactNode
  className?: string
  'data-id'?: string
}
```

### Form Components

```typescript
interface AddressInputProps {
  value: string
  onChange: (value: string) => void
  onValidate?: (address: string) => Promise<boolean>
  placeholder?: string
  error?: string
  'data-id'?: string
}

interface HomeProfile {
  address: string
  zipCode: string
  squareFootage: number
  currentHeating: 'gas' | 'oil' | 'electric'
  avgMonthlyElectricBill: number
  avgMonthlyGasBill: number
}

interface HomeProfileFormProps {
  value: HomeProfile
  onChange: (value: HomeProfile) => void
  errors?: Partial<Record<keyof HomeProfile, string>>
  'data-id'?: string
}

interface Equipment {
  type: 'heat_pump' | 'solar' | 'battery' | 'panel_upgrade'
  cost: number
  installation: number
  incentives: {
    federal: number
    state: number
    utility: number
  }
}

interface EquipmentCardProps {
  equipment: Equipment
  selected?: boolean
  onSelect?: (equipment: Equipment) => void
  title: string
  description: string
  icon?: React.ReactNode
  'data-id'?: string
}
```

### Data Display

```typescript
interface StatCardProps {
  label: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease'
    label?: string
  }
  icon?: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'info'
  'data-id'?: string
}

interface ROIData {
  upfrontCost: number
  totalIncentives: number
  netCost: number
  annualSavings: number
  paybackYears: number
  carbonReduction_tons: number
}

interface ROIDashboardProps {
  data: ROIData
  'data-id'?: string
}

interface Scenario {
  name: string
  equipment: Array<{
    type: 'heat_pump' | 'solar' | 'battery' | 'panel_upgrade'
    name: string
  }>
  upfrontCost: number
  totalIncentives: number
  netCost: number
  annualSavings: number
  paybackYears: number
  carbonReduction_tons: number
  sequenceOrder: number
}

interface ScenarioTableProps {
  scenarios: Scenario[]
  selectedScenario?: string
  onSelectScenario?: (scenarioName: string) => void
  'data-id'?: string
}
```

### Visualizations

```typescript
interface GridData {
  hour: number // 0-23
  carbonIntensity: number // lbs CO2/MWh
  recommendation: 'optimal' | 'good' | 'avoid'
}

interface GridIntensityChartProps {
  data: GridData[]
  title?: string
  'data-id'?: string
}

interface CostComparison {
  year: number
  fossilFuelCost: number
  electrifiedCost: number
  cumulativeSavings: number
}

interface SavingsChartProps {
  data: CostComparison[]
  title?: string
  'data-id'?: string
}
```

## Import Patterns

```typescript
// Components
import { Button, Input, Select, Card } from './SmartElectrifyComponents'
import { AddressInput, HomeProfileForm, EquipmentCard } from './SmartElectrifyComponents'
import { StatCard, ROIDashboard, ScenarioTable } from './SmartElectrifyComponents'
import { GridIntensityChart, SavingsChart } from './SmartElectrifyComponents'

// Types
import type { 
  HomeProfile, 
  Equipment, 
  ROIData, 
  Scenario, 
  GridData, 
  CostComparison 
} from './SmartElectrifyComponents'

// Constants
import { COLORS, SPACING, EQUIPMENT_TYPES } from './SmartElectrifyComponents'
```

## Usage Requirements

**Dependencies:**
- React 16.8+ (hooks support)
- recharts (for GridIntensityChart and SavingsChart)
- lucide-react (for icons in examples, optional)
- Tailwind CSS configured

**No special context providers required** - all components are self-contained and controlled.

## How It Works

All form components follow the **controlled component pattern**:
- Accept current value via props
- Notify parent of changes via callback functions
- Parent component maintains state and validation logic

Data display components are **presentational**:
- Accept data via props
- Handle their own internal UI state (hover, selection)
- Notify parent of user interactions via callbacks

Charts use **Recharts** for responsive, accessible visualizations with custom tooltips and styling.

## Layout & Appearance

**Responsive Design:**
- All components are mobile-first and responsive
- Cards and forms stack on small screens, grid on larger screens
- Charts use ResponsiveContainer for fluid sizing

**Sizing:**
- Most components default to full width (`w-full`)
- Use parent containers or className prop to control width
- Spacing follows 8px base unit (8, 16, 24, 32, 48)

**Color Palette:**
- Primary: Electric Blue (#0EA5E9) - main actions, data highlights
- Secondary: Forest Green (#10B981) - savings, positive metrics
- Accent: Amber (#F59E0B) - warnings, attention items
- Neutral: Slate scale for text and borders

## Styling & Theming

**Customization:**
- All components accept `className` prop for Tailwind overrides
- Design tokens available via COLORS, SPACING, TYPOGRAPHY constants
- Card subcomponents (Header, Content, Footer) accept className

**Tailwind Configuration:**
No custom Tailwind config required - uses default Tailwind colors and utilities.

**Accessibility:**
- All form inputs have proper labels and ARIA attributes
- Error states use aria-invalid and aria-describedby
- Charts include proper ARIA labels
- Keyboard navigation supported on all interactive elements
- Focus indicators on buttons and inputs

## Code Examples

### Example 1: Basic Button Usage

```typescript
import { Button } from './SmartElectrifyComponents'

function App() {
  return (
    <div className="p-4 space-x-2">
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Calculate Savings
      </Button>
      <Button variant="secondary" size="sm">
        Learn More
      </Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  )
}
```

### Example 2: Address Input with Validation

```typescript
import { AddressInput } from './SmartElectrifyComponents'
import { useState } from 'react'

function App() {
  const [address, setAddress] = useState('')
  
  const validateAddress = async (addr: string) => {
    // Call your geocoding API
    const response = await fetch(`/api/validate?address=${encodeURIComponent(addr)}`)
    return response.ok
  }
  
  return (
    <AddressInput
      value={address}
      onChange={setAddress}
      onValidate={validateAddress}
      placeholder="Enter your home address"
    />
  )
}
```

### Example 3: Home Profile Form

```typescript
import { HomeProfileForm } from './SmartElectrifyComponents'
import type { HomeProfile } from './SmartElectrifyComponents'
import { useState } from 'react'

function App() {
  const [profile, setProfile] = useState<HomeProfile>({
    address: '',
    zipCode: '',
    squareFootage: 0,
    currentHeating: 'gas',
    avgMonthlyElectricBill: 0,
    avgMonthlyGasBill: 0,
  })
  
  const [errors, setErrors] = useState<Partial<Record<keyof HomeProfile, string>>>({})
  
  return (
    <HomeProfileForm
      value={profile}
      onChange={setProfile}
      errors={errors}
    />
  )
}
```

### Example 4: Equipment Selection

```typescript
import { EquipmentCard } from './SmartElectrifyComponents'
import type { Equipment } from './SmartElectrifyComponents'
import { useState } from 'react'
import { ZapIcon } from 'lucide-react'

function App() {
  const [selected, setSelected] = useState<Equipment>()
  
  const heatPump: Equipment = {
    type: 'heat_pump',
    cost: 12000,
    installation: 3000,
    incentives: {
      federal: 2000,
      state: 1500,
      utility: 500,
    },
  }
  
  return (
    <EquipmentCard
      equipment={heatPump}
      title="Heat Pump"
      description="Replace your gas furnace with an efficient electric heat pump"
      icon={<ZapIcon className="w-6 h-6" />}
      selected={selected?.type === 'heat_pump'}
      onSelect={setSelected}
    />
  )
}
```

### Example 5: ROI Dashboard

```typescript
import { ROIDashboard } from './SmartElectrifyComponents'
import type { ROIData } from './SmartElectrifyComponents'

function App() {
  const roiData: ROIData = {
    upfrontCost: 35000,
    totalIncentives: 16500,
    netCost: 18500,
    annualSavings: 2400,
    paybackYears: 7.7,
    carbonReduction_tons: 4.2,
  }
  
  return <ROIDashboard data={roiData} />
}
```

### Example 6: Scenario Comparison

```typescript
import { ScenarioTable } from './SmartElectrifyComponents'
import type { Scenario } from './SmartElectrifyComponents'
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState<string>()
  
  const scenarios: Scenario[] = [
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
      name: 'Full Electrification',
      equipment: [
        { type: 'solar', name: 'Solar' },
        { type: 'heat_pump', name: 'Heat Pump' },
        { type: 'battery', name: 'Battery' },
      ],
      upfrontCost: 46500,
      totalIncentives: 17500,
      netCost: 29000,
      annualSavings: 4100,
      paybackYears: 7.1,
      carbonReduction_tons: 7.2,
      sequenceOrder: 2,
    },
  ]
  
  return (
    <ScenarioTable
      scenarios={scenarios}
      selectedScenario={selected}
      onSelectScenario={setSelected}
    />
  )
}
```

### Example 7: Grid Intensity Chart

```typescript
import { GridIntensityChart } from './SmartElectrifyComponents'
import type { GridData } from './SmartElectrifyComponents'

function App() {
  const gridData: GridData[] = [
    { hour: 0, carbonIntensity: 950, recommendation: 'avoid' },
    { hour: 1, carbonIntensity: 920, recommendation: 'avoid' },
    { hour: 2, carbonIntensity: 880, recommendation: 'avoid' },
    // ... 24 hours of data
    { hour: 12, carbonIntensity: 600, recommendation: 'optimal' },
    { hour: 13, carbonIntensity: 580, recommendation: 'optimal' },
  ]
  
  return <GridIntensityChart data={gridData} />
}
```

### Example 8: Savings Timeline Chart

```typescript
import { SavingsChart } from './SmartElectrifyComponents'
import type { CostComparison } from './SmartElectrifyComponents'

function App() {
  const savingsData: CostComparison[] = Array.from({ length: 16 }, (_, i) => ({
    year: i,
    fossilFuelCost: i * 3200 + (i * i * 50),
    electrifiedCost: 18500 + (i * 1800),
    cumulativeSavings: Math.max(0, (i * 3200 + (i * i * 50)) - (18500 + (i * 1800))),
  }))
  
  return <SavingsChart data={savingsData} />
}
```
