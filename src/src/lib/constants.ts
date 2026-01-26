// ============================================
// DESIGN TOKENS - Bonsai-inspired Modern Palette
// ============================================

export const COLORS = {
  // Primary Brand Colors - Sophisticated Emerald (inspired by Bonsai)
  primary: {
    DEFAULT: '#059669',  // Main emerald - buttons, links, primary actions
    hover: '#047857',    // Darker emerald - hover states
    light: '#d1fae5',    // Light emerald - backgrounds, badges
  },

  // Background Colors - Warm Neutrals (not stark white)
  background: {
    page: '#fafaf9',     // Warm stone - page background (softer than white)
    card: '#ffffff',     // Pure white - card backgrounds for contrast
    hover: '#f5f5f4',    // Light stone - hover backgrounds
  },

  // Text Colors - Stone Palette (warmer than gray)
  text: {
    primary: '#1c1917',    // Dark stone - headlines, body text
    secondary: '#78716c',  // Medium stone - labels, captions
    muted: '#a8a29e',      // Light stone - placeholders, disabled text
  },

  // Border Colors - Subtle Stone
  border: {
    DEFAULT: '#e7e5e4',  // Light stone - card borders, dividers (very subtle)
    input: '#d6d3d1',    // Medium stone - form inputs (slightly more visible)
  },

  // Status & Accent Colors
  success: '#22c55e',  // Green - savings, positive outcomes
  warning: '#f59e0b',  // Amber - costs, warnings
  info: '#0284c7',     // Sky blue - informational elements
};

export const SPACING = {
  cardPadding: '24px',      // p-6 - generous card padding (not cramped)
  sectionGap: '24px',       // gap-6 - space between cards/sections
  formSpacing: '16px',      // space-y-4 - space between form fields
  sectionPadding: '48px',   // py-12 - vertical section padding
};

export const TYPOGRAPHY = {
  fontFamily: 'Inter, system-ui, sans-serif',  // Modern, clean sans-serif

  fontSize: {
    sm: '14px',    // Small text - captions, footnotes
    base: '16px',  // Body text - DEFAULT (not 14px)
    lg: '18px',    // Large body - emphasis
    xl: '20px',    // Subheadings
    '2xl': '24px', // Section titles
    '3xl': '30px', // Page titles
    '4xl': '36px', // Hero text
  },

  fontWeight: {
    regular: 400,   // Body text
    medium: 500,    // Labels, nav items (use this often for refinement)
    semibold: 600,  // Subheadings, card titles
    bold: 700,      // Headlines only (don't overuse)
  },

  lineHeight: {
    body: 1.625,    // Body text - relaxed, easy to read
    heading: 1.2,   // Headlines - tighter, more impact
  },
};

export const BORDERS = {
  radius: {
    sm: '8px',      // rounded-lg - inputs, buttons (not too round)
    md: '12px',     // rounded-xl - cards (softer)
    lg: '16px',     // rounded-2xl - modals
    full: '9999px', // rounded-full - pills, avatars
  },
};

export const SHADOWS = {
  // Very subtle shadows - modern design uses minimal depth
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',   // Cards at rest (barely visible)
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',    // Cards on hover (slight lift)
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',  // Dropdowns, modals (more depth)
  // Note: Buttons use NO shadow (flat design)
};

// ============================================
// DATA CONSTANTS - Business Logic (Keep These)
// ============================================

// Equipment options for calculator
export const EQUIPMENT_TYPES = {
  heat_pump: 'Heat Pump',
  solar: 'Solar Panels',
  battery: 'Battery Storage',
  panel_upgrade: 'Electrical Panel Upgrade'
} as const;

// Heating system types for home profile
export const HEATING_TYPES = {
  gas: 'Natural Gas',
  oil: 'Heating Oil',
  electric: 'Electric Resistance',
  propane: 'Propane',
  wood: 'Wood/Pellet',
  none: 'No Heating System'
} as const;

// Form validation constants
export const VALIDATION = {
  minSquareFeet: 500,
  maxSquareFeet: 10000,
  minIncome: 0,
  maxIncome: 500000,
};

// API endpoints (if you have any)
export const API_ENDPOINTS = {
  rewiringAmerica: 'https://api.rewiringamerica.org',
  nrelPvWatts: 'https://developer.nrel.gov/api/pvwatts',
  eia: 'https://api.eia.gov',
};