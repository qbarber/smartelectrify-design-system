import React from 'react';
import { Card, CardContent } from '../primitives/Card';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
export interface StatCardProps {
  label: string;
  value: string | number;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
    label?: string;
  };
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  'data-id'?: string;
}
export const StatCard = ({
  label,
  value,
  change,
  icon,
  variant = 'default',
  'data-id': dataId
}: StatCardProps) => {
  const variantStyles = {
    default: 'bg-slate-50 text-slate-600',
    success: 'bg-emerald-50 text-emerald-600',
    warning: 'bg-amber-50 text-amber-600',
    info: 'bg-sky-50 text-sky-600'
  };
  return (
    <Card data-id={dataId}>
      <CardContent className="py-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-600">{label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">{value}</p>
            {change &&
            <div className="flex items-center gap-1 mt-2">
                {change.type === 'increase' ?
              <TrendingUpIcon className="w-4 h-4 text-emerald-600" /> :

              <TrendingDownIcon className="w-4 h-4 text-red-600" />
              }
                <span
                className={`text-sm font-medium ${change.type === 'increase' ? 'text-emerald-600' : 'text-red-600'}`}>

                  {change.value}%
                </span>
                {change.label &&
              <span className="text-sm text-slate-500 ml-1">
                    {change.label}
                  </span>
              }
              </div>
            }
          </div>
          {icon &&
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${variantStyles[variant]}`}>

              {icon}
            </div>
          }
        </div>
      </CardContent>
    </Card>);

};