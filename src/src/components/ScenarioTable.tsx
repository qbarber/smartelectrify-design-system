import React from 'react';
import { Card, CardHeader, CardContent } from '../primitives/Card';
import { CheckIcon } from 'lucide-react';
export interface Scenario {
  name: string;
  equipment: Array<{
    type: 'heat_pump' | 'solar' | 'battery' | 'panel_upgrade';
    name: string;
  }>;
  upfrontCost: number;
  totalIncentives: number;
  netCost: number;
  annualSavings: number;
  paybackYears: number;
  carbonReduction_tons: number;
  sequenceOrder: number;
}
export interface ScenarioTableProps {
  scenarios: Scenario[];
  selectedScenario?: string;
  onSelectScenario?: (scenarioName: string) => void;
  'data-id'?: string;
}
export const ScenarioTable = ({
  scenarios,
  selectedScenario,
  onSelectScenario,
  'data-id': dataId
}: ScenarioTableProps) => {
  return (
    <Card data-id={dataId}>
      <CardHeader>
        <h3 className="text-lg font-semibold text-slate-900">
          Compare Scenarios
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Side-by-side comparison of upgrade options
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Scenario
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Equipment
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Net Cost
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Annual Savings
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Payback
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-600 uppercase tracking-wider">
                  CO₂ Reduction
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Order
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {scenarios.map((scenario) => {
                const isSelected = selectedScenario === scenario.name;
                return (
                  <tr
                    key={scenario.name}
                    className={`transition-colors ${onSelectScenario ? 'cursor-pointer hover:bg-slate-50' : ''} ${isSelected ? 'bg-sky-50' : ''}`}
                    onClick={() => onSelectScenario?.(scenario.name)}>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {isSelected &&
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center">
                            <CheckIcon className="w-3 h-3 text-white" />
                          </div>
                        }
                        <span className="text-sm font-medium text-slate-900">
                          {scenario.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {scenario.equipment.map((eq, idx) =>
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">

                            {eq.name}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-slate-900">
                      ${scenario.netCost.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-emerald-600">
                      ${scenario.annualSavings.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-slate-900">
                      {scenario.paybackYears.toFixed(1)} yrs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-slate-900">
                      {scenario.carbonReduction_tons.toFixed(1)} tons
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
                        {scenario.sequenceOrder}
                      </span>
                    </td>
                  </tr>);

              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>);

};