'use client'

import * as React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '../lib/utils'
import { Card } from './Card'

export interface StatCardProps {
  label: string
  value: string | number
  trend?: {
    value: number
    isPositive: boolean
  }
  icon?: React.ReactNode
  description?: string
  className?: string
}

export function StatCard({
  label,
  value,
  trend,
  icon,
  description,
  className,
}: StatCardProps) {
  return (
    <Card className={cn('p-6', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-stone-500">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-stone-900">{value}</p>

          {trend && (
            <div className="mt-2 flex items-center gap-1">
              {trend.isPositive ? (
                <TrendingUp className="h-4 w-4 text-emerald-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
              <span
                className={cn(
                  'text-sm font-medium',
                  trend.isPositive ? 'text-emerald-600' : 'text-red-600'
                )}
              >
                {trend.value}%
              </span>
              <span className="text-sm text-stone-500">vs last year</span>
            </div>
          )}

          {description && (
            <p className="mt-2 text-sm text-stone-600">{description}</p>
          )}
        </div>

        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
            {icon}
          </div>
        )}
      </div>
    </Card>
  )
}