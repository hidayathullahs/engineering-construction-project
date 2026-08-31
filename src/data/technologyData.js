export const TECHNOLOGY_DATA = [
  {
    id: 'tech-01',
    code: 'BIM-7D',
    title: 'Building Information Modeling (BIM 5D/7D)',
    category: 'Digital Engineering',
    tagline: 'Parametric coordination, clash detection, 4D schedule sequencing, and 7D facility asset management.',
    description: 'We integrate federated architectural, structural, and MEP models into an ultra-high-fidelity single source of truth. Automated clash detection eliminates field collisions before physical fabrication commences.',
    stats: [
      { label: 'Field Clashes Prevented', value: '14,200+' },
      { label: 'Rework Reduction', value: '-85%' },
      { label: 'LOD Compliance', value: 'LOD 500 As-Built' }
    ],
    features: [
      'Automated multi-disciplinary spatial clash matrixing',
      'Real-time quantity takeoff and live bill of materials',
      'COBie data integration for instantaneous building handover',
      'Cloud-synchronized field tablet coordination for site crews'
    ]
  },
  {
    id: 'tech-02',
    code: 'DIGITAL-TWIN',
    title: 'Real-Time Digital Twin & IoT Telemetry',
    category: 'Operational Intelligence',
    tagline: 'Live synchronization between physical structures and cloud-based computational twins.',
    description: 'Embedded fiber-optic strain gauges, tilt meters, and thermal sensors stream continuous structural telemetry to an active computational model, allowing predictive performance analysis under real wind, thermal, and seismic loads.',
    stats: [
      { label: 'Active IoT Nodes', value: '25,000+' },
      { label: 'Telemetry Latency', value: '< 250 ms' },
      { label: 'Predictive Accuracy', value: '99.4%' }
    ],
    features: [
      'Modal vibration frequency and damping tracking',
      'Thermal differential stress distribution maps',
      'Predictive structural degradation alerts before cracking',
      'HVAC energy optimization via live occupancy sensing'
    ]
  },
  {
    id: 'tech-03',
    code: 'DRONE-LIDAR',
    title: 'Autonomous Drone Surveying & LiDAR Point Clouds',
    category: 'Site Geomatics',
    tagline: 'Millimeter-grade aerial photogrammetry, volumetric earthwork scans, and automated progress auditing.',
    description: 'Daily automated drone flights capture sub-centimeter georeferenced point clouds. The data is continuously compared against the 4D BIM design model to verify earthwork volumes and structural alignment.',
    stats: [
      { label: 'Scan Accuracy', value: '±1.5 mm' },
      { label: 'Daily Survey Coverage', value: '150 Hectares' },
      { label: 'Survey Time Saved', value: '90%' }
    ],
    features: [
      'Volumetric cut-and-fill automated earthwork calculations',
      'High-resolution orthomosaic historical site archives',
      'Thermal infrared façade inspection for envelope leakage',
      'Automated safety boundary and exclusion zone monitoring'
    ]
  },
  {
    id: 'tech-04',
    code: 'FINITE-ELEMENT',
    title: 'Computational Finite Element Analysis (FEA)',
    category: 'Structural Simulation',
    tagline: 'Advanced non-linear dynamic analysis, seismic time-history simulation, and CFD wind engineering.',
    description: 'Before a single foundation pile is bored, our structural computational team executes non-linear plastic deformation simulations, simulating 2,500-year seismic events and severe typhoon wind gusts.',
    stats: [
      { label: 'Simulations Per Project', value: '450+' },
      { label: 'Material Optimization', value: '18% Steel Saved' },
      { label: 'Seismic Safety Margin', value: '2.5x Code Standard' }
    ],
    features: [
      'Time-history non-linear dynamic seismic modeling',
      'CFD micro-climate and pedestrian comfort simulations',
      'Progressive collapse prevention analysis for tall cores',
      'Post-tensioned tendon friction and long-term creep modeling'
    ]
  }
];
