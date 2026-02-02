"use client";

import * as React from "react";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";

export interface HomeProfileData {
  squareFeet?: number;
  heatingType?: string;
  income?: number;
  householdSize?: number;
}

export interface HomeProfileFormProps {
  onSubmit?: (data: HomeProfileData) => void;
  initialData?: HomeProfileData;
  className?: string;
}

export function HomeProfileForm({
  onSubmit,
  initialData,
  className,
}: HomeProfileFormProps) {
  const [formData, setFormData] = React.useState<HomeProfileData>(
    initialData || {},
  );
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const heatingOptions = [
    { value: "gas", label: "Natural Gas" },
    { value: "electric", label: "Electric Resistance" },
    { value: "oil", label: "Heating Oil" },
    { value: "propane", label: "Propane" },
    { value: "wood", label: "Wood/Pellet" },
    { value: "none", label: "No Heating System" },
  ];

  const householdSizeOptions = [
    { value: "1", label: "1 person" },
    { value: "2", label: "2 people" },
    { value: "3", label: "3 people" },
    { value: "4", label: "4 people" },
    { value: "5", label: "5+ people" },
  ];

  const handleInputChange = (field: keyof HomeProfileData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "heatingType" ? value : Number(value) || undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onSubmit?.(formData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-6">
        {/* Section 1: Home Details */}
        <div>
          <h3 className="text-lg font-semibold text-stone-900 mb-4">
            Home Details
          </h3>
          <div className="space-y-4">
            <Input
              label="Square Footage"
              type="number"
              placeholder="1,500"
              value={formData.squareFeet?.toString() || ""}
              onChange={(e) => handleInputChange("squareFeet", e.target.value)}
              helperText="Approximate square footage of your home"
            />

            <Select
              label="Current Heating Type"
              options={heatingOptions}
              value={formData.heatingType}
              onChange={(value) => handleInputChange("heatingType", value)}
              placeholder="Select heating type..."
            />
          </div>
        </div>

        {/* Section 2: Household Info */}
        <div>
          <h3 className="text-lg font-semibold text-stone-900 mb-4">
            Household Information
          </h3>
          <div className="space-y-4">
            <Select
              label="Household Size"
              options={householdSizeOptions}
              value={formData.householdSize?.toString()}
              onChange={(value) => handleInputChange("householdSize", value)}
              placeholder="Select household size..."
            />

            <Input
              label="Annual Household Income"
              type="number"
              placeholder="75,000"
              value={formData.income?.toString() || ""}
              onChange={(e) => handleInputChange("income", e.target.value)}
              helperText="Used to calculate available incentives"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-3 pt-4">
          <Button
            type="submit"
            variant="primary"
            loading={isSubmitting}
            className="flex-1"
          >
            Calculate Savings
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setFormData({})}
            disabled={isSubmitting}
          >
            Reset
          </Button>
        </div>
      </div>
    </form>
  );
}
