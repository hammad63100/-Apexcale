import type { ComponentType, SVGProps } from 'react';
import type React from 'react';
import logoImg from '../assets/images/logo.jpg';

type P = SVGProps<SVGSVGElement> & { size?: number };

/** Shared <svg> wrapper — stroke-based icons */
function Svg({ size = 24, children, ...rest }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

/* ------------------------- stroke icons ------------------------- */

export const StarIcon = (p: P) => (
  <Svg {...p}>
    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" stroke="none" />
  </Svg>
);

export const ArrowRightIcon = (p: P) => (
  <Svg {...p}>
    <path d="M5 12h14m-6-7 7 7-7 7" />
  </Svg>
);

export const ArrowLeftIcon = (p: P) => (
  <Svg {...p}>
    <path d="M19 12H5m6 7-7-7 7-7" />
  </Svg>
);

export const ArrowUpIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 19V5m-7 7 7-7 7 7" />
  </Svg>
);

export const CheckIcon = (p: P) => (
  <Svg {...p}>
    <path d="M20 6 9 17l-5-5" strokeWidth={2.4} />
  </Svg>
);

export const ChevronDownIcon = (p: P) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" strokeWidth={2.2} />
  </Svg>
);

export const PlusIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" strokeWidth={2.2} />
  </Svg>
);

export const PauseIcon = (p: P) => (
  <Svg {...p}>
    <rect x="6" y="4" width="4" height="16" rx="1.5" fill="currentColor" stroke="none" />
    <rect x="14" y="4" width="4" height="16" rx="1.5" fill="currentColor" stroke="none" />
  </Svg>
);

export const PlayIcon = (p: P) => (
  <Svg {...p}>
    <polygon points="6,4 20,12 6,20" fill="currentColor" stroke="none" />
  </Svg>
);

export const SendIcon = (p: P) => (
  <Svg {...p}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </Svg>
);

export const CheckCircleIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
    <path d="m8.5 12 2.5 2.5 5-5" strokeWidth={2} />
  </Svg>
);

export const SpinnerIcon = (p: P) => (
  <Svg className="fsc-spinner" {...p}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </Svg>
);

export const AlertCircleIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </Svg>
);


export const GlobeIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Svg>
);

export const CartIcon = (p: P) => (
  <Svg {...p}>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6m2 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm11 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </Svg>
);

export const BoxIcon = (p: P) => (
  <Svg {...p}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.3 7 12 12l8.7-5M12 22V12" />
  </Svg>
);

export const TrendUpIcon = (p: P) => (
  <Svg {...p}>
    <path d="M22 7l-8.5 8.5-5-5L2 17M16 7h6v6" strokeWidth={1.9} />
  </Svg>
);

export const TrendDownIcon = (p: P) => (
  <Svg {...p}>
    <path d="M22 17l-8.5-8.5-5 5L2 7m14 10h6v-6" strokeWidth={1.9} />
  </Svg>
);

export const SparkleIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z" strokeWidth={1.7} />
  </Svg>
);

export const SearchTrendIcon = (p: P) => (
  <Svg {...p}>
    <path d="M21 21l-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-3-6 2.2-2.2 1.8 1.8 3-3m-4.8 1.4H14v2" />
  </Svg>
);

export const ShieldCheckIcon = (p: P) => (
  <Svg {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const BuildingIcon = (p: P) => (
  <Svg {...p}>
    <path d="M6 21V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v17m-9 0h12M16 8h3a1 1 0 0 1 1 1v12M9.5 7h.01M12 7h.01M9.5 11h.01M12 11h.01M9.5 15h.01M12 15h.01" />
  </Svg>
);

export const MegaphoneIcon = (p: P) => (
  <Svg {...p}>
    <path d="m3 11 18-5v12L3 14v-3zm8.6 5.8a3 3 0 1 1-5.8-1.6" />
  </Svg>
);

export const TypeIcon = (p: P) => (
  <Svg {...p}>
    <rect x="4" y="3" width="16" height="18" rx="2.5" />
    <path d="M9 8.5h6M12 8.5v7" />
  </Svg>
);

export const ClipboardIcon = (p: P) => (
  <Svg {...p}>
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  </Svg>
);

export const ClipboardCheckIcon = (p: P) => (
  <Svg {...p}>
    <ClipboardIcon {...p} />
    <path d="m9 14 2 2 4-4" />
  </Svg>
);

export const ClipboardSearchIcon = (p: P) => (
  <Svg {...p}>
    <ClipboardIcon {...p} />
    <circle cx="11" cy="13.5" r="3" />
    <path d="m15.5 17.5 2.5 2.5" />
  </Svg>
);

export const RocketIcon = (p: P) => (
  <Svg {...p}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeWidth={1.7} />
  </Svg>
);

export const PaletteIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.83-.44-1.12-.29-.3-.44-.65-.44-1.13A1.64 1.64 0 0 1 14.41 16.4h2c3.05 0 5.55-2.5 5.55-5.55C21.96 6 17.46 2 12 2zM7.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3.5-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </Svg>
);

export const BadgeCheckIcon = (p: P) => (
  <Svg {...p}>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const BoltIcon = (p: P) => (
  <Svg {...p}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </Svg>
);

export const UsersIcon = (p: P) => (
  <Svg {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Svg>
);

export const EyeIcon = (p: P) => (
  <Svg {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);

export const ChatIcon = (p: P) => (
  <Svg {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8.5 9.5h.01M12 9.5h.01M15.5 9.5h.01" strokeWidth={2.6} />
  </Svg>
);

export const RouteIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="6" cy="19" r="3" />
    <circle cx="18" cy="5" r="3" />
    <path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H12" />
  </Svg>
);

export const SlidersIcon = (p: P) => (
  <Svg {...p}>
    <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
  </Svg>
);

export const ChartLineIcon = (p: P) => (
  <Svg {...p}>
    <path d="M3 3v18h18M7 17l4-5 3 3 6-7" />
  </Svg>
);

export const CoinsIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="8" cy="8" r="6" />
    <path d="M18.1 10.4A6 6 0 1 1 10.3 18M7 6h1v4M16.7 13.9l.7.7-2.8 2.8" />
  </Svg>
);

export const ActivityIcon = (p: P) => (
  <Svg {...p}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </Svg>
);

export const AwardIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1" />
  </Svg>
);

export const PhoneIcon = (p: P) => (
  <Svg {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </Svg>
);

export const MailIcon = (p: P) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m22 7-10 5L2 7" />
  </Svg>
);

export const PinIcon = (p: P) => (
  <Svg {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);

export const CalendarIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Svg>
);

/* ------------------------- brand / fill icons ------------------------- */

export const LogoIcon = ({ size = 38, className = '', style, alt = 'Apexcale logo' }: { size?: number; className?: string; style?: React.CSSProperties; alt?: string }) => (
  <img
    src={logoImg}
    alt={alt}
    width={size}
    height={size}
    className={className}
    style={{
      width: size,
      height: size,
      objectFit: 'contain',
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style,
    }}
  />
);

export const LinkedInIcon = (p: P) => (
  <Svg {...p}>
    <path fill="currentColor" stroke="none" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4zM8 8h3.8v2.05h.05C12.4 8.9 14.5 8 16.4 8c3.6 0 4.5 2.4 4.5 5.5V23h-4v-8.5c0-2-.7-3.3-2.6-3.3-1.9 0-3.3 1.5-3.3 3.6V23H8z" />
  </Svg>
);

export const InstagramIcon = (p: P) => (
  <Svg {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
  </Svg>
);

export const FacebookIcon = (p: P) => (
  <Svg {...p}>
    <path fill="currentColor" stroke="none" d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V13h2.7v8z" />
  </Svg>
);

export const XIcon = (p: P) => (
  <Svg {...p}>
    <path fill="currentColor" stroke="none" d="M17.8 3h3l-6.6 7.5L22 21h-6.1l-4.8-6.3L5.6 21h-3l7-8L2 3h6.3l4.3 5.7zm-1 16.2h1.7L7.3 4.7H5.5z" />
  </Svg>
);

export const YoutubeIcon = (p: P) => (
  <Svg {...p}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path fill="currentColor" d="m10 9.5 5 2.5-5 2.5z" />
  </Svg>
);

/* ------------------------- registry ------------------------- */

export const BarChartIcon = (p: P) => (
  <Svg {...p}>
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </Svg>
);

export const TargetIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </Svg>
);

export const ZapIcon = (p: P) => (
  <Svg {...p}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Svg>
);

export const FileTextIcon = (p: P) => (
  <Svg {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </Svg>
);

export const DollarSignIcon = (p: P) => (
  <Svg {...p}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </Svg>
);

export const LayersIcon = (p: P) => (
  <Svg {...p}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </Svg>
);

export const RefreshCwIcon = (p: P) => (
  <Svg {...p}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </Svg>
);

export const FeatherIcon = (p: P) => (
  <Svg {...p}>
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </Svg>
);

export const CpuIcon = (p: P) => (
  <Svg {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </Svg>
);

export const TerminalIcon = (p: P) => (
  <Svg {...p}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </Svg>
);

export const UserCheckIcon = (p: P) => (
  <Svg {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </Svg>
);

export const PackageIcon = (p: P) => (
  <Svg {...p}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </Svg>
);

export const TagIcon = (p: P) => (
  <Svg {...p}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </Svg>
);

export const AnchorIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="22" x2="12" y2="8" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  </Svg>
);

export const SmartphoneIcon = (p: P) => (
  <Svg {...p}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </Svg>
);

export const GridIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </Svg>
);

export const RadarIcon = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <line x1="12" y1="2" x2="12" y2="12" />
    <line x1="12" y1="12" x2="19.07" y2="4.93" />
  </Svg>
);

export const LockIcon = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
);

export const AlertTriangleIcon = (p: P) => (
  <Svg {...p}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </Svg>
);

export const ShieldIcon = (p: P) => (
  <Svg {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Svg>
);

export type IconName =
  | 'logo'
  | 'star'
  | 'arrowRight'
  | 'arrowLeft'
  | 'arrowUp'
  | 'check'
  | 'plus'
  | 'globe'
  | 'cart'
  | 'box'
  | 'trendUp'
  | 'trendingUp'
  | 'trendDown'
  | 'sparkle'
  | 'searchTrend'
  | 'shieldCheck'
  | 'building'
  | 'megaphone'
  | 'type'
  | 'clipboard'
  | 'clipboardCheck'
  | 'clipboardSearch'
  | 'rocket'
  | 'palette'
  | 'badgeCheck'
  | 'bolt'
  | 'users'
  | 'eye'
  | 'chat'
  | 'route'
  | 'sliders'
  | 'chartLine'
  | 'coins'
  | 'activity'
  | 'award'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'calendar'
  | 'linkedin'
  | 'instagram'
  | 'facebook'
  | 'x'
  | 'youtube'
  | 'barChart'
  | 'target'
  | 'zap'
  | 'fileText'
  | 'dollarSign'
  | 'layers'
  | 'refreshCw'
  | 'feather'
  | 'cpu'
  | 'terminal'
  | 'userCheck'
  | 'package'
  | 'checkCircle'
  | 'tag'
  | 'anchor'
  | 'smartphone'
  | 'grid'
  | 'radar'
  | 'lock'
  | 'alertTriangle'
  | 'shield';

const registry: Record<IconName, ComponentType<P>> = {
  logo: LogoIcon,
  star: StarIcon,
  arrowRight: ArrowRightIcon,
  arrowLeft: ArrowLeftIcon,
  arrowUp: ArrowUpIcon,
  check: CheckIcon,
  plus: PlusIcon,
  globe: GlobeIcon,
  cart: CartIcon,
  box: BoxIcon,
  trendUp: TrendUpIcon,
  trendingUp: TrendUpIcon,
  trendDown: TrendDownIcon,
  sparkle: SparkleIcon,
  searchTrend: SearchTrendIcon,
  shieldCheck: ShieldCheckIcon,
  building: BuildingIcon,
  megaphone: MegaphoneIcon,
  type: TypeIcon,
  clipboard: ClipboardIcon,
  clipboardCheck: ClipboardCheckIcon,
  clipboardSearch: ClipboardSearchIcon,
  rocket: RocketIcon,
  palette: PaletteIcon,
  badgeCheck: BadgeCheckIcon,
  bolt: BoltIcon,
  users: UsersIcon,
  eye: EyeIcon,
  chat: ChatIcon,
  route: RouteIcon,
  sliders: SlidersIcon,
  chartLine: ChartLineIcon,
  coins: CoinsIcon,
  activity: ActivityIcon,
  award: AwardIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  pin: PinIcon,
  calendar: CalendarIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
  youtube: YoutubeIcon,
  barChart: BarChartIcon,
  target: TargetIcon,
  zap: ZapIcon,
  fileText: FileTextIcon,
  dollarSign: DollarSignIcon,
  layers: LayersIcon,
  refreshCw: RefreshCwIcon,
  feather: FeatherIcon,
  cpu: CpuIcon,
  terminal: TerminalIcon,
  userCheck: UserCheckIcon,
  package: PackageIcon,
  checkCircle: CheckCircleIcon,
  tag: TagIcon,
  anchor: AnchorIcon,
  smartphone: SmartphoneIcon,
  grid: GridIcon,
  radar: RadarIcon,
  lock: LockIcon,
  alertTriangle: AlertTriangleIcon,
  shield: ShieldIcon,
};

export interface IconProps extends P {
  name: IconName;
}

export function Icon({ name, ...rest }: IconProps) {
  const Cmp = registry[name] || SparkleIcon;
  return <Cmp {...rest} />;
}
