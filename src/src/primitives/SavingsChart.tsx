'use client'

import * as React from 'react'
import { Card } from './Card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// Mock 15-year projection data
const MOCK_SAVINGS_DATA = [
  { year: 'Year 1', gasCost: 2400, heatPumpCost: 1550 },
  { year: 'Year 3', gasCost: 2520, heatPumpCost: 1628 },
  { year: 'Year 5', gasCost: 2646, heatPumpCost: 1709 },
  { year: 'Year 7', gasCost: 2778, heatPumpCost: 1795 },
  { year: 'Year 10', gasCost: 2987, heatPumpCost: 1929 },
  { year: 'Year 15', gasCost: 3381, heatPumpCost: 2184 },
]

export interface SavingsChartProps {
  data?: Array<{ year: string; gasCost: number; heatPumpCost: number }>
  className?: string
}

export function SavingsChart({
  data = MOCK_SAVINGS_DATA,
  className,
}: SavingsChartProps) {
  return (
    <Card className={className}>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-stone-900">
            15-Year Cost Projection
          </h3>
          <p className="text-sm text-stone-500 mt-1">
            Annual heating costs: Gas vs. Heat Pump
          </p>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis
                dataKey="year"
                tick={{ fill: '#78716c', fontSize: 12 }}
                stroke="#e7e5e4"
              />
              <YAxis
                tick={{ fill: '#78716c', fontSize: 12 }}
                stroke="#e7e5e4"
                label={{
                  value: 'Annual Cost ($)',
                  angle: -90,
                  position: 'insideLeft',
                  style: { fill: '#78716c', fontSize: 12 },
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e7e5e4',
                  borderRadius: '8px',
                  fontSize: '14px',
                }}
              />
              <Legend />
              <Bar dataKey="gasCost" fill="#f59e0b" name="Gas Furnace" />
              <Bar dataKey="heatPumpCost" fill="#059669" name="Heat Pump" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}