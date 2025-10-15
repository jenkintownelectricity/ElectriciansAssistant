// Version and feature management for Electrician's Assistant
// Phase 1: Residential Wizard - Focus on 80% of residential electrical work

export const APP_VERSIONS = {
  residential: {
    id: 'residential',
    name: 'Residential Wizard',
    description: '80% coverage for residential electrical work',
    price: {
      monthly: 29,
      yearly: 199,
      savingsPercent: 43
    },
    articles: [
      110, // General Requirements
      210, // Branch Circuits
      240, // Overcurrent Protection
      250, // Grounding and Bonding
      310, // Conductors for General Wiring
      314, // Outlet, Device, Pull, and Junction Boxes
      334, // Nonmetallic-Sheathed Cable (Romex)
      404, // Switches
      406, // Receptacles
      408, // Panelboards
      410  // Luminaires
    ],
    features: [
      'code_lookup',
      'search',
      'photo_analysis',
      'basic_troubleshooting',
      'dev_mode'
    ],
    limits: {
      photoAnalysisPerMonth: 100,
      savedSearches: 50,
      users: 1
    },
    tier: 'basic'
  },
  commercial: {
    id: 'commercial',
    name: 'Commercial Wizard',
    description: 'Complete coverage for commercial electrical work',
    price: {
      monthly: 79,
      yearly: 599,
      savingsPercent: 37
    },
    articles: [
      // All residential articles plus:
      110, 210, 220, 225, 230, 240, 250, 300, 310, 314, 320, 330,
      334, 338, 340, 344, 348, 350, 352, 358,
      400, 404, 406, 408, 410, 422, 424, 430, 440, 450,
      511, 625, 680, 690
    ],
    features: [
      'code_lookup',
      'search',
      'photo_analysis',
      'basic_troubleshooting',
      'load_calculations',
      'three_phase_support',
      'commercial_equipment',
      'dev_mode'
    ],
    limits: {
      photoAnalysisPerMonth: 500,
      savedSearches: 200,
      users: 5
    },
    tier: 'professional'
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise Wizard',
    description: 'Complete NEC 2023 + team management',
    price: {
      monthly: 'custom',
      yearly: 'custom',
      savingsPercent: 0
    },
    articles: 'ALL',
    features: [
      'code_lookup',
      'search',
      'photo_analysis',
      'basic_troubleshooting',
      'load_calculations',
      'three_phase_support',
      'commercial_equipment',
      'team_management',
      'analytics_dashboard',
      'custom_reports',
      'api_access',
      'priority_support',
      'dev_mode'
    ],
    limits: {
      photoAnalysisPerMonth: 'unlimited',
      savedSearches: 'unlimited',
      users: 'unlimited'
    },
    tier: 'enterprise'
  }
};

// Get current version from environment or default to residential
export const getCurrentVersion = () => {
  const tier = import.meta.env.VITE_APP_TIER || 'residential';
  return APP_VERSIONS[tier];
};

// Check if feature is available in current version
export const hasFeature = (featureName) => {
  const currentVersion = getCurrentVersion();
  return currentVersion.features.includes(featureName);
};

// Check if article is available in current version
export const hasArticle = (articleNumber) => {
  const currentVersion = getCurrentVersion();
  if (currentVersion.articles === 'ALL') return true;
  return currentVersion.articles.includes(articleNumber);
};

// Get next tier for upgrade prompts
export const getNextTier = (currentTierId) => {
  if (currentTierId === 'residential') return 'commercial';
  if (currentTierId === 'commercial') return 'enterprise';
  return null;
};

// Calculate savings for annual plans
export const calculateAnnualSavings = (tier) => {
  const version = APP_VERSIONS[tier];
  if (typeof version.price.monthly !== 'number') return 0;
  const monthlyTotal = version.price.monthly * 12;
  return monthlyTotal - version.price.yearly;
};

// Feature display names
export const FEATURE_NAMES = {
  code_lookup: 'NEC Code Lookup',
  search: 'Smart Search',
  photo_analysis: 'AI Photo Analysis',
  basic_troubleshooting: 'Troubleshooting Guides',
  load_calculations: 'Load Calculations',
  three_phase_support: '3-Phase Systems',
  commercial_equipment: 'Commercial Equipment',
  team_management: 'Team Management',
  analytics_dashboard: 'Analytics Dashboard',
  custom_reports: 'Custom Reports',
  api_access: 'API Access',
  priority_support: 'Priority Support',
  dev_mode: 'Developer Mode'
};

// Article names for display
export const ARTICLE_NAMES = {
  110: 'General Requirements',
  200: 'Grounded Conductors',
  210: 'Branch Circuits',
  220: 'Load Calculations',
  225: 'Outside Branch Circuits',
  230: 'Services',
  240: 'Overcurrent Protection',
  250: 'Grounding and Bonding',
  300: 'Wiring Methods',
  310: 'Conductors',
  314: 'Boxes and Fittings',
  320: 'Armored Cable',
  330: 'Metal-Clad Cable',
  334: 'Nonmetallic-Sheathed Cable',
  338: 'Service-Entrance Cable',
  340: 'Underground Feeder Cable',
  344: 'Rigid Metal Conduit',
  348: 'Flexible Metal Conduit',
  350: 'Liquidtight Flexible Metal Conduit',
  352: 'Rigid PVC Conduit',
  358: 'Electrical Metallic Tubing',
  400: 'Flexible Cords',
  404: 'Switches',
  406: 'Receptacles',
  408: 'Panelboards',
  410: 'Luminaires',
  422: 'Appliances',
  424: 'Fixed Electric Heating',
  430: 'Motors',
  440: 'Air Conditioning Equipment',
  450: 'Transformers',
  511: 'Commercial Garages',
  625: 'Electric Vehicle Charging',
  680: 'Swimming Pools',
  690: 'Solar Photovoltaic Systems'
};
