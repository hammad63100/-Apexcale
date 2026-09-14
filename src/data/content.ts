import type { IconName } from '../components/icons';

/* ------------------------------------------------------------------ */
/* Apexcale — all site copy (client-provided wording, verbatim)        */
/* ------------------------------------------------------------------ */

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#cta' },
];

export const mobileLinks: NavLink[] = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#cta' },
];

export const marketplaces: string[] = [
  'Amazon.com',
  'Amazon.co.uk',
  'Walmart Marketplace',
  'EU Marketplaces',
  'Global',
];

export const marqueeItems: string[] = [
  'Amazon.com',
  'Amazon.co.uk',
  'Amazon.de',
  'Walmart Marketplace',
  'U.S. Marketplaces',
  'U.K. Marketplaces',
  'EU Marketplaces',
  'Global Expansion',
  'Sponsored Products',
  'Sponsored Brands',
  'Listing & SEO',
  'A+ Content',
];

/* ---------------- Services ---------------- */

export interface Service {
  icon: IconName;
  title: string;
  text: string;
  gradient: 'g1' | 'g2' | 'g3' | 'g4';
  num: string;
}

export const services: Service[] = [
  {
    icon: 'searchTrend',
    title: 'Product Research & Validation',
    text: "Before a single dollar goes into advertising or inventory, we identify what's actually worth selling. Our team analyzes demand trends, competition density, profit margins, and category saturation to validate product opportunities with real data — reducing guesswork and protecting your capital from day one.",
    gradient: 'g1',
    num: '01',
  },
  {
    icon: 'shieldCheck',
    title: 'Trademark Registration',
    text: "A registered trademark isn't optional for serious Amazon sellers — it's the foundation of Brand Registry, brand protection, and long-term account security. We guide you through the trademark registration process from filing to approval, so your brand is legally protected and positioned to access Amazon's full suite of brand tools.",
    gradient: 'g2',
    num: '02',
  },
  {
    icon: 'building',
    title: 'Company Formation',
    text: 'For entrepreneurs and international sellers who need a properly structured business entity to sell compliantly, we assist with company formation — helping you set up the right legal and operational foundation to sell on Amazon and other marketplaces with confidence.',
    gradient: 'g3',
    num: '03',
  },
  {
    icon: 'megaphone',
    title: 'Amazon PPC & Advertising Management',
    text: 'We plan, launch, and manage Sponsored Products, Sponsored Brands, and Sponsored Display campaigns built around real performance targets — not just impressions and clicks. Our team structures campaigns around keyword intent, competitive bidding strategy, and dayparting, with continuous optimization based on ACoS and TACoS rather than surface-level metrics. The result: ad spend that compounds into organic rank instead of disappearing into inflated cost-per-click.',
    gradient: 'g4',
    num: '04',
  },
  {
    icon: 'type',
    title: 'Listing & SEO Optimization',
    text: "Our copywriters and keyword strategists rebuild your listings from the ground up — titles, bullet points, backend search terms, and descriptions — based on real search-volume data and buyer intent. We don't just make listings sound good; we make them convert, while ensuring they're fully optimized for Amazon's A9/A10 search algorithm.",
    gradient: 'g1',
    num: '05',
  },
  {
    icon: 'clipboardCheck',
    title: 'Full Account Management',
    text: 'We handle the day-to-day operational demands of running an Amazon business: inventory monitoring, case log resolution, account health tracking, pricing oversight, and policy compliance. Our team acts as an extension of yours, catching issues before they become account-threatening problems.',
    gradient: 'g2',
    num: '06',
  },
  {
    icon: 'rocket',
    title: 'Product Launch Strategy',
    text: "Launching a new product on Amazon requires more than flipping a listing live. We combine coordinated PPC activation, review-generation strategy, and early-stage ranking tactics to build sustainable velocity from day one — avoiding the common trap of a fast launch followed by a slow, permanent decline.",
    gradient: 'g3',
    num: '07',
  },
  {
    icon: 'palette',
    title: 'A+ Content & Creative Design',
    text: 'Our in-house design team produces premium product photography, lifestyle imagery, comparison charts, infographics, and A+/Premium A+ modules that are built specifically to increase conversion rate — not just look polished. Every creative asset is designed with a clear commercial purpose.',
    gradient: 'g4',
    num: '08',
  },
  {
    icon: 'badgeCheck',
    title: 'Brand Registry',
    text: "We support brands through Brand Registry enrollment and ongoing protection — identifying and resolving unauthorized sellers, counterfeit listings, and hijackers before they erode your Buy Box share, your pricing integrity, or your brand's reputation.",
    gradient: 'g1',
    num: '09',
  },
];

/* ---------------- Why Apexcale ---------------- */

export interface WhyFeature {
  icon: IconName;
  title: string;
  text: string;
  gradient: 'g1' | 'g2' | 'g3' | 'g4';
  featured?: boolean;
}

export const whyFeatures: WhyFeature[] = [
  {
    icon: 'globe',
    title: 'One Accountable Team, Every Marketplace',
    text: "Whether you're selling on Amazon.com, Amazon.co.uk, or a dozen international storefronts simultaneously, our team manages the entire footprint from a single, coordinated strategy. No fragmented vendors. No conflicting priorities.",
    gradient: 'g1',
    featured: true,
  },
  {
    icon: 'bolt',
    title: 'Strategy Backed by Execution',
    text: "We don't deliver a slide deck and walk away. Every strategic recommendation we make is implemented, monitored, and refined by the same team that built it — so nothing gets lost in translation between planning and execution.",
    gradient: 'g2',
  },
  {
    icon: 'users',
    title: 'Senior-Level Attention, Not Junior Handoffs',
    text: 'Your account is managed by experienced strategists who understand your category, your competitors, and your customer — not a rotating cast of junior associates learning on your budget.',
    gradient: 'g3',
  },
  {
    icon: 'trendUp',
    title: 'Built for Compounding, Long-Term Growth',
    text: 'We are not in the business of manufacturing short-term spikes that collapse the moment ad spend stops. Our strategies are designed to build durable organic rank, healthy margins, and a brand asset that continues to compound in value over time.',
    gradient: 'g1',
  },
  {
    icon: 'eye',
    title: 'Full Transparency, Always',
    text: "You will always know exactly what we're doing, why we're doing it, and how it's performing — through clear, consistent reporting rather than vague dashboards.",
    gradient: 'g4',
  },
];

/* ---------------- Process ---------------- */

export interface ProcessStep {
  icon: IconName;
  title: string;
  text: string;
  gradient: 'g1' | 'g2' | 'g3' | 'g4';
  step: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: 'chat',
    title: 'Discovery Call',
    text: "We start with a detailed conversation about your brand, your current performance, your goals, and the specific challenges holding your account back.",
    gradient: 'g1',
    step: '1',
  },
  {
    icon: 'clipboardSearch',
    title: 'Account & Market Audit',
    text: 'Our team conducts a comprehensive audit of your listings, advertising accounts, competitive landscape, and category-level data to identify exactly where the biggest opportunities — and risks — are hiding.',
    gradient: 'g2',
    step: '2',
  },
  {
    icon: 'route',
    title: 'Custom Growth Strategy',
    text: 'Based on the audit, we build a tailored roadmap covering advertising, content, and account operations, aligned directly to your specific goals, budget, and marketplace footprint.',
    gradient: 'g3',
    step: '3',
  },
  {
    icon: 'sliders',
    title: 'Execution & Continuous Optimization',
    text: 'We implement the strategy in full and optimize continuously based on live performance data — adjusting bids, refining content, and refining targeting as real results come in.',
    gradient: 'g4',
    step: '4',
  },
  {
    icon: 'chartLine',
    title: 'Transparent Reporting & Strategic Review',
    text: "You receive clear, regular reporting alongside strategic check-ins, so you always understand exactly how your investment is performing and what's coming next.",
    gradient: 'g1',
    step: '5',
  },
];

/* ---------------- Results ---------------- */

export interface Counter {
  icon: IconName;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  gradient: 'g1' | 'g2' | 'g3' | 'g4';
}

/**
 * NOTE FOR CLIENT:
 * These four values are SAMPLE placeholders for the animated counters.
 * Replace `value` with real client performance data once available
 * (per the brief: "Insert specific client performance data here once available").
 */
export const counters: Counter[] = [
  { icon: 'globe', value: 10, suffix: '+', label: 'Global marketplaces managed', gradient: 'g1' },
  { icon: 'coins', value: 50, prefix: '$', suffix: 'M+', label: 'Client revenue managed', gradient: 'g2' },
  { icon: 'rocket', value: 150, suffix: '+', label: 'Brands scaled to new markets', gradient: 'g3' },
  { icon: 'award', value: 96, suffix: '%', label: 'Client retention rate', gradient: 'g4' },
];

export interface ResultFeat {
  icon: IconName;
  text: string;
  gradient: 'g1' | 'g2' | 'g3' | 'g4';
}

export const resultFeats: ResultFeat[] = [
  {
    icon: 'globe',
    text: 'Multi-marketplace management across Amazon, Walmart, and other major global platforms, coordinated under one strategy',
    gradient: 'g1',
  },
  {
    icon: 'coins',
    text: 'Profit-first advertising, built around sustainable ACoS and TACoS targets rather than vanity impression metrics',
    gradient: 'g2',
  },
  {
    icon: 'activity',
    text: 'Proactive account health monitoring to protect your rankings, your Buy Box share, and your listing status',
    gradient: 'g3',
  },
  {
    icon: 'award',
    text: 'Dedicated senior strategists, providing consistent, informed account oversight rather than rotating account managers',
    gradient: 'g4',
  },
];

export const chartMonths = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
export const chartValues = [34, 40, 38, 52, 58, 55, 66, 72, 70, 82, 90, 100];

/* ---------------- Testimonials ---------------- */

export interface Testimonial {
  quote: string;
  name: string;
  category: string;
  gradient: 'g1' | 'g2' | 'g3' | 'g4';
  initials: string;
  metric?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Apexcale took over our Amazon account and within a few months, our visibility and sales completely turned around. Their team clearly knows what they're doing.",
    name: 'Simon',
    category: 'Supplements Category',
    gradient: 'g1',
    initials: 'S',
    metric: '+164% Revenue in 90 Days',
  },
  {
    quote:
      "What sets Apexcale apart is that they treat our account like it's their own business. Communication has been excellent, and the results speak for themselves.",
    name: 'Sunny',
    category: 'Fashion Category',
    gradient: 'g2',
    initials: 'Su',
    metric: 'ACoS dropped 38% → 16%',
  },
  {
    quote:
      "We were stuck at a $40k/month ceiling for over a year before partnering with Apexcale. They revamped our A+ Content, optimized our backend search terms, and launched full-funnel Sponsored Brand video campaigns. Sales tripled.",
    name: 'Marcus Vance',
    category: 'Home & Culinary Goods',
    gradient: 'g3',
    initials: 'MV',
    metric: '$1.4M Run Rate Achieved',
  },
  {
    quote:
      "Their design and catalog team completely transformed our product detail pages into high-converting storefronts. Our conversion rate jumped from 8.2% to 19.4%, securing a top 3 Best Seller badge in our subcategory.",
    name: 'Elena Rostova',
    category: 'Premium Skincare & Beauty',
    gradient: 'g4',
    initials: 'ER',
    metric: 'Top 3 Best Seller Rank',
  },
  {
    quote:
      "Managing inventory, listing hijackers, and escalating ad costs was burning out our in-house team. Apexcale took full ownership of operations and ad strategy. We have peace of mind and record-breaking quarterly profits.",
    name: 'David Chen',
    category: 'Consumer Tech & Audio',
    gradient: 'g1',
    initials: 'DC',
    metric: '+230% Organic Traffic',
  },
  {
    quote:
      "The strategic clarity Apexcale brings to Amazon PPC is phenomenal. They eliminated unprofitable search terms, scaled non-branded campaigns profitably, and drove our highest month in company history during Q4.",
    name: 'Sarah Jenkins',
    category: 'Pet Care & Accessories',
    gradient: 'g2',
    initials: 'SJ',
    metric: '5.2x Blended ROAS',
  },
  {
    quote:
      "Expanding into European marketplaces felt daunting until Apexcale navigated the VAT, translation, and localized PPC strategies for us. UK and Germany are now generating over 35% of our global Amazon revenue.",
    name: 'Liam O’Connor',
    category: 'Outdoor & Adventure Gear',
    gradient: 'g3',
    initials: 'LO',
    metric: 'Expanded to UK & EU',
  },
  {
    quote:
      "Apexcale's team doesn't just manage bids—they understand full-brand growth. From Brand Registry protection to Brand Story modules and DSP retargeting, their full-service execution is world-class.",
    name: 'Priya Patel',
    category: 'Organic Baby & Nursery',
    gradient: 'g4',
    initials: 'PP',
    metric: '+185% Year-Over-Year',
  },
  {
    quote:
      "Their retention strategy transformed our single-purchase customers into recurring subscribers. Our Subscribe & Save revenue now accounts for nearly 40% of our monthly volume, creating predictable recurring cash flow.",
    name: 'Michael Ross',
    category: 'Gourmet & Specialty Coffee',
    gradient: 'g1',
    initials: 'MR',
    metric: 'Subscribe & Save +320%',
  },
  {
    quote:
      "Before Apexcale, stockout penalties and poor forecasting were crushing our rankings. Their forecasting models and account health safeguards kept us in stock and protected our margins through prime seasonality.",
    name: 'Sophia Martinez',
    category: 'Ergonomic Office Solutions',
    gradient: 'g2',
    initials: 'SM',
    metric: 'Zero Inventory Stockouts',
  },
];

/* ---------------- FAQ ---------------- */

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Which marketplaces do you work with?',
    a: 'We manage accounts across Amazon (including the U.S., U.K., D.E., E.U., and other international marketplaces), Walmart Marketplace, and other major online retail platforms, allowing your brand to scale wherever your customers are located.',
  },
  {
    q: 'How quickly can I expect to see results?',
    a: 'Advertising performance improvements are typically visible within the first 30 days. Organic ranking and listing optimization results generally build over a 60- to 90-day period, as Amazon\'s algorithm responds to sustained, consistent performance.',
  },
  {
    q: 'Is there a minimum contract length?',
    a: 'We operate on a results-first, flexible basis. Specific terms are discussed and agreed upon during your initial strategy call, based on your account size, marketplace footprint, and growth goals.',
  },
  {
    q: 'Do you charge a commission on advertising spend?',
    a: 'Our pricing structure is discussed transparently during onboarding, based on the scope of services required. We do not believe in hidden fees or unclear billing practices.',
  },
  {
    q: 'What makes Apexcale different from other Amazon agencies?',
    a: 'We integrate advertising, content, operations, and brand protection into a single, coordinated strategy — managed by a dedicated team that both plans and executes the work, rather than handing recommendations off to a separate implementation team.',
  },
  {
    q: 'Can you support brands that are just launching on Amazon, as well as established brands?',
    a: 'Yes. We work with early-stage brands preparing for launch as well as established sellers looking to scale, recover from stalled growth, or expand into new marketplaces.',
  },
];
