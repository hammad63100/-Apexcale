// Import case study proof images provided in src/assets/images
import cs1Img from '../assets/images/CASE STUDY 1.jpg.jpeg';
import cs2ImgA from '../assets/images/Case study 2.jpg.jpeg';
import cs2ImgB from '../assets/images/Case STUDY 02.jpg.jpeg';
import cs3ImgA from '../assets/images/Case Study 3.jpg.jpeg';
import cs3ImgB from '../assets/images/case study 03.jpg.jpeg';
import cs4Img from '../assets/images/Case Study 4.jpg.jpeg';

export interface CaseStudyStat {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}

export interface CaseStudyItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  marketplace: string;
  category: string;
  images: {
    src: string;
    caption: string;
  }[];
  stats: CaseStudyStat[];
  summary: string;
  challenges: {
    title: string;
    items: string[];
  };
  strategies: {
    title: string;
    points: {
      headline: string;
      description?: string;
      bullets?: string[];
      result?: string;
    }[];
  };
  results: {
    title: string;
    takeaways: string[];
  };
}

export const caseStudies: CaseStudyItem[] = [
  {
    id: 'case-study-1',
    number: '01',
    title: 'Newly Launched Brand: $181,000 Sales in 12 Months',
    tagline: 'YOY Growth of 64% with 21.23% Net Profit on 3 SKUs',
    marketplace: 'United States',
    category: 'Kitchen & Dining',
    images: [
      {
        src: cs1Img,
        caption: '12-Month Sales Velocity & Margin Stabilization Report',
      },
    ],
    stats: [
      { label: 'Total Sales', value: '$181,000', sub: 'In 12 Months', highlight: true },
      { label: 'YoY Growth', value: '+64%', sub: 'Annual Expansion' },
      { label: 'Net Profit', value: '21.23%', sub: 'Bottom-Line Profit' },
      { label: 'Product Portfolio', value: '3 SKUs', sub: 'Hyper-Focused Catalog' },
    ],
    summary:
      'This account wasn’t scaling — it was plateauing after an early growth spike. We stepped in to diagnose the mid-lifecycle compression phase, rebuild relevance density, reconstruct conversion efficiency, and stabilize baseline sales velocity.',
    challenges: {
      title: 'Initial Market Conditions & Observed Pattern',
      items: [
        'Strong growth between May → July followed by declining monthly revenue, reduced demand capture, and weak visibility consistency.',
        'Classic mid-lifecycle compression phase on Amazon: early traction fades, competitors enter or optimize, and algorithm reallocates visibility.',
        'Listing became less aligned with evolving search patterns and less competitive in keyword-to-product mapping.',
        'Traffic was under-monetized: buyer sessions did not translate into purchases effectively, creating ad spend fatigue.',
        'Revenue peaks followed by sharp drops with no stable baseline sales velocity.',
      ],
    },
    strategies: {
      title: 'Strategic System-Level Interventions',
      points: [
        {
          headline: 'Relevance Density Increase',
          description:
            'Amazon ranks listings based on how well they match the exact language of customer intent.',
          bullets: [
            'Improved semantic coverage of customer queries across backend and frontend copy.',
            'Precision alignment between search terms, product positioning, and listing content.',
          ],
          result:
            'Increased indexing depth, higher eligibility for top-of-search visibility, and deeper alignment with high-intent long-tail demand clusters.',
        },
        {
          headline: 'Conversion Efficiency Reconstruction',
          description:
            'The biggest unlock was not traffic — it was increasing output per session.',
          bullets: [
            'Improved clarity of unique value proposition above the fold.',
            'Reduced customer decision friction and highlighted core differentiators.',
            'Strengthened trust signals, objection-handling imagery, and premium A+ layout.',
          ],
          result:
            'Higher conversion rate, superior performance vs competing listings, and stronger organic ranking reinforcement.',
        },
        {
          headline: 'Sales Velocity Stabilization',
          description:
            'Amazon rewards consistency over spikes. We engineered a smoothed sales curve to maintain steady daily unit movement.',
          bullets: [
            'Smoothed out the volatile ad spikes into a predictable baseline velocity.',
            'Maintained steady unit movement to reinforce Amazon algorithm confidence.',
          ],
          result:
            'Predictable monthly revenue, higher algorithm organic trust, and sustained long-term ranking stability.',
        },
      ],
    },
    results: {
      title: 'Documented Impact',
      takeaways: [
        'Grew from post-launch plateau to $181,000 in annual revenue with +64% YoY compounding expansion.',
        'Maintained a healthy 21.23% net bottom-line profit across just 3 hyper-optimized SKUs.',
        'Replaced erratic ad spikes with predictable, compounding organic ranking dominance.',
      ],
    },
  },
  {
    id: 'case-study-2',
    number: '02',
    title: '$200k Sales in Just 50 Days with $47k Net Profit',
    tagline: 'Newly Launched Home & Kitchen Brand — 23.5% Net Profit Margin',
    marketplace: 'United States',
    category: 'Home & Kitchen',
    images: [
      {
        src: cs2ImgA,
        caption: '50-Day MTD Revenue Scale & Order Velocity Curve',
      },
      {
        src: cs2ImgB,
        caption: 'Ad Performance, ACOS Control & Profit Contribution Matrix',
      },
    ],
    stats: [
      { label: '50-Day Sales', value: '$200,000+', sub: 'MTD Rapid Scale', highlight: true },
      { label: 'Net Profit', value: '$47,000', sub: 'In First 50 Days' },
      { label: 'Net Margin', value: '23.5%', sub: 'Healthy Bottom Line' },
      { label: 'Catalog Size', value: '9 SKUs', sub: 'Variation Family' },
    ],
    summary:
      'Engineered an aggressive, profit-first launch architecture that generated over $200,000 in sales within the first 50 days while delivering $47,000 in net profit at a 23.5% margin, proving paid traffic scalability with controlled ad spend.',
    challenges: {
      title: 'Launch Scaling Challenges',
      items: [
        'Newly launched product family facing entrenched category competitors with thousands of reviews.',
        'Need to scale ad spend aggressively up to $46K without letting ACOS eat up contribution margins.',
        'Requirement to establish immediate organic ranking momentum within the Amazon honeymoon window.',
        'Managing cross-variation conversion efficiency across 9 distinct SKUs.',
      ],
    },
    strategies: {
      title: 'Execution & Advertising Engine',
      points: [
        {
          headline: 'Advanced PPC Restructuring',
          bullets: [
            'Segmented campaigns by match type, search intent, and conversion velocity.',
            'Strictly separated branded defense and non-branded discovery traffic.',
            'Introduced aggressive scaling campaigns for high-converting root keywords.',
            'Implemented budget isolation safeguards for top ASIN performers.',
          ],
        },
        {
          headline: 'Profit-Based Bid Optimization',
          bullets: [
            'Targeted ACOS thresholds calibrated strictly against unit contribution margins.',
            'Bid increases targeted on keywords with proven strong CVR and positive TACOS impact.',
            'Aggressive negative keyword isolation to eliminate budget drain on high-click, low-conversion terms.',
          ],
        },
        {
          headline: 'Search Term Harvesting & Expansion',
          bullets: [
            'Weekly programmatic mining of converting customer search queries.',
            'Exact-match isolation scaling for top-performing revenue drivers.',
            'Continuous negative keyword isolation across all broad and phrase discovery funnels.',
          ],
        },
        {
          headline: 'Conversion & AOV Enhancement',
          bullets: [
            'Cross-variation listing optimization to route traffic to best-selling options.',
            'Leveraged multi-unit purchase incentives resulting in 1.23 units per customer order.',
            'Achieved high Average Order Value of $54.96 to support sustainable ad scale.',
          ],
        },
      ],
    },
    results: {
      title: 'Key Performance Insights',
      takeaways: [
        'Strong Revenue Stability: Daily sales demonstrated consistent upward patterns with controlled volatility.',
        'Efficient Scaling: Despite increasing ad spend to nearly $46K, ACOS remained strictly under control.',
        'High Paid-to-Organic Efficiency: Ad-driven revenue built organic keyword momentum without eroding bottom-line margins.',
        'Healthy Order Economics: AOV of $54.96 and 1.23 units per order unlocked sustainable margin growth.',
      ],
    },
  },
  {
    id: 'case-study-3',
    number: '03',
    title: '$81k Sales in Last 2 Months With 0.4% TACOS',
    tagline: 'High-Margin Supplement Brand — 38.55% Net EBITDA & 5,872 Orders',
    marketplace: 'United States',
    category: 'Supplement & Nutrition',
    images: [
      {
        src: cs3ImgA,
        caption: '60-Day Financial Performance & Organic Margin Dashboard',
      },
      {
        src: cs3ImgB,
        caption: 'Order Volume Breakdown (5,872 Orders / 7,546 Units)',
      },
    ],
    stats: [
      { label: '60-Day Sales', value: '$81,013', sub: 'In Last 2 Months', highlight: true },
      { label: 'Target TACOS', value: '0.4%', sub: 'Minimal Ad Reliance', highlight: true },
      { label: 'Net EBITDA', value: '38.55%', sub: 'Industry-Leading Margin' },
      { label: 'Order Volume', value: '5,872 Orders', sub: '7,546 Units Sold' },
    ],
    summary:
      'Recorded 5,872 orders and 7,546 units sold with an AOV of $13.80 and 1.29 units per order. Importantly, this exceptional performance was achieved without heavy ad spending, relying instead on organic page-one dominance, repeat buyer retention, and an ultra-low 0.4% TACOS.',
    challenges: {
      title: 'The Core Challenge: Ad Dependency in Supplements',
      items: [
        'Like most supplement brands, the initial problem was ad dependency — paid clicks were required just to maintain baseline volume.',
        'Supplement CPCs on Amazon are notoriously expensive, quickly eroding net profit margins if not controlled.',
        'Goal: Shift from an account where ads drive sales to one where listings dominate organically and ads serve purely as ranking levers.',
      ],
    },
    strategies: {
      title: 'The Strategy That Changed Everything',
      points: [
        {
          headline: '1. Conversion-First Listing Architecture',
          description:
            'The listing was rebuilt to do the heavy lifting without needing continuous paid ad pushes.',
          bullets: [
            'Clear benefit hierarchy aligned directly with consumer health search intent.',
            'Image sequencing engineered to overcome purchase objections within 5 seconds.',
            'Supplement facts and lab testing framed for medical trust rather than promotional hype.',
            'A+ content structured to reinforce brand authority and drive repeat buyer retention.',
          ],
        },
        {
          headline: '2. PPC as a Ranking Lever, Not a Sales Crutch',
          description:
            'Advertising spend was intentionally limited, disciplined, and hyper-focused.',
          bullets: [
            'Only high-intent, exact-match keywords with proven ranking influence were funded.',
            'Zero broad "discovery burn" or vanity awareness campaigns.',
            'Daily budgets capped strictly to protect high EBITDA profitability.',
            'Ad placements calibrated where they elevated organic search ranking, not just temporary volume.',
          ],
        },
        {
          headline: '3. Organic Demand Engine Activation',
          description:
            'Once page-one organic positions were secured, the account shifted into a self-sustaining low-TACoS flywheel.',
          bullets: [
            'Organic search results absorbed the vast majority of customer volume.',
            'Repeat buyers and high subscribe/save behavior reduced customer acquisition dependency.',
            'Branded search volume increased steadily, providing free compounding sales.',
          ],
        },
      ],
    },
    results: {
      title: 'Documented Impact',
      takeaways: [
        '$81,013 generated in 60 days with a remarkable 0.4% TACOS.',
        'Net EBITDA reached 38.55%, generating elite cash flow in a crowded subcategory.',
        '5,872 orders and 7,546 units moved with 1.29 units per order, proving strong cross-sell retention.',
      ],
    },
  },
  {
    id: 'case-study-4',
    number: '04',
    title: '$2,500,000 Revenue & $425,000 Profit in 12 Months',
    tagline: 'Full Turnaround Strategy for an Established Sportswear Brand',
    marketplace: 'United States',
    category: 'Sportswear & Apparel',
    images: [
      {
        src: cs4Img,
        caption: '12-Month Turnaround: $2.5M Revenue & $425K Net Profit Curve',
      },
    ],
    stats: [
      { label: 'Annual Revenue', value: '$2,500,000', sub: 'In 12 Months', highlight: true },
      { label: 'Net Profit', value: '$425,000', sub: 'Clean Net Bottom Line' },
      { label: 'Turnaround Timeline', value: '12 Months', sub: 'Reversed -45% Drop' },
      { label: 'Core Focus', value: 'Top 4 ASINs', sub: 'Prioritized Traffic' },
    ],
    summary:
      'This client approached us in April 2024 suffering from a 45% YOY sales drop and shrinking basket sizes. We executed a full-funnel advertising and catalog turnaround across Sponsored Products, Sponsored Brands, and Sponsored Display that generated $2.5M in revenue and $425K in net profit.',
    challenges: {
      title: 'Severe Performance Decline (Pre-Apexcale)',
      items: [
        'Although the brand maintained strong search volume, sales had collapsed by ~45% year-over-year.',
        'Average units per order had decreased by 3.51%, reducing lifetime customer value.',
        'Unfocused ad spend across too many parent-child variations with weak conversion tracking.',
        'High ad spend on low-converting clicks leading to compressed margins.',
      ],
    },
    strategies: {
      title: 'Full-Funnel Turnaround Strategy',
      points: [
        {
          headline: 'SKU-Level Prioritization',
          bullets: [
            'Conducted Pareto analysis to isolate the top 4 ASINs driving 80% of profitable volume.',
            'Segmented listings with high sessions but low B2B/B2C conversion for tailored audience targeting.',
            'Paused non-performing ad groups to consolidate capital behind category winners.',
          ],
        },
        {
          headline: 'Conversion Optimization & Creative Alignment',
          bullets: [
            'Aligned PPC keyword targets with listing SEO, rewritten bullet points, and optimized search terms.',
            'Refreshed brand A+ Content and Brand Story modules to boost session-to-order conversion.',
            'Deployed automated review acceleration strategies to rebuild consumer social proof.',
          ],
        },
        {
          headline: 'Precision Bidding & Placement Multipliers',
          bullets: [
            'Prioritized top-of-search placement multipliers strictly on high-ROAS exact search terms.',
            'Reduced reliance on low-intent broad match campaigns that drained daily budgets.',
            'Reallocated budget in real-time toward high-converting seasonal time slots.',
          ],
        },
        {
          headline: 'Retargeting with Sponsored Display',
          bullets: [
            'Deployed lifestyle-themed creative assets specifically tailored to sports and fitness enthusiasts.',
            'Re-engaged cart abandoners and cross-sold past purchasers of complementary top-converting SKUs.',
            'Protected brand PDPs against competitor conquesting with dedicated defensive display targets.',
          ],
        },
      ],
    },
    results: {
      title: 'Documented Impact & Turnaround Results',
      takeaways: [
        '$2,500,000 in total revenue generated with $425,000 in net profit over 12 months.',
        'Reversed the 45% year-over-year revenue drop and restored consistent top-of-search category ranking.',
        'Drastic efficiency improvements: achieved substantial growth in ordered product sales at higher margins.',
        'Improved budget clarity: SKU and audience segmentation eliminated wasted ad spend permanently.',
      ],
    },
  },
];

export function getCaseStudyById(id: string): CaseStudyItem | undefined {
  return caseStudies.find(
    (c) => c.id === id || c.number === id || c.id === `case-study-${id}` || c.number === `0${id}`,
  );
}

