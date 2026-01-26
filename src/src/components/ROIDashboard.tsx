import React from 'react';
import { Card } from '../primitives/Card';
import {
  DollarSignIcon,
  TrendingUpIcon,
  CalendarIcon,
  LeafIcon } from
'lucide-react';
export interface ROIData {
  upfrontCost: number;
  totalIncentives: number;
  netCost: number;
  annualSavings: number;
  paybackYears: number;
  carbonReduction_tons: number;
}
export interface ROIDashboardProps {
  data: ROIData;
  'data-id'?: string;
}
export const ROIDashboard = ({
  data,
  'data-id': dataId
}: ROIDashboardProps) => {
  const lifetimeSavings = data.annualSavings * 15; // 15 year projection
  return (
    <Card data-id={dataId}>
      <Card.Header>
        <h3 className="text-lg font-semibold text-slate-900">
          Return on Investment
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Your personalized financial and environmental impact
        </p>
      </Card.Header>
      <Card.Content>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Upfront Cost */}
          <div className="p-4 rounded-lg bg-slate-50">
            <div className="flex items-center gap-2 mb-2">
              <DollarSignIcon className="w-5 h-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-600">
                Upfront Cost
              </span>
            </div>
            <p className="text-2xl font-bold text-slate-900">
              ${data.upfrontCost.toLocaleString()}
            </p>
          </div>

          {/* Total Incentives */}
          <div className="p-4 rounded-lg bg-emerald-50">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUpIcon className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">
                Total Incentives
              </span>
            </div>
            <p className="text-2xl font-bold text-emerald-700">
              -${data.totalIncentives.toLocaleString()}
            </p>
          </div>

          {/* Net Cost */}
          <div className="p-4 rounded-lg bg-sky-50 border-2 border-sky-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSignIcon className="w-5 h-5 text-sky-600" />
              <span className="text-sm font-medium text-sky-600">Net Cost</span>
            </div>
            <p className="text-2xl font-bold text-sky-700">
              ${data.netCost.toLocaleString()}
            </p>
          </div>

          {/* Annual Savings */}
          <div className="p-4 rounded-lg bg-sky-50 border-2 border-sky-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUpIcon className="w-5 h-5 text-sky-600" />
              <span className="text-sm font-medium text-sky-600">
                Annual Savings
              </span>
            </div>
            <p className="text-2xl font-bold text-sky-700">
              ${data.annualSavings.toLocaleString()}
            </p>
          </div>

          {/* Payback Period */}
          <div className="p-4 rounded-lg bg-amber-50">
            <div className="flex items-center gap-2 mb-2">
              <CalendarIcon className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-600">
                Payback Period
              </span>
            </div>
            <p className="text-2xl font-bold text-amber-700">
              {data.paybackYears.toFixed(1)} years
            </p>
          </div>

          {/* 15-Year Savings */}
          <div className="p-4 rounded-lg bg-emerald-50">
            <div className="flex items-center gap-2 mb-2">
              <DollarSignIcon className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">
                15-Year Savings
              </span>
            </div>
            <p className="text-2xl font-bold text-emerald-700">
              ${lifetimeSavings.toLocaleString()}
            </p>
          </div>

          {/* Carbon Reduction */}
          <div className="p-4 rounded-lg bg-emerald-50 md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <LeafIcon className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">
                Annual Carbon Reduction
              </span>
            </div>
            <p className="text-2xl font-bold text-emerald-700">
              {data.carbonReduction_tons.toFixed(1)} tons CO₂
            </p>
            <p className="text-sm text-emerald-600 mt-1">
              Equivalent to planting{' '}
              {Math.round(data.carbonReduction_tons * 16)} trees per year
            </p>
          </div>
        </div>
      </Card.Content>
    </Card>);

};