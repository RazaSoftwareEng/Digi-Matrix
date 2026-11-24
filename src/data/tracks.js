// Central content for Digi Matrix.
// Edit text, durations, modules and services here — every page reads from this file.
// NOTE: durations, stats and testimonials below are placeholders. Replace them with real figures.

export const tracks = [
  {
    slug: 'ebay',
    name: 'eBay',
    title: 'eBay Mastery',
    color: '#E53238',
    tagline: 'Build a profitable eBay store from your first listing to a steady sales engine.',
    summary:
      'Learn product research, listing optimisation, pricing and account health so your eBay store sells consistently and stays compliant.',
    duration: '6 weeks',
    level: 'Beginner → Intermediate',
    format: 'Live classes + recordings',
    modules: [
      'eBay marketplace fundamentals and account setup',
      'Product research and sourcing strategies',
      'Writing listings that rank in Cassini search',
      'Pricing, promoted listings and offers',
      'Shipping policies, returns and customer service',
      'Account health, limits and scaling to more items',
    ],
    outcomes: [
      'A live, optimised eBay store',
      'A repeatable product research process',
      'Confidence managing seller metrics',
    ],
    services: [
      'eBay store setup & branding',
      'Product research & listing optimisation',
      'Promoted listings management',
      'Account health monitoring & VA support',
    ],
  },
  {
    slug: 'amazon',
    name: 'Amazon',
    title: 'Amazon FBA & Seller Central',
    color: '#FF9900',
    tagline: 'Launch and grow private-label and wholesale products on Amazon.',
    summary:
      'Go from product idea to a ranking listing: research, sourcing, Seller Central, FBA logistics, A+ content and PPC.',
    duration: '8 weeks',
    level: 'Beginner → Advanced',
    format: 'Live classes + mentorship',
    modules: [
      'Business models: private label, wholesale, online arbitrage',
      'Product research and validation',
      'Supplier sourcing and negotiation',
      'Seller Central, FBA shipments and inventory',
      'Listing SEO, A+ content and brand registry',
      'Amazon PPC campaigns and launch strategy',
    ],
    outcomes: [
      'A validated product and launch plan',
      'Hands-on Seller Central experience',
      'PPC campaigns you can manage yourself',
    ],
    services: [
      'Seller Central account management',
      'Product hunting & supplier sourcing',
      'Listing SEO & A+ content',
      'Amazon PPC management',
    ],
  },
  {
    slug: 'shopify',
    name: 'Shopify',
    title: 'Shopify Store Building',
    color: '#5EB34A',
    tagline: 'Design, launch and scale your own branded online store.',
    summary:
      'Build a fast, high-converting Shopify store: themes, apps, payments, product pages, dropshipping and conversion optimisation.',
    duration: '6 weeks',
    level: 'Beginner → Intermediate',
    format: 'Live classes + projects',
    modules: [
      'Shopify setup, domains and payments',
      'Themes and store design that converts',
      'Product pages, collections and copywriting',
      'Dropshipping and print-on-demand workflows',
      'Essential apps, email capture and upsells',
      'Analytics and conversion rate optimisation',
    ],
    outcomes: [
      'A fully built, launch-ready store',
      'A product and brand you understand',
      'Tools to track and improve conversions',
    ],
    services: [
      'Custom Shopify store design & development',
      'Theme customisation & speed optimisation',
      'Product upload & store management',
      'Conversion rate optimisation audits',
    ],
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    title: 'Digital Marketing',
    color: '#8B5CF6',
    tagline: 'SEO, content, email and social — the full growth toolkit.',
    summary:
      'Learn how to attract, convert and retain customers online with SEO, content strategy, social media, email and analytics.',
    duration: '8 weeks',
    level: 'All levels',
    format: 'Live classes + case studies',
    modules: [
      'Marketing funnels and customer journeys',
      'SEO: keyword research, on-page and links',
      'Content strategy and copywriting',
      'Social media marketing and community',
      'Email marketing and automation',
      'Google Analytics and reporting',
    ],
    outcomes: [
      'A complete marketing plan for a real brand',
      'Practical SEO and content skills',
      'Reports that show what is working',
    ],
    services: [
      'SEO audits & ongoing SEO',
      'Social media management',
      'Content & copywriting',
      'Email marketing campaigns',
    ],
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    title: 'Meta Ads (Facebook & Instagram)',
    color: '#1877F2',
    tagline: 'Run Facebook and Instagram ads that make money, not just clicks.',
    summary:
      'Master Ads Manager, the Pixel and Conversions API, audiences, creatives and scaling so your ad spend returns real sales.',
    duration: '4 weeks',
    level: 'Beginner → Advanced',
    format: 'Live classes + live ad accounts',
    modules: [
      'Business Manager, Ads Manager and account structure',
      'Pixel, Conversions API and event tracking',
      'Audiences: interest, lookalike and retargeting',
      'Creatives and hooks that convert',
      'Campaign testing, budgets and optimisation',
      'Scaling winners and reading the data',
    ],
    outcomes: [
      'Campaigns built and launched by you',
      'Correct tracking on your store or site',
      'A testing and scaling playbook',
    ],
    services: [
      'Meta Ads campaign management',
      'Pixel & Conversions API setup',
      'Ad creative & copy production',
      'Monthly performance reporting',
    ],
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    title: 'Web Development',
    color: '#06B6D4',
    tagline: 'From HTML to full-stack apps — build real websites and products.',
    summary:
      'Learn modern web development: HTML, CSS, JavaScript, React and back-end basics, finishing with a deployed portfolio project.',
    duration: '12 weeks',
    level: 'Beginner → Intermediate',
    format: 'Live classes + portfolio projects',
    modules: [
      'HTML, CSS and responsive layouts',
      'JavaScript fundamentals and the DOM',
      'Git, GitHub and developer workflow',
      'React: components, state and routing',
      'APIs, Node.js and databases',
      'Deployment and a capstone portfolio project',
    ],
    outcomes: [
      'A deployed portfolio of real projects',
      'Skills for freelancing or junior roles',
      'A working full-stack application',
    ],
    services: [
      'Business & portfolio websites',
      'Custom web applications',
      'Landing pages & funnels',
      'Website maintenance & support',
    ],
  },
  {
    slug: 'ai-bootcamp',
    name: 'AI Bootcamp',
    title: 'AI Bootcamp',
    color: '#C8F55A',
    tagline: 'Use AI tools and automation to work faster and build smarter.',
    summary:
      'A hands-on bootcamp on AI for business and creators: prompting, content generation, automation workflows and building simple AI-powered tools.',
    duration: '6 weeks',
    level: 'All levels',
    format: 'Live bootcamp + projects',
    modules: [
      'How modern AI models work, in plain language',
      'Prompting techniques for reliable results',
      'AI for content, images and video',
      'Automating workflows with no-code tools',
      'AI for e-commerce and marketing',
      'Building a simple AI-powered app',
    ],
    outcomes: [
      'A personal AI toolkit for daily work',
      'Automations that save hours each week',
      'A small AI project you built yourself',
    ],
    services: [
      'AI workflow automation',
      'Custom AI chatbots & assistants',
      'AI content production',
      'AI training for teams',
    ],
  },
]

export const getTrack = (slug) => tracks.find((t) => t.slug === slug)

// Placeholder numbers — replace with real ones.
export const stats = [
  { value: '7', label: 'Specialised tracks' },
  { value: '1:1', label: 'Mentorship support' },
  { value: 'Live', label: 'Classes + recordings' },
  { value: '100%', label: 'Practical, project-based' },
]

// Placeholder testimonials — replace with real student quotes (with permission).
export const testimonials = [
  {
    quote:
      'The Amazon track walked me through every step. I finally understood PPC instead of guessing.',
    name: 'Student name',
    role: 'Amazon FBA track',
  },
  {
    quote:
      'I built my Shopify store during the course and had it live before the final week.',
    name: 'Student name',
    role: 'Shopify track',
  },
  {
    quote:
      'The AI Bootcamp changed how I work. I automated reporting that used to take me a full day.',
    name: 'Student name',
    role: 'AI Bootcamp',
  },
]

export const faqs = [
  {
    q: 'Do I need any experience to join?',
    a: 'No. Every track starts from the fundamentals and builds up to advanced, real-world work.',
  },
  {
    q: 'Are classes live or recorded?',
    a: 'Classes are live so you can ask questions, and every session is recorded so you can rewatch it any time.',
  },
  {
    q: 'Can I hire Digi Matrix instead of learning myself?',
    a: 'Yes. Every course area is also offered as a done-for-you service. Tell us what you need on the contact page.',
  },
  {
    q: 'Will I get a certificate?',
    a: 'Yes, you receive a certificate of completion after finishing the course projects.',
  },
]
