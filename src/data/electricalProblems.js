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
  },
    {
    id: 14,
    title: "Overloaded Electrical Panel",
    category: "Circuit Protection",
    severity: "critical",
    commonality: "common",
    description: "Electrical panel has too many circuits or exceeds its rated capacity",
    causes: [
      "Too many breakers added over time",
      "Main panel undersized for home's electrical demand",
      "Subpanel improperly sized",
      "Multiple high-draw appliances added without panel upgrade",
      "Tandem breakers used to circumvent panel limits"
    ],
    necReferences: [
      {
        code: "NEC 408.36",
        title: "Overcurrent Protection",
        description: "Each circuit breaker shall have overcurrent protection"
      },
      {
        code: "NEC 408.54",
        title: "Maximum Number of Overcurrent Devices",
        description: "The maximum number of overcurrent devices permitted in a panelboard shall be in accordance with the panelboard rating"
      },
      {
        code: "NEC 220.40",
        title: "General",
        description: "The calculated load of a feeder or service shall not be less than the sum of the loads on the branch circuits"
      }
    ],
    photoInstructions: [
      "Photo of the main panel with door open showing all breakers",
      "Photo of the panel rating label",
      "Close-up of any tandem breakers",
      "Photo showing panel fill (how many circuits)"
    ],
    troubleshootingSteps: [
      "Check main breaker rating vs. total connected load",
      "Count number of circuits vs. panel rating",
      "Identify any double-tapped breakers",
      "Calculate total amperage demand",
      "Consider panel upgrade or load redistribution"
    ]
  },
  {
    id: 15,
    title: "Double-Tapped Circuit Breaker",
    category: "Circuit Protection",
    severity: "high",
    commonality: "common",
    description: "Two wires connected to a single circuit breaker terminal not rated for double taps",
    causes: [
      "Electrician added circuit without available breaker space",
      "DIY electrical work",
      "Incorrect installation practice",
      "Panel overcrowding",
      "Using non-rated breaker for two circuits"
    ],
    necReferences: [
      {
        code: "NEC 110.14(A)",
        title: "Terminals",
        description: "Connection of conductors to terminal parts shall ensure a thoroughly good connection without damaging the conductors"
      },
      {
        code: "NEC 110.3(B)",
        title: "Installation and Use",
        description: "Listed or labeled equipment shall be installed and used in accordance with any instructions included in the listing or labeling"
      },
      {
        code: "NEC 408.41",
        title: "General",
        description: "Each circuit breaker shall be provided with overcurrent protection in accordance with Article 240"
      }
    ],
    photoInstructions: [
      "Close-up photo of the double-tapped breaker",
      "Photo showing both wires entering the breaker",
      "Photo of the breaker label/model number",
      "Overall panel photo for context"
    ],
    troubleshootingSteps: [
      "Identify which circuits are double-tapped",
      "Check if breaker is rated for two wires (most aren't)",
      "Verify breaker model specifications",
      "Install separate breaker for each circuit",
      "Use listed wire connector if combining is necessary"
    ]
  },
  {
    id: 16,
    title: "Missing GFCI Protection",
    category: "Circuit Protection",
    severity: "critical",
    commonality: "common",
    description: "Outlets in locations requiring GFCI protection are not protected",
    causes: [
      "Older home built before current code requirements",
      "GFCI not installed during remodel",
      "GFCI removed and replaced with standard outlet",
      "Downstream outlet not protected by upstream GFCI",
      "Incomplete electrical work"
    ],
    necReferences: [
      {
        code: "NEC 210.8(A)",
        title: "Dwelling Units",
        description: "GFCI protection required for outlets in bathrooms, garages, outdoors, crawl spaces, basements, kitchens, sinks, boathouses, bathtubs/showers, laundry areas"
      },
      {
        code: "NEC 210.8(B)",
        title: "Other Than Dwelling Units",
        description: "GFCI protection required in commercial bathrooms, kitchens, rooftops, outdoors, sinks, indoor wet locations"
      },
      {
        code: "NEC 406.4(D)(4)",
        title: "Replacements",
        description: "GFCI protection required when replacing receptacles where protection is required by 210.8"
      }
    ],
    photoInstructions: [
      "Photo of unprotected outlet showing location (bathroom, kitchen, etc.)",
      "Photo showing proximity to water source",
      "Photo of outlet face plate",
      "Photo of electrical panel to identify circuit"
    ],
    troubleshootingSteps: [
      "Identify all locations requiring GFCI per NEC 210.8",
      "Test existing outlets to verify protection",
      "Determine if upstream GFCI exists",
      "Install GFCI outlet or breaker",
      "Label protected downstream outlets"
    ]
  },
  {
    id: 17,
    title: "Missing AFCI Protection",
    category: "Circuit Protection",
    severity: "high",
    commonality: "common",
    description: "Branch circuits lack required Arc-Fault Circuit Interrupter protection",
    causes: [
      "Older home predating AFCI requirements",
      "AFCI breaker not installed during renovation",
      "Standard breaker used instead of required AFCI",
      "AFCI breaker replaced with standard breaker",
      "Incomplete code compliance"
    ],
    necReferences: [
      {
        code: "NEC 210.12(A)",
        title: "Dwelling Unit Bedrooms",
        description: "AFCI protection required for outlets in dwelling unit bedrooms"
      },
      {
        code: "NEC 210.12(B)",
        title: "Dwelling Unit Family Rooms, etc.",
        description: "AFCI protection required for 120V, 15A and 20A branch circuits in dwelling units supplying outlets or devices in family rooms, dining rooms, living rooms, parlors, libraries, dens, bedrooms, sunrooms, recreation rooms, closets, hallways, laundry areas, and similar rooms"
      },
      {
        code: "NEC 210.12(D)",
        title: "Branch Circuit Extensions or Modifications",
        description: "AFCI protection required where branch circuit wiring is modified, replaced, or extended"
      }
    ],
    photoInstructions: [
      "Photo of electrical panel showing breaker types",
      "Close-up of breakers serving living areas/bedrooms",
      "Photo of any AFCI breakers currently installed",
      "Photo of panel schedule/labeling"
    ],
    troubleshootingSteps: [
      "Review panel to identify circuits serving living areas",
      "Check which circuits have AFCI vs. standard breakers",
      "Identify rooms/areas served by each circuit",
      "Replace standard breakers with AFCI where required",
      "Test AFCI breakers monthly per manufacturer instructions"
    ]
  },
  {
    id: 18,
    title: "Open Ground (Missing Equipment Ground)",
    category: "Grounding & Bonding",
    severity: "critical",
    commonality: "common",
    description: "Outlet has no equipment grounding conductor, creating shock hazard",
    causes: [
      "Older two-wire electrical system",
      "Ground wire disconnected or broken",
      "Metal conduit not properly bonded",
      "Improper use of two-prong to three-prong adapter",
      "DIY wiring without ground wire"
    ],
    necReferences: [
      {
        code: "NEC 250.130(C)",
        title: "Nongrounding Receptacle Replacement",
        description: "Replacement options for receptacles where grounding means does not exist"
      },
      {
        code: "NEC 406.4(D)(2)",
        title: "Non-Grounding-Type Receptacles",
        description: "Where no equipment grounding conductor exists, replacement receptacles must be of appropriate type"
      },
      {
        code: "NEC 250.148",
        title: "Continuity and Attachment of Equipment Grounding Conductors",
        description: "Equipment grounding conductor shall be continuous without splice except as permitted"
      }
    ],
    photoInstructions: [
      "Photo of the outlet with tester showing open ground",
      "Photo with outlet removed showing wiring",
      "Photo of outlet box to show if metal box is present",
      "Photo showing age/type of wiring (if visible)"
    ],
    troubleshootingSteps: [
      "Use outlet tester to verify open ground",
      "Turn off power and remove outlet cover",
      "Check if ground wire is present but disconnected",
      "Verify if metal box and conduit could provide ground",
      "Install GFCI if ground cannot be provided",
      "Label outlet 'No Equipment Ground' if using GFCI workaround"
    ]
  },
  {
    id: 19,
    title: "Backstabbed Outlet Connections",
    category: "Outlets & Receptacles",
    severity: "high",
    commonality: "common",
    description: "Wires inserted into back of outlet (push-in connections) instead of secured to screw terminals",
    causes: [
      "Quick installation method used",
      "Contractor cutting corners",
      "DIY installation without proper knowledge",
      "Common practice in some areas despite issues",
      "Aluminum wire incompatibility"
    ],
    necReferences: [
      {
        code: "NEC 110.14(A)",
        title: "Terminals",
        description: "Connection of conductors to terminal parts shall ensure a thoroughly good connection without damaging the conductors and shall be made by pressure connectors, solder lugs, or splices"
      },
      {
        code: "NEC 110.3(B)",
        title: "Installation and Use",
        description: "Listed equipment shall be installed and used in accordance with instructions included in the listing"
      },
      {
        code: "NEC 406.4(B)",
        title: "Installation",
        description: "Receptacles shall be installed in accordance with 406.4(A) through (E)"
      }
    ],
    photoInstructions: [
      "Photo of outlet removed showing back-wired connections",
      "Close-up of push-in connection holes on outlet back",
      "Photo showing any signs of overheating or burning",
      "Photo of wire gauge and insulation condition"
    ],
    troubleshootingSteps: [
      "Turn off power to outlet",
      "Remove outlet from box",
      "Identify backstabbed connections",
      "Remove wires from push-in holes",
      "Properly terminate wires using screw terminals",
      "Ensure wires are wrapped clockwise around screws"
    ]
  },
  {
    id: 20,
    title: "Improper Wire Gauge for Circuit",
    category: "Conductors & Cables",
    severity: "critical",
    commonality: "common",
    description: "Wire size is too small for the amperage of the circuit breaker or load",
    causes: [
      "Wrong wire size used during installation",
      "Breaker upgraded without upgrading wire",
      "Long wire runs without accounting for voltage drop",
      "High-amperage appliance added to inadequate circuit",
      "DIY work without proper calculations"
    ],
    necReferences: [
      {
        code: "NEC 310.15(A)(1)",
        title: "General",
        description: "Ampacity of conductors shall not exceed values in Tables 310.15(B)(16) through 310.15(B)(21) as modified by 310.15(B) or (C)"
      },
      {
        code: "NEC 210.19(A)(1)",
        title: "Branch Circuit Conductor Sizing",
        description: "Branch-circuit conductors shall have an ampacity not less than the maximum load to be served"
      },
      {
        code: "NEC 240.4(D)",
        title: "Small Conductors",
        description: "Overcurrent protection for 14 AWG copper shall not exceed 15A, 12 AWG copper shall not exceed 20A, 10 AWG copper shall not exceed 30A"
      }
    ],
    photoInstructions: [
      "Photo of wire gauge marking on cable sheath",
      "Photo of circuit breaker showing amperage rating",
      "Photo of wire entering breaker or outlet",
      "Close-up of any visible overheating or damage"
    ],
    troubleshootingSteps: [
      "Identify breaker amperage rating",
      "Determine wire gauge installed",
      "Verify wire ampacity matches or exceeds breaker rating",
      "Check for signs of overheating",
      "Downgrade breaker or upgrade wire as needed"
    ]
  },
  {
    id: 21,
    title: "Knob and Tube Wiring",
    category: "Conductors & Cables",
    severity: "high",
    commonality: "common",
    description: "Obsolete knob and tube wiring still in use, creating safety and insurance issues",
    causes: [
      "Original wiring in homes built before 1940s",
      "Wiring never upgraded during renovations",
      "Hidden behind walls in older homes",
      "Insulation buried K&T wiring",
      "Cost of complete rewiring deferred"
    ],
    necReferences: [
      {
        code: "NEC 394.10",
        title: "Uses Permitted",
        description: "Knob-and-tube wiring permitted only for extensions of existing installations and elsewhere by special permission"
      },
      {
        code: "NEC 394.12",
        title: "Uses Not Permitted",
        description: "Knob-and-tube wiring not permitted in commercial garages, theaters, motion picture studios, hazardous locations, or concealed spaces with thermal insulation"
      },
      {
        code: "NEC 310.15(A)(3)",
        title: "Temperature Limitation",
        description: "Conductors shall not be used where operating temperature exceeds rating"
      }
    ],
    photoInstructions: [
      "Photo of visible knob and tube wiring in attic/basement",
      "Close-up of ceramic knobs and tubes",
      "Photo of wire insulation condition",
      "Photo showing any contact with insulation",
      "Photo of main panel connections if accessible"
    ],
    troubleshootingSteps: [
      "Identify extent of knob and tube wiring in home",
      "Check for insulation contact (major fire hazard)",
      "Inspect wire insulation for deterioration",
      "Document for insurance purposes",
      "Plan for complete rewiring or GFCI protection",
      "Advise homeowner of insurance implications"
    ]
  },
  {
    id: 22,
    title: "Federal Pacific or Zinsco Panel",
    category: "Circuit Protection",
    severity: "critical",
    commonality: "common",
    description: "Electrical panel is FPE Stab-Lok or Zinsco brand known for fire hazards",
    causes: [
      "Panel installed in 1950s-1980s before issues were widely known",
      "Breakers fail to trip during overload",
      "Manufacturing defects in breaker design",
      "Age-related deterioration",
      "Never replaced despite known hazards"
    ],
    necReferences: [
      {
        code: "NEC 110.3(B)",
        title: "Installation and Use",
        description: "Listed equipment shall be installed and used in accordance with instructions and intended purpose"
      },
      {
        code: "NEC 408.36",
        title: "Overcurrent Protection",
        description: "Each circuit breaker shall have overcurrent protection"
      },
      {
        code: "NEC 110.9",
        title: "Interrupting Rating",
        description: "Equipment intended to interrupt current at fault levels shall have interrupting rating sufficient for system voltage and available fault current"
      }
    ],
    photoInstructions: [
      "Photo of panel exterior showing brand name",
      "Photo of panel interior showing breakers",
      "Close-up of breaker labels (FPE Stab-Lok or Zinsco)",
      "Photo of panel rating label/nameplate",
      "Photo showing any signs of overheating or damage"
    ],
    troubleshootingSteps: [
      "Identify panel manufacturer from label",
      "Document panel age and condition",
      "Check for signs of overheating or breaker failure",
      "Test breakers if safe to do so",
      "Recommend immediate panel replacement",
      "Obtain multiple quotes for panel upgrade"
    ]
  },
  {
    id: 23,
    title: "Exposed Junction Box or Missing Cover",
    category: "Boxes & Enclosures",
    severity: "high",
    commonality: "common",
    description: "Junction box has no cover plate or is left exposed creating shock hazard",
    causes: [
      "Cover removed during work and never replaced",
      "DIY work left incomplete",
      "Cover lost or damaged",
      "Box added without installing cover",
      "Wall/ceiling finished around open box"
    ],
    necReferences: [
      {
        code: "NEC 314.25",
        title: "Covers and Canopies",
        description: "In completed installations, each box shall have a cover, faceplate, lampholder, or luminaire canopy"
      },
      {
        code: "NEC 314.29",
        title: "Boxes, Conduit Bodies, and Handhole Enclosures to Be Accessible",
        description: "Boxes shall be installed so that wiring contained in them can be accessed without removing permanent finish"
      },
      {
        code: "NEC 110.12(A)",
        title: "Unused Openings",
        description: "Unused openings shall be effectively closed to afford protection substantially equivalent to wall of equipment"
      }
    ],
    photoInstructions: [
      "Photo of exposed junction box",
      "Close-up showing open wiring/connections",
      "Photo showing box location (wall, ceiling, attic)",
      "Photo of surrounding area for context"
    ],
    troubleshootingSteps: [
      "Turn off power to junction box",
      "Verify all connections are secure",
      "Install appropriate cover plate",
      "Ensure box is properly mounted",
      "Verify box remains accessible"
    ]
  },
  {
    id: 24,
    title: "Extension Cord as Permanent Wiring",
    category: "Conductors & Cables",
    severity: "high",
    commonality: "common",
    description: "Extension cord used as permanent electrical solution instead of proper wiring",
    causes: [
      "Temporary solution became permanent",
      "Avoiding cost of proper installation",
      "Lack of available outlets",
      "DIY work without electrical knowledge",
      "Convenience over safety"
    ],
    necReferences: [
      {
        code: "NEC 400.12",
        title: "Uses Not Permitted",
        description: "Flexible cords and cables shall not be used: as substitute for fixed wiring, run through holes in walls/ceilings/floors, run through doorways/windows, concealed behind walls/ceilings/floors, or installed in raceways"
      },
      {
        code: "NEC 400.8(1)",
        title: "Uses Permitted",
        description: "Flexible cords permitted for pendants, wiring of luminaires, connection of portable equipment, or temporary wiring"
      },
      {
        code: "NEC 590.4",
        title: "Temporary Wiring",
        description: "Temporary wiring methods shall meet requirements for permanent wiring unless otherwise specified"
      }
    ],
    photoInstructions: [
      "Photo of extension cord in permanent use",
      "Photo showing how cord is routed (through walls, under carpet, etc.)",
      "Photo of what device/appliance is being powered",
      "Photo showing multiple cords or daisy-chaining if present"
    ],
    troubleshootingSteps: [
      "Identify all extension cords used as permanent wiring",
      "Determine load requirements",
      "Plan proper outlet installation",
      "Install dedicated circuit if needed",
      "Remove extension cords after proper wiring installed"
    ]
  },
  {
    id: 25,
    title: "Wet Location Code Violations",
    category: "Outlets & Receptacles",
    severity: "critical",
    commonality: "common",
    description: "Outdoor or wet location outlets lack proper protection, covers, or GFCI",
    causes: [
      "Non-weather-resistant outlet installed outdoors",
      "Missing or damaged in-use cover",
      "No GFCI protection",
      "Indoor-rated box used in wet location",
      "Improper sealing against moisture"
    ],
    necReferences: [
      {
        code: "NEC 406.9(A)",
        title: "Wet Locations",
        description: "Receptacle outlet in a wet location shall be in weatherproof enclosure whether or not attachment plug is inserted"
      },
      {
        code: "NEC 406.9(B)(1)",
        title: "Damp Locations - 15A and 20A Receptacles",
        description: "Receptacle in damp location shall have enclosure that is weatherproof when receptacle is covered"
      },
      {
        code: "NEC 210.8(A)(3)",
        title: "GFCI Protection - Outdoors",
        description: "All 125V 15A and 20A receptacles installed outdoors require GFCI protection"
      }
    ],
    photoInstructions: [
      "Photo of outdoor outlet and cover type",
      "Close-up showing weather protection",
      "Photo with cover open showing outlet and gasket",
      "Photo showing mounting and sealing",
      "Photo of any visible moisture intrusion"
    ],
    troubleshootingSteps: [
      "Verify GFCI protection is present",
      "Check if outlet is weather-resistant (WR) rated",
      "Inspect cover for damage or poor fit",
      "Test gasket seal",
      "Replace with proper in-use weatherproof cover",
      "Seal any gaps in mounting"
    ]
  },
  {
    id: 26,
    title: "Ceiling Fan Installation Issues",
    category: "Lighting & Fans",
    severity: "medium",
    commonality: "common",
    description: "Ceiling fan vibrates, makes noise, or is improperly supported",
    causes: [
      "Fan not mounted to fan-rated box",
      "Improper balance or bent blades",
      "Loose mounting hardware",
      "Wrong size downrod for ceiling height",
      "Electrical box not properly secured"
    ],
    necReferences: [
      {
        code: "NEC 314.27(C)",
        title: "Ceiling-Suspended Fans",
        description: "Outlet boxes or fittings supporting ceiling-suspended fans shall be listed for sole support of fan and marked by manufacturer as suitable for this purpose"
      },
      {
        code: "NEC 422.18",
        title: "Support of Ceiling-Suspended Fans",
        description: "Ceiling-suspended fans shall be supported independently of outlet box or supported by listed outlet box marked suitable for the purpose"
      },
      {
        code: "NEC 110.3(B)",
        title: "Installation and Use",
        description: "Listed equipment shall be installed in accordance with listing instructions"
      }
    ],
    photoInstructions: [
      "Photo of ceiling fan mounting canopy",
      "Photo of electrical box (if visible)",
      "Photo showing ceiling type and fan installation",
      "Photo of any visible damage or loose parts",
      "Video of fan operation showing vibration"
    ],
    troubleshootingSteps: [
      "Turn off power and check box mounting",
      "Verify box is fan-rated (should be marked)",
      "Check all mounting screws are tight",
      "Inspect blades for damage or warping",
      "Balance fan if necessary",
      "Install fan-rated brace if needed"
    ]
  },
  {
    id: 27,
    title: "Dimming Lights When Appliances Run",
    category: "Lighting & Circuits",
    severity: "medium",
    commonality: "common",
    description: "Lights dim noticeably when high-draw appliances like AC, microwave, or motor start",
    causes: [
      "Undersized service entrance",
      "Voltage drop in long wire runs",
      "Loose connection at panel or meter",
      "Utility service issue",
      "High-resistance connection",
      "Undersized branch circuit"
    ],
    necReferences: [
      {
        code: "NEC 210.19(A)(1)",
        title: "Branch Circuit Voltage Drop",
        description: "Branch-circuit conductors shall have ampacity not less than maximum load; voltage drop should not exceed 3% for best efficiency"
      },
      {
        code: "NEC 215.2(A)(1)",
        title: "Feeder Voltage Drop",
        description: "Feeder conductors for dwelling units need not be larger than service-entrance conductors"
      },
      {
        code: "NEC 110.14(A)",
        title: "Terminals",
        description: "Connection of conductors shall ensure thoroughly good connection"
      }
    ],
    photoInstructions: [
      "Photo of main service panel and size",
      "Photo of affected lights when dimming occurs",
      "Photo of appliance causing dimming",
      "Photo of meter and service entrance",
      "Photo of any visible loose connections"
    ],
    troubleshootingSteps: [
      "Identify which appliances cause dimming",
      "Check main service size (100A, 150A, 200A, etc.)",
      "Measure voltage at panel during event",
      "Inspect all connections for tightness",
      "Check utility connection at weatherhead",
      "Consider service upgrade if undersized"
    ]
  },
  {
    id: 28,
    title: "Frequent Light Bulb Burnout",
    category: "Lighting & Fixtures",
    severity: "low",
    commonality: "common",
    description: "Light bulbs burn out much more frequently than expected lifespan",
    causes: [
      "Loose connection in socket",
      "Excessive vibration",
      "High voltage from utility",
      "Poor quality bulbs",
      "Incompatible dimmer with LED/CFL",
      "Overheating in enclosed fixture",
      "Power surges"
    ],
    necReferences: [
      {
        code: "NEC 410.115",
        title: "Exposure to Physical Damage",
        description: "Luminaires shall be protected where exposed to physical damage"
      },
      {
        code: "NEC 410.116(A)",
        title: "Combustible Material",
        description: "Luminaires shall be constructed so that adjacent combustible material will not be subject to temperatures above 90°C"
      },
      {
        code: "NEC 410.10(A)",
        title: "General",
        description: "Luminaires and lampholders shall be securely supported"
      }
    ],
    photoInstructions: [
      "Photo of affected light fixture",
      "Photo of bulb type and wattage",
      "Photo of fixture rating label",
      "Photo showing if fixture is enclosed",
      "Photo of dimmer if applicable"
    ],
    troubleshootingSteps: [
      "Check voltage at fixture (should be ~120V)",
      "Tighten bulb and inspect socket",
      "Verify bulb wattage doesn't exceed fixture rating",
      "Check if fixture gets too hot",
      "Install surge protector if power surges suspected",
      "Use appropriate bulb type for dimmer"
    ]
  },
  {
    id: 29,
    title: "Smoke Detector Issues",
    category: "Safety Devices",
    severity: "critical",
    commonality: "common",
    description: "Smoke detector chirping, not working, or failing to respond to test",
    causes: [
      "Dead or weak battery",
      "Unit expired (over 10 years old)",
      "Dust/dirt accumulation in sensor",
      "Wrong type for location",
      "Not interconnected as required",
      "Hardwired unit with no battery backup"
    ],
    necReferences: [
      {
        code: "NEC 760.41",
        title: "Power Supply",
        description: "Fire alarm systems shall have reliable power supply"
      },
      {
        code: "NEC 760.121",
        title: "Power Sources",
        description: "Power-limited fire alarm circuits shall be supplied from source that complies with 760.121(A) or (B)"
      },
      {
        code: "NFPA 72",
        title: "National Fire Alarm Code",
        description: "Smoke alarms required in every sleeping room, outside each sleeping area, and on every level including basement"
      }
    ],
    photoInstructions: [
      "Photo of smoke detector showing brand/model",
      "Photo of manufacture date on detector",
      "Photo showing detector location",
      "Photo of interconnecting wire (if hardwired)",
      "Photo showing number and placement of detectors"
    ],
    troubleshootingSteps: [
      "Replace battery in battery-operated units",
      "Check manufacture date - replace if over 10 years old",
      "Test detector using test button",
      "Vacuum detector to remove dust",
      "Verify proper placement per code",
      "Ensure interconnection between units works"
    ]
  },
  {
    id: 30,
    title: "Doorbell Not Working",
    category: "Low Voltage Systems",
    severity: "low",
    commonality: "common",
    description: "Doorbell chime doesn't sound when button is pressed",
    causes: [
      "Failed transformer",
      "Broken wire connection",
      "Faulty doorbell button",
      "Bad chime unit",
      "Tripped breaker for transformer",
      "Loose wire at button or chime"
    ],
    necReferences: [
      {
        code: "NEC 725.121(A)",
        title: "Power Sources",
        description: "Power source for Class 2 circuit shall be listed Class 2 transformer or power supply"
      },
      {
        code: "NEC 725.136(A)",
        title: "Installation",
        description: "Class 2 cables shall be installed in accordance with Article 725"
      },
      {
        code: "NEC 725.24",
        title: "Mechanical Execution of Work",
        description: "Class 2 circuits shall be installed in neat and workmanlike manner"
      }
    ],
    photoInstructions: [
      "Photo of doorbell button",
      "Photo of doorbell chime unit",
      "Photo of transformer (usually at panel)",
      "Photo showing wire routing if visible"
    ],
    troubleshootingSteps: [
      "Test voltage at transformer (should be 16-24V)",
      "Check if breaker for transformer is on",
      "Test button by jumping wires together",
      "Inspect wire connections at all points",
      "Test chime by applying voltage directly",
      "Replace faulty component (transformer, button, or chime)"
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
  "Code Violations",
  "Boxes & Enclosures",
  "Conductors & Cables",
  "Safety Devices",
  "Low Voltage Systems"
];

export const SEVERITY_LEVELS = {
  critical: { label: "Critical - Immediate Action", color: "red" },
  high: { label: "High Priority", color: "orange" },
  medium: { label: "Medium Priority", color: "yellow" },
  low: { label: "Low Priority", color: "blue" }
};