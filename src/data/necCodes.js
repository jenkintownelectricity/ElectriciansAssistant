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

  // ARTICLE 334 - Nonmetallic-Sheathed Cable (NM, NMC, NMS)
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
