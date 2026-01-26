import { Button } from "./primitives/Button";
export default function App() {
  return (
    <div className="min-h-screen bg-background p-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-900 mb-8">
          SmartElectrify Component Library
        </h1>

        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-stone-900 mb-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
