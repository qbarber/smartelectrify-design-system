import React from 'react';
import { Card, CardContent } from '../primitives/Card';
import { CheckIcon } from 'lucide-react';
export interface Equipment {
  type: 'heat_pump' | 'solar' | 'battery' | 'panel_upgrade';
  cost: number;
  installation: number;
  incentives: {
    federal: number;
    state: number;
    utility: number;
  };
}
export interface EquipmentCardProps {
  equipment: Equipment;
  selected?: boolean;
  onSelect?: (equipment: Equipment) => void;
  title: string;
  description: string;
  icon?: React.ReactNode;
  'data-id'?: string;
}
export const EquipmentCard = ({
  equipment,
  selected = false,
  onSelect,
  title,
  description,
  icon,
  'data-id': dataId
}: EquipmentCardProps) => {
  const totalCost = equipment.cost + equipment.installation;
  const totalIncentives =
  equipment.incentives.federal +
  equipment.incentives.state +
  equipment.incentives.utility;
  const netCost = totalCost - totalIncentives;
  const handleClick = () => {
    if (onSelect) {
      onSelect(equipment);
    }
  };
  return (
    <Card
      className={`cursor-pointer transition-all ${selected ? 'ring-2 ring-sky-500 shadow-md' : 'hover:shadow-md'}`}
      data-id={dataId}
      onClick={handleClick}>

      <CardContent>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            {icon &&
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
                {icon}
              </div>
            }
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-500 mt-1">{description}</p>
            </div>
          </div>
          {selected &&
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center">
              <CheckIcon className="w-4 h-4 text-white" />
            </div>
          }
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Equipment Cost</span>
            <span className="font-medium text-slate-900">
              ${equipment.cost.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Installation</span>
            <span className="font-medium text-slate-900">
              ${equipment.installation.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm pt-2 border-t border-slate-200">
            <span className="text-slate-600">Total Upfront</span>
            <span className="font-semibold text-slate-900">
              ${totalCost.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm text-emerald-600">
            <span>Total Incentives</span>
            <span className="font-medium">
              -${totalIncentives.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-base pt-2 border-t border-slate-200">
            <span className="font-semibold text-slate-900">Net Cost</span>
            <span className="font-bold text-sky-600">
              ${netCost.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>);

};