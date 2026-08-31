// 16 Structured Dream Home Realization Milestones mapped across 300 photorealistic frames

export const CONSTRUCTION_STAGES = [
  {
    id: 'stage-01',
    stageNumber: 1,
    startFrame: 0,
    endFrame: 18,
    name: '01 Dream & Vision',
    title: 'Dream Concept & Architectural Vision',
    phase: 'DISCOVERY',
    elevation: '±0.00 m',
    concreteVolume: '0 m³',
    steelTonnage: '0 T',
    workforce: 'Architectural Cadre',
    description: 'Initial site assessment, topographic drone survey, solar path bioclimatic orientation, and architectural concept ideation.',
    specs: [
      { label: 'Site Geology', value: 'High-Bearing Bedrock' },
      { label: 'Survey Precision', value: '±1.0 mm RTK GNSS' }
    ]
  },
  {
    id: 'stage-02',
    stageNumber: 2,
    startFrame: 19,
    endFrame: 37,
    name: '02 Site Preparation',
    title: 'Site Preparation & Excavation',
    phase: 'GROUNDWORKS',
    elevation: '-1.50 m',
    concreteVolume: '0 m³',
    steelTonnage: '0 T',
    workforce: 'Heavy Excavation Crew',
    description: 'Precision clearing, soil stability profiling, perimeter noise dampening hoardings, and earthwork benchmarking.',
    specs: [
      { label: 'Earth Removed', value: '1,850 m³' },
      { label: 'Perimeter Shoring', value: 'Contiguous Secant' }
    ]
  },
  {
    id: 'stage-03',
    stageNumber: 3,
    startFrame: 38,
    endFrame: 56,
    name: '03 Deep Excavation',
    title: 'Subterranean Foundation Excavation',
    phase: 'GROUNDWORKS',
    elevation: '-3.80 m',
    concreteVolume: '0 m³',
    steelTonnage: '12 T',
    workforce: 'Geotechnical Crew',
    description: 'Subterranean basement excavation, retaining wall anchoring, and sump drainage channelization.',
    specs: [
      { label: 'Excavation Depth', value: '-3.80 m AOD' },
      { label: 'Shoring Anchors', value: '32 Post-Tensioned' }
    ]
  },
  {
    id: 'stage-04',
    stageNumber: 4,
    startFrame: 57,
    endFrame: 75,
    name: '04 Raft Foundation',
    title: 'Monolithic Raft Foundation Pour',
    phase: 'SUBSTRUCTURE',
    elevation: '-2.40 m',
    concreteVolume: '320 m³',
    steelTonnage: '48 T',
    workforce: 'Concrete Specialists',
    description: 'Mass-pour monolithic foundation slab using C45/55 self-consolidating low-carbon concrete with waterproof membrane.',
    specs: [
      { label: 'Concrete Spec', value: 'C45/55 Waterproof' },
      { label: 'Raft Thickness', value: '900 mm Uniform' }
    ]
  },
  {
    id: 'stage-05',
    stageNumber: 5,
    startFrame: 76,
    endFrame: 94,
    name: '05 Ground Rebar',
    title: 'Ground Slab Rebar & Tendon Framing',
    phase: 'SUPERSTRUCTURE',
    elevation: '±0.00 m',
    concreteVolume: '540 m³',
    steelTonnage: '78 T',
    workforce: 'Steel Riggers & Formwork',
    description: 'High-tensile rebar reinforcement tying, conduits routing, and precision cast-in anchors for ground level column bases.',
    specs: [
      { label: 'Rebar Grade', value: 'Fe 500D High-Ductility' },
      { label: 'Tendon Tension', value: '185 kN/strand' }
    ]
  },
  {
    id: 'stage-06',
    stageNumber: 6,
    startFrame: 95,
    endFrame: 113,
    name: '06 Ground Columns',
    title: 'Ground Level Columns & Shear Cores',
    phase: 'SUPERSTRUCTURE',
    elevation: '+3.60 m',
    concreteVolume: '780 m³',
    steelTonnage: '105 T',
    workforce: 'Superstructure Crews',
    description: 'Erection of reinforced architectural concrete columns and seismic shear walls forming the ground floor living envelope.',
    specs: [
      { label: 'Floor-to-Ceiling', value: '3.60 m Clear' },
      { label: 'Column Precision', value: '±1.5 mm Laser Plum' }
    ]
  },
  {
    id: 'stage-07',
    stageNumber: 7,
    startFrame: 114,
    endFrame: 132,
    name: '07 First Floor Slab',
    title: 'First Floor Suspended Slab Pour',
    phase: 'SUPERSTRUCTURE',
    elevation: '+4.10 m',
    concreteVolume: '1,020 m³',
    steelTonnage: '135 T',
    workforce: 'Concrete Casting Team',
    description: 'Post-tensioned suspended deck pour with integral vibration dampening and embedded smart home radiant conduits.',
    specs: [
      { label: 'Slab Span', value: '8.4 m Column-Free' },
      { label: 'Curing Period', value: '7-Day Wet Burlap' }
    ]
  },
  {
    id: 'stage-08',
    stageNumber: 8,
    startFrame: 133,
    endFrame: 151,
    name: '08 Second Floor',
    title: 'Second Floor Columns & Cantilever Framing',
    phase: 'SUPERSTRUCTURE',
    elevation: '+7.40 m',
    concreteVolume: '1,280 m³',
    steelTonnage: '168 T',
    workforce: 'Superstructure Specialists',
    description: 'Upper bedroom suites framing with dramatic 3.2m cantilevered balcony floorplates engineered with carbon-fiber post-tensioning.',
    specs: [
      { label: 'Cantilever Reach', value: '3.2 m Overhang' },
      { label: 'Deflection Safety', value: 'L/800 High-Stiffness' }
    ]
  },
  {
    id: 'stage-09',
    stageNumber: 9,
    startFrame: 152,
    endFrame: 170,
    name: '09 Upper Structure',
    title: 'Upper Floor Structure & Roof Deck',
    phase: 'SUPERSTRUCTURE',
    elevation: '+10.80 m',
    concreteVolume: '1,520 m³',
    steelTonnage: '198 T',
    workforce: 'Structural Framing Crews',
    description: 'Roof terrace framing, penthouse suites, elevator overrun core, and skylight opening structural headers.',
    specs: [
      { label: 'Total Height', value: '+11.20 m Ridge' },
      { label: 'Lateral Stiffness', value: 'Seismic Zone 4' }
    ]
  },
  {
    id: 'stage-10',
    stageNumber: 10,
    startFrame: 171,
    endFrame: 189,
    name: '10 Roof Sealing',
    title: 'Roof Decking & Multi-Ply Waterproofing',
    phase: 'ENVELOPE',
    elevation: '+11.20 m',
    concreteVolume: '1,560 m³',
    steelTonnage: '202 T',
    workforce: 'Waterproofing Cadre',
    description: 'SBS elastomeric membrane waterproofing, tapered rigid insulation for positive drainage, and rooftop solar armature.',
    specs: [
      { label: 'Thermal R-Value', value: 'R-45 High Efficiency' },
      { label: 'Flood Testing', value: '48-Hour Continuous' }
    ]
  },
  {
    id: 'stage-11',
    stageNumber: 11,
    startFrame: 190,
    endFrame: 208,
    name: '11 External Walls',
    title: 'External Masonry & Acoustic Insulation',
    phase: 'ENVELOPE',
    elevation: '+11.20 m',
    concreteVolume: '1,560 m³',
    steelTonnage: '202 T',
    workforce: 'Masonry & Envelope Crews',
    description: 'Precision AAC autoclaved aerated blocks laying, continuous mineral wool thermal wrap, and sound isolation membranes.',
    specs: [
      { label: 'Acoustic Rating', value: 'STC 58 Silent' },
      { label: 'Air Tightness', value: '0.45 ACH @ 50Pa' }
    ]
  },
  {
    id: 'stage-12',
    stageNumber: 12,
    startFrame: 209,
    endFrame: 227,
    name: '12 Facade Framing',
    title: 'Architectural Louvers & Cladding Rails',
    phase: 'FACADE',
    elevation: '+11.20 m',
    concreteVolume: '1,560 m³',
    steelTonnage: '210 T',
    workforce: 'Architectural Craftsmen',
    description: 'Installation of natural thermowood facade fins, powder-coated architectural bronze trims, and hidden drainage gutters.',
    specs: [
      { label: 'Louver Material', value: 'Sustainable Thermowood' },
      { label: 'Corrosion Class', value: 'C5-M Marine Grade' }
    ]
  },
  {
    id: 'stage-13',
    stageNumber: 13,
    startFrame: 228,
    endFrame: 246,
    name: '13 Glazing & Glass',
    title: 'Panoramic Low-E Triple Glazing',
    phase: 'FACADE',
    elevation: '+11.20 m',
    concreteVolume: '1,560 m³',
    steelTonnage: '214 T',
    workforce: 'Glazing Technicians',
    description: 'Motorized oversized sliding glass doors, floor-to-ceiling acoustic triple glazing, and frameless glass balcony balustrades.',
    specs: [
      { label: 'Glass U-Value', value: '0.68 W/m²K' },
      { label: 'Wind Load Resistance', value: '2.85 kPa (Hurricanes)' }
    ]
  },
  {
    id: 'stage-14',
    stageNumber: 14,
    startFrame: 247,
    endFrame: 265,
    name: '14 Interior Fitout',
    title: 'Custom Interiors & Smart Automation',
    phase: 'INTERIORS',
    elevation: '+11.20 m',
    concreteVolume: '1,560 m³',
    steelTonnage: '214 T',
    workforce: 'Master Interior Artisans',
    description: 'Italian porcelain tile installation, bespoke architectural millwork, concealed HVAC linear diffusers, and Lutron lighting.',
    specs: [
      { label: 'Millwork Species', value: 'FSC American Walnut' },
      { label: 'Automation Hub', value: 'KNX / Lutron Integrated' }
    ]
  },
  {
    id: 'stage-15',
    stageNumber: 15,
    startFrame: 266,
    endFrame: 284,
    name: '15 Landscaping',
    title: 'Biophilic Landscaping & Pool Terraces',
    phase: 'LANDSCAPING',
    elevation: '+11.20 m',
    concreteVolume: '1,560 m³',
    steelTonnage: '214 T',
    workforce: 'Landscape Architects',
    description: 'Mature olive and palm specimen tree planting, automated micro-drip irrigation, infinity plunge pool, and perimeter security.',
    specs: [
      { label: 'Native Flora', value: '85% Drought-Tolerant' },
      { label: 'Lighting Zones', value: '18 Dimmable Scenes' }
    ]
  },
  {
    id: 'stage-16',
    stageNumber: 16,
    startFrame: 285,
    endFrame: 299,
    name: '16 Your Dream Home',
    title: 'Final Handover — Your Dream Realized',
    phase: 'COMPLETION',
    elevation: '+11.20 m',
    concreteVolume: '1,560 m³',
    steelTonnage: '214 T',
    workforce: 'Executive Handover Cadre',
    description: 'Zero-punch commissioning, white-glove deep detailing, BIM 5D digital twin model delivery, and keys handover to the homeowner.',
    specs: [
      { label: 'Handover State', value: '100% Turnkey Ready' },
      { label: 'Structural Warranty', value: '25-Year Comprehensive' }
    ]
  }
];
