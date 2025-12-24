// NEC 2023 Code Reference Database
// Organized by Article for easy lookup

export const NEC_CODES = [
  // ARTICLE 110 - Requirements for Electrical Installations
  {
    code: "110.3(B)",
    article: "110",
    title: "Installation and Use",
    category: "General Requirements",
    description: "Listed or labeled equipment shall be installed and used in accordance with any instructions included in the listing or labeling.",
    keywords: ["installation", "listed equipment", "labeled", "instructions", "manufacturer"],
    relatedCodes: ["110.2", "110.12"]
  },
  {
    code: "110.11",
    article: "110",
    title: "Deteriorating Agents",
    category: "General Requirements",
    description: "Unless identified for use in the operating environment, no conductors or equipment shall be located in damp or wet locations; where exposed to gases, fumes, vapors, liquids, or other agents that have a deteriorating effect on the conductors or equipment; or where exposed to excessive temperatures.",
    keywords: ["wet location", "damp location", "environment", "corrosion", "deterioration"],
    relatedCodes: ["110.28", "300.6"]
  },
  {
    code: "110.12",
    article: "110",
    title: "Mechanical Execution of Work",
    category: "General Requirements",
    description: "Electrical equipment shall be installed in a neat and workmanlike manner. Unused openings other than those intended for the operation of equipment, those intended for mounting purposes, or those permitted as part of the design for listed equipment shall be closed to afford protection substantially equivalent to the wall of the equipment.",
    keywords: ["workmanlike", "neat", "unused openings", "installation quality"],
    relatedCodes: ["110.3", "314.17"]
  },
  {
    code: "110.14",
    article: "110",
    title: "Electrical Connections",
    category: "General Requirements",
    description: "All connections of conductors to terminals shall be made by approved methods. Connection by means of wire-binding screws or studs and nuts that have upturned lugs or equivalent shall be such that removal of the screw or nut does not release the conductor from the connector.",
    keywords: ["connections", "terminals", "wire nuts", "splices", "terminations"],
    relatedCodes: ["110.14(C)", "110.3(B)"]
  },
  {
    code: "110.14(C)",
    article: "110",
    title: "Temperature Limitations",
    category: "General Requirements",
    description: "The temperature rating associated with the ampacity of a conductor shall be selected and coordinated so as not to exceed the lowest temperature rating of any connected termination, conductor, or device.",
    keywords: ["temperature rating", "ampacity", "termination temperature", "75°C", "90°C"],
    relatedCodes: ["110.14", "310.15"]
  },

  // ARTICLE 200 - Use and Identification of Grounded Conductors
  {
    code: "200.6",
    article: "200",
    title: "Means of Identifying Grounded Conductors",
    category: "Grounded Conductors",
    description: "An insulated grounded conductor of 6 AWG or smaller shall be identified by one of the following means: (A) A continuous white outer finish, (B) A continuous gray outer finish, (C) Three continuous white or gray stripes along the conductor's entire length on other than green insulation.",
    keywords: ["neutral", "grounded conductor", "white wire", "gray wire", "identification"],
    relatedCodes: ["200.7", "250.119"]
  },
  {
    code: "200.10(B)",
    article: "200",
    title: "Polarity of Connections",
    category: "Grounded Conductors",
    description: "No grounded conductor shall be attached to any terminal or lead so as to reverse designated polarity.",
    keywords: ["polarity", "neutral connection", "reversed polarity", "terminal connection"],
    relatedCodes: ["200.11", "406.9"]
  },

  // ARTICLE 210 - Branch Circuits
  {
    code: "210.8",
    article: "210",
    title: "Ground-Fault Circuit-Interrupter Protection for Personnel",
    category: "Branch Circuits",
    description: "Ground-fault circuit-interrupter protection for personnel shall be provided as required in 210.8(A) through (F). The GFCI device shall be installed in a readily accessible location.",
    keywords: ["GFCI", "ground fault", "personnel protection", "bathroom", "kitchen", "outdoor"],
    relatedCodes: ["210.8(A)", "210.8(B)", "406.4(D)"]
  },
  {
    code: "210.8(A)",
    article: "210",
    title: "Dwelling Units - GFCI Requirements",
    category: "Branch Circuits",
    description: "All 125-volt through 250-volt receptacles installed in dwelling unit locations specified in (1) through (11) shall have GFCI protection: bathrooms, garages, outdoors, crawl spaces, unfinished basements, kitchens, sinks, laundry areas, boathouses, bathtubs/shower stalls, and indoor damp locations.",
    keywords: ["dwelling", "GFCI", "bathroom", "kitchen", "garage", "outdoor", "basement"],
    relatedCodes: ["210.8", "210.52", "406.4"]
  },
  {
    code: "210.11(C)(3)",
    article: "210",
    title: "Bathroom Branch Circuits",
    category: "Branch Circuits",
    description: "In addition to the number of branch circuits required by other parts of this section, at least one 20-ampere branch circuit shall be provided to supply bathroom receptacle outlet(s) and shall not supply other outlets.",
    keywords: ["bathroom circuit", "20 amp", "dedicated circuit", "receptacles"],
    relatedCodes: ["210.52(D)", "210.8(A)"]
  },
  {
    code: "210.12",
    article: "210",
    title: "Arc-Fault Circuit-Interrupter Protection",
    category: "Branch Circuits",
    description: "All 120-volt, single-phase, 15- and 20-ampere branch circuits supplying outlets or devices installed in dwelling unit locations specified in 210.12(A) through (D) shall be protected by any of the means described in 210.12(A)(1) through (A)(6).",
    keywords: ["AFCI", "arc fault", "dwelling", "bedroom", "branch circuit protection"],
    relatedCodes: ["210.12(A)", "210.8"]
  },
  {
    code: "210.19(A)",
    article: "210",
    title: "Conductor Sizing - Minimum Ampacity",
    category: "Branch Circuits",
    description: "Branch-circuit conductors shall have an ampacity not less than the maximum load to be served. Conductors for branch circuits as defined in Article 100, sized to prevent a voltage drop exceeding 3 percent at the farthest outlet of power, heating, and lighting loads, or combinations of such loads, and where the maximum total voltage drop on both feeders and branch circuits to the farthest outlet does not exceed 5 percent, provide reasonable efficiency of operation.",
    keywords: ["conductor sizing", "ampacity", "wire size", "voltage drop"],
    relatedCodes: ["210.20", "215.2", "310.15"]
  },
  {
    code: "210.20(A)",
    article: "210",
    title: "Overcurrent Protection - Continuous and Noncontinuous Loads",
    category: "Branch Circuits",
    description: "Where a branch circuit supplies continuous loads or any combination of continuous and noncontinuous loads, the rating of the overcurrent device shall not be less than the noncontinuous load plus 125 percent of the continuous load.",
    keywords: ["overcurrent protection", "breaker sizing", "continuous load", "125%"],
    relatedCodes: ["210.19", "215.3"]
  },
  {
    code: "210.52",
    article: "210",
    title: "Dwelling Unit Receptacle Outlets",
    category: "Branch Circuits",
    description: "This section provides requirements for the minimum number of receptacle outlets and placement in dwelling units. Receptacles shall be installed in accordance with 210.52(A) through (H).",
    keywords: ["receptacle spacing", "outlet placement", "dwelling", "6 feet", "12 feet"],
    relatedCodes: ["210.52(A)", "210.70"]
  },
  {
    code: "210.52(A)(1)",
    article: "210",
    title: "General Receptacle Spacing",
    category: "Branch Circuits",
    description: "Receptacles shall be installed such that no point measured horizontally along the floor line of any wall space is more than 1.8 m (6 ft) from a receptacle outlet.",
    keywords: ["6 foot rule", "receptacle spacing", "wall outlets"],
    relatedCodes: ["210.52", "210.60"]
  },
  {
    code: "210.52(C)",
    article: "210",
    title: "Countertop Receptacles",
    category: "Branch Circuits",
    description: "In kitchens, pantries, breakfast rooms, dining rooms, or similar areas of dwelling units, receptacle outlets for countertop spaces shall be installed in accordance with (1) through (5). Receptacles shall be installed so that no point along the wall line is more than 600 mm (24 in.) measured horizontally from a receptacle outlet in that space.",
    keywords: ["kitchen", "countertop", "receptacles", "24 inches", "GFCI"],
    relatedCodes: ["210.8(A)", "406.5(E)"]
  },
  {
    code: "210.70",
    article: "210",
    title: "Lighting Outlets Required",
    category: "Branch Circuits",
    description: "Lighting outlets shall be installed where specified in 210.70(A), (B), and (C). At least one wall switch-controlled lighting outlet shall be installed in every habitable room, bathroom, and hallway.",
    keywords: ["lighting outlet", "switch controlled", "habitable room", "required lighting"],
    relatedCodes: ["210.52", "404.2"]
  },
  {
    code: "210.4(A)",
    article: "210",
    title: "Multiwire Branch Circuits - General",
    category: "Branch Circuits",
    description: "Branch circuits recognized by this article shall be permitted as multiwire circuits. Defines acceptable multiwire branch circuit configurations. Understanding multiwire circuits is critical for proper installation.",
    keywords: ["multiwire", "branch circuit", "shared neutral", "circuit configuration"],
    relatedCodes: ["210.4(B)", "210.4(C)", "300.13"]
  },
  {
    code: "210.4(D)",
    article: "210",
    title: "Multiwire Branch Circuits - Grouping",
    category: "Branch Circuits",
    description: "Each multiwire branch circuit shall be provided with a means that will simultaneously disconnect all ungrounded conductors at the point where the branch circuit originates. Multiwire circuits need simultaneous disconnect to prevent dangerous situations when neutral becomes disconnected under load.",
    keywords: ["multiwire", "simultaneous disconnect", "handle tie", "two-pole breaker", "grouping"],
    relatedCodes: ["210.4(B)", "404.2(B)", "422.31"]
  },
  {
    code: "210.5(C)",
    article: "210",
    title: "Identification for Branch Circuits",
    category: "Branch Circuits",
    description: "Where more than one nominal voltage system exists, each ungrounded conductor shall be identified by phase and system at all termination points. Multiple voltage systems require phase and system identification to prevent accidental connection of different voltage systems.",
    keywords: ["identification", "phase", "voltage system", "conductor marking", "labeling"],
    relatedCodes: ["210.5(A)", "200.6", "215.12"]
  },
  {
    code: "210.8(B)",
    article: "210",
    title: "GFCI Protection - Other Than Dwelling Units",
    category: "Branch Circuits",
    description: "GFCI protection required for commercial bathrooms, kitchens, rooftops, outdoors, sinks, indoor wet locations. Commercial buildings have similar but different GFCI requirements to provide worker and public protection.",
    keywords: ["GFCI", "commercial", "bathroom", "rooftop", "wet location", "sink"],
    relatedCodes: ["210.8(A)", "215.9", "590.6"]
  },
  {
    code: "210.11(C)(1)",
    article: "210",
    title: "Branch Circuits Required - Bathroom",
    category: "Branch Circuits",
    description: "At least one 120-volt, 20-ampere branch circuit shall be provided to supply bathroom receptacle outlets. Bathrooms require dedicated 20A circuit for receptacles to handle high loads from hair dryers and appliances.",
    keywords: ["bathroom circuit", "20 ampere", "dedicated circuit", "receptacle outlets"],
    relatedCodes: ["210.52(D)", "210.23(A)", "210.8(A)"]
  },
  {
    code: "210.12(A)",
    article: "210",
    title: "Arc-Fault Circuit-Interrupter Protection",
    category: "Branch Circuits",
    description: "All 120-volt, single-phase, 15- and 20-ampere branch circuits supplying outlets in dwelling unit bedrooms, living rooms, family rooms and similar rooms require AFCI protection. Most dwelling unit rooms require AFCI to prevent fires by detecting dangerous arcing conditions.",
    keywords: ["AFCI", "arc fault", "bedroom", "living room", "fire prevention"],
    relatedCodes: ["210.12(B)", "210.12(C)", "210.12(D)"]
  },
  {
    code: "210.21(B)",
    article: "210",
    title: "Outlet Devices - Total Load",
    category: "Branch Circuits",
    description: "Where connected to branch circuit supplying two or more receptacles, a receptacle shall not supply total cord-and-plug load exceeding maximum in Table 210.21(B)(2). Receptacle rating must match circuit capacity and load to prevent overloading.",
    keywords: ["receptacle rating", "total load", "outlet devices", "cord and plug"],
    relatedCodes: ["210.23", "240.5", "Table 210.21(B)(2)"]
  },
  {
    code: "210.23(A)(1)",
    article: "210",
    title: "Permissible Loads - 15/20A Circuits",
    category: "Branch Circuits",
    description: "15A and 20A circuits can serve lighting and receptacles, with cord-and-plug equipment not exceeding 80% of circuit rating. Defines load limits for standard branch circuits to prevent overloading.",
    keywords: ["15 ampere", "20 ampere", "80%", "permissible loads", "circuit loading"],
    relatedCodes: ["210.19", "210.20", "210.21"]
  },
  {
    code: "210.25(B)",
    article: "210",
    title: "Branch Circuits in Multiple Occupancy",
    category: "Branch Circuits",
    description: "Branch circuits shall not supply loads in more than one dwelling unit. Each apartment needs separate branch circuits - critical for tenant privacy and service disconnection.",
    keywords: ["multiple occupancy", "apartment", "dwelling unit", "tenant", "multifamily"],
    relatedCodes: ["210.25(A)", "230.40", "230.67"]
  },
  {
    code: "210.50(C)",
    article: "210",
    title: "General Provisions - Cord Pendants",
    category: "Branch Circuits",
    description: "Cord pendants shall not be used as substitute for fixed lighting. Hanging cords with lightbulbs don't count as required lighting - temporary solutions become permanent violations.",
    keywords: ["cord pendant", "fixed lighting", "temporary lighting", "extension cord lighting"],
    relatedCodes: ["210.70", "314.27", "410.62"]
  },
  {
    code: "210.60(A)",
    article: "210",
    title: "Guest Rooms and Guest Suites",
    category: "Branch Circuits",
    description: "Guest rooms shall have receptacle outlets per 210.52(A) and 210.52(D). Hotel rooms must follow specific outlet requirements to provide adequate power for guest needs.",
    keywords: ["guest room", "hotel", "motel", "hospitality", "receptacle requirements"],
    relatedCodes: ["210.8(B)", "406.13", "210.70"]
  },
  {
    code: "210.62",
    article: "210",
    title: "Show Windows",
    category: "Branch Circuits",
    description: "At least one receptacle outlet within 18 inches of top of show window for each 12 linear feet. Show windows need outlets for display lighting to eliminate extension cord use in displays.",
    keywords: ["show window", "display", "18 inches", "12 feet", "retail"],
    relatedCodes: ["210.63", "314.27", "410.16"]
  },
  {
    code: "210.63",
    article: "210",
    title: "HVAC Equipment Outlet",
    category: "Branch Circuits",
    description: "A 125-volt, 15- or 20-ampere receptacle outlet shall be installed at accessible location for servicing HVAC equipment. HVAC units need dedicated service receptacle within 25 feet to allow technicians to service without extension cords.",
    keywords: ["HVAC", "service receptacle", "25 feet", "accessible", "equipment outlet"],
    relatedCodes: ["210.8", "210.50", "440.14"]
  },
  {
    code: "210.70(A)(1)",
    article: "210",
    title: "Lighting Outlets Required",
    category: "Branch Circuits",
    description: "At least one wall switch-controlled lighting outlet required in habitable rooms, bathrooms, hallways, stairways, garages, outdoor entrances. Most interior spaces need switched lighting as safety requirement for illumination.",
    keywords: ["lighting outlet", "switch controlled", "habitable room", "required lighting", "safety"],
    relatedCodes: ["210.70(A)(2)", "404.2", "410.16"]
  },
  // ARTICLE 240 - Overcurrent Protection
  {
    code: "240.4(B)",
    article: "240",
    title: "Protection of Conductors - Devices Rated 800 Amperes or Less",
    category: "Overcurrent Protection",
    description: "Conductors shall be protected against overcurrent in accordance with their ampacities as specified in 310.15, unless otherwise permitted or required in 240.4(E) through (G). Overcurrent devices must protect conductors based on ampacity.",
    keywords: ["conductor protection", "ampacity", "overcurrent", "wire protection", "breaker sizing"],
    relatedCodes: ["240.4(D)", "310.15", "Table 310.16"]
  },
  {
    code: "240.4(D)",
    article: "240",
    title: "Small Conductors",
    category: "Overcurrent Protection",
    description: "14 AWG copper: 15A max, 12 AWG copper: 20A max, 10 AWG copper: 30A max (unless otherwise permitted). Wire size must match breaker size - can't put 20A breaker on 14 gauge wire.",
    keywords: ["wire sizing", "14 AWG", "12 AWG", "10 AWG", "small conductors", "breaker matching"],
    relatedCodes: ["240.4(B)", "310.15", "Table 310.16"]
  },
  {
    code: "240.6(A)",
    article: "240",
    title: "Standard Ampere Ratings",
    category: "Overcurrent Protection",
    description: "Standard ampere ratings for fuses and inverse time circuit breakers: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800. Lists standard commercially available breaker and fuse sizes.",
    keywords: ["standard ratings", "breaker sizes", "fuse ratings", "ampere ratings"],
    relatedCodes: ["240.4", "240.83", "110.9"]
  },
  {
    code: "240.20(A)",
    article: "240",
    title: "Location in Circuit - Ungrounded Conductor",
    category: "Overcurrent Protection",
    description: "An overcurrent device shall be connected in series with each ungrounded conductor. Breakers must protect the hot (ungrounded) conductors.",
    keywords: ["ungrounded conductor", "hot wire", "overcurrent location", "circuit protection"],
    relatedCodes: ["240.15", "240.21", "230.90"]
  },
  {
    code: "240.21(B)",
    article: "240",
    title: "Feeder Taps",
    category: "Overcurrent Protection",
    description: "Conductors shall be permitted to be tapped, without overcurrent protection at the tap, to a feeder where all specified conditions are met. Allows feeder taps under specific length and size conditions.",
    keywords: ["feeder taps", "tap rules", "tap conductors", "feeder protection"],
    relatedCodes: ["240.21(B)(1)", "240.21(B)(2)", "240.21(B)(5)"]
  },
  {
    code: "240.22",
    article: "240",
    title: "Grounded Conductor",
    category: "Overcurrent Protection",
    description: "No overcurrent device shall be connected in series with any conductor that is intentionally grounded unless one of specific exceptions applies. Don't put breakers or fuses on neutral wires - opening a neutral under load is dangerous and causes overvoltage.",
    keywords: ["neutral protection", "grounded conductor", "neutral wire", "no breaker on neutral"],
    relatedCodes: ["240.20", "250.24(B)", "300.13"]
  },
  {
    code: "240.24(A)",
    article: "240",
    title: "Location of Overcurrent Devices - Accessibility",
    category: "Overcurrent Protection",
    description: "Overcurrent devices shall be readily accessible and shall be installed so the center of the grip of the operating handle is not more than 6 feet 7 inches above the floor. Breaker handle must be reachable.",
    keywords: ["accessibility", "panel height", "readily accessible", "6 feet 7 inches"],
    relatedCodes: ["240.24(B)", "110.26", "240.24(D)"]
  },
  {
    code: "240.24(B)",
    article: "240",
    title: "Occupancy - Not in Bathrooms",
    category: "Overcurrent Protection",
    description: "In dwelling units, dormitories, and guest rooms, overcurrent devices shall not be located in bathrooms. No panels or disconnects in bathrooms of dwelling units - prevents operation of electrical equipment in wet locations.",
    keywords: ["bathroom", "panel location", "dwelling unit", "wet location"],
    relatedCodes: ["240.24(A)", "240.24(E)", "110.26"]
  },
  {
    code: "240.24(D)",
    article: "240",
    title: "Not Located Near Easily Ignitible Material",
    category: "Overcurrent Protection",
    description: "Overcurrent devices shall not be located in the vicinity of easily ignitible material such as in clothes closets. No electrical panels in clothes closets or near combustibles - prevents arc flash from igniting combustible materials.",
    keywords: ["fire hazard", "closet", "combustible", "easily ignitible", "panel location"],
    relatedCodes: ["240.24(A)", "110.26(E)", "240.32"]
  },
  {
    code: "240.32(A)",
    article: "240",
    title: "Damp or Wet Locations - Fuses",
    category: "Overcurrent Protection",
    description: "Enclosures for fuses in damp or wet locations shall be identified for use in those locations. Fuse enclosures must be rated for damp/wet locations to prevent water entry and corrosion.",
    keywords: ["wet location", "damp location", "fuse enclosure", "weatherproof"],
    relatedCodes: ["240.32(B)", "312.2", "110.11"]
  },
  {
    code: "240.4",
    article: "240",
    title: "Disconnecting Means for Fuses",
    category: "Overcurrent Protection",
    description: "A disconnecting means shall be provided on the supply side of all fuses where the fuse is accessible to other than qualified persons. Must be able to de-energize fuse before removal to prevent shock during fuse changes.",
    keywords: ["fuse disconnect", "disconnect means", "fuse safety", "de-energize"],
    relatedCodes: ["240.41", "430.95", "680.12"]
  },
  {
    code: "240.50(A)",
    article: "240",
    title: "Plug Fuses General",
    category: "Overcurrent Protection",
    description: "Plug fuses of the Edison-base type shall be used only for replacements in existing installations where there is no evidence of overfusing or tampering. Old Edison-base fuses should only be used as replacements - these fuses can be easily overfused.",
    keywords: ["Edison base", "plug fuse", "overfusing", "old fuses"],
    relatedCodes: ["240.51", "240.52", "240.53"]
  },
  {
    code: "240.81",
    article: "240",
    title: "Indicating",
    category: "Overcurrent Protection",
    description: "Circuit breakers shall clearly indicate whether they are in the open (off) or closed (on) position. Breaker position must be obvious - critical for safety during maintenance and troubleshooting.",
    keywords: ["breaker marking", "on/off position", "indication", "breaker position"],
    relatedCodes: ["240.83", "408.4", "110.22"]
  },
  {
    code: "240.83(E)",
    article: "240",
    title: "Marking - Interrupting Rating",
    category: "Overcurrent Protection",
    description: "Every circuit breaker having an interrupting rating other than 5000 amperes shall have its interrupting rating shown on the circuit breaker. Ensures breaker can safely interrupt available fault current.",
    keywords: ["interrupting rating", "AIC", "fault current", "breaker rating", "5000 amperes"],
    relatedCodes: ["110.9", "110.24", "240.86"]
  },

  // ARTICLE 220 - Branch-Circuit, Feeder, and Service Load Calculations
  {
    code: "220.14(J)",
    article: "220",
    title: "Dwelling Unit Receptacle Loads",
    category: "Load Calculations",
    description: "The load for receptacle outlets in dwelling units shall be calculated in accordance with Table 220.14(J) and shall be permitted to be included with the general lighting load and subject to the demand factors of Table 220.42.",
    keywords: ["receptacle load", "dwelling load calculation", "demand factor"],
    relatedCodes: ["220.42", "220.52"]
  },
  {
    code: "220.53",
    article: "220",
    title: "Appliance Load - Dwelling Unit",
    category: "Load Calculations",
    description: "Where two or more small-appliance branch circuits are installed as required by 210.11(C)(1), and they supply only the receptacles specified in 210.52(B)(1), (B)(2), and (B)(3), the load shall be calculated at not less than 1500 volt-amperes for each 2-wire or 1500 VA for each 3-wire small-appliance branch circuit.",
    keywords: ["appliance load", "1500 VA", "small appliance circuit", "kitchen"],
    relatedCodes: ["210.11(C)(1)", "210.52(B)"]
  },

  // ARTICLE 250 - Grounding and Bonding
  {
    code: "250.4",
    article: "250",
    title: "General Requirements for Grounding and Bonding",
    category: "Grounding",
    description: "The following general requirements identify what grounding and bonding of electrical systems are required to accomplish. The prescriptive methods contained in Article 250 shall be followed to comply with the performance requirements of this section.",
    keywords: ["grounding", "bonding", "general requirements", "safety"],
    relatedCodes: ["250.50", "250.94"]
  },
  {
    code: "250.8",
    article: "250",
    title: "Connection of Grounding and Bonding Equipment",
    category: "Grounding",
    description: "Grounding conductors and bonding jumpers shall be connected by one of the following means: (1) Listed pressure connectors, (2) Terminal bars, (3) Pressure connectors listed as grounding and bonding equipment, (4) Exothermic welding process, (5) Machine screw-type fasteners that engage not less than two threads or are secured with a nut, (6) Thread-forming machine screws that engage not less than two threads in the enclosure, (7) Connections that are part of a listed assembly, (8) Other listed means.",
    keywords: ["grounding connection", "bonding connection", "approved methods", "connectors"],
    relatedCodes: ["250.4", "250.94"]
  },
  {
    code: "250.50",
    article: "250",
    title: "Grounding Electrode System",
    category: "Grounding",
    description: "All grounding electrodes as described in 250.52(A)(1) through (A)(7) that are present at each building or structure served shall be bonded together to form the grounding electrode system.",
    keywords: ["grounding electrode", "grounding system", "ground rod", "water pipe"],
    relatedCodes: ["250.52", "250.53", "250.66"]
  },
  {
    code: "250.66",
    article: "250",
    title: "Size of Grounding Electrode Conductor",
    category: "Grounding",
    description: "The size of the grounding electrode conductor of a grounded or ungrounded ac system shall not be less than given in Table 250.66, except as permitted in 250.66(A) through (C).",
    keywords: ["grounding electrode conductor", "ground wire size", "service grounding"],
    relatedCodes: ["250.50", "250.53", "Table 250.66"]
  },
  {
    code: "250.94",
    article: "250",
    title: "Bonding for Other Systems",
    category: "Grounding",
    description: "An intersystem bonding termination for connecting intersystem bonding conductors required for other systems shall be provided external to enclosures at the service equipment or metering equipment enclosure and at the disconnecting means for any additional buildings or structures.",
    keywords: ["intersystem bonding", "bonding termination", "telecommunications", "CATV"],
    relatedCodes: ["250.50", "800.100"]
  },
  {
    code: "250.119",
    article: "250",
    title: "Identification of Equipment Grounding Conductors",
    category: "Grounding",
    description: "Unless required elsewhere in this Code, equipment grounding conductors shall be permitted to be bare, covered, or insulated. Individually covered or insulated equipment grounding conductors shall have a continuous outer finish that is either green or green with one or more yellow stripes except as permitted in this section.",
    keywords: ["ground wire", "green wire", "equipment grounding conductor", "identification"],
    relatedCodes: ["250.122", "200.6"]
  },
  {
    code: "250.122",
    article: "250",
    title: "Size of Equipment Grounding Conductors",
    category: "Grounding",
    description: "Equipment grounding conductors of the wire type shall not be smaller than shown in Table 250.122, but in no case shall they be required to be larger than the circuit conductors supplying the equipment.",
    keywords: ["ground wire size", "equipment grounding", "wire sizing"],
    relatedCodes: ["250.119", "Table 250.122"]
  },
  {
    code: "250.20(B)",
    article: "250",
    title: "Alternating-Current Systems of 50 Volts to 1000 Volts - Grounding",
    category: "Grounding",
    description: "AC systems 50V to 1000V must be grounded if system can be grounded to earth with max voltage to ground of 150V or less, or if system is 3-phase 4-wire wye connected. Defines which systems must be grounded - fundamental requirement for most residential and commercial systems.",
    keywords: ["system grounding", "50 volts", "1000 volts", "voltage to ground", "150V", "wye"],
    relatedCodes: ["250.21", "250.24", "250.30"]
  },
  {
    code: "250.24(C)",
    article: "250",
    title: "Grounding Service-Supplied Systems - Grounded Conductor to Electrode",
    category: "Grounding",
    description: "Grounded conductor shall be connected to grounding electrode conductor at service disconnecting means location. Neutral-to-ground bond at service only - creates reference to earth and completes ground fault path.",
    keywords: ["service grounding", "neutral to ground bond", "main bonding jumper", "service disconnect"],
    relatedCodes: ["250.24(A)", "250.28", "250.142"]
  },
  {
    code: "250.28",
    article: "250",
    title: "Main Bonding Jumper and System Bonding Jumper",
    category: "Grounding",
    description: "Unspliced main bonding jumper shall connect grounded conductor to equipment grounding conductor, grounding electrode conductor, or both. Required bonding jumper in service equipment creates main neutral-ground bond at service entrance.",
    keywords: ["main bonding jumper", "MBJ", "neutral ground bond", "service bonding"],
    relatedCodes: ["250.24(B)", "250.30(A)", "408.3"]
  },
  {
    code: "250.30(A)",
    article: "250",
    title: "Separately Derived Systems - General",
    category: "Grounding",
    description: "Separately derived systems shall be grounded per specified requirements including grounding electrode, conductor, and bonding jumper. Transformers and generators need proper grounding - separate systems require their own grounding arrangements.",
    keywords: ["separately derived system", "transformer", "generator", "SDS", "transfer switch"],
    relatedCodes: ["250.30(A)(1)", "250.30(A)(4)", "250.30(A)(8)"]
  },
  {
    code: "250.32(B)",
    article: "250",
    title: "Buildings or Structures Supplied by Feeder - Grounding Electrode",
    category: "Grounding",
    description: "Building or structure supplied by feeder shall have grounding electrode connected to building disconnecting means enclosure, grounded conductor if present, or EGC. Detached buildings need their own grounding electrode to provide ground reference and fault clearing path.",
    keywords: ["detached building", "outbuilding", "feeder", "building ground", "separate structure"],
    relatedCodes: ["250.32(A)", "250.50", "250.32(D)"]
  },
  {
    code: "250.52(A)(1)",
    article: "250",
    title: "Metal Underground Water Pipe",
    category: "Grounding",
    description: "Metal underground water pipe in direct contact with earth for 10 feet or more shall be used as grounding electrode. Water pipe is primary grounding electrode when available - traditional and effective grounding method.",
    keywords: ["water pipe", "grounding electrode", "10 feet", "metal pipe", "underground"],
    relatedCodes: ["250.50", "250.53", "250.68"]
  },
  {
    code: "250.52(A)(5)",
    article: "250",
    title: "Rod and Pipe Electrodes",
    category: "Grounding",
    description: "Rod and pipe electrodes must be at least 8 feet in length and in contact with soil. Standard ground rods must be 8 feet long minimum to ensure adequate contact with earth for grounding.",
    keywords: ["ground rod", "8 feet", "grounding electrode", "driven rod", "ground stake"],
    relatedCodes: ["250.50", "250.53", "250.56"]
  },
  {
    code: "250.53(A)(2)",
    article: "250",
    title: "Installation - Supplemental Electrode",
    category: "Grounding",
    description: "Metal underground water pipe electrode shall be supplemented by an additional electrode. Water pipe must have additional ground rod or electrode to provide redundant grounding path if water service is replaced.",
    keywords: ["supplemental electrode", "supplemental ground", "water pipe supplement", "additional rod"],
    relatedCodes: ["250.50", "250.52(A)(1)", "250.52(A)(5)"]
  },
  {
    code: "250.92(B)",
    article: "250",
    title: "Services - Method of Bonding at the Service",
    category: "Grounding",
    description: "Electrical continuity at service equipment shall be ensured by bonding methods in 250.8 or other approved means. Service equipment must be effectively bonded - critical for ground fault current path at service entrance.",
    keywords: ["service bonding", "bonding method", "service equipment", "electrical continuity"],
    relatedCodes: ["250.90", "250.94", "250.8"]
  },
  {
    code: "250.104(A)",
    article: "250",
    title: "Bonding of Piping Systems and Exposed Structural Steel - Metal Water Piping",
    category: "Grounding",
    description: "Metal water piping system shall be bonded to service equipment enclosure, grounded conductor at service, grounding electrode conductor, or grounding electrode. Interior metal water piping must be bonded to prevent shock hazard from water pipes becoming energized.",
    keywords: ["water pipe bonding", "metal piping", "bonding jumper", "interior piping"],
    relatedCodes: ["250.104(B)", "250.50", "250.68"]
  },
  {
    code: "250.146(A)",
    article: "250",
    title: "Connecting Receptacle Grounding Terminal to Box - Surface Mounted Box",
    category: "Grounding",
    description: "Surface mounted box with direct metal-to-metal contact between device yoke and box or a bonding jumper meeting 250.8. Metal boxes must be grounded even if device is self-grounding to ensure box is grounded and safe to touch.",
    keywords: ["receptacle grounding", "box grounding", "self-grounding", "device yoke", "metal box"],
    relatedCodes: ["250.148", "406.4(D)", "314.4"]
  },
  {
    code: "250.148",
    article: "250",
    title: "Continuity and Attachment of Equipment Grounding Conductors to Boxes",
    category: "Grounding",
    description: "Equipment grounding conductor brought into nonmetallic outlet box shall terminate in equipment bonding jumper or device. Ground wires must be properly connected to boxes and devices to ensure continuous grounding path through installation.",
    keywords: ["ground continuity", "box grounding", "pigtail", "ground connection", "bonding jumper"],
    relatedCodes: ["250.146", "314.4", "406.4(D)"]
  },
  // ARTICLE 300 - General Requirements for Wiring Methods and Materials
  {
    code: "300.3(B)",
    article: "300",
    title: "Conductors of the Same Circuit",
    category: "Wiring Methods",
    description: "All conductors of the same circuit and, where used, the grounded conductor and all equipment grounding conductors and bonding conductors shall be contained within the same raceway, auxiliary gutter, cable tray, cablebus assembly, trench, cable, or cord, unless otherwise permitted in accordance with 300.3(B)(1) through (B)(4).",
    keywords: ["same circuit", "conductors together", "raceway", "parallel conductors"],
    relatedCodes: ["300.5", "310.10"]
  },
  {
    code: "300.4",
    article: "300",
    title: "Protection Against Physical Damage",
    category: "Wiring Methods",
    description: "Where subject to physical damage, conductors, raceways, and cables shall be protected.",
    keywords: ["physical protection", "damage protection", "cable protection"],
    relatedCodes: ["300.5", "334.15"]
  },
  {
    code: "300.5",
    article: "300",
    title: "Underground Installations",
    category: "Wiring Methods",
    description: "The minimum cover requirements for underground installations shall be as specified in Table 300.5. Underground cables and conductors installed under a building shall be in a raceway.",
    keywords: ["underground", "burial depth", "direct burial", "Table 300.5"],
    relatedCodes: ["300.5(D)", "Table 300.5"]
  },
  {
    code: "300.6",
    article: "300",
    title: "Protection Against Corrosion and Deterioration",
    category: "Wiring Methods",
    description: "Raceways, cable trays, cablebus, auxiliary gutters, cable armor, boxes, cable sheathing, cabinets, elbows, couplings, nipples, fittings, supports, and support hardware shall be of materials suitable for the environment in which they are to be installed.",
    keywords: ["corrosion protection", "wet location", "material suitability"],
    relatedCodes: ["110.11", "300.5"]
  },

  // ARTICLE 310 - Conductors for General Wiring
  {
    code: "310.12",
    article: "310",
    title: "Conductor Identification",
    category: "Conductors",
    description: "Conductors shall be identified in accordance with 310.12(A) and (B).",
    keywords: ["conductor identification", "wire colors", "phase identification"],
    relatedCodes: ["200.6", "250.119"]
  },
  {
    code: "310.15",
    article: "310",
    title: "Ampacities for Conductors Rated 0-2000 Volts",
    category: "Conductors",
    description: "Ampacities for conductors shall be permitted to be determined by tables or under engineering supervision. The ampacity shall not exceed the values shown in Table 310.16 for 0 through 2000 volts.",
    keywords: ["ampacity", "wire size", "current carrying capacity", "Table 310.16"],
    relatedCodes: ["110.14(C)", "Table 310.16"]
  },
  {
    code: "310.16",
    article: "310",
    title: "Allowable Ampacities - Not More Than Three Current-Carrying Conductors",
    category: "Conductors",
    description: "Table 310.16 provides allowable ampacities of not more than three current-carrying conductors in raceway, cable, or earth (directly buried) based on ambient temperature of 30°C (86°F).",
    keywords: ["ampacity table", "wire ampacity", "conductor rating", "temperature rating"],
    relatedCodes: ["310.15", "110.14(C)"]
  },
  {
    code: "310.4",
    article: "310",
    title: "Conductors in Parallel",
    category: "Conductors",
    description: "Aluminum, copper-clad aluminum, or copper conductors of size 1/0 AWG and larger shall be permitted to be connected in parallel. Defines rules for running multiple conductors in parallel to ensure equal current sharing between parallel conductors.",
    keywords: ["parallel conductors", "1/0 AWG", "current sharing", "impedance matching"],
    relatedCodes: ["250.122", "310.15", "300.20"]
  },
  {
    code: "310.10(D)",
    article: "310",
    title: "Temperature Limitation - Locations",
    category: "Conductors",
    description: "Conductors shall have sufficient ampacity for the ambient temperature. Use correction factors from Table 310.15(B)(2)(a). Must derate conductors in high ambient temperatures to prevent conductor overheating in hot locations.",
    keywords: ["temperature derating", "ambient temperature", "correction factors", "hot locations", "attic"],
    relatedCodes: ["310.15", "310.14", "Table 310.15(B)(2)(a)"]
  },
  {
    code: "310.10(H)",
    article: "310",
    title: "Temperature Limitation - Wet Locations",
    category: "Conductors",
    description: "Conductors in wet locations shall comply with one of the specified conditions including being moisture-impervious metal-sheathed, moisture-resistant marked MTW, RHW, THHW, THW, THWN, XHHW. Must use wet-rated conductors in damp/wet locations to prevent insulation degradation from moisture.",
    keywords: ["wet location", "moisture resistant", "THWN", "XHHW", "RHW", "outdoor wiring"],
    relatedCodes: ["310.8", "Table 310.4", "300.5"]
  },
  {
    code: "310.14(A)",
    article: "310",
    title: "Aluminum Conductor Material - General",
    category: "Conductors",
    description: "Solid aluminum conductors 8, 10, and 12 AWG shall be made of AA-8000 series aluminum alloy conductor material. Proper aluminum wire must be used if aluminum conductors are installed - older aluminum wire causes connection failures and fires.",
    keywords: ["aluminum wiring", "AA-8000", "aluminum alloy", "branch circuit aluminum"],
    relatedCodes: ["110.14", "310.106", "240.4"]
  },
  {
    code: "310.15(A)(1)",
    article: "310",
    title: "Ampacities - General",
    category: "Conductors",
    description: "Ampacity tables apply where no more than three current-carrying conductors are in raceway, cable, or earth. Standard ampacity tables assume up to 3 current-carrying conductors - more conductors require derating for heat buildup.",
    keywords: ["ampacity", "3 conductors", "current-carrying", "derating", "heat buildup"],
    relatedCodes: ["310.15(B)(3)", "310.15(C)", "Table 310.16"]
  },
  {
    code: "310.15(B)(3)(a)",
    article: "310",
    title: "Ampacities - Adjustment Factors",
    category: "Conductors",
    description: "Where number of current-carrying conductors in raceway or cable exceeds three, ampacities shall be reduced per Table 310.15(B)(3)(a). Must derate when more than 3 current-carrying conductors together because heat cannot dissipate with many conductors bundled.",
    keywords: ["adjustment factors", "bundling", "derating", "conductor count", "heat dissipation"],
    relatedCodes: ["310.15(A)(1)", "310.15(C)", "Table 310.15(B)(3)(a)"]
  },
  {
    code: "310.15(C)",
    article: "310",
    title: "Engineering Supervision",
    category: "Conductors",
    description: "Under engineering supervision, conductor ampacities shall be permitted to be calculated by means of specified formulas. Allows engineered solutions beyond tables and provides flexibility for special installations with documentation.",
    keywords: ["engineering supervision", "custom calculations", "ampacity formula", "engineered solution"],
    relatedCodes: ["310.15(A)", "310.60", "110.3(B)"]
  },
  {
    code: "310.106(A)",
    article: "310",
    title: "Conductors - Minimum Size",
    category: "Conductors",
    description: "Minimum conductor size for general wiring shall be 14 AWG copper or 12 AWG aluminum except as permitted elsewhere. 14 AWG copper is the minimum for branch circuits - smaller conductors are too fragile for general use.",
    keywords: ["minimum size", "14 AWG", "12 AWG aluminum", "branch circuit minimum"],
    relatedCodes: ["310.5", "240.4(D)", "310.106(B)"]
  },
  {
    code: "310.106(C)",
    article: "310",
    title: "Conductors - Stranded",
    category: "Conductors",
    description: "Where installed in raceways, conductors 8 AWG and larger shall be stranded except as permitted for motor applications. Larger conductors should be stranded for flexibility - solid large conductors are too stiff to work with safely.",
    keywords: ["stranded", "8 AWG", "flexibility", "solid conductor", "large conductor"],
    relatedCodes: ["310.106(A)", "310.3", "Table 310.4"]
  },
  {
    code: "Table 310.16",
    article: "310",
    title: "Allowable Ampacities - 60°C to 90°C",
    category: "Conductors",
    description: "Ampacity tables for copper and aluminum conductors with insulation ratings from 60°C to 90°C. Primary reference for conductor ampacity selection - most commonly used table for conductor sizing.",
    keywords: ["ampacity table", "60°C", "75°C", "90°C", "temperature rating", "conductor sizing"],
    relatedCodes: ["310.15", "110.14(C)", "240.4"]
  },
  // ARTICLE 314 - Outlet, Device, Pull, and Junction Boxes
  {
    code: "314.16",
    article: "314",
    title: "Number of Conductors in Outlet, Device, and Junction Boxes, and Conduit Bodies",
    category: "Boxes",
    description: "Boxes and conduit bodies shall be of sufficient size to provide free space for all enclosed conductors. The maximum number of conductors permitted shall be calculated using the volume per conductor listed in Table 314.16(B).",
    keywords: ["box fill", "conductor count", "box volume", "overcrowded box"],
    relatedCodes: ["314.16(B)", "Table 314.16(A)", "Table 314.16(B)"]
  },
  {
    code: "314.17",
    article: "314",
    title: "Conductors Entering Boxes, Conduit Bodies, or Fittings",
    category: "Boxes",
    description: "Conductors entering boxes, conduit bodies, or fittings shall be protected from abrasion and shall comply with 314.17(A) through (D).",
    keywords: ["cable entry", "box opening", "conductor protection", "unused openings"],
    relatedCodes: ["110.12", "300.4"]
  },
  {
    code: "314.23",
    article: "314",
    title: "Supports - Boxes and Enclosures",
    category: "Boxes",
    description: "Enclosures within the scope of this article shall be supported in accordance with one or more of the provisions in 314.23(A) through (H).",
    keywords: ["box support", "mounting", "securing boxes"],
    relatedCodes: ["314.20", "314.27"]
  },
  {
    code: "314.27",
    article: "314",
    title: "Outlet Boxes",
    category: "Boxes",
    description: "Boxes at luminaire or lampholder outlets shall be designed for the purpose and shall be installed in accordance with 314.27(A) through (E).",
    keywords: ["outlet box", "fixture support", "ceiling box"],
    relatedCodes: ["314.23", "410.36"]
  },
{
    code: "314.25",
    article: "314",
    title: "Covers and Canopies - General",
    category: "Boxes & Enclosures",
    description: "All boxes shall be provided with a cover unless a fixture canopy, lampholder, or faceplate is used. Can't leave open boxes - must have cover or device to prevent exposure to energized parts.",
    keywords: ["box cover", "cover plate", "open box", "junction box cover", "blank cover"],
    relatedCodes: ["314.27", "314.28(C)", "406.5"]
  },
  {
    code: "314.27(A)",
    article: "314",
    title: "Outlet Boxes - Ceiling Support",
    category: "Boxes & Enclosures",
    description: "Boxes used for supporting luminaires shall be designed for that purpose. Ceiling boxes must be rated for fixture weight to prevent fixtures from falling.",
    keywords: ["ceiling box", "fixture support", "luminaire support", "box rating", "weight rating"],
    relatedCodes: ["314.27(B)", "314.27(C)", "410.36"]
  },
  {
    code: "314.29",
    article: "314",
    title: "Boxes, Conduit Bodies to Be Accessible",
    category: "Boxes & Enclosures",
    description: "Boxes and conduit bodies shall be installed so that wiring is accessible without removing part of building structure. Junction boxes must remain accessible - required for maintenance, troubleshooting, and code compliance.",
    keywords: ["accessible", "junction box access", "no burial", "maintenance access"],
    relatedCodes: ["300.15", "314.25", "370.29"]
  },
  {
    code: "314.16(B)",
    article: "314",
    title: "Box Fill Calculation - Count",
    category: "Boxes & Enclosures",
    description: "Each conductor counts as per Table 314.16(B). Clamps, fittings, devices, and grounding conductors also count. Each item in box has a volume allowance - critical for preventing overfilled boxes.",
    keywords: ["box fill", "conductor count", "volume calculation", "Table 314.16(B)", "box sizing"],
    relatedCodes: ["314.16(A)", "314.17", "Table 314.16(B)"]
  },
  {
    code: "314.17(C)",
    article: "314",
    title: "Conductors Entering Boxes - Metal Boxes",
    category: "Boxes & Enclosures",
    description: "Where cable enters metal box, it shall be protected by listed bushings or fittings. Metal box edges can damage cable sheathing - sharp edges can cut through insulation causing shorts.",
    keywords: ["metal box", "cable protection", "bushings", "fittings", "sharp edges"],
    relatedCodes: ["314.17(A)", "300.4", "300.15"]
  },
  {
    code: "314.2",
    article: "314",
    title: "In Wall or Ceiling",
    category: "Boxes & Enclosures",
    description: "Boxes shall be installed so that the front edge is flush with finished surface or projects up to 1/4 inch in noncombustible surfaces. Boxes must be flush or nearly flush with wall surface to prevent stress on devices and provide proper faceplate installation.",
    keywords: ["box depth", "flush mounting", "1/4 inch", "wall surface", "recess"],
    relatedCodes: ["314.21", "314.23", "406.5"]
  },
  {
    code: "314.23(B)",
    article: "314",
    title: "Supports - Structural Mounting",
    category: "Boxes & Enclosures",
    description: "Boxes shall be supported from a structural member by a romex connector or cable clamp to provide rigid support. NM cable support can secure box if within certain depth limits - provides alternative mounting for remodel work.",
    keywords: ["box support", "structural mounting", "cable clamp", "remodel box", "NM cable support"],
    relatedCodes: ["314.23(A)", "334.30", "300.11"]
  },
  {
    code: "314.28(A)",
    article: "314",
    title: "Pull and Junction Boxes and Conduit Bodies",
    category: "Boxes & Enclosures",
    description: "Pull/junction boxes for 4 AWG and larger must meet minimum size requirements based on conductor size and arrangement. Large conductors need larger boxes for bending radius to prevent damage to conductor insulation during pulling.",
    keywords: ["pull box", "junction box", "4 AWG", "bending radius", "large conductors"],
    relatedCodes: ["314.16", "314.28(A)(1)", "314.28(A)(2)"]
  },
  // ARTICLE 334 - Nonmetallic-Sheathed Cable (NM, NMC, NMS)
  {
    code: "334.8",
    article: "334",
    title: "Ampacity",
    category: "Cables",
    description: "Ampacity of Types NM, NMC, and NMS cable shall be determined per 310.15. Ampacity of Types NM, NMC, and NMS shall be that of 60°C conductors per 310.15. Use 60°C column for NM cable ampacity - NM cable limited to lower temperature ratings.",
    keywords: ["ampacity", "60°C", "NM cable rating", "temperature limitation", "conductor capacity"],
    relatedCodes: ["310.15", "Table 310.16", "240.4"]
  },
  {
    code: "334.10",
    article: "334",
    title: "Uses Permitted - NM Cable",
    category: "Cable",
    description: "Type NM, Type NMC, and Type NMS cables shall be permitted to be used in the following: (1) One- and two-family dwellings, (2) Multifamily dwellings permitted to be of Types III, IV, and V construction, (3) Other structures permitted to be of Types III, IV, and V construction.",
    keywords: ["Romex", "NM cable", "nonmetallic cable", "residential wiring"],
    relatedCodes: ["334.12", "334.15"]
  },
  {
    code: "334.12",
    article: "334",
    title: "Uses Not Permitted - NM Cable",
    category: "Cable",
    description: "Types NM, NMC, and NMS cables shall not be permitted as follows: (A) In any dwelling or structure not specifically permitted in 334.10(1), (2), and (3), (B) Exposed in dropped or suspended ceilings in other than one- and two-family and multifamily dwellings, (C) As service-entrance cable, (D) In commercial garages having hazardous locations, (E) In theaters and similar locations, except as provided in 518.4, (F) In motion picture studios, (G) In storage battery rooms, (H) In hoistways or on elevators or escalators, (I) Embedded in poured cement, concrete, or aggregate.",
    keywords: ["NM restrictions", "Romex restrictions", "prohibited uses"],
    relatedCodes: ["334.10", "334.80"]
  },
  {
    code: "334.15",
    article: "334",
    title: "Exposed Work - NM Cable",
    category: "Cable",
    description: "In exposed work, except as provided in 300.11(A), cable shall be installed as specified in 334.15(A) through (C).",
    keywords: ["exposed NM", "cable support", "stapling", "running board"],
    relatedCodes: ["334.30", "300.4"]
  },
  {
    code: "334.30",
    article: "334",
    title: "Securing and Supporting - NM Cable",
    category: "Cable",
    description: "Nonmetallic-sheathed cable shall be supported and secured by staples, cable ties, straps, hangers, or similar fittings designed and installed so as not to damage the cable, at intervals not exceeding 1.4 m (4½ ft) and within 300 mm (12 in.) of every cabinet, box, or fitting.",
    keywords: ["cable support", "4.5 feet", "12 inches", "stapling requirements"],
    relatedCodes: ["334.15", "334.80"]
  },
  {
    code: "334.80",
    article: "334",
    title: "Ampacity - NM Cable",
    category: "Cable",
    description: "The ampacity of Types NM, NMC, and NMS cable shall be determined in accordance with 310.15. The 60°C (140°F) conductor temperature rating shall be used to determine ampacity for 14 AWG and 12 AWG conductors in NM cable containing two or three current-carrying conductors, and the ampacity for these conductors in NM cable containing more than three current-carrying conductors shall be determined in accordance with 310.15(C)(1).",
    keywords: ["NM ampacity", "Romex rating", "cable capacity"],
    relatedCodes: ["310.15", "Table 310.16"]
  },
  {
    code: "334.6",
    article: "334",
    title: "Listed",
    category: "Cables",
    description: "Type NM, NMC, and NMS cables shall be listed. Only use UL-listed Romex cable to ensure cable meets safety standards.",
    keywords: ["listed", "UL", "Romex", "NM cable", "cable listing"],
    relatedCodes: ["334.10", "334.80", "110.3"]
  },
  {
    code: "334.17",
    article: "334",
    title: "Through or Parallel to Framing Members",
    category: "Cables",
    description: "Where cable is installed through or parallel to framing members, it shall be protected per 300.4. Cable through studs needs protection from nails and screws to prevent nail/screw punctures that cause shorts.",
    keywords: ["nail plates", "framing protection", "studs", "300.4", "cable protection"],
    relatedCodes: ["300.4(A)", "300.4(D)", "334.23"]
  },
  {
    code: "334.23",
    article: "334",
    title: "In Accessible Attics",
    category: "Cables",
    description: "Cable in accessible attics shall be protected by guard strips within 7 feet of floor joists or rafters where it runs across top of joists. Must protect cable from foot traffic damage in attics.",
    keywords: ["attic", "guard strips", "7 feet", "running boards", "attic protection"],
    relatedCodes: ["334.15", "320.23", "300.4"]
  },
  {
    code: "334.24",
    article: "334",
    title: "Bending Radius",
    category: "Cables",
    description: "Bends in Types NM, NMC, and NMS cable shall be made so the cable will not be damaged. The radius of the curve shall not be less than five times the diameter. Don't kink or sharply bend Romex - tight bends damage conductors and insulation inside cable.",
    keywords: ["bending radius", "cable bend", "5 times diameter", "kinked cable", "sharp bend"],
    relatedCodes: ["334.15", "300.4", "330.24"]
  },
  // ARTICLE 404 - Switches
  {
    code: "404.2",
    article: "404",
    title: "Switch Connections",
    category: "Switches",
    description: "Switches, including dimmer and similar control switches, shall be connected so that they control the ungrounded conductor. Switches and circuit breakers shall not disconnect the grounded conductor of a circuit.",
    keywords: ["switch wiring", "hot wire", "load control", "neutral switching"],
    relatedCodes: ["210.70", "404.14"]
  },
  {
    code: "404.9",
    article: "404",
    title: "Switch Enclosures",
    category: "Switches",
    description: "Switches and circuit breakers shall be of the externally operable type mounted in an enclosure listed for the intended use. Exceptions permit snap switches to be used without enclosures under certain conditions.",
    keywords: ["switch box", "enclosure", "cover plate"],
    relatedCodes: ["404.3", "314.25"]
  },
  {
    code: "404.14",
    article: "404",
    title: "Dimmers",
    category: "Switches",
    description: "General-use dimmer switches shall be used only to control permanently installed incandescent luminaires, unless listed for the control of other loads and installed accordingly.",
    keywords: ["dimmer switch", "LED dimming", "incandescent", "compatibility"],
    relatedCodes: ["410.73", "404.2"]
  },
// ARTICLE 404 - Switches (ADDITIONAL CODES)
  {
    code: "404.2(A)",
    article: "404",
    title: "Switch Connections - General",
    category: "Switches",
    description: "Switches or circuit breakers shall disconnect all ungrounded conductors. Switches must interrupt the hot wire(s), never the neutral - fundamental safety requirement as switching neutral is dangerous.",
    keywords: ["switch wiring", "hot wire", "ungrounded conductor", "switch connections", "never switch neutral"],
    relatedCodes: ["404.2(B)", "200.7", "210.10"]
  },
  {
    code: "404.2(C)",
    article: "404",
    title: "Switch Connections - Switches Controlling Lighting Loads",
    category: "Switches",
    description: "Where switches control lighting loads supplied by grounded general-purpose branch circuit, neutral shall be provided at switch location. Neutral wire now required at switch boxes to enable smart switches and devices that need neutral.",
    keywords: ["neutral at switch", "smart switch", "lighting control", "switch box neutral"],
    relatedCodes: ["404.2(A)", "210.70", "300.15"]
  },
  {
    code: "404.3(A)",
    article: "404",
    title: "Enclosure - General",
    category: "Switches",
    description: "Switches shall be installed in boxes or enclosures. Switches need proper boxes - no surface mounting on bare wood. Provides support and protection for connections.",
    keywords: ["switch box", "enclosure", "switch mounting", "proper box"],
    relatedCodes: ["314.27", "404.10", "110.3"]
  },
  {
    code: "404.4(A)",
    article: "404",
    title: "Wet Locations - Surface-Mounted Switch",
    category: "Switches",
    description: "Switches in wet locations shall be enclosed in weatherproof enclosure. Outdoor switches need weatherproof covers to prevent water entry that causes shorts and shock.",
    keywords: ["wet location", "weatherproof", "outdoor switch", "weatherproof cover"],
    relatedCodes: ["110.11", "314.15", "406.9"]
  },
  {
    code: "404.8(A)",
    article: "404",
    title: "Accessibility and Grouping - General",
    category: "Switches",
    description: "All switches shall be located so they may be operated from a readily accessible place. Switches must be reachable and operable to ensure safe control of circuits.",
    keywords: ["accessible", "switch location", "readily accessible", "switch height"],
    relatedCodes: ["404.8(B)", "240.24", "110.26"]
  },
  {
    code: "404.9(B)",
    article: "404",
    title: "General-Use and Motor-Circuit Switches - AC Ratings",
    category: "Switches",
    description: "AC general-use snap switches shall be permitted to control inductive loads not exceeding 50% of ampere rating of switch at applied voltage. Standard switches have limited inductive load ratings - motors and transformers draw high inrush current.",
    keywords: ["switch rating", "inductive load", "50%", "motor", "inrush current"],
    relatedCodes: ["404.11", "404.14", "430.83"]
  },
  {
    code: "404.10(A)",
    article: "404",
    title: "Mounting of Snap Switches - Surface Type",
    category: "Switches",
    description: "Snap switches mounted in boxes shall have their mounting strap rigidly secured to boxes. Switches must be firmly mounted to boxes to prevent loose switches and arcing connections.",
    keywords: ["switch mounting", "mounting strap", "secure", "rigid mounting"],
    relatedCodes: ["314.23", "404.3", "314.20"]
  },
  {
    code: "404.14(E)",
    article: "404",
    title: "Rating and Use of Snap Switches - CO/ALR",
    category: "Switches",
    description: "Snap switches rated 20 amperes or less connected to aluminum conductors shall be listed and marked CO/ALR. Special switches required for aluminum wire - standard switches fail with aluminum, causing overheating and fires.",
    keywords: ["CO/ALR", "aluminum wire", "aluminum compatible", "switch rating"],
    relatedCodes: ["110.14", "310.14", "404.14(A)"]
  },
  // ARTICLE 406 - Receptacles, Cord Connectors, and Attachment Plugs
  {
    code: "406.4",
    article: "406",
    title: "General Installation Requirements - Receptacles",
    category: "Receptacles",
    description: "Receptacle outlets shall be located in branch circuits in accordance with Part III of Article 210. General installation requirements shall be in accordance with 406.4(A) through (F).",
    keywords: ["receptacle installation", "outlet installation", "general requirements"],
    relatedCodes: ["210.52", "406.9"]
  },
  {
    code: "406.4(D)",
    article: "406",
    title: "Replacements - GFCI Protection",
    category: "Receptacles",
    description: "Replacement of receptacles shall comply with 406.4(D)(1) through (D)(6), as applicable. Where a receptacle outlet is supplied by a branch circuit that requires GFCI protection, GFCI protection shall be provided.",
    keywords: ["receptacle replacement", "GFCI replacement", "upgrading outlets"],
    relatedCodes: ["210.8", "406.4(D)(2)"]
  },
  {
    code: "406.9",
    article: "406",
    title: "Receptacle Faceplates (Cover Plates)",
    category: "Receptacles",
    description: "Receptacle faceplates shall completely cover the opening and seat against the mounting surface. They shall be installed so as to completely cover the opening and seat against the mounting surface.",
    keywords: ["cover plate", "faceplate", "receptacle cover"],
    relatedCodes: ["314.25", "406.5"]
  },
  {
    code: "406.12",
    article: "406",
    title: "Tamper-Resistant Receptacles",
    category: "Receptacles",
    description: "All nonlocking-type, 15- and 20-ampere, 125- and 250-volt receptacles in the following locations shall be listed tamper-resistant receptacles: (1) All areas specified in 210.52, (2) Receptacles located in guest rooms and guest suites of hotels and motels, (3) Receptacles located in child care facilities.",
    keywords: ["tamper resistant", "TR receptacles", "child safety", "dwelling units"],
    relatedCodes: ["210.52", "406.4"]
  },
// ARTICLE 406 - Receptacles, Cord Connectors, and Attachment Plugs (ADDITIONAL CODES)
  {
    code: "406.3(D)",
    article: "406",
    title: "General Installation Requirements - Methods of Mounting",
    category: "Receptacles",
    description: "Receptacle outlets shall be mounted in boxes or assemblies designed for the purpose. Outlets need proper boxes designed for receptacles to ensure safe mounting and connection protection.",
    keywords: ["receptacle box", "mounting", "outlet box", "proper installation"],
    relatedCodes: ["314.20", "314.27", "406.4"]
  },
  {
    code: "406.4(D)(2)",
    article: "406",
    title: "General Requirements - Replacements",
    category: "Receptacles",
    description: "Where a grounding means does not exist in the receptacle enclosure, replacement shall be one of: non-grounding type, GFCI protected, or GFCI type marked 'No Equipment Ground'. Replacing 2-prong outlets requires GFCI if no ground present to provide shock protection without equipment ground.",
    keywords: ["replacement receptacle", "no ground", "GFCI replacement", "2-prong", "ungrounded"],
    relatedCodes: ["406.4(D)(3)", "210.8", "250.130"]
  },
  {
    code: "406.4(E)",
    article: "406",
    title: "General Requirements - Tamper-Resistant Receptacles Required",
    category: "Receptacles",
    description: "Non-locking-type 125V, 15A and 20A receptacles in areas specified in 210.52 shall be listed tamper-resistant type. Most dwelling unit outlets must be tamper-resistant to prevent children from inserting objects into outlets.",
    keywords: ["tamper resistant", "TR", "child safety", "dwelling unit", "shutters"],
    relatedCodes: ["406.12", "406.13", "210.52"]
  },
  {
    code: "406.5(A)",
    article: "406",
    title: "Receptacle Faceplates - Thickness of Metal Plates",
    category: "Receptacles",
    description: "Metal faceplates shall be not less than 0.030 inch in thickness. Metal plates must be thick enough to be rigid and protective - thin plates bend and don't provide adequate protection.",
    keywords: ["faceplate thickness", "0.030 inch", "metal plate", "cover plate"],
    relatedCodes: ["406.5(C)", "404.9", "314.25"]
  },
  {
    code: "406.5(B)",
    article: "406",
    title: "Receptacle Faceplates - Grounding",
    category: "Receptacles",
    description: "Metal faceplates shall be grounded. Metal cover plates must be grounded via mounting screw or grounding clip to prevent shock from energized faceplate.",
    keywords: ["faceplate grounding", "metal plate ground", "cover plate grounding"],
    relatedCodes: ["250.146", "406.4(C)", "314.25"]
  },
  {
    code: "406.8",
    article: "406",
    title: "Receptacles in Damp or Wet Locations - General",
    category: "Receptacles",
    description: "Receptacles installed in wet or damp locations shall be listed for those locations. Receptacles must be rated for environmental conditions to prevent corrosion and moisture-related failures.",
    keywords: ["wet location", "damp location", "environmental rating", "weather rated"],
    relatedCodes: ["406.9", "110.11", "314.15"]
  },
  {
    code: "406.9(A)",
    article: "406",
    title: "Receptacles in Damp or Wet Locations - Damp Locations",
    category: "Receptacles",
    description: "Receptacle in damp location shall be installed with enclosure that is weatherproof when receptacle is covered (attachment plug cap not inserted and receptacle covers closed). Covered locations need weatherproof covers when not in use to prevent water entry during rain.",
    keywords: ["damp location", "weatherproof cover", "covered", "not in use"],
    relatedCodes: ["406.9(B)", "314.15", "110.11"]
  },
  {
    code: "406.9(B)(1)",
    article: "406",
    title: "Receptacles in Damp or Wet Locations - Wet Locations",
    category: "Receptacles",
    description: "Receptacle in wet location where outlet is unattended in use shall be installed with enclosure that is weatherproof with or without attachment plug inserted. Outdoor receptacles in exposed locations need weatherproof-in-use covers to protect plugged-in devices from rain.",
    keywords: ["wet location", "in-use cover", "weatherproof in use", "bubble cover", "outdoor"],
    relatedCodes: ["406.9(A)", "314.15", "110.11"]
  },
  {
    code: "406.9(C)",
    article: "406",
    title: "Bathtub and Shower Space",
    category: "Receptacles",
    description: "Receptacles shall not be installed within or directly over a bathtub or shower stall. No outlets in or over tubs/showers - critical shock prevention rule.",
    keywords: ["bathtub", "shower", "wet location", "no receptacles", "shock hazard"],
    relatedCodes: ["406.9(A)", "210.8(A)(1)", "680.74"]
  },
  {
    code: "406.11",
    article: "406",
    title: "Connecting Receptacle Grounding Terminal to Box",
    category: "Receptacles",
    description: "Receptacle grounding terminal shall be connected to equipment grounding conductor. Receptacles must be properly grounded - core shock prevention requirement.",
    keywords: ["receptacle grounding", "ground terminal", "equipment ground", "ground connection"],
    relatedCodes: ["250.146", "250.148", "314.4"]
  },
  {
    code: "406.15",
    article: "406",
    title: "Weather-Resistant Receptacles",
    category: "Receptacles",
    description: "Receptacles in damp or wet locations shall be weather-resistant (WR) type. Outdoor receptacles must be weather-resistant rated for enhanced corrosion and moisture resistance.",
    keywords: ["weather resistant", "WR", "outdoor receptacle", "corrosion resistant"],
    relatedCodes: ["406.9", "110.11", "110.3"]
  },
  // ARTICLE 408 - Switchboards, Switchgear, and Panelboards
  {
    code: "408.4",
    article: "408",
    title: "Field Identification Required - Panelboards",
    category: "Panelboards",
    description: "All circuits and circuit modifications shall be legibly identified as to their clear, evident, and specific purpose or use. The identification shall include sufficient detail to allow each circuit to be distinguished from all others.",
    keywords: ["panel labeling", "circuit identification", "panel schedule", "breaker labels"],
    relatedCodes: ["110.22", "408.7"]
  },
  {
    code: "408.7",
    article: "408",
    title: "Unused Openings - Panelboards",
    category: "Panelboards",
    description: "Unused openings for circuit breakers and switches shall be closed using identified closures, or other approved means that provide protection substantially equivalent to the wall of the enclosure.",
    keywords: ["panel blanks", "unused breaker spaces", "knockout closures"],
    relatedCodes: ["110.12", "408.36"]
  },
  {
    code: "408.36",
    article: "408",
    title: "Overcurrent Protection - Panelboards",
    category: "Panelboards",
    description: "In addition to the requirements of Article 240, a panelboard shall be protected by an overcurrent protective device having a rating not greater than that of the panelboard.",
    keywords: ["main breaker", "panel protection", "overcurrent device"],
    relatedCodes: ["240.21", "408.30"]
  },
// ARTICLE 408 - Switchboards, Switchgear, and Panelboards (ADDITIONAL CODES)
  {
    code: "408.3(A)",
    article: "408",
    title: "Conductors and Busbars - Same Vertical Section",
    category: "Switchboards & Panelboards",
    description: "Only conductors intended for termination in a vertical section of switchboard shall be located in that section. Keep wiring in its own section and don't mix wiring between sections to maintain modular integrity.",
    keywords: ["vertical section", "conductor routing", "wireway", "panel wiring"],
    relatedCodes: ["408.3(C)", "312.8", "408.20"]
  },
  {
    code: "408.3(E)",
    article: "408",
    title: "Bus Arrangement - Phase Arrangement",
    category: "Switchboards & Panelboards",
    description: "AC phase arrangement on 3-phase buses shall be A, B, C from front to back, top to bottom, or left to right as viewed from front. The B phase shall be the high-leg on 4-wire delta systems with highest voltage to ground.",
    keywords: ["phase arrangement", "A B C", "high leg", "B phase", "delta system"],
    relatedCodes: ["408.3(F)", "110.15", "230.56"]
  },
  {
    code: "408.3(F)(1)",
    article: "408",
    title: "Identification - High-Leg Marking",
    category: "Switchboards & Panelboards",
    description: "Panelboard containing 4-wire delta-connected system where midpoint of one phase is grounded shall be marked 'CAUTION ___PHASE HAS ___VOLTS TO GROUND'. High-leg conductor must be identified with orange color and proper voltage marking.",
    keywords: ["high leg", "delta", "208V", "orange wire", "caution label"],
    relatedCodes: ["408.3(E)", "110.15", "230.56"]
  },
  {
    code: "408.4(A)",
    article: "408",
    title: "Circuit Directory - Identification",
    category: "Switchboards & Panelboards",
    description: "Every circuit and circuit modification shall be legibly identified as to its clear, evident, and specific purpose. Identification must include sufficient detail to distinguish each circuit from all others.",
    keywords: ["circuit directory", "panel schedule", "circuit identification", "legible labeling"],
    relatedCodes: ["408.4(B)", "110.22", "110.21"]
  },
  {
    code: "408.5",
    article: "408",
    title: "Clearance for Conductors Entering Enclosures",
    category: "Switchboards & Panelboards",
    description: "Where raceways enter switchboard or floor-standing panelboard, raceways including end fittings shall not rise more than 3 inches above bottom of enclosure. Prevents interference with panel interior components.",
    keywords: ["raceway entry", "3 inches", "bottom clearance", "conduit entry"],
    relatedCodes: ["312.5", "408.3", "300.4"]
  },
  {
    code: "408.6",
    article: "408",
    title: "Short-Circuit Current Rating",
    category: "Switchboards & Panelboards",
    description: "Switchboards and panelboards shall have short-circuit current rating not less than available fault current. In non-dwelling units, available fault current and calculation date must be marked on enclosure.",
    keywords: ["SCCR", "fault current", "AIC", "short circuit rating", "interrupting rating"],
    relatedCodes: ["110.9", "110.10", "110.24"]
  },
  {
    code: "408.30",
    article: "408",
    title: "Panelboard Rating",
    category: "Switchboards & Panelboards",
    description: "All panelboards shall have rating of at least minimum feeder capacity required for load calculated per Article 220. Panel amperage must match or exceed calculated load requirements.",
    keywords: ["panel rating", "feeder capacity", "load calculation", "amperage rating"],
    relatedCodes: ["220.40", "215.2", "408.36"]
  },
  {
    code: "408.40",
    article: "408",
    title: "Grounding of Panelboards",
    category: "Switchboards & Panelboards",
    description: "Panelboard cabinets and frames shall be connected to equipment grounding conductor. Service panelboards require main bonding jumper to connect neutral to frame.",
    keywords: ["panel grounding", "main bonding jumper", "equipment ground", "panel bonding"],
    relatedCodes: ["250.24", "250.28", "408.3(C)"]
  },
  {
    code: "408.43",
    article: "408",
    title: "Panelboard Orientation",
    category: "Switchboards & Panelboards",
    description: "Panelboards shall not be installed in face-up or face-down position. Prevents accumulation of contamination and ensures proper workspace access and breaker operation.",
    keywords: ["panel orientation", "vertical mounting", "face up", "horizontal prohibition"],
    relatedCodes: ["110.26", "408.18", "110.12"]
  },
  // ARTICLE 410 - Luminaires, Lampholders, and Lamps
  {
    code: "410.10",
    article: "410",
    title: "Luminaires in Specific Locations",
    category: "Lighting",
    description: "Luminaires shall be installed and used in accordance with 410.10(A) through (F) for the specific locations indicated.",
    keywords: ["fixture location", "lighting installation", "wet location", "closet"],
    relatedCodes: ["410.10(D)", "410.16"]
  },
  {
    code: "410.10(D)",
    article: "410",
    title: "Bathtub and Shower Areas",
    category: "Lighting",
    description: "No part of cord-connected luminaires, chain-, cable-, or cord-suspended luminaires, lighting track, pendants, or ceiling-suspended (paddle) fans shall be located within a zone measured 900 mm (3 ft) horizontally and 2.5 m (8 ft) vertically from the top of the bathtub rim or shower stall threshold.",
    keywords: ["shower light", "bathtub fixture", "wet location", "3 foot zone"],
    relatedCodes: ["410.10", "410.6"]
  },
  {
    code: "410.16",
    article: "410",
    title: "Luminaires in Clothes Closets",
    category: "Lighting",
    description: "Luminaires installed in clothes closets shall comply with 410.16(A) through (C). For the purposes of this section, storage space shall be defined as a volume bounded by the sides and back closet walls extending from the closet floor vertically to a height of 1.8 m (6 ft) or the highest clothes-hanging rod at a horizontal distance of 600 mm (24 in.) from the sides and back of the closet walls, respectively, and continuing vertically to the closet ceiling parallel to the walls at a horizontal distance of 300 mm (12 in.) from the sides and back of the closet walls, respectively.",
    keywords: ["closet light", "storage space", "clothes closet", "fixture clearance"],
    relatedCodes: ["410.10", "410.115"]
  },
  {
    code: "410.36",
    article: "410",
    title: "Means of Support - Luminaires",
    category: "Lighting",
    description: "Luminaires shall be supported by outlet boxes or fittings installed so that the luminaire weight is adequately supported or by support independent of the outlet box.",
    keywords: ["fixture support", "ceiling box", "heavy fixture", "fan box"],
    relatedCodes: ["314.27", "314.23"]
  },
  {
    code: "410.10(A)",
    article: "410",
    title: "Luminaires in Specific Locations - Bathtub and Shower Areas",
    category: "Lighting & Fixtures",
    description: "No parts of chain-, cable-, or cord-suspended luminaires, track lighting, or ceiling fans shall be located within 3 feet horizontally and 8 feet vertically from top of bathtub rim or shower threshold. Keep hanging fixtures away from tubs and showers to prevent shock hazard from wet hands contacting fixtures.",
    keywords: ["bathtub", "shower", "3 feet", "8 feet", "luminaire clearance", "wet location"],
    relatedCodes: ["410.10(D)", "410.4", "314.27"]
  },
  {
    code: "410.16(A)",
    article: "410",
    title: "Means of Support - General",
    category: "Lighting & Fixtures",
    description: "Luminaires shall be securely supported. Luminaires weighing more than 6 pounds or exceeding 16 inches in any dimension shall not be supported by the screw shell of a lampholder. Fixtures must be properly supported independent of lampholders to prevent fixtures from falling and ensure electrical safety.",
    keywords: ["fixture support", "6 pounds", "16 inches", "lampholder", "mounting"],
    relatedCodes: ["314.27", "410.36", "410.16(B)"]
  },
  {
    code: "410.24(B)",
    article: "410",
    title: "Connection of Electric-Discharge and LED Luminaires - Luminaire Wiring",
    category: "Lighting & Fixtures",
    description: "Electric-discharge and LED luminaires supported independently of the outlet box shall be connected with flexible cord, raceway, or cable assembly. LED fixtures need proper wiring methods when not box-supported to ensure safe electrical connections for modern lighting.",
    keywords: ["LED", "luminaire wiring", "flexible cord", "raceway", "cable assembly"],
    relatedCodes: ["410.62", "400.7", "410.16"]
  },
  {
    code: "410.62",
    article: "410",
    title: "Cord-Connected Lampholders and Luminaires",
    category: "Lighting & Fixtures",
    description: "Luminaires employing a cord shall be equipped with an Edison-base or medium-base screw shell type lampholder. Defines requirements for cord-connected fixtures to ensure proper cord usage and connection methods.",
    keywords: ["cord connected", "Edison base", "medium base", "screw shell", "lampholder"],
    relatedCodes: ["400.7", "410.24", "314.23"]
  },
  {
    code: "410.74",
    article: "410",
    title: "Luminaire Mounting - Luminaires in Clothes Closets",
    category: "Lighting & Fixtures",
    description: "Luminaires installed in clothes closets shall be of types permitted in 410.16 and located per clearance requirements. Specific fixture types and locations required in closets to prevent fire hazard from heat near combustible materials.",
    keywords: ["clothes closet", "closet lighting", "clearance", "fire hazard", "combustible"],
    relatedCodes: ["410.16", "410.10", "314.27"]
  },
  {
    code: "410.104",
    article: "410",
    title: "Switches - General",
    category: "Lighting & Fixtures",
    description: "Luminaires shall be equipped with accessible switch or be controlled by a wall-mounted switch. Fixtures need accessible control method to ensure safe operation and code compliance.",
    keywords: ["light switch", "accessible switch", "wall switch", "fixture control"],
    relatedCodes: ["404.2", "210.70", "404.8"]
  },
  {
    code: "410.115",
    article: "410",
    title: "Temperature - Recessed Luminaires",
    category: "Lighting & Fixtures",
    description: "Recessed luminaires shall have thermal protection and be identified as thermally protected. Recessed fixtures need thermal cutoff protection to prevent overheating and fire hazards in ceiling cavities.",
    keywords: ["recessed lighting", "thermal protection", "recessed can", "temperature limit"],
    relatedCodes: ["410.116", "410.117", "314.27"]
  },
  {
    code: "410.116(B)",
    article: "410",
    title: "Clearance and Installation - Recessed in Insulation",
    category: "Lighting & Fixtures",
    description: "Type IC recessed luminaires shall be permitted to be in contact with combustible material at recessed parts. Other types shall have clearance of at least 1/2 inch. IC-rated fixtures can touch insulation, non-IC cannot - critical for preventing fire hazards in insulated ceilings.",
    keywords: ["IC rated", "insulation contact", "recessed can", "1/2 inch clearance", "insulated ceiling"],
    relatedCodes: ["410.115", "410.117", "410.110"]
  },
  // ARTICLE 422 - Appliances
  {
    code: "422.10",
    article: "422",
    title: "Branch-Circuit Rating - Appliances",
    category: "Appliances",
    description: "This section specifies the ratings of branch circuits capable of carrying appliance current without overheating under the conditions specified.",
    keywords: ["appliance circuit", "branch circuit rating", "dedicated circuit"],
    relatedCodes: ["210.23", "422.11"]
  },
  {
    code: "422.16",
    article: "422",
    title: "Flexible Cords - Appliances",
    category: "Appliances",
    description: "Flexible cord shall be permitted (1) for the connection of appliances to facilitate their frequent interchange or to prevent the transmission of noise or vibration or (2) to facilitate the removal or disconnection of appliances that are fastened in place, where the fastening means and mechanical connections are specifically designed to permit ready removal for maintenance or repair and the appliance is intended or identified for flexible cord connection.",
    keywords: ["appliance cord", "flexible cord", "cord connection"],
    relatedCodes: ["400.7", "422.33"]
  },

  // ARTICLE 680 - Swimming Pools, Fountains, and Similar Installations
  {
    code: "680.22",
    article: "680",
    title: "Area Lighting, Receptacles, and Equipment - Pools",
    category: "Swimming Pools",
    description: "This section includes rules for lighting, receptacles, and other equipment installed in the areas adjacent to pools. All 125-volt, 15- and 20-ampere receptacles located within 6 m (20 ft) of the inside wall of a pool shall be protected by a ground-fault circuit interrupter.",
    keywords: ["pool GFCI", "pool receptacles", "20 feet", "pool area"],
    relatedCodes: ["210.8(B)", "680.6"]
  },
  {
    code: "680.42",
    article: "680",
    title: "Outdoor Spas and Hot Tubs",
    category: "Swimming Pools",
    description: "Outdoor spas and hot tubs shall comply with the provisions of Part I and Part II of this article, except as permitted in this section, which shall apply to any outdoor spa or hot tub.",
    keywords: ["spa", "hot tub", "outdoor installation"],
    relatedCodes: ["680.22", "680.43"]
  }
];

// Category groupings for easy navigation
export const NEC_CATEGORIES = [
  { name: "General Requirements", color: "blue", icon: "⚡" },
  { name: "Branch Circuits", color: "green", icon: "🔌" },
  { name: "Grounding", color: "yellow", icon: "⚡" },
  { name: "Grounded Conductors", color: "gray", icon: "➖" },
  { name: "Wiring Methods", color: "purple", icon: "🔧" },
  { name: "Conductors", color: "orange", icon: "➰" },
  { name: "Boxes", color: "brown", icon: "📦" },
  { name: "Cable", color: "red", icon: "🔗" },
  { name: "Switches", color: "indigo", icon: "💡" },
  { name: "Receptacles", color: "pink", icon: "🔌" },
  { name: "Panelboards", color: "slate", icon: "⚡" },
  { name: "Lighting", color: "amber", icon: "💡" },
  { name: "Appliances", color: "lime", icon: "🔌" },
  { name: "Swimming Pools", color: "cyan", icon: "🏊" },
  { name: "Load Calculations", color: "teal", icon: "📊" }
];

// Quick reference for common scenarios
export const COMMON_SCENARIOS = [
  {
    title: "Installing a New Outlet",
    codes: ["210.52", "210.52(A)(1)", "334.30", "314.16", "406.12"],
    description: "Key codes for adding receptacles in dwelling units"
  },
  {
    title: "Kitchen Remodel",
    codes: ["210.8(A)", "210.52(C)", "210.11(C)(3)", "220.53"],
    description: "GFCI requirements, countertop spacing, and circuit requirements"
  },
  {
    title: "Bathroom Circuits",
    codes: ["210.8(A)", "210.11(C)(3)", "210.52(D)", "410.10(D)"],
    description: "GFCI protection, dedicated circuits, and fixture placement"
  },
  {
    title: "Outdoor Wiring",
    codes: ["210.8(A)", "300.5", "680.22", "110.11"],
    description: "GFCI protection, burial depths, and weatherproofing"
  },
  {
    title: "Panel Installation",
    codes: ["408.4", "408.7", "408.36", "110.26"],
    description: "Labeling, unused openings, protection, and clearances"
  }
];

// Helper function to search codes
export function searchNECCodes(query) {
  const lowerQuery = query.toLowerCase();
  return NEC_CODES.filter(code =>
    code.code.toLowerCase().includes(lowerQuery) ||
    code.title.toLowerCase().includes(lowerQuery) ||
    code.description.toLowerCase().includes(lowerQuery) ||
    code.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  );
}

// Helper function to get codes by category
export function getCodesByCategory(category) {
  return NEC_CODES.filter(code => code.category === category);
}

// Helper function to get codes by article
export function getCodesByArticle(article) {
  return NEC_CODES.filter(code => code.article === article);
}
