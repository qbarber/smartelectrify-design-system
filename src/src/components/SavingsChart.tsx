import React from 'react';
import { Card, CardHeader, CardContent } from '../primitives/Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer } from
'recharts';
export interface CostComparison {
  year: number;
  fossilFuelCost: number;
  electrifiedCost: number;
  cumulativeSavings: number;
}
export interface SavingsChartProps {
  data: CostComparison[];
  title?: string;
  'data-id'?: string;
}
export const SavingsChart = ({
  data,
  title = '15-Year Cost Comparison',
  'data-id': dataId
}: SavingsChartProps) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-200">
          <p className="text-sm font-medium text-slate-900">Year {label}</p>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-slate-600">
              Fossil Fuel:{' '}
              <span className="font-medium text-slate-900">
                ${payload[0].value.toLocaleString()}
              </span>
            </p>
            <p className="text-sm text-sky-600">
              Electrified:{' '}
              <span className="font-medium">
                ${payload[1].value.toLocaleString()}
              </span>
            </p>
            <p className="text-sm text-emerald-600 pt-1 border-t border-slate-200">
              Cumulative Savings:{' '}
              <span className="font-medium">
                ${payload[2].value.toLocaleString()}
              </span>
            </p>
          </div>
        </div>);

    }
    return null;
  };
  const totalSavings = data[data.length - 1]?.cumulativeSavings || 0;
  return (
    <Card data-id={dataId}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500 mt-1">
              Projected costs: staying on fossil fuels vs. electrifying
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500">Total 15-Year Savings</p>
            <p className="text-2xl font-bold text-emerald-600">
              ${totalSavings.toLocaleString()}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0
            }}>

            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="year"
              stroke="#64748B"
              style={{
                fontSize: '12px'
              }}
              label={{
                value: 'Year',
                position: 'insideBottom',
                offset: -5,
                style: {
                  fontSize: '12px',
                  fill: '#64748B'
                }
              }} />

            <YAxis
              stroke="#64748B"
              style={{
                fontSize: '12px'
              }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              label={{
                value: 'Cumulative Cost',
                angle: -90,
                position: 'insideLeft',
                style: {
                  fontSize: '12px',
                  fill: '#64748B'
                }
              }} />

            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                fontSize: '12px'
              }}
              iconType="line" />

            <Line
              type="monotone"
              dataKey="fossilFuelCost"
              stroke="#64748B"
              strokeWidth={2}
              name="Fossil Fuel Cost"
              dot={false} />

            <Line
              type="monotone"
              dataKey="electrifiedCost"
              stroke="#0EA5E9"
              strokeWidth={2}
              name="Electrified Cost"
              dot={false} />

            <Line
              type="monotone"
              dataKey="cumulativeSavings"
              stroke="#10B981"
              strokeWidth={3}
              strokeDasharray="5 5"
              name="Cumulative Savings"
              dot={false} />

          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>);

};