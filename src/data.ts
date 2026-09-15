export interface ServiceItem {
  id: string;
  title: string;
  category: 'Design & Consultancy' | 'Engineering & Commissioning' | 'Testing & Maintenance' | 'Specialized Operations';
  description: string;
}

export interface IndustryItem {
  name: string;
  iconName: string;
}

export interface PillarItem {
  title: string;
  subTitle: string;
  desc: string;
}

export interface WhyChooseUsItem {
  title: string;
  desc: string;
}

export const CONTACT_INFO = {
  companyName: 'Powertech Engineering Solution LLP',
  tagline: 'POWERING RELIABILITY & DELIVERING EXCELLENCE',
  headline: 'END-TO-END ENGINEERING SOLUTIONS FOR RELIABLE ELECTRICAL SYSTEMS',
  subHeadline: 'DELIVERING INNOVATION ACROSS THE ELECTRICAL VALUE CHAIN.',
  description: 'Powertech Engineering Solution LLP delivers innovative, reliable and sustainable solutions across the entire electrical value chain.',
  reliablePartner: 'YOUR RELIABLE PARTNER FOR COMPREHENSIVE ELECTRICAL SERVICES',
  phones: [
    '+91 98463 41472',
    '+91 94463 67886',
    '+91 75589 46983'
  ],
  email: 'info@powertecheng.co.in',
  website: 'www.powertecheng.co.in',
  address: {
    building: "B.No - 23/112/C7, Paul's Corner Building",
    landmark: 'Near Govt. ITI, HMT Road',
    area: 'Kalamassery (P.O)',
    cityStatePin: 'Ernakulam – 683104, Kerala, India',
    full: "B.No - 23/112/C7, Paul's Corner Building, Near Govt. ITI, HMT Road, Kalamassery (P.O), Ernakulam – 683104, Kerala, India"
  }
};

export const CORE_PILLARS: PillarItem[] = [
  {
    title: 'SAFETY FIRST',
    subTitle: 'Committed to Zero Harm',
    desc: 'Ensuring zero incident compliance across all heavy EHV, HT, and LT installations.'
  },
  {
    title: 'ENGINEERING EXCELLENCE',
    subTitle: 'Quality Driven Solutions',
    desc: 'Deploying certified Class-A design practices and top-grade, fully tested equipment.'
  },
  {
    title: 'ENERGY EFFICIENT',
    subTitle: 'Sustainable Tomorrow',
    desc: 'Implementing harmonic mitigation, conservation tactics, and green power integration.'
  },
  {
    title: 'CUSTOMER FOCUSED',
    subTitle: 'Your Reliability, Our Commitment',
    desc: 'Tailoring rapid diagnostics, custom preventative maintenance, and 24/7 AMC response.'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: 'Experienced Engineering Team',
    desc: 'Led by licensed electrical professionals with decades of field-tested high-voltage experience.'
  },
  {
    title: 'Quality & Compliance Assured',
    desc: 'Strict alignment with CEA regulations, IS/IEC standards, and state electrical inspectorate criteria.'
  },
  {
    title: 'Advanced Tools & Testing Equipment',
    desc: 'Equipped with class-leading thermal imagers, relay test sets, and cable fault locators.'
  },
  {
    title: 'Timely Execution & Reliable Support',
    desc: 'Delivering turnkey switchyards and industrial electrification on-time, backed by a fast support desk.'
  },
  {
    title: 'Long Term Partnership & Reliability',
    desc: 'Establishing enduring client agreements through trustworthy annual maintenance and support.'
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  { name: 'Manufacturing Industries', iconName: 'Factory' },
  { name: 'Utilities & Power Sector', iconName: 'FlameKindling' }, // representing electrical/power
  { name: 'Commercial Establishments', iconName: 'Building2' },
  { name: 'Infrastructure Projects', iconName: 'Construction' },
  { name: 'Institutions & Public Sector', iconName: 'School' },
  { name: 'Oil, Gas & Petrochemicals', iconName: 'Droplet' }
];

export const ALL_SERVICES: ServiceItem[] = [
  // 1. Design & Consultancy
  {
    id: 's1',
    title: 'Electrical Power Distribution System Design & Consultancy',
    category: 'Design & Consultancy',
    description: 'Complete feasibility studies, single line diagrams (SLD), load calculations, and substation layout drawings for industrial power distribution networks.'
  },
  {
    id: 's2',
    title: 'Power Quality Analysis, Harmonic Studies & Energy Management',
    category: 'Design & Consultancy',
    description: 'Detailed analysis of wave distortions and harmonics to prevent component degradation, coupled with custom power factor improvement strategies.'
  },
  {
    id: 's3',
    title: 'Energy Management Systems',
    category: 'Design & Consultancy',
    description: 'Integration of real-time monitoring devices, smart sub-metering, and digital control hubs to track power metrics and reduce idle losses.'
  },
  {
    id: 's4',
    title: 'Regulatory Consultancy',
    category: 'Design & Consultancy',
    description: 'Liaison support and consulting for securing state grid connections, electrical inspectorate clearances, and statutory permit compliance.'
  },
  {
    id: 's5',
    title: 'Electrical Safety Audits, Arc Flash Studies & Protection Coordination',
    category: 'Design & Consultancy',
    description: 'Comprehensive risk assessments, fault current calculations, safety boundary definitions, and protective relay settings coordination.'
  },
  {
    id: 's6',
    title: 'Energy Conservation, Demand Side Management',
    category: 'Design & Consultancy',
    description: 'Design of optimal load shifting policies, energy storage setups, and peak demand charge mitigation frameworks.'
  },

  // 2. Engineering & Commissioning
  {
    id: 's7',
    title: 'HT/LT Electrical System Engineering, Installation & Commissioning',
    category: 'Engineering & Commissioning',
    description: 'Turnkey installation of heavy distribution switchboards, busducts, control panels, and internal power distribution networks.'
  },
  {
    id: 's8',
    title: 'EHV, HT & LT Substation Construction, Testing & Maintenance',
    category: 'Engineering & Commissioning',
    description: 'End-to-end design and execution of high-capacity switchyards, outdoor grid structures, and indoor distribution transformer bays.'
  },
  {
    id: 's9',
    title: 'Industrial Electrification & Infrastructure Development',
    category: 'Engineering & Commissioning',
    description: 'Power grid design and layout for complete new industrial sites, factories, steel mills, petrochemical setups, and technology parks.'
  },
  {
    id: 's10',
    title: 'EV Charging Infrastructure Design, Installation & Maintenance',
    category: 'Engineering & Commissioning',
    description: 'Deploying high-speed fleet charging grids, corporate fast-chargers, and power supply links conforming to EV standards.'
  },
  {
    id: 's11',
    title: 'Street Lighting, High Mast Lighting & Smart Lighting Solutions',
    category: 'Engineering & Commissioning',
    description: 'Efficient public roadway illumination, factory perimeter security floodlights, and automated smart dimmer controls.'
  },
  {
    id: 's12',
    title: 'Cable Laying (HT/LT) & Underground Distribution Systems',
    category: 'Engineering & Commissioning',
    description: 'Precision trenching, termination, jointing, and laying of armored high-tension and low-tension underground power lines.'
  },

  // 3. Testing & Maintenance
  {
    id: 's13',
    title: 'Annual Maintenance Contracts (AMC) for Electrical Installations',
    category: 'Testing & Maintenance',
    description: 'Customized preventative maintenance plans with scheduled shutdowns, physical terminal tightening, and priority emergency troubleshooting.'
  },
  {
    id: 's14',
    title: 'Transformer, Switchgear, Relay & Protection System Testing',
    category: 'Testing & Maintenance',
    description: 'Detailed diagnostic assessments including insulation tests, relay tripping speed calibrations, and breaker contact wear checks.'
  },
  {
    id: 's15',
    title: 'Transformer Routine Tests at Field (As per IS / IEC Standards)',
    category: 'Testing & Maintenance',
    description: 'On-site measurements of voltage ratio, winding resistance, insulation resistance, magnetic balance, and vector group checks.'
  },
  {
    id: 's16',
    title: 'Electrical Inspection, Thermal Imaging & Preventive Maintenance',
    category: 'Testing & Maintenance',
    description: 'Infrared thermography sweeps to identify hot spots, loose terminations, and unbalanced phases prior to failure.'
  },
  {
    id: 's17',
    title: 'Electrical Testing, Commissioning & Statutory Compliance Services',
    category: 'Testing & Maintenance',
    description: 'Pre-commissioning tests for official electrical inspectorate submission, certifying that parameters match state rules.'
  },

  // 4. Specialized Operations
  {
    id: 's18',
    title: 'Total Support for Power Procurement through Open Access',
    category: 'Specialized Operations',
    description: 'Guiding corporate consumers through power exchanges to purchase cost-effective energy from alternative solar, wind, or private suppliers.'
  },
  {
    id: 's19',
    title: 'Third Party Witnessing for Transformers, Gensets, HT & LT Panels etc.',
    category: 'Specialized Operations',
    description: 'Independent, objective testing validation and certification on behalf of buyers during factory acceptance tests (FAT).'
  },
  {
    id: 's20',
    title: 'Transformer Oil Filtration & Regeneration',
    category: 'Specialized Operations',
    description: 'On-site dehydration, degasification, and vacuum filtration of transformer oil to restore optimal dielectric strength.'
  },
  {
    id: 's21',
    title: 'Electrical Asset Valuation, Technical Due Diligence & Condition Assessment',
    category: 'Specialized Operations',
    description: 'Providing comprehensive reports on existing asset lifecycles, load limits, depreciation metrics, and capital expenditure needs.'
  },
  {
    id: 's22',
    title: 'Operation & Maintenance (O&M) of Electrical Distribution Networks',
    category: 'Specialized Operations',
    description: 'Full-time deployment of licensed operators, technicians, and safety managers to run private utility grids and plant substations.'
  },
  {
    id: 's23',
    title: 'Spares Supply for Transformers, HT/LT Panels, Switchgear, Relays & Electrical Equipment',
    category: 'Specialized Operations',
    description: 'Sourcing and supply of genuine, certified replacement contacts, seals, relay units, fuses, and custom bushings.'
  },
  {
    id: 's24',
    title: 'HT & LT Cable Fault Location Identification',
    category: 'Specialized Operations',
    description: 'Deploying high-precision surge generators and acoustics to pinpoint the exact site of underground cable insulation failures.'
  },
  {
    id: 's25',
    title: 'HDPE Pipe Mirror Welding / Jointing',
    category: 'Specialized Operations',
    description: 'High-quality butt fusion jointing of heavy density polyethylene pipes used for cable protection ducts and water/industrial lines.'
  },
  {
    id: 's26',
    title: 'Training & Technical Consultancy for Utilities, Industries & Institutions',
    category: 'Specialized Operations',
    description: 'Custom specialized workshops on high-voltage safety procedures, relay handling, grid regulations, and energy efficiency metrics.'
  }
];

export interface TimelineStep {
  phase: string;
  title: string;
  description: string;
  icon: string;
}

export const timelineSteps: TimelineStep[] = [
  {
    phase: 'PHASE 01',
    title: 'Feasibility & Load Assessment',
    description: 'We audit active factory machinery and peak loads, assessing grid requirements for EHV, HT, or LT setups.',
    icon: 'Lightbulb'
  },
  {
    phase: 'PHASE 02',
    title: 'EHV / HT System Design',
    description: 'Drafting certified single-line diagrams, substation layouts, and load coordination matrices.',
    icon: 'Compass'
  },
  {
    phase: 'PHASE 03',
    title: 'Certified Procurement',
    description: 'Sourcing premium, fully tested transformers, switchgear, relays, and heavy cables from reputable makers.',
    icon: 'ShoppingCart'
  },
  {
    phase: 'PHASE 04',
    title: 'Heavy Erection & Laying',
    description: 'Laying armored underground cables and constructing secure, robust switchyards on-site.',
    icon: 'Hammer'
  },
  {
    phase: 'PHASE 05',
    title: 'Statutory Safety Inspection',
    description: 'Conducting comprehensive safety audits and arc-flash simulations to secure inspectorate approvals.',
    icon: 'ShieldCheck'
  },
  {
    phase: 'PHASE 06',
    title: 'Commissioning & Sync',
    description: 'Performing high-voltage test routines and synchronizing the completed plant safely to the grid.',
    icon: 'Settings'
  },
  {
    phase: 'PHASE 07',
    title: 'O&M and AMC Lifecycle',
    description: '24/7 support, scheduled thermal imaging sweeps, and preventative shutdowns under customized SLA agreements.',
    icon: 'Activity'
  }
];
