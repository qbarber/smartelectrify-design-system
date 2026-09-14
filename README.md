# SmartElectrify Design System

A professional, data-focused component library built with React, TypeScript, and Tailwind CSS. Designed for home electrification calculators and clean energy applications.

## 🎨 Design Philosophy

**Professional & Trustworthy** - SmartElectrify uses an emerald/stone color palette inspired by Bonsai and Linear to create a sophisticated, data-driven aesthetic that conveys environmental responsibility and financial accuracy.

**Data-First** - Components prioritize clarity and readability for complex calculations, charts, and comparisons.

**Generous Spacing** - Clean, uncluttered layouts help users digest technical information without feeling overwhelmed.

## 🎯 Color System
```
Primary (Emerald)
├── Default: #059669 - Buttons, links, primary actions
├── Hover: #047857 - Interactive elements
└── Light: #d1fae5 - Backgrounds, highlights, badges

Neutral (Stone)
├── 50: #fafaf9 - Page background (warm, not stark white)
├── 100: #f5f5f4 - Card hover states
├── 200: #e7e5e4 - Borders, dividers
├── 300: #d6d3d1 - Input borders
├── 500: #78716c - Secondary text, captions
├── 600: #57534e - Tertiary text
├── 800: #292524 - Body text
└── 900: #1c1917 - Headings

Status
├── Success: #22c55e - Positive savings, environmental impact
├── Warning: #f59e0b - Caution, moderate priority
├── Info: #0284c7 - Tips, informational callouts
└── Error: #ef4444 - Errors, high costs
```

## 📦 Components

### Base UI Components (4)

**Button** - Primary, secondary, and ghost variants with loading states
- Sizes: sm (40px), md (48px), lg (56px)
- Emerald primary, white secondary, transparent ghost
- Icon support, disabled states
- Smooth transitions

**Card** - Container component for content grouping
- White background on warm stone-50 page
- Soft shadow (shadow-sm)
- Rounded corners (12px)
- Optional interactive hover effect

**Input** - Form input with label and validation states
- Emerald focus ring
- 48px height for easy interaction
- Helper text and error messaging
- Success state for validation

**Select** - Dropdown selector with keyboard navigation
- Emerald selection highlight
- Check icon for selected items
- Searchable option list
- ChevronDown indicator

### Form Components (3)

**AddressInput** - Autocomplete address input
- Mock address suggestions (can integrate Google Places API)
- MapPin icon
- Loading state with spinner
- Filters on 3+ characters

**HomeProfileForm** - Multi-field home details form
- Square footage, heating type, income
- Section headers for organization
- Submit and reset actions
- Controlled state management

**EquipmentCard** - Selectable equipment option cards
- Visual selection with emerald border
- Cost and savings display prominently
- Feature lists with check icons
- Badge support for labels

### Data Display Components (3)

**StatCard** - Metric display with trend indicators
- Large primary value
- Trend arrows (up/down)
- Supporting description text
- Optional icon decoration

**ROIDashboard** - Cost breakdown and savings projection
- Upfront costs, incentives, net cost
- Annual savings highlight
- Payback period calculation
- Carbon reduction impact

**ScenarioTable** - Side-by-side scenario comparison
- Responsive table layout
- Recommended badge highlighting
- Cost, savings, and payback columns
- Emerald-50 background for recommended row

### Visualization Components (2)

**GridIntensityChart** - 24-hour carbon intensity line chart
- Recharts LineChart integration
- Emerald line color
- Optimal charging time highlighting
- Mock data structure provided

**SavingsChart** - 15-year cost comparison bar chart
- Recharts BarChart integration
- Amber (gas) vs Emerald (electric) bars
- Year-over-year projection
- Mock data structure provided

## 🛠️ Tech Stack

- **React 18** - Component framework
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library (clean, consistent icons)
- **Recharts** - Chart library for data visualization
- **Vite** - Fast build tool and dev server

## 📁 Project Structure
```
/src
  /primitives
    - Button.tsx
    - Card.tsx
    - Input.tsx
    - Select.tsx
    - AddressInput.tsx
    - HomeProfileForm.tsx
    - EquipmentCard.tsx
    - StatCard.tsx
    - ROIDashboard.tsx
    - ScenarioTable.tsx
    - GridIntensityChart.tsx
    - SavingsChart.tsx
  /lib
    /constants.ts - Design tokens (colors, spacing, typography)
    /utils.ts - Utility functions (cn for className merging)
  App.tsx - Component showcase/demo
  index.css - Global styles and Tailwind imports
  index.tsx - Application entry point
- tailwind.config.js - Tailwind configuration
- package.json - Dependencies
```

## 🚀 Usage

### Installing Dependencies
```bash
npm install clsx tailwind-merge lucide-react recharts
```

### Importing Components
```tsx
import { Button } from './primitives/Button';
import { Card } from './primitives/Card';
import { StatCard } from './primitives/StatCard';

function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <StatCard
        title="Annual Savings"
        value="$1,847"
        trend="up"
        description="vs. current gas heating"
      />
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Your Scenario</h3>
        <Button variant="primary">Calculate ROI</Button>
      </Card>
    </div>
  );
}
```

### Using Design Tokens
```tsx
import { COLORS, SPACING, TYPOGRAPHY } from './lib/constants';

const primaryColor = COLORS.primary.DEFAULT; // #059669
const cardPadding = SPACING.cardPadding; // 24px
const baseFont = TYPOGRAPHY.fontSize.base; // 16px
```

## 🎭 Component Showcase

Run the project to see all 12 components in action:
```bash
npm run dev
```

Open `http://localhost:5173` to view the interactive component showcase with realistic electrification scenarios.

## 📊 Chart Components

**GridIntensityChart** - Shows optimal times for energy usage
```tsx
<GridIntensityChart
  data={[
    { hour: 0, carbonIntensity: 320, recommendation: 'optimal' },
    { hour: 8, carbonIntensity: 450, recommendation: 'avoid' },
    // ... 24 hours
  ]}
/>
```

**SavingsChart** - Compares fossil fuel vs. electric costs over 15 years
```tsx
<SavingsChart
  data={[
    { year: 1, fossilFuelCost: 2640, electrifiedCost: 2135 },
    { year: 5, fossilFuelCost: 2908, electrifiedCost: 2353 },
    // ... 15 years
  ]}
/>
```

## ♿ Accessibility

All components include:
- **Keyboard navigation** - Full keyboard support
- **Focus indicators** - Visible emerald focus rings
- **ARIA labels** - Screen reader support
- **Color contrast** - WCAG AA compliant (4.5:1 minimum)
- **Semantic HTML** - Proper element hierarchy

## 📱 Responsive Design

Components are built mobile-first:
- **Base**: < 640px (mobile)
- **md**: ≥ 768px (tablet)
- **lg**: ≥ 1024px (desktop)

Example:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Stacks on mobile, 2 cols on tablet, 3 cols on desktop */}
</div>
```

## 🎨 Design Inspiration

**Visual References:**
- Bonsai (hellobonsai.com) - Professional invoicing SaaS
- Linear (linear.app) - Clean, modern project management
- Stripe (stripe.com) - Data-focused design
- Mercury (mercury.com) - Fintech aesthetics

**Why Emerald Green?**
- Represents environmental sustainability
- Conveys growth and financial savings
- Professional without being corporate
- High contrast with stone neutrals

**Why Stone Palette?**
- Warmer than pure gray (more approachable)
- Sophisticated, mature aesthetic
- Easy on the eyes for data-heavy interfaces
- Pairs beautifully with emerald

## 📝 Design Decisions

**Why Generous Spacing?**
- Complex calculations need breathing room
- Reduces cognitive load for financial decisions
- Makes ROI comparisons easier to scan
- Professional, premium feel

**Why Soft Shadows?**
- Minimal shadows (shadow-sm) create depth without distraction
- Focuses attention on data, not decoration
- Modern flat-ish design trend

**Why Medium Font Weights?**
- font-medium (500) for most text vs bold (700)
- More refined, less aggressive
- Better for data-heavy interfaces
- Easier to establish visual hierarchy

**Why No Button Shadows?**
- Modern trend (Linear, Notion, Vercel)
- Cleaner, more minimal aesthetic
- Focus on color and typography

## 🎯 Use Cases

This design system was built for:
- **Home electrification calculators** - ROI and savings projections
- **Energy dashboards** - Usage tracking and optimization
- **Solar panel configurators** - System sizing and cost estimates
- **Clean energy platforms** - Carbon impact calculators
- **Financial tools** - Any data-heavy comparison interface

## 🔢 Mock Data Structures

**Equipment:**
```typescript
interface Equipment {
  type: 'heat_pump' | 'solar' | 'battery' | 'panel_upgrade';
  specifications: {
    capacity_tons?: number;
    system_size_kW?: number;
    capacity_kWh?: number;
    amperage?: number;
  };
  cost: number;
  installation: number;
  incentives: { federal: number; state: number; utility: number };
  lifespan_years: number;
}
```

**Scenario:**
```typescript
interface Scenario {
  name: string;
  equipment: Equipment[];
  upfrontCost: number;
  totalIncentives: number;
  netCost: number;
  annualSavings: number;
  paybackYears: number;
  carbonReduction_tons: number;
}
```

## 📄 License

MIT License - Free to use for personal and commercial projects

## 👤 Author
Built by Quentin Barber for the SmartElectrify home electrification calculator, and reused for GridVoice, a community impact analysis tool for data center projects.

🔗 Related Projects
smartelectrify-mvp-app - Production application using this design system
GridVoice - Community impact analysis tool for data center siting decisions, reusing this design system's components and color palette
prepwell-design-system - Sister design system for medical advocacy platform
---

**Component library status: Production-ready** ✅
