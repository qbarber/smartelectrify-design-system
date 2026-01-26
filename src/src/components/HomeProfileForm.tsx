import React from 'react';
import { Input } from '../primitives/Input';
import { Select } from '../primitives/Select';
import { Card } from '../primitives/Card';
export interface HomeProfile {
  address: string;
  zipCode: string;
  squareFootage: number;
  currentHeating: 'gas' | 'oil' | 'electric';
  avgMonthlyElectricBill: number;
  avgMonthlyGasBill: number;
}
export interface HomeProfileFormProps {
  value: HomeProfile;
  onChange: (value: HomeProfile) => void;
  errors?: Partial<Record<keyof HomeProfile, string>>;
  'data-id'?: string;
}
export const HomeProfileForm = ({
  value,
  onChange,
  errors = {},
  'data-id': dataId
}: HomeProfileFormProps) => {
  const updateField = <K extends keyof HomeProfile,>(
  field: K,
  fieldValue: HomeProfile[K]) =>
  {
    onChange({
      ...value,
      [field]: fieldValue
    });
  };
  return (
    <Card data-id={dataId}>
      <Card.Header>
        <h3 className="text-lg font-semibold text-slate-900">Home Profile</h3>
        <p className="text-sm text-slate-500 mt-1">
          Tell us about your home to get personalized recommendations
        </p>
      </Card.Header>
      <Card.Content>
        <div className="space-y-4">
          <Input
            label="Address"
            value={value.address}
            onChange={(e) => updateField('address', e.target.value)}
            error={errors.address}
            placeholder="123 Main St, City, State" />


          <Input
            label="ZIP Code"
            value={value.zipCode}
            onChange={(e) => updateField('zipCode', e.target.value)}
            error={errors.zipCode}
            placeholder="12345"
            maxLength={5} />


          <Input
            label="Square Footage"
            type="number"
            value={value.squareFootage || ''}
            onChange={(e) =>
            updateField('squareFootage', parseInt(e.target.value) || 0)
            }
            error={errors.squareFootage}
            placeholder="2000"
            min="0" />


          <Select
            label="Current Heating System"
            value={value.currentHeating}
            onChange={(e) =>
            updateField(
              'currentHeating',
              e.target.value as HomeProfile['currentHeating']
            )
            }
            error={errors.currentHeating}
            options={[
            {
              value: 'gas',
              label: 'Natural Gas'
            },
            {
              value: 'oil',
              label: 'Heating Oil'
            },
            {
              value: 'electric',
              label: 'Electric'
            }]
            }
            placeholder="Select heating type" />


          <Input
            label="Average Monthly Electric Bill"
            type="number"
            value={value.avgMonthlyElectricBill || ''}
            onChange={(e) =>
            updateField(
              'avgMonthlyElectricBill',
              parseFloat(e.target.value) || 0
            )
            }
            error={errors.avgMonthlyElectricBill}
            placeholder="150"
            min="0"
            step="0.01" />


          <Input
            label="Average Monthly Gas Bill"
            type="number"
            value={value.avgMonthlyGasBill || ''}
            onChange={(e) =>
            updateField('avgMonthlyGasBill', parseFloat(e.target.value) || 0)
            }
            error={errors.avgMonthlyGasBill}
            placeholder="75"
            min="0"
            step="0.01"
            helperText="Enter 0 if you don't use gas" />

        </div>
      </Card.Content>
    </Card>);

};