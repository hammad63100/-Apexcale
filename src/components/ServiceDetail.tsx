import { detailedServices, getServiceBySlug } from '../data/servicesData';
import { useRouter } from '../context/RouterContext';
import { FinalCta } from './FinalCta';
import { Reveal } from './Reveal';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  AwardIcon,
  BadgeCheckIcon,
  CheckCircleIcon,
  CheckIcon,
  GlobeIcon,
  Icon,
  ShieldCheckIcon,
  SparkleIcon,
  StarIcon,
  type IconName,
} from './icons';

interface ServiceDetailProps {
  slug: string;
}

export function ServiceDetail({ slug }: ServiceDetailProps) {
  const { navigate } = useRouter();
  const service = getServiceBySlug(slug) || detailedServices[0];

  const scrollToContact = () => {
    const el = document.getElementById('cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Other services excluding current
  const otherServices = detailedServices.filter((s) => s.slug !== service.slug);

  return (
    <div className="service-detail-page">
      {/* ---------------- Sub-Nav / Breadcrumb Bar ---------------- */}
      <div className="svc-detail-bar">
        <div className="container svc-detail-bar-inner">
          <button
            type="button"
            className="svc-back-btn"
            onClick={() => navigate('#services')}
          >
            <ArrowLeftIcon size={16} />
            <span>Back to All Services</span>
          </button>
          <div className="svc-detail-badges">
            <span className="svc-status-pill">
              <span className="pulse-dot" /> Professional Service
            </span>
            <span className="svc-status-pill verified">
              <BadgeCheckIcon size={14} /> Amazon Verified Partner
            </span>
          </div>
        </div>
      </div>

      {/* ---------------- Hero Section ---------------- */}
      <section className="svc-hero-section">
        <div className="container">
          <div className="svc-hero-grid">
            {/* Left Column: Headlines & Copy */}
            <div className="svc-hero-content">
              <Reveal variant="up">
                <span className="eyebrow">
                  <SparkleIcon size={14} /> {service.category}
                </span>
              </Reveal>

              <Reveal variant="up" delay={60}>
                <h1 className="svc-hero-title">
                  {service.title}{' '}
                  <span className="grad-text-blue">Services</span>
                </h1>
              </Reveal>

              <Reveal variant="up" delay={120}>
                <p className="lead svc-hero-desc">
                  {service.heroLead}
                </p>
              </Reveal>

              <Reveal variant="up" delay={160}>
                <div className="svc-hero-actions">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={scrollToContact}
                  >
                    Book a Free Consultation <ArrowRightIcon size={16} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={() => {
                      const el = document.getElementById('service-process');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Explore Process
                  </button>
                </div>
              </Reveal>

              <Reveal variant="up" delay={200}>
                <div className="svc-trust-checklist">
                  <span>
                    <CheckCircleIcon size={16} /> No Long-Term Lock-Ins
                  </span>
                  <span>
                    <CheckCircleIcon size={16} /> Senior Strategist Led
                  </span>
                  <span>
                    <CheckCircleIcon size={16} /> Full Margin Accountability
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Showcase Image with Floating Badges */}
            <div className="svc-hero-visual">
              <Reveal variant="zoom" delay={100}>
                <div className="svc-hero-frame">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="svc-hero-img"
                  />
                  <div className="svc-hero-glow" />

                  {/* Floating Stat Card Top-Right */}
                  <div className="svc-float-badge top-right">
                    <span className="float-icon">
                      <StarIcon size={16} />
                    </span>
                    <div>
                      <strong>4.9 / 5.0 Rating</strong>
                      <small>Client Performance Score</small>
                    </div>
                  </div>

                  {/* Floating Stat Card Bottom-Left */}
                  <div className="svc-float-badge bottom-left">
                    <span className="float-icon blue">
                      <BadgeCheckIcon size={16} />
                    </span>
                    <div>
                      <strong>100% Policy Safe</strong>
                      <small>Terms of Service Compliant</small>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Why Choose Apexcale (2x2 Grid) ---------------- */}
      <section className="section svc-why-section" id="service-why">
        <div className="container">
          <div className="section-head center">
            <Reveal variant="up">
              <span className="eyebrow">Strategic Advantage</span>
            </Reveal>
            <Reveal variant="up" delay={60}>
              <h2 className="h2">
                Why Choose Apexcale for{' '}
                <span className="grad-text-blue">{service.title}?</span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="lead" style={{ maxWidth: 680, marginInline: 'auto' }}>
                We deliver measurable, compounding results through proven Amazon strategies and dedicated senior support.
              </p>
            </Reveal>
          </div>

          <div className="svc-why-grid">
            {service.whyChoose.map((item, idx) => {
              const numStr = `0${idx + 1}`;
              return (
                <Reveal key={item.title} variant="up" delay={idx * 80}>
                  <div className="svc-roadmap-card svc-why-card">
                    {/* Corner Icon - Touches exact top-left corner */}
                    <div className="svc-roadmap-corner-icon">
                      <Icon name={item.icon} size={20} />
                    </div>

                    {/* Number in Background (Watermark) */}
                    <div className="svc-roadmap-bg-num" aria-hidden="true">
                      {numStr}
                    </div>

                    {/* Card Content */}
                    <div className="svc-roadmap-content">
                      <div className="svc-roadmap-step-badge">
                        <span className="svc-roadmap-step-dot" />
                        <span>Advantage {numStr}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Impact & Performance Metrics ---------------- */}
      <section className="section svc-impact-section">
        <div className="container">
          <div className="section-head center">
            <Reveal variant="up">
              <span className="eyebrow">Measurable Results</span>
            </Reveal>
            <Reveal variant="up" delay={60}>
              <h2 className="h2">
                Get Started with Apexcale’s{' '}
                <span className="grad-text-blue">{service.title}</span> Today
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="lead" style={{ maxWidth: 660, marginInline: 'auto' }}>
                See the impact we drive for our clients through dedicated management, relentless optimization, and compounding growth.
              </p>
            </Reveal>
          </div>

          {/* 3 Circular Stat Indicators */}
          <div className="svc-stats-row">
            {service.stats.map((st, i) => (
              <Reveal key={st.label} variant="zoom" delay={i * 120}>
                <div className="svc-stat-circle-card">
                  <div className="svc-stat-ring">
                    <span className="svc-stat-val">{st.value}</span>
                  </div>
                  <h4 className="svc-stat-title">{st.label}</h4>
                  <p className="svc-stat-sub">{st.subtext}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="center" style={{ marginTop: 44 }}>
            <Reveal variant="up" delay={200}>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={scrollToContact}
              >
                Request a Custom Proposal <ArrowRightIcon size={16} />
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Our Process Section ---------------- */}
      <section className="section svc-process-section" id="service-process">
        <div className="container">
          <div className="section-head center">
            <Reveal variant="up">
              <span className="eyebrow">Execution Roadmap</span>
            </Reveal>
            <Reveal variant="up" delay={60}>
              <h2 className="h2">
                Our <span className="grad-text-blue">{service.title}</span> Process
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="lead" style={{ maxWidth: 680, marginInline: 'auto' }}>
                A systematic, battle-tested framework engineered to eliminate risks and compound your marketplace revenue.
              </p>
            </Reveal>
          </div>

          <div className="svc-roadmap-grid">
            {service.processSteps.map((step, idx) => {
              const defaultIcons: IconName[] = ['searchTrend', 'barChart', 'target', 'rocket'];
              const iconName = step.icon || defaultIcons[idx % defaultIcons.length];
              return (
                <Reveal key={step.stepNum} variant="up" delay={idx * 100}>
                  <div className="svc-roadmap-card">
                    {/* Corner Icon - Touches exact top-left corner */}
                    <div className="svc-roadmap-corner-icon">
                      <Icon name={iconName} size={20} />
                    </div>

                    {/* Step Number in Background (Watermark) */}
                    <div className="svc-roadmap-bg-num" aria-hidden="true">
                      {step.stepNum}
                    </div>

                    {/* Card Content */}
                    <div className="svc-roadmap-content">
                      <div className="svc-roadmap-step-badge">
                        <span className="svc-roadmap-step-dot" />
                        <span>Phase {step.stepNum}</span>
                      </div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Service Deliverables / Scope ---------------- */}
      <section className="section svc-deliverables-section">
        <div className="container">
          <div className="svc-scope-card">
            <div className="section-head center" style={{ marginBottom: 36 }}>
              <Reveal variant="up">
                <span className="eyebrow">Scope of Engagement</span>
              </Reveal>
              <Reveal variant="up" delay={60}>
                <h2 className="h2">
                  What’s Included in Our{' '}
                  <span className="grad-text-blue">{service.title}</span>
                </h2>
              </Reveal>
            </div>

            <div className="svc-deliverables-grid">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="svc-deliverable-item">
                  <span className="svc-deliv-icon">
                    <CheckIcon size={16} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Partner Certificates & Awards ---------------- */}
      <section className="section svc-awards-section">
        <div className="container center">
          <Reveal variant="up">
            <h3 className="svc-awards-heading">Amazon Trusted Partner Certificates & Awards</h3>
          </Reveal>

          <div className="svc-awards-row">
            <Reveal variant="up" delay={60}>
              <div className="svc-award-badge">
                <div className="svc-award-icon">
                  <ShieldCheckIcon size={38} />
                </div>
                <strong>Amazon SPN</strong>
                <small>Verified Partner</small>
              </div>
            </Reveal>

            <Reveal variant="up" delay={120}>
              <div className="svc-award-badge">
                <div className="svc-award-icon">
                  <BadgeCheckIcon size={38} />
                </div>
                <strong>Certified Partner</strong>
                <small>Amazon Ads Verified</small>
              </div>
            </Reveal>

            <Reveal variant="up" delay={180}>
              <div className="svc-award-badge">
                <div className="svc-award-icon">
                  <AwardIcon size={38} />
                </div>
                <strong>Top Performer</strong>
                <small>Rank Acceleration</small>
              </div>
            </Reveal>

            <Reveal variant="up" delay={240}>
              <div className="svc-award-badge">
                <div className="svc-award-icon">
                  <GlobeIcon size={38} />
                </div>
                <strong>Walmart Partner</strong>
                <small>Multi-Marketplace Growth</small>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Legacy Call To Action Banner ---------------- */}
      <section className="svc-legacy-banner-section">
        <div className="container">
          <div className="svc-legacy-banner">
            <Reveal variant="up">
              <h2 className="svc-legacy-title">
                Apexcale is an Amazon Legacy with a proven track record that takes off with you to new set-records.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={60}>
              <p className="svc-legacy-sub">We are Legacy!</p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <button
                type="button"
                className="btn btn-primary btn-lg svc-legacy-cta-btn"
                onClick={scrollToContact}
              >
                GET FREE CONSULTATION <ArrowRightIcon size={16} />
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Explore Other Services ---------------- */}
      <section className="section svc-other-services-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Comprehensive Portfolio</span>
            <h2 className="h2">Explore Other Growth Services</h2>
            <p className="lead" style={{ maxWidth: 620, marginInline: 'auto' }}>
              Pair {service.title} with our complementary growth disciplines for compounding marketplace performance.
            </p>
          </div>

          <div className="svc-other-grid">
            {otherServices.slice(0, 4).map((item) => (
              <div
                key={item.slug}
                className="svc-other-card"
                onClick={() => navigate('/services/' + item.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') navigate('/services/' + item.slug);
                }}
              >
                <div className="svc-other-img-box">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="svc-other-num">{item.num}</span>
                </div>
                <div className="svc-other-info">
                  <h4>{item.title}</h4>
                  <p>{item.shortDesc.slice(0, 110)}...</p>
                  <span className="svc-other-link">
                    Explore Details <ArrowRightIcon size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="center" style={{ marginTop: 40 }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('#services')}
            >
              <ArrowLeftIcon size={16} /> View All 9 Services
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- Unified Main Contact Section ---------------- */}
      <FinalCta defaultService={service.slug} />

    </div>
  );
}
