'use client'

import * as React from 'react'
import { Card } from './Card'

export interface ROIData {
  upfrontCost: number
  incentives: number
  netCost: number
  annualSavings: number
  paybackPeriod: number
  carbonReduction: number
}

export interface ROIDashboardProps {
  data: ROIData
  className?: string
}

export function ROIDashboard({ data, className }: ROIDashboardProps) {
  const twentyYearSavings = data.annualSavings * 20

  return (
    <Card className={className}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-900 mb-6">
          ROI Breakdown
        </h3>

        {/* Cost Section */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center py-2">
            <span className="text-stone-600">Upfront Cost</span>
            <span className="font-semibold text-stone-900">
              ${data.upfrontCost.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="text-stone-600">Incentives & Rebates</span>
            <span className="font-semibold text-emerald-600">
              -${data.incentives.toLocaleString()}
            </span>
          </div>

          <div className="border-t border-stone-200 pt-3 flex justify-between items-center">
            <span className="font-medium text-stone-900">Net Cost</span>
            <span className="text-2xl font-bold text-stone-900">
              ${data.netCost.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Savings Section */}
        <div className="rounded-lg bg-emerald-50 p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-emerald-900">
              Annual Savings
            </span>
            <span className="text-xl font-bold text-emerald-900">
              ${data.annualSavings.toLocaleString()}/year
            </span>
          </div>
          <p className="text-xs text-emerald-700">
            20-year savings: ${twentyYearSavings.toLocaleString()}
          </p>
        </div>

        {/* Payback & Impact */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-stone-500 mb-1">Payback Period</p>
            <p className="text-2xl font-bold text-stone-900">
              {data.paybackPeriod} years
            </p>
          </div>
          <div>
            <p className="text-sm text-stone-500 mb-1">Carbon Reduction</p>
            <p className="text-2xl font-bold text-stone-900">
              {data.carbonReduction} tons/year
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}