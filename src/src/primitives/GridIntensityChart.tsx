'use client'

import * as React from 'react'
import { Card } from './Card'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// Mock 24-hour grid carbon data
const MOCK_GRID_DATA = [
  { hour: '12am', intensity: 350 },
  { hour: '2am', intensity: 320 },
  { hour: '4am', intensity: 300 },
  { hour: '6am', intensity: 380 },
  { hour: '8am', intensity: 450 },
  { hour: '10am', intensity: 420 },
  { hour: '12pm', intensity: 400 },
  { hour: '2pm', intensity: 380 },
  { hour: '4pm', intensity: 420 },
  { hour: '6pm', intensity: 480 },
  { hour: '8pm', intensity: 460 },
  { hour: '10pm', intensity: 410 },
]

export interface GridIntensityChartProps {
  data?: Array<{ hour: string; intensity: number }>
  className?: string
}

export function GridIntensityChart({
  data = MOCK_GRID_DATA,
  className,
}: GridIntensityChartProps) {
  return (
    <Card className={className}>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-stone-900">
            Grid Carbon Intensity
          </h3>
          <p className="text-sm text-stone-500 mt-1">
            24-hour carbon intensity (lbs CO₂/MWh)
          </p>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis
                dataKey="hour"
                tick={{ fill: '#78716c', fontSize: 12 }}
                stroke="#e7e5e4"
              />
              <YAxis
                tick={{ fill: '#78716c', fontSize: 12 }}
                stroke="#e7e5e4"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e7e5e4',
                  borderRadius: '8px',
                  fontSize: '14px',
                }}
              />
              <Line
                type="monotone"
                dataKey="intensity"
                stroke="#059669"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-600"></div>
            <span className="text-stone-600">Lower carbon (use electricity now)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <span className="text-stone-600">Higher carbon (avoid peak usage)</span>
          </div>
        </div>
      </div>
    </Card>
  )
}