export const CONSTRUCTION_STAGES = [
  {
    id: 'stage-01',
    stepNumber: '01',
    title: 'Site Preparation & Surveying',
    subtitle: 'Topographical calibration, geotechnical soil boring & perimeter acoustic hoarding',
    startFrame: 0,
    endFrame: 18,
    elevation: '±0.00 m',
    concreteVolume: '0 m³',
    workforce: '18 Specialists',
    safetyStatus: '100% Zero-Harm Incident Free',
    description: 'Initial site clearance, satellite-linked GNSS boundary alignment, installation of perimeter noise-dampening hoardings, and deployment of environmental dust-suppression cannons.',
    engineeringSpecs: {
      geotechnicalProfile: 'Class II Cohesive Sandstone',
      bearingCapacity: '450 kN/m²',
      waterTableDepth: '-4.80 m',
      surveyTolerance: '±2.0 mm laser verified'
    }
  },
  {
    id: 'stage-02',
    stepNumber: '02',
    title: 'Deep Earth Excavation',
    subtitle: 'Heavy hydraulic crawler excavators & bulk spoil management',
    startFrame: 19,
    endFrame: 38,
    elevation: '-3.50 m',
    concreteVolume: '0 m³',
    workforce: '26 Operators',
    safetyStatus: 'Real-time slope stability monitored',
    description: 'Precision bulk excavation utilizing twin CAT 336 hydraulic excavators with 3D GPS grade control systems, excavating 4,800 m³ of soil with continuous soil moisture and strata testing.',
    engineeringSpecs: {
      excavationDepth: '3.50 m Sub-grade',
      totalSpoilRemoved: '4,850 m³',
      cycleTime: '45 sec / bucket',
      vibrationLimit: '< 2.5 mm/s PPV'
    }
  },
  {
    id: 'stage-03',
    stepNumber: '03',
    title: 'Basement Pit & Shoring System',
    subtitle: 'Secant contiguous pile wall & soldier beam retaining perimeter',
    startFrame: 39,
    endFrame: 58,
    elevation: '-6.20 m',
    concreteVolume: '320 m³',
    workforce: '32 Engineers',
    safetyStatus: 'Active inclinometer monitoring',
    description: 'Perimeter retention shoring using CFA (Continuous Flight Auger) reinforced concrete piles, pre-stressed rock anchors, and automated multi-stage dewatering sump pump networks.',
    engineeringSpecs: {
      shoringType: 'Secant Piled Retaining Wall',
      anchorTension: '380 kN per anchor',
      pileDiameter: '600 mm @ 750 mm c/c',
      retainingDepth: '6.20 m'
    }
  },
  {
    id: 'stage-04',
    stepNumber: '04',
    title: 'Substructure & Raft Foundation',
    subtitle: 'High-tensile steel rebar matting & C40/50 waterproof concrete pour',
    startFrame: 59,
    endFrame: 78,
    elevation: '-5.80 m',
    concreteVolume: '1,150 m³',
    workforce: '45 Technicians',
    safetyStatus: 'Thermal sensor core logging',
    description: 'Installation of high-yield deformed steel rebar mesh (Fe500D) followed by continuous monolithic raft slab pouring with self-compacting micro-silica modified concrete for total impermeability.',
    engineeringSpecs: {
      slabThickness: '1,200 mm Monolithic Raft',
      steelGrade: 'Fe 500D High Ductility Rebar',
      concreteMix: 'C40/50 with Crystalline Additives',
      coreTempLimit: '< 65°C peak hydratation'
    }
  },
  {
    id: 'stage-05',
    stepNumber: '05',
    title: 'Ground Floor Columns & Shear Core',
    subtitle: 'Vertical load-bearing columns, lift shaft formwork & podium starters',
    startFrame: 79,
    endFrame: 104,
    elevation: '+0.50 m',
    concreteVolume: '1,680 m³',
    workforce: '42 Specialists',
    safetyStatus: 'Laser plumb-line checked',
    description: 'Erection of heavy-duty Doka self-climbing formwork systems for central seismic core walls and high-capacity rectangular structural columns designed for high wind load dissipation.',
    engineeringSpecs: {
      columnDimensions: '600 x 600 mm High-Axial',
      shearWallThickness: '300 mm Solid Core',
      verticalityTolerance: '1:1000 plumb precision',
      compressiveStrength: '55 N/mm² @ 28 days'
    }
  },
  {
    id: 'stage-06',
    stepNumber: '06',
    title: 'Ground Level Post-Tensioned Slab',
    subtitle: 'Podium transfer slab, unbonded post-tensioning tendons & perimeter casting',
    startFrame: 105,
    endFrame: 124,
    elevation: '+3.80 m',
    concreteVolume: '2,240 m³',
    workforce: '48 Technicians',
    safetyStatus: 'Hydraulic jack load calibrated',
    description: 'Laying of high-strength unbonded post-tensioning strands in parabolic profiles. Concrete placement followed by multi-stage hydraulic stressing to eliminate mid-span deflection.',
    engineeringSpecs: {
      postTensioningForce: '195 kN / tendon strand',
      slabSpan: '9.2 m Column-Free Bay',
      deflectionControl: 'L/800 under sustained load',
      curingMethod: 'Membrane spray + wet burlap'
    }
  },
  {
    id: 'stage-07',
    stepNumber: '07',
    title: 'First Floor Structural Frame',
    subtitle: 'Cantilevered balcony casting, perimeter columns & safety netting',
    startFrame: 125,
    endFrame: 144,
    elevation: '+7.40 m',
    concreteVolume: '2,780 m³',
    workforce: '50 Builders',
    safetyStatus: 'Full perimeter debris netting active',
    description: 'Forming the signature architectural cantilevers of the first floor. Reinforced edge beams support expansive private terrace spans without compromising structural rigidity.',
    engineeringSpecs: {
      cantileverSpan: '3.20 m Outward Projection',
      edgeBeamReinforcement: '8x 32mm dia Fe500D bars',
      liveLoadAllowance: '5.0 kN/m² balcony rating',
      vibrationDamping: 'Tuned mass perimeter detail'
    }
  },
  {
    id: 'stage-08',
    stepNumber: '08',
    title: 'Second Floor Framing & Cantilevers',
    subtitle: 'Dual-bay architectural framing, perimeter scaffolding & upper formwork',
    startFrame: 145,
    endFrame: 164,
    elevation: '+11.00 m',
    concreteVolume: '3,320 m³',
    workforce: '52 Craftsmen',
    safetyStatus: 'Scaffold certified Tier 1',
    description: 'Assembly of modular aluminum slab tables for rapid second-floor structural erection, incorporating concealed MEP conduit sleeves and recessed ceiling curtain pockets.',
    engineeringSpecs: {
      floorToFloorHeight: '3.60 m Clear Height',
      slabThickness: '225 mm Flat Plate Slab',
      formworkStrikingTime: '7 days @ 70% strength',
      rebarCover: '40 mm for durability class'
    }
  },
  {
    id: 'stage-09',
    stepNumber: '09',
    title: 'Upper Floor Structural Topping',
    subtitle: 'Penthouse structural frame, roof terrace slab & crane concrete pumping',
    startFrame: 165,
    endFrame: 184,
    elevation: '+14.60 m',
    concreteVolume: '3,850 m³',
    workforce: '55 Riggers',
    safetyStatus: 'High-altitude harness tie-off 100%',
    description: 'Pumping specialized lightweight high-performance concrete to the uppermost penthouse level using trailer-mounted Putzmeister concrete boom pumps with robotic boom steering.',
    engineeringSpecs: {
      pumpingPressure: '85 Bar continuous',
      slumpFlow: '650 mm self-leveling',
      aggregateSize: '10 mm micro-aggregate',
      pourSpeed: '45 m³/hour automated'
    }
  },
  {
    id: 'stage-10',
    stepNumber: '10',
    title: 'Roof Slab & Parapet Capping',
    subtitle: 'Structural topping out, dual-layer elastomeric waterproofing & thermal insulation',
    startFrame: 185,
    endFrame: 204,
    elevation: '+18.20 m',
    concreteVolume: '4,280 m³',
    workforce: '46 Specialists',
    safetyStatus: 'Topping Out Milestone Achieved',
    description: 'Completion of the top roof slab structure, installation of root-resistant SBS waterproofing membranes, high-density PIR insulation boards, and perimeter reinforced concrete parapets.',
    engineeringSpecs: {
      insulationRValue: 'R-6.5 High Thermal Efficiency',
      waterproofTest: '48-hour standing flood test',
      solarReflectanceIndex: 'SRI > 82 Cool Roof System',
      drainageSlope: '1:60 directional fall'
    }
  },
  {
    id: 'stage-11',
    stepNumber: '11',
    title: 'External Enclosure & Masonry',
    subtitle: 'Autoclaved aerated concrete blockwork, fire barrier cavity walls & lintel setting',
    startFrame: 205,
    endFrame: 224,
    elevation: '+18.20 m',
    concreteVolume: '4,450 m³',
    workforce: '58 Artisans',
    safetyStatus: 'Firestop compliance inspected',
    description: 'Precision masonry using lightweight thermal AAC blocks bonded with polymer-modified adhesive mortar, providing superior acoustic decoupling and 4-hour fire barrier integrity.',
    engineeringSpecs: {
      blockDensity: '600 kg/m³ High Acoustic',
      thermalConductivity: '0.12 W/m·K',
      fireResistance: 'Class A1 Non-Combustible 4-hr',
      mortarJoint: '2 mm thin-bed adhesive'
    }
  },
  {
    id: 'stage-12',
    stepNumber: '12',
    title: 'Acoustic Glazing & Window Systems',
    subtitle: 'Floor-to-ceiling Low-E double-glazed panoramic sliding assemblies & thermal breaks',
    startFrame: 225,
    endFrame: 244,
    elevation: '+18.20 m',
    concreteVolume: '4,450 m³',
    workforce: '44 Glaziers',
    safetyStatus: 'Suction-lifter crane robotics',
    description: 'Installation of Schuco thermally broken aluminum window frames and argon gas-filled, laminated Low-E double-pane safety glass engineered for 42 dB acoustic noise attenuation.',
    engineeringSpecs: {
      glassConfiguration: '8mm Toughened + 16mm Argon + 8.76mm Lami',
      uValue: '1.1 W/m²K Superior Insulation',
      solarHeatGainCoeff: 'SHGC 0.28 Solar Control',
      acousticAttenuation: 'Rw 44 dB Sound Dampening'
    }
  },
  {
    id: 'stage-13',
    stepNumber: '13',
    title: 'Architectural Façade & Wood Louvers',
    subtitle: 'Dark powder-coated aluminum framing, warm composite louvers & ventilated façade',
    startFrame: 245,
    endFrame: 259,
    elevation: '+18.20 m',
    concreteVolume: '4,450 m³',
    workforce: '38 Finishers',
    safetyStatus: 'Precision laser aligned',
    description: 'Mounting of the signature dark architectural frames, warm thermowood vertical louvers for solar shading, cantilevered soffit cladding, and structural frameless glass balcony railings.',
    engineeringSpecs: {
      louverMaterial: 'Sustainably Sourced Thermowood',
      coatingType: 'Qualicoat Class 2 Super-Durable Powder',
      windLoadRating: 'Tested to 2.4 kPa Typhoon Resistance',
      railingSystem: 'Structural Spigot Glass 21.52mm SGP'
    }
  },
  {
    id: 'stage-14',
    stepNumber: '14',
    title: 'Interior Architectural Fitout',
    subtitle: 'Large format Italian porcelain, acoustic drywall, concealed VRV HVAC & smart automation',
    startFrame: 260,
    endFrame: 274,
    elevation: '+18.20 m',
    concreteVolume: '4,450 m³',
    workforce: '62 Craftsmen',
    safetyStatus: 'Low-VOC air quality verified',
    description: 'Completion of high-specification interior finishes: seamless shadowline ceiling details, concealed Daikin VRV air treatment systems, motorized shading tracks, and luxury architectural joinery.',
    engineeringSpecs: {
      flooringMaterial: '1200x2400 mm Calacatta Porcelain',
      airChangesPerHour: '0.55 ACH Mechanical Ventilation',
      lightingProtocol: 'DALI-2 Tunable White System',
      vocRating: '< 0.05 mg/m³ Ultra-Pure Air'
    }
  },
  {
    id: 'stage-15',
    stepNumber: '15',
    title: 'Landscaping & Boundary Enclosure',
    subtitle: 'Architectural entry gate, cobblestone driveway, lush specimen trees & water features',
    startFrame: 275,
    endFrame: 289,
    elevation: '+18.20 m',
    concreteVolume: '4,620 m³',
    workforce: '34 Landscapers',
    safetyStatus: 'Automated perimeter infrared security',
    description: 'Installation of the motorized solid wood and steel sliding vehicular gate, bush-hammered granite boundary wall with warm backlighting, drought-tolerant subtropical garden planting, and permeable paving.',
    engineeringSpecs: {
      pavementSystem: 'Permeable Basalt Pavers with SUDS Drainage',
      irrigation: 'Sub-surface Smart Rain-Sensor Drip',
      gateAutomation: 'Heavy-Duty 24V Brushless Drive',
      soilRemediation: 'Organic Compost Bio-Enriched Topsoil'
    }
  },
  {
    id: 'stage-16',
    stepNumber: '16',
    title: 'Final Commissioning & Dusk Lighting',
    subtitle: 'Architectural blue-hour facade uplighting, interior warmth & handover complete',
    startFrame: 290,
    endFrame: 299,
    elevation: '+18.20 m',
    concreteVolume: '4,620 m³',
    workforce: '10 Handover Team',
    safetyStatus: 'Occupancy Certificate (BCA) Granted',
    description: 'Final commissioning of building management systems, circadian architectural facade illumination, energy metering verification, and handover of the luxury residential landmark.',
    engineeringSpecs: {
      energyEfficiencyRating: 'Net-Zero Ready / LEED Platinum Level',
      lightingColorTemp: '2700K Warm Architectural Glow',
      totalProjectDuration: '14 Months On-Schedule',
      finalStructuralIntegrity: '100% Verified Digital Twin Match'
    }
  }
];
