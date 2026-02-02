'use client'

import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '../lib/utils'
import { Card } from './Card'

export interface EquipmentCardProps {
  title: string
  description: string
  cost: number
  savings: number
  icon?: React.ReactNode
  selected?: boolean
  onSelect?: () => void
  badge?: string
  features?: string[]
  className?: string
}

export function EquipmentCard({
  title,
  description,
  cost,
  savings,
  icon,
  selected,
  onSelect,
  badge,
  features = [],
  className,
}: EquipmentCardProps) {
  return (
    <Card
      className={cn(
        'relative cursor-pointer transition-all duration-200',
        selected
          ? 'ring-2 ring-primary-600 shadow-md'
          : 'hover:shadow-md',
        className
      )}
      onClick={onSelect}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
            {badge}
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3">
            {icon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                {icon}
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
              <p className="text-sm text-stone-500 mt-1">{description}</p>
            </div>
          </div>
          {selected && (
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600">
              <Check className="h-4 w-4 text-white" />
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-stone-900">
            ${cost.toLocaleString()}
          </span>
          <span className="text-sm text-stone-500">upfront cost</span>
        </div>

        {/* Savings */}
        <div className="mb-4 rounded-lg bg-emerald-50 p-3">
          <p className="text-sm font-medium text-emerald-900">
            Save ${savings.toLocaleString()}/year
          </p>
          <p className="text-xs text-emerald-700 mt-1">
            Estimated annual savings
          </p>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-stone-600">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}