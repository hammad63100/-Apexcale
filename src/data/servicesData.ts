import type { IconName } from '../components/icons';

// Import service images provided in src/assets/images
import pResearchImg from '../assets/images/Product Research & Validation.jpg.jpeg';
import trademarkImg from '../assets/images/Trademark Registration.jpg.jpeg';
import companyImg from '../assets/images/Company Formation..jpg.jpeg';
import ppcImg from '../assets/images/Amazon PPC & Advertising Management.jpg.jpeg';
import seoImg from '../assets/images/Listing & SEO Optimization.jpg.jpeg';
import accountImg from '../assets/images/Full Account Management.jpg.jpeg';
import launchImg from '../assets/images/Product Launch Strategy.jpg.jpeg';
import aplusImg from '../assets/images/A+ Content & Creative Design.jpg.jpeg';
import brandImg from '../assets/images/Brand Registry & Protection.jpg.jpeg';

export interface ServiceDetailItem {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  category: string;
  gradient: 'g1' | 'g2' | 'g3' | 'g4';
  icon: IconName;
  image: string;
  shortDesc: string;
  heroLead: string;
  highlights: string[];
  whyChoose: {
    title: string;
    description: string;
    icon: IconName;
  }[];
  stats: {
    value: string;
    label: string;
    subtext: string;
  }[];
  processSteps: {
    stepNum: string;
    title: string;
    description: string;
    icon?: IconName;
  }[];
  deliverables: string[];
  keyBenefits: string[];
}

export const detailedServices: ServiceDetailItem[] = [
  {
    slug: 'product-research-validation',
    num: '01',
    title: 'Product Research & Validation',
    tagline: 'Validate Market Demand, Profit Margins & Capital Safety Before Launching',
    category: 'Market Intelligence & Launch Strategy',
    gradient: 'g1',
    icon: 'searchTrend',
    image: pResearchImg,
    shortDesc:
      'Before a single dollar goes into advertising or inventory, we analyze demand trends, competition density, and margins to validate product opportunities with real data.',
    heroLead:
      'We eliminate guesswork by reverse-engineering competitor profitability, seasonal demand curves, real manufacturing costs, and customer review sentiment. Build on solid ground from day one.',
    highlights: [
      'Demand & Velocity Analysis',
      'Net Profit Margin Modeling',
      'Competitor Review Sentiment Mining',
      'Capital Risk Mitigation Blueprint',
    ],
    whyChoose: [
      {
        title: 'Data-Driven Demand Modeling',
        description:
          'We leverage proprietary market intelligence tools to accurately forecast daily sales velocity, search volume seasonality, and revenue ceilings.',
        icon: 'barChart',
      },
      {
        title: 'True Margin & Cost Breakdown',
        description:
          'Comprehensive landing cost calculations including FBA fulfillment fees, storage, freight, tariffs, and realistic initial PPC overhead.',
        icon: 'trendingUp',
      },
      {
        title: 'Competitor Weakness Mining',
        description:
          'AI-assisted sentiment analysis of thousands of 1-to-3 star competitor reviews to identify unmet buyer needs and product differentiation hooks.',
        icon: 'target',
      },
      {
        title: 'Capital Protection Architecture',
        description:
          'Clear go/no-go scorecards so you never tie up five or six figures in low-margin, saturated, or high-return rate products.',
        icon: 'shieldCheck',
      },
    ],
    stats: [
      {
        value: '94%',
        label: 'Validation Accuracy',
        subtext: 'Products meeting projected ROI',
      },
      {
        value: '4.2x',
        label: 'Risk Reduction',
        subtext: 'Versus unvalidated launches',
      },
      {
        value: '35%+',
        label: 'Target Net Margins',
        subtext: 'Built into sourcing criteria',
      },
    ],
    processSteps: [
      {
        stepNum: '01',
        title: 'Niche Discovery & Market Audit',
        description:
          'Deep-dive scan across high-growth subcategories, monitoring consumer search shifts, keyword velocity, and emerging market gaps.',
        icon: 'searchTrend',
      },
      {
        stepNum: '02',
        title: 'Competitor & Margin Modeling',
        description:
          'Detailed unit economics, supplier benchmark pricing, shipping logistics, and Amazon fee structure modeling.',
        icon: 'barChart',
      },
      {
        stepNum: '03',
        title: 'Product Differentiation Strategy',
        description:
          'Formulating custom product improvements, bundle angles, and patent/IP clearance checks to establish competitive moats.',
        icon: 'target',
      },
      {
        stepNum: '04',
        title: 'Go-To-Market Feasibility Report',
        description:
          'Actionable executive summary detailing pricing strategy, launch ad budget, initial MOQ guidance, and timeline expectations.',
        icon: 'rocket',
      },
    ],
    deliverables: [
      'Comprehensive Market Viability Report (PDF & Data Sheet)',
      'Keyword Search Volume & Organic Ranking Map',
      'Competitor Pricing, Revenue & Margin Matrix',
      'Full Amazon FBA Fee & Landed Cost Breakdown',
      'Review Sentiment & Customer Pain Point Analysis',
      'Product Specification & Packaging Improvement Brief',
      'Patent & Trademark High-Level Clearance Check',
      'Launch Velocity & Initial Inventory Forecasting Model',
    ],
    keyBenefits: [
      'Prevent costly inventory mistakes before placing factory purchase orders',
      'Gain clear visibility into realistic profit margins post-PPC expenses',
      'Launch products with built-in competitive advantages buyers actually care about',
      'Enter niches with proven sustainable velocity and high lifetime value potential',
    ],
  },
  {
    slug: 'trademark-registration',
    num: '02',
    title: 'Trademark Registration',
    tagline: 'Legal Brand Protection & Foundation for Amazon Brand Registry Access',
    category: 'Intellectual Property & Legal Security',
    gradient: 'g2',
    icon: 'shieldCheck',
    image: trademarkImg,
    shortDesc:
      "A registered trademark is the foundation of Brand Registry and account security. We guide you through the process from filing to approval so your brand is legally protected.",
    heroLead:
      'Secure your brand name and logo with USPTO and international trademark authorities. We handle the clearance searches, classification, and application filings so you can unlock Amazon Brand Registry without delays.',
    highlights: [
      'Comprehensive Clearance Search',
      'Official USPTO / UKIPO Filing',
      'Fast-Track Brand Registry Access',
      'Dedicated IP Legal Support',
    ],
    whyChoose: [
      {
        title: 'Zero Conflict Clearance',
        description:
          'Thorough cross-checking against official trademark registries and common-law usages to prevent costly office actions and rejections.',
        icon: 'searchTrend',
      },
      {
        title: 'Fast-Track Brand Registry',
        description:
          'We leverage Amazon IP Accelerator compliant pathways so you can unlock Brand Registry perks in days rather than waiting a year.',
        icon: 'zap',
      },
      {
        title: 'Precise Class & Goods Drafting',
        description:
          'Accurately identifying Nice classes and drafting goods descriptions that withstand examiner scrutiny and provide expansive protection.',
        icon: 'clipboardCheck',
      },
      {
        title: 'Ongoing Application Tracking',
        description:
          'Active status tracking and prompt response handling throughout the publication and registration lifecycle.',
        icon: 'shieldCheck',
      },
    ],
    stats: [
      {
        value: '100%',
        label: 'Filing Compliance',
        subtext: 'Rigorous legal standards',
      },
      {
        value: '14 Days',
        label: 'Avg. Registry Access',
        subtext: 'Via serial number filing',
      },
      {
        value: '0%',
        label: 'Class Conflicts',
        subtext: 'Pre-vetted registration',
      },
    ],
    processSteps: [
      {
        stepNum: '01',
        title: 'Trademark Clearance Search',
        description:
          'Comprehensive scan of federal, state, and international trademark databases to ensure your brand name is legally available.',
      },
      {
        stepNum: '02',
        title: 'Classification & Application Prep',
        description:
          'Selecting appropriate Nice goods/services classifications and preparing acceptable specimens of use for government examiners.',
      },
      {
        stepNum: '03',
        title: 'Government Application Filing',
        description:
          'Formal electronic submission with the USPTO, UKIPO, or EUIPO, generating your official trademark serial number immediately.',
      },
      {
        stepNum: '04',
        title: 'Amazon Brand Registry Setup',
        description:
          'Submitting your brand registry application inside Amazon Brand Services to unlock A+ Content, Storefront, and Sponsored Brands.',
      },
    ],
    deliverables: [
      'Comprehensive Trademark Conflict & Clearance Search Report',
      'Nice Class Selection & Goods Identification Documentation',
      'Official Government Trademark Application Submission',
      'Assigned Federal Serial Number & Certificate of Filing',
      'Specimen of Use Verification & Compliance Guide',
      'Direct Assistance for Amazon Brand Registry Onboarding',
      'Ongoing Application Milestone Monitoring & Alerts',
      'Responses to Routine Trademark Examiner Inquiries',
    ],
    keyBenefits: [
      'Stop copycats, counterfeiters, and listing hijackers permanently',
      'Unlock Amazon A+ Content, Video Ads, and Brand Storefront tools immediately',
      'Build real transferable business enterprise value and intellectual property',
      'Eliminate the terror of sudden IP complaints or unauthorized trademark claims',
    ],
  },
  {
    slug: 'company-formation',
    num: '03',
    title: 'Company Formation',
    tagline: 'Compliant Business Entity & Bank Account Setup for Global Amazon Sellers',
    category: 'Corporate Structuring & Tax Setup',
    gradient: 'g3',
    icon: 'building',
    image: companyImg,
    shortDesc:
      'For entrepreneurs and international sellers who need a properly structured business entity to sell compliantly, we assist with complete company formation and legal foundations.',
    heroLead:
      'Start your ecommerce journey with a bulletproof corporate structure. We establish your US LLC or UK Ltd, obtain federal EIN tax numbers, and assist with corporate bank accounts accepted by Amazon.',
    highlights: [
      'US LLC & UK Ltd Formation',
      'Federal EIN & Tax Registration',
      'US Business Bank Account Setup',
      '100% Amazon Verification Ready',
    ],
    whyChoose: [
      {
        title: 'Amazon-Compliant Structuring',
        description:
          'Formations structured specifically to pass Amazon identity verification without sudden suspensions or address mismatch flags.',
        icon: 'badgeCheck',
      },
      {
        title: 'Registered Agent & US Address',
        description:
          'Reliable commercial registered agent services and physical US business address for official correspondence and compliance.',
        icon: 'pin',
      },
      {
        title: 'Direct EIN & Tax ID Issuance',
        description:
          'Expedited IRS processing for both domestic and foreign non-resident founders to obtain valid Employer Identification Numbers.',
        icon: 'fileText',
      },
      {
        title: 'Fintech & Banking Support',
        description:
          'Guided onboarding for US/UK fintech and digital banking platforms compatible with Amazon global disbursements.',
        icon: 'dollarSign',
      },
    ],
    stats: [
      {
        value: '100%',
        label: 'Verification Rate',
        subtext: 'Smooth Amazon approval',
      },
      {
        value: '48-72h',
        label: 'Expedited Filing',
        subtext: 'Fast state documentation',
      },
      {
        value: '25+',
        label: 'Countries Supported',
        subtext: 'For international founders',
      },
    ],
    processSteps: [
      {
        stepNum: '01',
        title: 'Jurisdiction & Structure Advisory',
        description:
          'Determining the best state (e.g., Wyoming, Delaware) and entity structure based on tax obligations and ownership nationality.',
      },
      {
        stepNum: '02',
        title: 'State Articles of Organization',
        description:
          'Drafting and filing official articles of organization, corporate operating agreement, and appointing a registered agent.',
      },
      {
        stepNum: '03',
        title: 'EIN & Federal Tax Processing',
        description:
          'Submitting IRS documentation to obtain official Employer Identification Number (EIN) for federal tax and banking compliance.',
      },
      {
        stepNum: '04',
        title: 'Banking & Amazon Onboarding',
        description:
          'Assisting with business bank account approval, utility bill/address proofing, and Amazon Seller Central business profile creation.',
      },
    ],
    deliverables: [
      'State-Approved Articles of Organization / Certificate of Formation',
      'Official IRS Employer Identification Number (EIN) Confirmation Letter',
      'Customized Operating Agreement & Company Bylaws',
      '1 Full Year of Registered Agent Service & Commercial Address',
      'Bank Account Opening Documentation & Resolution Package',
      'Amazon Seller Central Identity Verification Checklist',
      'State Compliance Calendar & Annual Renewal Guide',
      'Direct Support for Seller Account Verification Calls',
    ],
    keyBenefits: [
      'Protect personal assets through limited liability legal separation',
      'Sell on Amazon US, Walmart, and global marketplaces as a recognized entity',
      'Receive marketplace payouts directly into compliant multi-currency accounts',
      'Avoid account deactivations caused by mismatched names and utility records',
    ],
  },
  {
    slug: 'amazon-ppc-advertising',
    num: '04',
    title: 'Amazon PPC & Advertising Management',
    tagline: 'Profit-Driven Ad Campaigns Built for Compounding Organic Rank & Low TACOS',
    category: 'Performance Advertising & Scale',
    gradient: 'g4',
    icon: 'megaphone',
    image: ppcImg,
    shortDesc:
      'We plan, launch, and manage Sponsored Products, Brands, and Display campaigns built around real performance targets — optimizing for ACOS and TACOS rather than vanity clicks.',
    heroLead:
      'Ad spend should compound into organic rank, not evaporate into inflated cost-per-click. We restructure your campaign architecture, conduct daily negative harvesting, and deploy algorithmic bid management that maximizes net profit.',
    highlights: [
      'Granular Single-Keyword Campaigns',
      'Continuous Negative Harvesting',
      'TACOS & Net Profit Focus',
      'Placement & Dayparting Tuning',
    ],
    whyChoose: [
      {
        title: 'Data-Driven Bidding Strategy',
        description:
          'High-performing keyword selection, competitor ASIN targeting, and precision bid adjustments tuned to hourly conversion trends.',
        icon: 'target',
      },
      {
        title: 'Full Campaign Lifecycle Management',
        description:
          'Complete oversight of Sponsored Products, Sponsored Brands Video, Sponsored Display, and Amazon DSP retargeting pipelines.',
        icon: 'layers',
      },
      {
        title: 'Continuous Optimization & Harvest',
        description:
          'Daily search-term isolation, negative keyword matching, and placement multipliers to eradicate wasted ad spend aggressively.',
        icon: 'refreshCw',
      },
      {
        title: 'Advanced Analytics & TACOS Control',
        description:
          'Transparent executive dashboards tracking organic ranking correlation, Blended TACOS, ROAS, and bottom-line gross profit.',
        icon: 'barChart',
      },
    ],
    stats: [
      {
        value: '71%',
        label: 'Average ACOS Reduction',
        subtext: 'Across optimized client accounts',
      },
      {
        value: '105%',
        label: 'Revenue Increase',
        subtext: 'Within first 90 days of management',
      },
      {
        value: '3.91x',
        label: 'Blended ROAS',
        subtext: 'Profitable advertising return',
      },
    ],
    processSteps: [
      {
        stepNum: '01',
        title: 'Audit & Search-Term Analysis',
        description:
          'We conduct a thorough audit of historical search terms, wasted spend leakage, target placement shares, and competitor conquesting.',
      },
      {
        stepNum: '02',
        title: 'Strategy & Architecture Restructure',
        description:
          'Segmenting campaigns into isolated exact match, broad discovery, ASIN defense, and conquesting funnels with precise budget guardrails.',
      },
      {
        stepNum: '03',
        title: 'Execution & Continuous Optimization',
        description:
          'Daily bid adjustments, automated rule execution, search term harvesting, negative keyword pruning, and dayparting tweaks.',
      },
      {
        stepNum: '04',
        title: 'Reporting & Scaling Winning ASINs',
        description:
          'Transparent weekly reporting on TACOS, share of voice, organic rank compounding, and scale opportunities into Sponsored Display and DSP.',
      },
    ],
    deliverables: [
      'Full Amazon Advertising Account Diagnostic & Waste Audit',
      'Rebuilt Granular Campaign Structure (Exact, Phrase, Broad, ASIN)',
      'Daily Search-Term Mining & Negative Keyword Management',
      'Top-of-Search & Product Page Placement Multiplier Calibration',
      'Sponsored Brands & Sponsored Brand Video Creative Alignment',
      'Sponsored Display Retargeting & Category Conquesting Setup',
      'Live Cloud Analytics Dashboard with ACOS, TACOS & ROAS KPIs',
      'Bi-Weekly Strategic Strategy Calls with Senior Media Buyers',
    ],
    keyBenefits: [
      'Stop burning cash on broad search terms that produce zero conversions',
      'Leverage PPC sales to continuously elevate organic keyword ranking',
      'Protect your brand name and product listings from competitor conquesting',
      'Scale your advertising budget with confidence knowing every dollar is profitable',
    ],
  },
  {
    slug: 'listing-seo-optimization',
    num: '05',
    title: 'Listing & SEO Optimization',
    tagline: 'A9/A10 Algorithm Mastery Rebuilt to Turn Browsers into Loyal Paying Customers',
    category: 'Organic Search & Conversion Optimization',
    gradient: 'g1',
    icon: 'type',
    image: seoImg,
    shortDesc:
      'Our copywriters and keyword strategists rebuild your listings from the ground up — titles, bullet points, backend search terms, and descriptions — based on real search volume and buyer intent.',
    heroLead:
      "We don't just make listings sound good; we make them convert. By aligning customer psychology with Amazon's latest search algorithm, we unlock organic visibility and maximize session-to-order conversion rates.",
    highlights: [
      'A9/A10 Algorithmic Indexing',
      'High-Intent Benefit Copywriting',
      '249-Byte Backend Keyword Mastery',
      'Mobile-First Layout Structuring',
    ],
    whyChoose: [
      {
        title: 'High-Converting Sales Copy',
        description:
          'Engaging, benefit-driven copy that answers customer hesitations instantly and drives immediate "Add to Cart" decisions.',
        icon: 'feather',
      },
      {
        title: 'Algorithmic Keyword Indexing',
        description:
          'Strategic keyword density and placement in high-weight positions (Title, Bullet 1, Backend) to maximize search indexing.',
        icon: 'cpu',
      },
      {
        title: 'Backend Search Term Optimization',
        description:
          'Utilizing every single byte of backend keywords, subject matter fields, and search terms without keyword stuffing or repetition.',
        icon: 'terminal',
      },
      {
        title: 'A/B Testing & Conversion Iteration',
        description:
          'Employing Amazon Manage Your Experiments to test titles and main imagery for continuous conversion rate lift.',
        icon: 'sliders',
      },
    ],
    stats: [
      {
        value: '42%',
        label: 'Conversion Rate Lift',
        subtext: 'Average listing transformation',
      },
      {
        value: '180%+',
        label: 'Indexed Keywords',
        subtext: 'Ranked in top 50 search positions',
      },
      {
        value: '2.4x',
        label: 'Organic Traffic Lift',
        subtext: 'Without increasing ad budget',
      },
    ],
    processSteps: [
      {
        stepNum: '01',
        title: 'Keyword Mining & Gap Audit',
        description:
          'Harvesting high-volume, high-relevance search queries from Helium10, Brand Analytics, and top competitor reverse ASIN lookups.',
      },
      {
        stepNum: '02',
        title: 'Copywriting & Benefit Structuring',
        description:
          'Crafting magnetic titles, 5 benefit-led bullet points, and product description engineered for mobile screen viewing.',
      },
      {
        stepNum: '03',
        title: 'Backend Term & Metadata Optimization',
        description:
          'Populating backend search terms, target audience tags, catalog attributes, and platinum keywords for 100% indexing score.',
      },
      {
        stepNum: '04',
        title: 'Publishing & Index Verification',
        description:
          'Uploading changes via flat files, resolving attribute locks, and verifying that every single keyword indexes organically.',
      },
    ],
    deliverables: [
      'Complete Algorithmic Keyword Map & Opportunity Matrix',
      'Optimized High-Converting Title (Desktop & Mobile Formats)',
      '5 Strategic Benefit-Driven Bullet Points',
      'Compelling Brand Story & Product Narrative Copy',
      'Full 249-Byte De-Duplicated Backend Search Terms',
      'Catalog Attribute & Browse Node Enhancement Guide',
      'Amazon Manage Your Experiments (A/B Test) Setup Plan',
      'Post-Launch Index Verification & Organic Ranking Audit',
    ],
    keyBenefits: [
      'Rank organically for high-volume keywords without paying for every click',
      'Increase your Unit Session Percentage (Conversion Rate) significantly',
      'Deliver a cohesive brand voice that resonates with premium buyers',
      'Ensure complete compliance with Amazon title and style guide constraints',
    ],
  },
  {
    slug: 'full-account-management',
    num: '06',
    title: 'Full Account Management',
    tagline: 'Turnkey Day-to-Day Amazon Operations & Proactive Account Growth Partnership',
    category: 'Operations & End-to-End Growth',
    gradient: 'g2',
    icon: 'clipboardCheck',
    image: accountImg,
    shortDesc:
      'We handle the day-to-day operational demands of running an Amazon business: inventory monitoring, case log resolution, account health, pricing oversight, and policy compliance.',
    heroLead:
      'Your Amazon store deserves relentless, proactive management. Our senior team acts as a seamless extension of your company, taking care of inventory planning, seller support disputes, catalog health, and revenue acceleration.',
    highlights: [
      'Senior Strategists, No Junior Handoffs',
      'Proactive Account Health Monitoring',
      'Inventory Restock & FBA Forecasting',
      'Seller Support Dispute & Case Resolution',
    ],
    whyChoose: [
      {
        title: 'Dedicated Senior Strategist',
        description:
          'Direct access to an experienced Amazon growth manager who understands your category, competitors, and margin requirements.',
        icon: 'userCheck',
      },
      {
        title: 'Proactive Account Health Defense',
        description:
          '24/7 monitoring of Voice of the Customer, Order Defect Rate, IP complaints, and listings health before suspensions can occur.',
        icon: 'activity',
      },
      {
        title: 'Inventory & Restock Planning',
        description:
          'Precision stock forecasting taking lead times, seasonality, and FBA storage capacity limits into account to eliminate stockouts.',
        icon: 'package',
      },
      {
        title: 'End-to-End Case Resolution',
        description:
          'Tenacious resolution of missing inbound shipments, stranding issues, catalog hijackings, and Seller Support roadblocks.',
        icon: 'checkCircle',
      },
    ],
    stats: [
      {
        value: '99.9%',
        label: 'Account Health Rating',
        subtext: 'Zero critical policy defects',
      },
      {
        value: '< 4h',
        label: 'Dispute Response Time',
        subtext: 'Proactive case management',
      },
      {
        value: '3.5x',
        label: 'YoY Growth Rate',
        subtext: 'Across full management clients',
      },
    ],
    processSteps: [
      {
        stepNum: '01',
        title: 'Deep Account Diagnostics',
        description:
          'Full audit of historical performance, active case logs, suppressed listings, FBA fee accuracy, and competitor share of voice.',
      },
      {
        stepNum: '02',
        title: '90-Day Growth Roadmap Formulation',
        description:
          'Creating strategic milestones across advertising, SEO, catalog expansion, seasonal promotions, and margin expansion.',
      },
      {
        stepNum: '03',
        title: 'Daily Operations & Troubleshooting',
        description:
          'Handling case tickets, Buy Box monitoring, daily PPC management, review management, and supply chain adjustments.',
      },
      {
        stepNum: '04',
        title: 'Weekly Executive Reviews & Scaling',
        description:
          'Weekly strategy calls, transparent performance dashboards, profitability recaps, and proactive new marketplace expansion.',
      },
    ],
    deliverables: [
      'Comprehensive 360° Account Health & Performance Oversight',
      'Daily Case Log Management & Amazon Seller Support Escalations',
      'Inventory Restock Forecasting & FBA Shipment Coordination',
      'Suppressed & Stranded Inventory Resolution Within 24h',
      'Buy Box Suppression & Pricing Integrity Monitoring',
      'Promotions, Lightning Deals & Coupon Campaign Execution',
      'Weekly Profitability, Ad Spend & Revenue Performance Reports',
      'Dedicated Slack/WhatsApp Channel & Regular Strategy Meetings',
    ],
    keyBenefits: [
      'Reclaim 30+ hours every week spent dealing with stressful Amazon technicalities',
      'Eliminate the panic of sudden account suspensions or inventory stranded issues',
      'Scale your revenue with a dedicated team holding themselves accountable to numbers',
      'Receive actionable strategic advice tailored to your long-term business exit plan',
    ],
  },
  {
    slug: 'product-launch-strategy',
    num: '07',
    title: 'Product Launch Strategy',
    tagline: 'Velocity Ignition, Review Generation & Rapid Organic Keyword Dominance',
    category: 'Go-to-Market & Velocity Engineering',
    gradient: 'g3',
    icon: 'rocket',
    image: launchImg,
    shortDesc:
      'Launching on Amazon requires more than flipping a listing live. We combine coordinated PPC activation, review generation, and ranking tactics to build sustainable velocity from day one.',
    heroLead:
      'Capitalize on the crucial Amazon "Honeymoon Period". We design high-velocity launch sprints that orchestrate targeted advertising bursts, Vine review acquisition, and external traffic to drive your product straight onto Page 1.',
    highlights: [
      'Amazon Honeymoon Period Maximization',
      'Vine Program & Early Review Protocol',
      'High-Velocity PPC Blitz Architecture',
      'Sustainable Organic Rank Sticking',
    ],
    whyChoose: [
      {
        title: 'Velocity Acceleration Architecture',
        description:
          'Engineered launch momentum that signals strong conversion velocity to Amazon’s algorithm, unlocking algorithmic badge status.',
        icon: 'trendingUp',
      },
      {
        title: 'Strategic Pricing & Coupon Sprints',
        description:
          'Deploying discount coupons, strike-through pricing, and introductory deals that drastically spike initial conversion rates.',
        icon: 'tag',
      },
      {
        title: 'Compliant Review Generation',
        description:
          'Enrolling in Amazon Vine and automated Request-a-Review protocols to safely acquire first 20-30 authentic five-star reviews.',
        icon: 'star',
      },
      {
        title: 'Rank Retention & Margin Transition',
        description:
          'Smoothly scaling down introductory ad spend as organic ranking cements, transitioning the product into pure profit mode.',
        icon: 'anchor',
      },
    ],
    stats: [
      {
        value: 'Top 10',
        label: 'Organic Rank in 30 Days',
        subtext: 'For core high-volume keywords',
      },
      {
        value: '3.8x',
        label: 'Launch Velocity Speed',
        subtext: 'Compared to standard organic rollouts',
      },
      {
        value: '25+',
        label: 'Verified Reviews in Month 1',
        subtext: 'Via 100% compliant Amazon programs',
      },
    ],
    processSteps: [
      {
        stepNum: '01',
        title: 'Pre-Launch Readiness Audit',
        description:
          'Validating listing assets, A+ content, FBA stock placement, pricing architecture, and keyword targets prior to go-live.',
      },
      {
        stepNum: '02',
        title: 'Day 1 Velocity & Review Activation',
        description:
          'Activating Amazon Vine, high-intent exact match PPC blitz, and strategic promotional vouchers to trigger initial sales spikes.',
      },
      {
        stepNum: '03',
        title: 'Algorithmic Honeymoon Acceleration',
        description:
          'Aggressively expanding search term impression share, optimizing bids for Top-of-Search placement, and tracking daily rank shifts.',
      },
      {
        stepNum: '04',
        title: 'Stabilization & Profit Optimization',
        description:
          'Tapering launch discounts, stabilizing ad spend, locking in Page 1 organic rank positions, and focusing on net margins.',
      },
    ],
    deliverables: [
      'Comprehensive 45-Day Go-to-Market Launch Blueprint',
      'Target Keyword Ranking Roadmap & Daily Position Tracker',
      'Launch PPC Campaign Architecture (Aggressive Top of Search)',
      'Amazon Vine Program Enrollment & Review Generation Guide',
      'Promotional Coupon & Strike-Through Pricing Setup',
      'Daily Launch Velocity & Conversion Rate Monitoring',
      'Competitor Reaction Tracking & Defense Strategy',
      'Transition Plan from Launch Mode to Compounding Profitability',
    ],
    keyBenefits: [
      'Never suffer from the dreaded "dead launch" where inventory sits unsold for months',
      'Seize the Amazon Honeymoon window when algorithm favoritism is at its peak',
      'Gain social proof and legitimate customer reviews before major ad scale begins',
      'Achieve organic Page 1 placement that generates free ongoing recurring sales',
    ],
  },
  {
    slug: 'aplus-content-creative-design',
    num: '08',
    title: 'A+ Content & Creative Design',
    tagline: 'Visual Storytelling Built to Elevate Brand Identity & Conversion Rates',
    category: 'Creative Design & Brand Experience',
    gradient: 'g4',
    icon: 'palette',
    image: aplusImg,
    shortDesc:
      'Our in-house design team produces premium product photography, lifestyle imagery, comparison charts, and A+/Premium A+ modules that are built specifically to increase conversion rates.',
    heroLead:
      'High-performing Amazon creative is commercial art engineered for conversions. We transform generic listings into luxury storefronts with 3D product rendering, benefit-driven infographics, and immersive A+ Content modules.',
    highlights: [
      'Custom 3D & Lifestyle Renderings',
      'Premium A+ & Brand Story Modules',
      'Mobile-Optimized Visual Hierarchy',
      'Cross-Sell Comparison Matrices',
    ],
    whyChoose: [
      {
        title: 'Commercial Conversion Psychology',
        description:
          'Every graphic, callout banner, and color palette is designed with a clear sales purpose — answering objections before they arise.',
        icon: 'eye',
      },
      {
        title: 'Premium A+ & Brand Story Mastery',
        description:
          'Unlocking full-width Premium A+ modules, interactive carousels, Q&A sections, and video integration for enterprise brand feel.',
        icon: 'award',
      },
      {
        title: 'Mobile-First Visual Layout',
        description:
          'Since 70%+ of Amazon shoppers buy on mobile devices, our graphics are formatted with crystal-clear readability on small screens.',
        icon: 'smartphone',
      },
      {
        title: 'Cross-Catalog Upsell Architecture',
        description:
          'Comparison tables and complementary product modules that increase your Average Order Value (AOV) across the entire catalog.',
        icon: 'grid',
      },
    ],
    stats: [
      {
        value: '28%',
        label: 'Average Conversion Lift',
        subtext: 'After A+ content redesign deployment',
      },
      {
        value: '35%',
        label: 'Higher Session Value',
        subtext: 'Through comparison upsell modules',
      },
      {
        value: '100%',
        label: 'Brand Compliance',
        subtext: 'Zero Amazon creative rejections',
      },
    ],
    processSteps: [
      {
        stepNum: '01',
        title: 'Brand Discovery & Visual Audit',
        description:
          'Analyzing existing assets, customer reviews, competitor visuals, and identifying the brand story that creates emotional buy-in.',
      },
      {
        stepNum: '02',
        title: 'Wireframing & Storyboard Flow',
        description:
          'Mapping out the customer journey through 7 listing gallery slots and sequential A+ content layout modules.',
      },
      {
        stepNum: '03',
        title: 'High-Definition Design & Rendering',
        description:
          'Crafting 3D product renders, retouching lifestyle shots, and designing bespoke infographic callouts with sharp typography.',
      },
      {
        stepNum: '04',
        title: 'Upload, Approval & Split Testing',
        description:
          'Submitting files to Amazon Brand Content Manager, securing swift approval, and initiating A/B experiment testing.',
      },
    ],
    deliverables: [
      'Complete Set of 7 High-Converting Listing Gallery Images',
      'Full Standard or Premium A+ Content Layout (Desktop & Mobile)',
      'Amazon Brand Story Module with Cross-Catalog Links',
      'Interactive Product Comparison Table & Feature Matrix',
      'High-Resolution 3D CGI Product Modeling & Shadows',
      'Lifestyle Background Compositing & Customer Context Imagery',
      'Direct Upload & Compliance Approval in Amazon Seller Central',
      'Source Files (Figma / PSD) & High-Resolution Export Assets',
    ],
    keyBenefits: [
      'Dramatically improve listing conversion rate without needing more traffic',
      'Elevate perceived brand value to justify higher retail price points',
      'Eliminate customer return rates by clarifying sizing, usage, and key features visually',
      'Cross-sell related products directly from the bottom of your product pages',
    ],
  },
  {
    slug: 'brand-registry-protection',
    num: '09',
    title: 'Brand Registry & Protection',
    tagline: 'Defend Buy Box Ownership, Eradicate Hijackers & Protect IP Integrity',
    category: 'Brand Security & Buy Box Defense',
    gradient: 'g1',
    icon: 'badgeCheck',
    image: brandImg,
    shortDesc:
      'We support brands through Brand Registry enrollment and ongoing protection — identifying and resolving unauthorized sellers, counterfeit listings, and hijackers.',
    heroLead:
      'Your hard-earned sales shouldn’t be stolen by listing hijackers, counterfeiters, or rogue unauthorized sellers. We deploy round-the-clock defense protocols, Project Zero enforcement, and legal takedowns to protect your margins.',
    highlights: [
      '24/7 Hijacker & Reseller Monitoring',
      'Amazon Project Zero & Transparency',
      'Cease & Desist Enforcement',
      'Buy Box Protection & Recovery',
    ],
    whyChoose: [
      {
        title: 'Instant Hijacker Detection',
        description:
          'Automated monitoring flags unauthorized sellers on your listings within minutes, before they bleed sales or ruin reviews.',
        icon: 'radar',
      },
      {
        title: 'Amazon Project Zero & IP Tools',
        description:
          'Utilizing self-service counterfeit removal, Amazon Transparency serialization codes, and Brand Registry Report-a-Violation tools.',
        icon: 'lock',
      },
      {
        title: 'Aggressive Legal Cease & Desist',
        description:
          'Formally drafted C&D notices, test buys, and trademark infringement notifications that compel unauthorized sellers to depart.',
        icon: 'alertTriangle',
      },
      {
        title: 'Listing Attribute Lock & Defense',
        description:
          'Locking your titles, images, and backend metadata against malicious competitor alterations or bogus policy complaints.',
        icon: 'shield',
      },
    ],
    stats: [
      {
        value: '99%',
        label: 'Takedown Success Rate',
        subtext: 'For unauthorized sellers & counterfeiters',
      },
      {
        value: '< 24h',
        label: 'Action Speed',
        subtext: 'From detection to enforcement filing',
      },
      {
        value: '100%',
        label: 'Buy Box Protection',
        subtext: 'Preserved brand margin integrity',
      },
    ],
    processSteps: [
      {
        stepNum: '01',
        title: 'Vulnerability & Listing Audit',
        description:
          'Scanning entire catalog for rogue sellers, hijacked variations, counterfeit reviews, and unauthorized distribution leaks.',
      },
      {
        stepNum: '02',
        title: 'Brand Registry Enrolment & Shield Setup',
        description:
          'Verifying brand ownership rights, registering trademarks with Amazon Brand Services, and enrolling in Project Zero.',
      },
      {
        stepNum: '03',
        title: 'Test Buys & Cease-and-Desist Takedown',
        description:
          'Executing documented test purchases, issuing legal warnings, and lodging formal IP violation cases with Amazon.',
      },
      {
        stepNum: '04',
        title: 'Continuous Automated Monitoring',
        description:
          '24/7 automated alerts for any Buy Box suppression, seller changes, title modifications, or malicious review attacks.',
      },
    ],
    deliverables: [
      'Comprehensive Catalog Vulnerability & Reseller Threat Audit',
      'Full Amazon Brand Registry Enrollment & Configuration',
      'Amazon Project Zero & Transparency Program Setup Assistance',
      'Formal Attorney-Drafted Cease & Desist Legal Templates',
      'Documented Test Purchase Evidence Collection & Case Filing',
      '24/7 Real-Time Buy Box & Listing Hijacker Monitoring Alerts',
      'Listing Content Locking to Prevent Rogue Metadata Changes',
      'Monthly Brand Integrity & Enforcement Action Recap Reports',
    ],
    keyBenefits: [
      'Keep 100% of the Buy Box and revenue generated by your product listings',
      'Protect your brand reputation from inferior counterfeit products and negative reviews',
      'Enforce your Minimum Advertised Price (MAP) policy across marketplaces',
      'Sleep soundly knowing dedicated specialists are defending your listings 24/7',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetailItem | undefined {
  return detailedServices.find((s) => s.slug === slug);
}
