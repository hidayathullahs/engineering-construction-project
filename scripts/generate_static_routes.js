import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://buildmydream-6q5x.onrender.com';

const routes = [
  { path: '/about', title: 'About Build My Dream | Home Construction in Ramanathapuram', desc: 'Learn about Build My Dream, Ramanathapuram premier turnkey residential builder and architectural design firm.' },
  { path: '/services', title: 'Home Construction Services in Ramanathapuram | Build My Dream', desc: 'Comprehensive residential construction, architectural planning, structural engineering, and interior turnkey solutions.' },
  { path: '/projects', title: 'Home Construction Projects in Ramanathapuram | Build My Dream', desc: 'Explore our portfolio of completed luxury villas, contemporary residences, and architectural homes.' },
  { path: '/contact', title: 'Contact Home Builders in Ramanathapuram | Build My Dream', desc: 'Get in touch with our engineering and architectural design team in Ramanathapuram for a free site consultation.' },
  { path: '/locations/ramanathapuram', title: 'Home Builders in Ramanathapuram | Build My Dream', desc: 'Leading residential construction company in Ramanathapuram, Kilakarai, Paramakudi, and Rameswaram.' },
  { path: '/ramanathapuram', title: 'Home Builders in Ramanathapuram | Build My Dream', desc: 'Leading residential construction company in Ramanathapuram, Kilakarai, Paramakudi, and Rameswaram.' },
  { path: '/services/home-construction', title: 'House Construction in Ramanathapuram | Build My Dream', desc: 'End-to-end turnkey home construction with ISO-grade structural standards, laser alignment, and warranty.' },
  { path: '/services/architectural-design', title: 'Architectural Design for Homes in Ramanathapuram | Build My Dream', desc: 'Custom residential architectural design, 3D elevations, Vastu compliance, and modern layouts.' },
  { path: '/services/structural-engineering', title: 'Structural Engineering for Homes in Ramanathapuram | Build My Dream', desc: 'Certified RCC structural engineering, foundation soil analysis, and seismic stability calculations.' },
  { path: '/services/interior-design', title: 'Home Interior Design in Ramanathapuram | Build My Dream', desc: 'Luxury bespoke interior architecture, modular woodwork, concealed lighting, and smart home finishes.' },
  { path: '/services/turnkey-construction', title: 'Turnkey Home Construction in Ramanathapuram | Build My Dream', desc: 'Complete single-source turnkey residential development from soil test to handover.' },
  { path: '/services/renovation', title: 'Home Renovation in Ramanathapuram | Build My Dream', desc: 'Structural modernization, space expansion, and architectural remodeling of existing homes.' },
  { path: '/process', title: 'Our Home Construction Process | Foundation to Handover | Build My Dream', desc: 'Discover our transparent 8-stage residential engineering delivery process.' },
  { path: '/blog', title: 'Home Construction Blog & Guides | Build My Dream', desc: 'Expert advice, construction cost tips, and architectural insights for home builders in Tamil Nadu.' },
  { path: '/guides', title: 'Home Construction Guides & Cost Insights | Build My Dream', desc: 'In-depth educational guides covering residential construction costs, approvals, and builder selection.' },
  { path: '/guides/house-construction-cost-in-ramanathapuram', title: 'House Construction Cost in Ramanathapuram (2026 Guide) | Build My Dream', desc: 'Detailed cost breakdown per sq.ft for building a home in Ramanathapuram, materials pricing, and budgeting tips.' },
  { path: '/guides/how-to-choose-a-home-builder-in-ramanathapuram', title: 'How to Choose the Right Home Builder in Ramanathapuram | Build My Dream', desc: 'Crucial checklist for evaluating contractors, architectural credentials, and turnkey contracts.' },
  { path: '/guides/house-construction-process-foundation-to-handover', title: 'House Construction Process From Foundation to Handover | Build My Dream', desc: 'Step-by-step homeowner guide through site clearance, footing, RCC framing, brickwork, and handover.' },
  { path: '/industries', title: 'Residential & Commercial Construction Services | Build My Dream', desc: 'Specialized structural engineering and turnkey building solutions for residential and commercial clients.' },
  { path: '/technology', title: 'Structural BIM & Engineering Technology | Build My Dream', desc: 'Digital construction management, 3D BIM modeling, and laser total station precision.' },
  { path: '/sustainability', title: 'Sustainable Home Construction in Tamil Nadu | Build My Dream', desc: 'Passive solar design, rainwater harvesting, solar integration, and low-carbon materials.' },
  { path: '/safety-quality', title: 'Safety & Quality Standards in Home Construction | Build My Dream', desc: 'Our rigorous multi-point quality assurance framework and site safety protocols.' },
  { path: '/careers', title: 'Careers & Opportunities in Residential Construction | Build My Dream', desc: 'Join our team of civil engineers, architects, project managers, and site supervisors.' },
  { path: '/projects/horizon-villa-residence', title: 'Horizon Modern Luxury Villa Residences | Build My Dream Projects', desc: 'Horizon Modern Luxury Villa Residences - Luxury Villa residential construction and architectural design.' },
  { path: '/projects/solaria-contemporary-estate', title: 'The Solaria Contemporary Hillside Residence | Build My Dream Projects', desc: 'The Solaria Contemporary Hillside Residence - Contemporary Home residential construction and architectural design.' },
  { path: '/projects/apex-modern-manor', title: 'Apex Urban Luxury Residence | Build My Dream Projects', desc: 'Apex Urban Luxury Residence - Modern Home residential construction and architectural design.' },
  { path: '/projects/serenity-coastal-villa', title: 'The Serenity Coastal Waterfront Villa | Build My Dream Projects', desc: 'The Serenity Coastal Waterfront Villa - Luxury Home residential construction and architectural design.' },
  { path: '/projects/heritage-manor-renovation', title: 'The Heritage Manor Modern Transformation | Build My Dream Projects', desc: 'The Heritage Manor Modern Transformation - Luxury Renovation residential construction and architectural design.' }
];

const distDir = path.resolve('dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('❌ dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf-8');
console.log(`Generating static HTML entrypoints for ${routes.length} routes...`);

for (const route of routes) {
  const targetDir = path.join(distDir, route.path.replace(/^\//, ''));
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const canonicalUrl = `${SITE_URL}${route.path}`;

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);

  // Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace Open Graph Meta
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);

  // Replace Twitter Meta
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.desc}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${canonicalUrl}" />`);

  const outFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(outFile, html, 'utf-8');
  console.log(`  ✓ Generated ${route.path} -> ${path.relative(process.cwd(), outFile)}`);
}

console.log(`\n🎉 Successfully pre-generated all ${routes.length} static route entrypoints in dist/!`);
