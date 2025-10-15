// Comprehensive electrical problems database with NEC 2023 references

export const ELECTRICAL_PROBLEMS = [
  // TOP 3 MOST COMMON
  {
    id: 1,
    title: "Circuit Breaker Keeps Tripping",
    category: "Circuit Protection",
    severity: "high",
    commonality: "most-common",
    description: "Circuit breaker trips repeatedly when certain appliances are used or randomly",
    causes: [
      "Overloaded circuit - too many devices on one circuit",
      "Short circuit in wiring or appliance",
      "Ground fault",
      "Faulty breaker",
      "Loose connection at breaker"
    ],
    necReferences: [
      {
        code: "NEC 210.19(A)",
        title: "Conductor Sizing",
        description: "Branch circuit conductors must have ampacity not less than the maximum load to be served"
      },
      {
        code: "NEC 210.20(A)",
        title: "Overcurrent Protection",
        description: "Branch-circuit overcurrent devices shall have a rating not less than the noncontinuous load plus 125% of the continuous load"
      }
    ],
    photoInstructions: [
      "Take a photo of the breaker panel showing which breaker is tripping",
      "Photo of the label inside the panel door",
      "Photo of devices/outlets on the affected circuit",
      "Close-up of the breaker in question"
    ],
    troubleshootingSteps: [
      "Identify which circuit is affected",
      "Unplug all devices on that circuit",
      "Reset the breaker",
      "Plug devices back in one at a time to identify the culprit",
      "Check for visible damage to outlets or switches"
    ]
  },
  {
    id: 2,
    title: "GFCI Outlet Keeps Tripping",
    category: "Outlets & Receptacles",
    severity: "high",
    commonality: "most-common",
    description: "Ground Fault Circuit Interrupter outlet trips frequently",
    causes: [
      "Moisture in outlet or connected device",
      "Damaged insulation on wiring",
      "Faulty GFCI receptacle",
      "Overloaded circuit",
      "Faulty appliance plugged in"
    ],
    necReferences: [
      {
        code: "NEC 210.8",
        title: "Ground-Fault Circuit-Interrupter Protection for Personnel",
        description: "GFCI protection required in bathrooms, kitchens, outdoors, garages, and other specified locations"
      },
      {
        code: "NEC 406.4(D)(4)",
        title: "GFCI Replacement",
        description: "Replacement receptacles must be GFCI-protected if required by code"
      }
    ],
    photoInstructions: [
      "Photo of the GFCI outlet showing test/reset buttons",
      "Photo of nearby outlets on same circuit",
      "If outdoors/bathroom: show environmental conditions",
      "Photo of any connected appliances"
    ],
    troubleshootingSteps: [
      "Press TEST button - should trip immediately",
      "Press RESET button to restore power",
      "Check for moisture around outlet",
      "Test with different appliances",
      "Check downstream outlets for issues"
    ]
  },
  {
    id: 3,
    title: "Dead Outlet - No Power",
    category: "Outlets & Receptacles",
    severity: "medium",
    commonality: "most-common",
    description: "Electrical outlet has no power, nothing plugged in works",
    causes: [
      "Tripped breaker or blown fuse",
      "Tripped GFCI upstream",
      "Loose wire connection in outlet box",
      "Damaged outlet",
      "Broken wire in wall"
    ],
    necReferences: [
      {
        code: "NEC 406.12",
        title: "Tamper-Resistant Receptacles",
        description: "Receptacles in dwelling units must be tamper-resistant"
      },
      {
        code: "NEC 110.14",
        title: "Electrical Connections",
        description: "All connections must be tight and made in approved manner"
      }
    ],
    photoInstructions: [
      "Photo of the dead outlet",
      "Photo of breaker panel",
      "Photo of nearby outlets (may be on same circuit)",
      "Check for GFCI outlets in area"
    ],
    troubleshootingSteps: [
      "Check breaker panel for tripped breaker",
      "Look for GFCI outlets in kitchen/bathroom/garage - press RESET",
      "Test nearby outlets to find circuit pattern",
      "Use voltage tester or plug-in tester if available",
      "Check if light switches control the outlet"
    ]
  },

  // NEXT 10 COMMON PROBLEMS
  {
    id: 4,
    title: "Flickering Lights",
    category: "Lighting",
    severity: "medium",
    commonality: "common",
    description: "Lights flicker or dim periodically",
    causes: [
      "Loose bulb",
      "Incompatible dimmer switch",
      "Loose wire connection",
      "Voltage fluctuation",
      "Overloaded circuit"
    ],
    necReferences: [
      {
        code: "NEC 404.14",
        title: "Dimmers",
        description: "Dimmer switches must be compatible with connected lighting"
      }
    ],
    photoInstructions: [
      "Photo of affected light fixture",
      "Photo of dimmer or switch controlling lights",
      "Photo of bulb type/wattage"
    ],
    troubleshootingSteps: [
      "Tighten bulb",
      "Try different bulb",
      "Check for loose connections at switch",
      "Note if happens when large appliances turn on"
    ]
  },
  {
    id: 5,
    title: "Buzzing or Humming from Outlet/Switch",
    category: "Outlets & Receptacles",
    severity: "high",
    commonality: "common",
    description: "Audible buzzing sound from electrical device",
    causes: [
      "Loose wiring connection",
      "Faulty dimmer switch",
      "Overloaded circuit",
      "Incompatible bulbs with dimmer",
      "Failing electrical component"
    ],
    necReferences: [
      {
        code: "NEC 110.3(B)",
        title: "Installation and Use",
        description: "Equipment must be used per instructions and listing"
      }
    ],
    photoInstructions: [
      "Photo of device making noise",
      "Photo of connected load",
      "Photo of panel if breaker is buzzing"
    ],
    troubleshootingSteps: [
      "Turn off power at breaker",
      "Check for loose connections",
      "If dimmer, verify compatible bulbs",
      "Replace if faulty"
    ]
  },
  {
    id: 6,
    title: "Hot Outlet or Switch Plate",
    category: "Outlets & Receptacles",
    severity: "critical",
    commonality: "common",
    description: "Outlet, switch plate, or plug feels warm or hot to touch",
    causes: [
      "Overloaded circuit",
      "Loose wire connection causing arcing",
      "Damaged outlet",
      "Undersized wiring",
      "Faulty device plugged in"
    ],
    necReferences: [
      {
        code: "NEC 110.14(C)",
        title: "Temperature Limitations",
        description: "Terminal temperature ratings must be considered in conductor sizing"
      }
    ],
    photoInstructions: [
      "Photo of affected outlet/switch",
      "Photo showing what's plugged in",
      "Photo of breaker rating"
    ],
    troubleshootingSteps: [
      "IMMEDIATELY unplug devices",
      "Turn off breaker if very hot",
      "Do not use until inspected",
      "Call electrician - potential fire hazard"
    ]
  },
  {
    id: 7,
    title: "Burning Smell from Outlet/Panel",
    category: "Circuit Protection",
    severity: "critical",
    commonality: "common",
    description: "Smell of burning plastic or electrical fire",
    causes: [
      "Electrical arcing",
      "Overheated connection",
      "Damaged insulation",
      "Overloaded circuit",
      "Failing breaker or device"
    ],
    necReferences: [
      {
        code: "NEC 110.12",
        title: "Mechanical Execution of Work",
        description: "Electrical equipment must be installed in neat and workmanlike manner"
      }
    ],
    photoInstructions: [
      "Photo of source if safe to approach",
      "Photo of breaker panel",
      "DO NOT touch or investigate if actively smoking"
    ],
    troubleshootingSteps: [
      "IMMEDIATELY turn off main breaker",
      "Call electrician",
      "If smoking, call fire department",
      "Do not reset breaker"
    ]
  },
  {
    id: 8,
    title: "Sparking Outlet",
    category: "Outlets & Receptacles",
    severity: "critical",
    commonality: "common",
    description: "Visible sparks when plugging in devices",
    causes: [
      "Normal brief spark (if minor)",
      "Damaged outlet",
      "Short circuit",
      "Water/moisture in outlet",
      "Loose connections"
    ],
    necReferences: [
      {
        code: "NEC 110.11",
        title: "Deteriorating Agents",
        description: "Equipment must be suitable for environment"
      }
    ],
    photoInstructions: [
      "Photo of outlet (when safe)",
      "Photo of plug that caused sparking",
      "Photo of area around outlet"
    ],
    troubleshootingSteps: [
      "Stop using outlet immediately",
      "Turn off breaker",
      "Inspect outlet for damage",
      "Check for moisture",
      "Replace outlet"
    ]
  },
  {
    id: 9,
    title: "Two-Prong Outlets (Ungrounded)",
    category: "Outlets & Receptacles",
    severity: "medium",
    commonality: "common",
    description: "Old two-prong outlets without ground",
    causes: [
      "Old wiring installation",
      "No equipment grounding conductor",
      "Knob and tube wiring"
    ],
    necReferences: [
      {
        code: "NEC 406.4(D)(2)",
        title: "Replacement Options",
        description: "Non-grounding receptacles can be replaced with GFCI or grounded receptacles where grounds exist"
      }
    ],
    photoInstructions: [
      "Photo of two-prong outlet",
      "Photo of panel showing age",
      "Photo of any visible wiring"
    ],
    troubleshootingSteps: [
      "Verify with tester if ground exists",
      "Replace with GFCI if no ground available",
      "Label 'No Equipment Ground'",
      "Consider rewiring for safety"
    ]
  },
  {
    id: 10,
    title: "Light Switch Not Working",
    category: "Switches",
    severity: "low",
    commonality: "common",
    description: "Light switch doesn't turn light on/off",
    causes: [
      "Burned out bulb",
      "Tripped breaker",
      "Faulty switch",
      "Loose wire connection",
      "Wrong switch (if multiple switches)"
    ],
    necReferences: [
      {
        code: "NEC 404.2",
        title: "Switch Connections",
        description: "Switches must be properly rated for the load"
      }
    ],
    photoInstructions: [
      "Photo of switch",
      "Photo of light fixture",
      "Photo showing if 3-way or single switch"
    ],
    troubleshootingSteps: [
      "Try light bulb in different fixture",
      "Check breaker",
      "Test if other switches work",
      "Check for loose connections"
    ]
  },
  {
    id: 11,
    title: "Reversed Polarity",
    category: "Outlets & Receptacles",
    severity: "high",
    commonality: "common",
    description: "Hot and neutral wires connected backwards",
    causes: [
      "Improper installation",
      "DIY wiring error",
      "Miswired outlet"
    ],
    necReferences: [
      {
        code: "NEC 200.10(B)",
        title: "Polarity of Connections",
        description: "Neutral must connect to silver screw, hot to brass"
      }
    ],
    photoInstructions: [
      "Photo of outlet",
      "Photo of tester showing reversed polarity",
      "Photo inside outlet box if opened"
    ],
    troubleshootingSteps: [
      "Use outlet tester to verify",
      "Turn off breaker",
      "Swap hot and neutral wires",
      "Test again"
    ]
  },
  {
    id: 12,
    title: "AFCI Breaker Nuisance Tripping",
    category: "Circuit Protection",
    severity: "medium",
    commonality: "common",
    description: "Arc Fault breaker trips with no apparent problem",
    causes: [
      "Incompatible devices",
      "Normal arcing from motors",
      "Damaged cord",
      "Loose connection",
      "Defective AFCI"
    ],
    necReferences: [
      {
        code: "NEC 210.12",
        title: "Arc-Fault Circuit-Interrupter Protection",
        description: "AFCI protection required for dwelling unit bedrooms and other areas"
      }
    ],
    photoInstructions: [
      "Photo of AFCI breaker",
      "Photo of devices on circuit",
      "Photo of panel labeling"
    ],
    troubleshootingSteps: [
      "Unplug all devices",
      "Reset breaker",
      "Plug in one device at a time",
      "Replace damaged cords",
      "May need combination AFCI if incompatible"
    ]
  },
  {
    id: 13,
    title: "Aluminum Wiring Issues",
    category: "Wiring",
    severity: "high",
    commonality: "common",
    description: "Problems with aluminum branch circuit wiring",
    causes: [
      "Oxidation at connections",
      "Thermal expansion/contraction",
      "Incompatible devices",
      "Loose connections"
    ],
    necReferences: [
      {
        code: "NEC 110.14",
        title: "Electrical Connections",
        description: "Devices must be rated for aluminum wire (CO/ALR)"
      }
    ],
    photoInstructions: [
      "Photo showing aluminum wire (silver colored)",
      "Photo of outlet/switch connections",
      "Photo of any discoloration"
    ],
    troubleshootingSteps: [
      "Check for CO/ALR rated devices",
      "Look for oxidation (white powder)",
      "Consider pigtailing with copper",
      "Use anti-oxidant compound"
    ]
  }
];

// Additional categories for full index
export const PROBLEM_CATEGORIES = [
  "Circuit Protection",
  "Outlets & Receptacles",
  "Lighting",
  "Switches",
  "Wiring",
  "Panel/Service",
  "GFCI/AFCI",
  "Grounding",
  "Code Violations"
];

export const SEVERITY_LEVELS = {
  critical: { label: "Critical - Immediate Action", color: "red" },
  high: { label: "High Priority", color: "orange" },
  medium: { label: "Medium Priority", color: "yellow" },
  low: { label: "Low Priority", color: "blue" }
};
