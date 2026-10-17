// ---------------------------------------------------------------------------
// Bermutex Investment Limited: all site copy lives here so it is easy to edit.
// ---------------------------------------------------------------------------

export const COMPANY = {
  name: 'Bermutex Investment Limited',
  short: 'Bermutex',
  phoneDisplay: '+234 808 831 7742',
  phoneIntl: '2348088317742',
  email: 'bermutexinvestmentltd@gmail.com',
  location: 'Umuahia, Abia State, Nigeria',
};

export const DEFAULT_WA_MESSAGE =
  "Hello Bermutex Investment Limited, I came across your website and I'd like to make an enquiry about your services. Please get back to me. Thank you.";

export const mailLink = (subject = 'Enquiry from the Bermutex website') =>
  `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}`;

export const waLink = (message = DEFAULT_WA_MESSAGE) =>
  `https://wa.me/${COMPANY.phoneIntl}?text=${encodeURIComponent(message)}`;

// Construction equipment photos (public/images/construction/)
export const CONSTRUCTION_GALLERY = [
  { src: '/images/construction/cat-motor-grader-2.jpg', alt: 'Caterpillar motor grader with a ripper-scarifier, seen from the front left' },
  { src: '/images/construction/cat-motor-grader-1.jpg', alt: 'Caterpillar motor grader with its blade lowered on a paved yard' },
  { src: '/images/construction/cat-motor-grader-3.jpg', alt: 'Caterpillar motor grader with a rear ripper attachment, rear three-quarter view' },
  { src: '/images/construction/cat-motor-grader-6.jpg', alt: 'Side profile of a Caterpillar motor grader with the blade and cab visible' },
  { src: '/images/construction/cat-motor-grader-5.jpg', alt: 'Caterpillar motor grader viewed from the side, showing the blade underneath' },
  { src: '/images/construction/cat-motor-grader-4.jpg', alt: 'Rear view of a Caterpillar motor grader on a paved site' },
];

export const CONSTRUCTION_FEATURE = {
  photo: '/images/construction/cat-motor-grader-2.jpg',
  alt: 'Caterpillar motor grader ready for road and site preparation',
  eyebrow: 'Construction & Heavy Equipment',
  title: 'Heavy plant that gets the ground ready',
  text: 'Building and civil works backed by proper plant: graders, earthmoving equipment and skilled crews, from site preparation to finished roads and foundations.',
  to: '/divisions/real-estate',
  linkLabel: 'See our construction work',
};

export const DIVISIONS = [
  {
    slug: 'real-estate',
    number: '01',
    name: 'Real Estate & Property Development',
    shortName: 'Real Estate & Property',
    icon: 'building',
    galleryTitle: 'Construction & heavy equipment',
    galleryIntro: 'Building and civil works are supported by proper plant, including Caterpillar motor graders for site preparation, grading and road works.',
    gallery: CONSTRUCTION_GALLERY,
    tagline: 'Planning, building and managing spaces that hold their value.',
    summary:
      'Property development, construction, project management, town planning, and estate and facility management.',
    intro:
      'From the first site plan to the day-to-day care of a finished estate, our real estate division handles every stage of the property lifecycle. We plan carefully, build to standard and manage assets so they keep their value for years to come.',
    services: [
      { title: 'Property Development', text: 'Residential and commercial developments delivered from concept and approvals through to handover.' },
      { title: 'Construction Works', text: 'Building and civil construction carried out by skilled crews under strict quality and safety control.' },
      { title: 'Project Management', text: 'Cost, schedule and contractor management so projects finish on time and within budget.' },
      { title: 'Town Planning', text: 'Layout design, land use planning and regulatory guidance for estates and communities.' },
      { title: 'Estate Management', text: 'Tenant relations, rent administration and the long-term care of property portfolios.' },
      { title: 'Facility Management', text: 'Maintenance, security, cleaning and utilities coordination for buildings in active use.' },
    ],
  },
  {
    slug: 'environmental',
    number: '02',
    name: 'Environmental & Waste Management',
    shortName: 'Environmental & Waste',
    icon: 'recycle',
    tagline: 'Cleaner streets, safer communities and a healthier environment.',
    summary:
      'Waste collection, treatment, disposal and recycling, remediation, cleaning, landscaping, and fumigation and pest control.',
    intro:
      'Our environmental division keeps homes, businesses and public spaces clean, safe and healthy. We collect, treat and dispose of waste responsibly, recover value through recycling, restore damaged sites and keep surroundings green and pest-free.',
    services: [
      { title: 'Waste Collection & Disposal', text: 'Scheduled refuse collection for households, estates, markets and commercial premises, with safe and compliant disposal.' },
      { title: 'Waste Treatment & Recycling', text: 'Sorting, treatment and recycling that turns waste into recovered resources instead of landfill.' },
      { title: 'Environmental Remediation', text: 'Clean-up and restoration of polluted or degraded land and water.' },
      { title: 'Environmental Management', text: 'Practical environmental programmes, compliance support and sanitation planning for organisations and communities.' },
      { title: 'Cleaning Services', text: 'Professional cleaning for offices, estates, facilities and post-construction sites.' },
      { title: 'Landscaping', text: 'Design, planting and maintenance of green spaces, lawns and outdoor environments.' },
      { title: 'Fumigation & Pest Control', text: 'Safe, effective treatment against pests for homes, warehouses and commercial spaces.' },
    ],
  },
  {
    slug: 'agro-allied',
    number: '03',
    name: 'Agro-Allied & Export',
    shortName: 'Agro-Allied & Export',
    icon: 'leaf',
    tagline: 'From the farm to local and international markets.',
    summary:
      'Food production and processing, sale of agricultural produce, cocoa export, timber, and kennel services.',
    intro:
      "Agriculture remains one of Nigeria's greatest strengths. Our agro-allied division produces, processes and trades quality produce, exports cocoa to international buyers and supplies timber, while also offering professional kennel services.",
    services: [
      { title: 'Food Production & Processing', text: 'Cultivation and processing of food products to consistent quality standards.' },
      { title: 'Sale of Agricultural Produce', text: 'Reliable supply of fresh and processed produce to traders, businesses and institutions.' },
      { title: 'Cocoa Export', text: 'Sourcing, quality grading and export of Nigerian cocoa to international markets.' },
      { title: 'Timber Activities', text: 'Supply of quality timber for construction, furniture and industrial use.' },
      { title: 'Kennel Services', text: 'Professional care, boarding and management of dogs.' },
    ],
  },
  {
    slug: 'marketing',
    number: '04',
    name: 'Marketing & Business Services',
    shortName: 'Marketing & Business',
    icon: 'megaphone',
    tagline: 'Helping brands, events and businesses grow.',
    summary:
      'Marketing, advertising, event management, business development, and plant and equipment management.',
    intro:
      'We help organisations reach their audience, run memorable events and grow with confidence. The division also manages plant and equipment so that projects and operations keep moving.',
    services: [
      { title: 'Marketing Services', text: 'Market research, campaign planning and brand positioning that drive results.' },
      { title: 'Advertising', text: 'Creative advertising across outdoor, print, broadcast and digital channels.' },
      { title: 'Event Management', text: 'End-to-end planning and delivery of corporate, public and private events.' },
      { title: 'Business Development', text: 'Strategy, partnerships and growth support for new and established businesses.' },
      { title: 'Plant & Equipment Management', text: 'Leasing, deployment and maintenance of plant and heavy equipment.' },
    ],
  },
  {
    slug: 'oil-and-gas',
    number: '05',
    name: 'Oil & Gas Services',
    shortName: 'Oil & Gas Services',
    icon: 'drop',
    tagline: 'Dependable support for the energy sector.',
    summary:
      'Reliable support services for operators and contractors across the oil and gas sector.',
    intro:
      'Bermutex provides dependable support services to operators and contractors in the oil and gas industry. We bring the same discipline, safety culture and accountability that define all our divisions.',
    services: [
      { title: 'Oil & Gas Support Services', text: 'Operational support for operators and contractors, delivered with strict attention to safety and compliance.' },
      { title: 'Logistics & Supply', text: 'Coordination of materials, equipment and personnel to keep operations running.' },
      { title: 'Environmental Support', text: 'Waste handling and site remediation support, drawing on our environmental expertise.' },
    ],
  },
];

export const ENGAGEMENT = {
  photo: '/images/belgium-ambassador-meeting.jpg',
  caption: 'Business meeting with the Belgium Ambassador to Nigeria in Abuja Nigeria',
};

export const STAFF = {
  eyebrow: 'Our Staff',
  title: 'The hands that keep Bermutex moving',
  text: 'Behind every clean street, completed project and satisfied client is a dedicated team. Our staff show up early, work through sun and rain, and go the extra mile without being asked. Their diligence and daily sacrifices are the reason Bermutex keeps growing, and we are proud of every one of them.',
  photos: [
    { src: '/images/staff/staff-1.jpg', alt: 'Bermutex staff member clearing waste at a site' },
    { src: '/images/staff/staff-2.jpg', alt: 'Bermutex staff collecting refuse into bags' },
    { src: '/images/staff/staff-3.jpg', alt: 'Bermutex team at work during a clean-up exercise' },
    { src: '/images/staff/staff-4.jpg', alt: 'Bermutex staff in safety vests picking up litter' },
  ],
};

export const VALUES = [
  { title: 'Integrity', text: 'We are honest and transparent in every engagement.' },
  { title: 'Excellence', text: 'We set high standards and deliver on them, on time.' },
  { title: 'Accountability', text: 'We take ownership of our work and its results.' },
  { title: 'Sustainability', text: 'We build for the long term and care for the environment.' },
];

// Each leader has several spreads: a photo on the left page and the write-up on the right page.
export const LEADERS = [
  {
    id: 'ceo',
    name: 'Catechist Ambrose Jonah',
    role: 'Chief Executive Officer',
    badge: 'CEO',
    spreads: [
      {
        photo: '/images/ceo.jpg',
        photoPos: 'center 25%',
        caption: 'Catechist Ambrose Jonah, Chief Executive Officer',
        blocks: [
          { type: 'eyebrow', text: 'Chief Executive Officer' },
          { type: 'title', text: 'Catechist Ambrose Jonah' },
          { type: 'p', text: 'Catechist Ambrose Jonah is a community leader and public administrator. He currently serves as Deputy General Manager of the Abia State Environmental Protection Agency (ASEPA) for the Umuahia Zone under the administration of Governor Alex Otti. He oversees urban sanitation, waste management and environmental enforcement across one of the state’s most important zones.' },
          { type: 'h', text: 'Waste Management & Urban Cleanliness' },
          { type: 'list', items: [
            'Leading the drive for mandatory waste bagging across households and commercial premises in Umuahia, to make refuse collection faster and more organised.',
            'Directing the de-silting of gutters, channels and waterways across Umuahia North and South to reduce flash flooding in the city.',
            'Championing plans for recycling plants in Umuahia and Aba, moving the state from simple waste dumping towards sustainable resource recovery.',
          ] },
        ],
      },
      {
        photo: '/images/ceo-public.jpg',
        photoPos: 'center 18%',
        caption: 'In public service',
        blocks: [
          { type: 'h', text: 'Community Partnership' },
          { type: 'list', items: [
            'Working directly with town union Presidents-General across Umuahia North and South to eliminate illegal dump sites, open burning and wandering cattle within the metropolis.',
            'Monitoring compliance during the monthly environmental sanitation exercise at high-density hubs such as Isi-Gate, major markets and residential layouts.',
          ] },
          { type: 'h', text: 'Reform & Protection of Workers' },
          { type: 'list', items: [
            'Restructuring field monitoring task forces so that enforcement officers engage residents without violence.',
            'Speaking up for the safety and dignity of street sweepers and sanitation workers, who often face harassment from the public.',
          ] },
        ],
      },
      {
        photo: '/images/ceo-office.jpg',
        photoPos: '66% center',
        caption: 'Catechist Ambrose Jonah at his desk',
        blocks: [
          { type: 'h', text: 'Core Strengths' },
          { type: 'kv', items: [
            ['Environmental Management', 'Hands-on expertise in urban sanitation, municipal waste strategy and environmental enforcement.'],
            ['Administrative Leadership', 'Manages operational logistics, task forces and personnel.'],
            ['Policy & Public Advocacy', 'Leads public orientation on waste bagging, drainage maintenance and anti-littering compliance.'],
            ['Faith & Community Leadership', 'As a Catechist, holds a recognised leadership role in his church community, reflecting strong ethical standing and service.'],
          ] },
        ],
      },
      {
        photo: '/images/ceo-speaking.jpg',
        photoPos: '45% center',
        caption: 'Catechist Ambrose Jonah addressing an audience',
        blocks: [
          { type: 'h', text: 'In Pictures' },
          { type: 'p', text: 'Moments from his work in public service and community leadership. Tap a photo to view it in full.' },
          { type: 'gallery', items: [
            { src: '/images/ceo-meeting-1.jpg', alt: 'Catechist Ambrose Jonah at a business meeting', pos: 'center 62%' },
            { src: '/images/ceo-meeting-2.jpg', alt: 'Catechist Ambrose Jonah at a business meeting with guests', pos: 'center 62%' },
            { src: '/images/ceo-guest.jpg', alt: 'Catechist Ambrose Jonah with a guest', pos: 'center 30%' },
            { src: '/images/ceo-asepa-feature.jpg', alt: 'ASEPA Umuahia Zone feature on Catechist Ambrose Jonah', pos: 'center 30%' },
            { src: '/images/ceo-public.jpg', alt: 'Catechist Ambrose Jonah at a public event' },
            { src: '/images/ceo-office.jpg', alt: 'Catechist Ambrose Jonah at his desk' },
          ] },
        ],
      },
    ],
  },
  {
    id: 'md',
    name: 'Mrs Jonah Rita',
    role: 'Managing Director',
    badge: 'MD',
    spreads: [
      {
        photo: '/images/md.jpg',
        photoPos: 'center 25%',
        caption: 'Mrs Jonah Rita, Managing Director',
        blocks: [
          { type: 'eyebrow', text: 'Managing Director' },
          { type: 'title', text: 'Mrs Jonah Rita' },
          { type: 'p', text: 'Mrs Jonah Rita is the Managing Director of Bermutex Investment Limited. She oversees the day-to-day running of the company and works closely with the Chief Executive Officer and the Chief Financial Officer to keep every division focused on quality, accountability and client satisfaction.' },
          { type: 'h', text: 'Her Role' },
          { type: 'list', items: [
            'Directing daily operations across the company’s five divisions.',
            'Coordinating teams, partners and project delivery.',
            'Upholding the company’s standards of integrity and service.',
          ] },
        ],
      },
      {
        photo: '/images/md-studio.jpg',
        photoPos: 'center 20%',
        caption: 'Mrs Jonah Rita',
        blocks: [
          { type: 'h', text: 'In Pictures' },
          { type: 'p', text: 'Tap a photo to view it in full.' },
          { type: 'gallery', items: [
            { src: '/images/md.jpg', alt: 'Mrs Jonah Rita in traditional attire', pos: 'center 30%' },
            { src: '/images/md-smile.jpg', alt: 'Mrs Jonah Rita smiling', pos: 'center 57%' },
            { src: '/images/md-casual.jpg', alt: 'Mrs Jonah Rita', pos: 'center 58%' },
            { src: '/images/md-studio.jpg', alt: 'Mrs Jonah Rita in a studio portrait', pos: 'center 25%' },
          ] },
        ],
      },
    ],
  },
  {
    id: 'cfo',
    name: 'Chukwulobe Ndonwanne Leonard',
    role: 'Chief Financial Officer',
    badge: 'CFO',
    spreads: [
      {
        photo: '/images/cfo.jpg',
        photoPos: 'center 15%',
        caption: 'Chukwulobe Ndonwanne Leonard, Chief Financial Officer',
        blocks: [
          { type: 'eyebrow', text: 'Chief Financial Officer' },
          { type: 'title', text: 'Chukwulobe Ndonwanne Leonard' },
          { type: 'p', text: 'Leonard is a Chartered Accountant, Taxation Specialist, Forensic Accountant and Procurement Management professional with over 15 years of experience across public practice, corporate advisory, public sector management and academic lecturing.' },
          { type: 'h', text: 'Career Journey' },
          { type: 'p', text: 'He began his career in Lagos as an Audit Trainee at Emeka Ifezulike & Co., building a strong foundation in financial auditing, statutory filings and client advisory. He then joined KCBC Partners, a mid-sized Lagos accounting firm, and rose to Audit Senior. There he led complex audit engagements, managed client compliance portfolios and assessed internal control systems across several industries.' },
        ],
      },
      {
        photo: '/images/cfo-event.jpg',
        photoPos: '52% 30%',
        caption: 'Among colleagues and friends',
        blocks: [
          { type: 'h', text: 'Advisory & Regulatory Expertise' },
          { type: 'kv', items: [
            ['Consultant to the Corporate Affairs Commission (CAC)', 'Advises on business compliance, corporate filings and regulatory matters.'],
            ['Tax Consultant', 'Guides corporate clients on strategic tax planning, statutory returns and the resolution of tax disputes under Nigerian tax law.'],
          ] },
          { type: 'h', text: 'Professional Credentials' },
          { type: 'list', items: [
            'Member, Institute of Chartered Accountants of Nigeria (ICAN)',
            'Member, Chartered Institute of Taxation of Nigeria (CITN)',
            'Fellow, Certified Forensic Accountant, specialising in internal controls, fraud risk assessment and financial investigation',
            'Master’s Degree in Procurement Management, Federal University of Technology, Owerri (FUTO), focused on strategic sourcing, public procurement frameworks and contract administration',
          ] },
        ],
      },
      {
        photo: '/images/cfo.jpg',
        photoPos: 'center 12%',
        photoZoom: 1.35,
        caption: 'Integrity, governance and capacity building',
        blocks: [
          { type: 'h', text: 'Mentorship & Education' },
          { type: 'p', text: 'As a lecturer at ICAN tuition centres in Umuahia, Leonard has taught and mentored students in Taxation, Auditing and Financial Reporting, and many have gone on to qualify as Chartered Accountants. He also co-founded Skill Bridge Tutors in Umuahia, which prepares candidates to excel in their professional accountancy exams.' },
          { type: 'h', text: 'Guiding Principles' },
          { type: 'p', text: 'Integrity, sound governance and capacity building drive everything he does. He is committed to bridging academic knowledge and statutory compliance, and to delivering excellence in corporate finance.' },
        ],
      },
    ],
  },
];
