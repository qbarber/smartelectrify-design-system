import React from 'react';
import { Card, CardHeader, CardContent } from '../primitives/Card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
export interface GridData {
  hour: number;
  carbonIntensity: number;
  recommendation: 'optimal' | 'good' | 'avoid';
}
export interface GridIntensityChartProps {
  data: GridData[];
  title?: string;
  'data-id'?: string;
}
export const GridIntensityChart = ({
  data,
  title = '24-Hour Grid Carbon Intensity',
  'data-id': dataId
}: GridIntensityChartProps) => {
  const formatHour = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}${period}`;
  };
  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'optimal':
        return '#10B981';
      // emerald-500
      case 'good':
        return '#F59E0B';
      // amber-500
      case 'avoid':
        return '#EF4444';
      // red-500
      default:
        return '#0EA5E9';
      // sky-500
    }
  };
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-200">
          <p className="text-sm font-medium text-slate-900">
            {formatHour(data.hour)}
          </p>
          <p className="text-sm text-slate-600 mt-1">
            {data.carbonIntensity} lbs CO₂/MWh
          </p>
          <p
            className={`text-xs font-medium mt-1 capitalize`}
            style={{
              color: getRecommendationColor(data.recommendation)
            }}>

            {data.recommendation === 'optimal' ?
            '✓ Best time to use energy' :
            data.recommendation === 'good' ?
            '~ Good time' :
            '✗ Avoid if possible'}
          </p>
        </div>);

    }
    return null;
  };
  return (
    <Card data-id={dataId}>
      <CardHeader>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">
          Optimize your energy usage for lower emissions
        </p>
        <div className="flex gap-4 mt-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs text-slate-600">Optimal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-xs text-slate-600">Good</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-xs text-slate-600">Avoid</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0
            }}>

            <defs>
              <linearGradient id="carbonGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="hour"
              tickFormatter={formatHour}
              stroke="#64748B"
              style={{
                fontSize: '12px'
              }} />

            <YAxis
              stroke="#64748B"
              style={{
                fontSize: '12px'
              }}
              label={{
                value: 'lbs CO₂/MWh',
                angle: -90,
                position: 'insideLeft',
                style: {
                  fontSize: '12px',
                  fill: '#64748B'
                }
              }} />

            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="carbonIntensity"
              stroke="#0EA5E9"
              strokeWidth={2}
              fill="url(#carbonGradient)" />

          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>);

};