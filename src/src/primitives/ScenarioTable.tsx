'use client'

import * as React from 'react'
import { Check, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { Card } from './Card'

export interface Scenario {
  name: string
  upfrontCost: number
  annualSavings: number
  paybackYears: number
  carbonReduction: number
  isRecommended?: boolean
}

export interface ScenarioTableProps {
  scenarios: Scenario[]
  className?: string
}

export function ScenarioTable({ scenarios, className }: ScenarioTableProps) {
  return (
    <Card className={className}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-900 mb-4">
          Scenario Comparison
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="pb-3 text-left text-sm font-medium text-stone-500">
                  Scenario
                </th>
                <th className="pb-3 text-right text-sm font-medium text-stone-500">
                  Upfront Cost
                </th>
                <th className="pb-3 text-right text-sm font-medium text-stone-500">
                  Annual Savings
                </th>
                <th className="pb-3 text-right text-sm font-medium text-stone-500">
                  Payback
                </th>
                <th className="pb-3 text-right text-sm font-medium text-stone-500">
                  Carbon Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((scenario, index) => (
                <tr
                  key={index}
                  className={cn(
                    'border-b border-stone-100 last:border-0',
                    scenario.isRecommended && 'bg-emerald-50'
                  )}
                >
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-stone-900">
                        {scenario.name}
                      </span>
                      {scenario.isRecommended && (
                        <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
                          Recommended
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    ${scenario.upfrontCost.toLocaleString()}
                  </td>
                  <td className="py-4 text-right font-medium text-emerald-600">
                    ${scenario.annualSavings.toLocaleString()}/yr
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    {scenario.paybackYears} years
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    {scenario.carbonReduction} tons/yr
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}