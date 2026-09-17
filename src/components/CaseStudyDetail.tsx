import { useState } from 'react';
import { caseStudies, getCaseStudyById } from '../data/caseStudiesData';
import { useRouter } from '../context/RouterContext';
import { FinalCta } from './FinalCta';
import { Reveal } from './Reveal';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  AwardIcon,
  CheckCircleIcon,
  CheckIcon,
  GlobeIcon,
  ShieldCheckIcon,
  SparkleIcon,
  TrendUpIcon,
  XIcon,
} from './icons';

interface CaseStudyDetailProps {
  id: string;
}

export function CaseStudyDetail({ id }: CaseStudyDetailProps) {
  const { navigate } = useRouter();
  const study = getCaseStudyById(id) || caseStudies[0];

  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Other case studies excluding current
  const otherStudies = caseStudies.filter((c) => c.id !== study.id);

  return (
    <div className="cs-detail-page">
      {/* ---------------- Sub-Nav / Breadcrumb Bar ---------------- */}
      <div className="cs-detail-bar">
        <div className="container cs-detail-bar-inner">
          <button
            type="button"
            className="cs-back-btn"
            onClick={() => navigate('#case-studies')}
          >
            <ArrowLeftIcon size={16} />
            <span>Back to All Case Studies</span>
          </button>

          <div className="cs-breadcrumb">
            <span
              role="button"
              tabIndex={0}
              onClick={() => navigate('/')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate('/');
              }}
            >
              Home
            </span>
            <span className="sep">/</span>
            <span
              role="button"
              tabIndex={0}
              onClick={() => navigate('#case-studies')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate('#case-studies');
              }}
            >
              Case Studies
            </span>
            <span className="sep">/</span>
            <span className="cur">{study.category}</span>
          </div>
        </div>
      </div>

      {/* ---------------- Hero Section ---------------- */}
      <section className="cs-detail-hero">
        <div className="container">
          <div className="cs-hero-content">
            <Reveal variant="up">
              <div className="cs-hero-badges">
                <div className="cs-stat-chip">
                  <span className="cs-chip-dot" />
                  <span>CASE STUDY #{study.number}</span>
                </div>
                <span className="cs-meta-pill">{study.category}</span>
                <span className="cs-market-pill">
                  <GlobeIcon size={14} />
                  {study.marketplace}
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={60}>
              <h1 className="cs-hero-title">{study.title}</h1>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <p className="cs-hero-tagline">{study.tagline}</p>
            </Reveal>

            {/* 4 Large KPI Metric Boxes */}
            <Reveal variant="up" delay={140}>
              <div className="cs-hero-kpi-grid">
                {study.stats.map((st, i) => (
                  <div
                    key={i}
                    className={`cs-kpi-card ${st.highlight ? 'cs-kpi-highlight' : ''}`}
                  >
                    <span className="cs-kpi-val">{st.value}</span>
                    <span className="cs-kpi-lbl">{st.label}</span>
                    {st.sub && <span className="cs-kpi-sub">{st.sub}</span>}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="up" delay={180}>
              <div className="cs-hero-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={scrollToContact}
                >
                  <span>Request Account Diagnostic</span>
                  <ArrowRightIcon size={16} />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    const el = document.getElementById('proof-gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <SparkleIcon size={16} />
                  <span>View Verified Charts ({study.images.length})</span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Visual Proof Gallery ---------------- */}
      <section className="section cs-gallery-section" id="proof-gallery">
        <div className="container">
          <div className="section-head center">
            <Reveal variant="up">
              <span className="eyebrow">Verified Proof & Data</span>
            </Reveal>
            <Reveal variant="up" delay={60}>
              <h2 className="h2">
                Live Performance <span className="grad-text-blue">Screenshots</span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="lead" style={{ maxWidth: 700, marginInline: 'auto' }}>
                Unedited Seller Central and advertising dashboard metrics documenting the growth trajectory and financial turnaround.
              </p>
            </Reveal>
          </div>

          <div
            className={`cs-gallery-grid ${study.images.length === 1 ? 'single-image' : 'dual-image'}`}
          >
            {study.images.map((img, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 120}>
                <div
                  className="cs-gallery-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => setLightboxImg(img)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setLightboxImg(img);
                  }}
                >
                  <div className="cs-gallery-img-wrap">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="cs-gallery-img"
                      loading="lazy"
                    />
                    <div className="cs-gallery-overlay">
                      <span className="cs-zoom-pill">
                        <TrendUpIcon size={15} /> Click to Enlarge Chart
                      </span>
                    </div>
                  </div>
                  <div className="cs-gallery-meta">
                    <span className="cs-gallery-num">Chart 0{idx + 1}</span>
                    <h4 className="cs-gallery-cap">{img.caption}</h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Main Content: Diagnosis, Challenges & Strategy ---------------- */}
      <section className="section cs-content-section">
        <div className="container">
          <div className="cs-layout-grid">
            {/* Left Column: Full Deep Dive */}
            <div className="cs-main-column">
              {/* Executive Summary */}
              <Reveal variant="up">
                <div className="cs-content-block">
                  <span className="cs-block-badge">Executive Summary</span>
                  <h2 className="cs-block-heading">The Strategic Starting Point</h2>
                  <p className="cs-lead-text">{study.summary}</p>
                </div>
              </Reveal>

              {/* Challenges / Observed Pattern */}
              <Reveal variant="up" delay={60}>
                <div className="cs-content-block cs-challenge-card">
                  <span className="cs-block-badge error">Initial Condition</span>
                  <h3 className="cs-block-heading">{study.challenges.title}</h3>
                  <ul className="cs-detail-list">
                    {study.challenges.items.map((item, idx) => (
                      <li key={idx} className="cs-detail-list-item challenge">
                        <span className="cs-point-dot">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Strategies Implemented */}
              <Reveal variant="up" delay={100}>
                <div className="cs-content-block">
                  <span className="cs-block-badge success">Execution Blueprint</span>
                  <h3 className="cs-block-heading">{study.strategies.title}</h3>

                  <div className="cs-strat-cards-stack">
                    {study.strategies.points.map((pt, pIdx) => (
                      <div key={pIdx} className="cs-strat-card-detail">
                        <div className="cs-strat-card-head">
                          <span className="cs-strat-idx">0{pIdx + 1}</span>
                          <h4 className="cs-strat-title">{pt.headline}</h4>
                        </div>
                        {pt.description && (
                          <p className="cs-strat-lead">{pt.description}</p>
                        )}
                        {pt.bullets && pt.bullets.length > 0 && (
                          <ul className="cs-sub-bullets">
                            {pt.bullets.map((b, bIdx) => (
                              <li key={bIdx}>
                                <CheckIcon size={14} />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {pt.result && (
                          <div className="cs-strat-result-callout">
                            <strong>System Unlock:</strong> {pt.result}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Documented Takeaways */}
              <Reveal variant="up" delay={140}>
                <div className="cs-content-block cs-results-card">
                  <span className="cs-block-badge success">Financial Outcomes</span>
                  <h3 className="cs-block-heading">{study.results.title}</h3>
                  <ul className="cs-detail-list">
                    {study.results.takeaways.map((takeaway, idx) => (
                      <li key={idx} className="cs-detail-list-item success">
                        <CheckCircleIcon size={18} />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Sticky Key Takeaways & Quick Contact */}
            <aside className="cs-sidebar">
              <div className="cs-sticky-box">
                {/* Highlights Card */}
                <div className="cs-sidebar-card">
                  <h4 className="cs-side-title">Account Quick Facts</h4>
                  <div className="cs-side-metrics">
                    <div className="cs-side-metric-row">
                      <span className="cs-sm-label">Marketplace</span>
                      <span className="cs-sm-value">{study.marketplace}</span>
                    </div>
                    <div className="cs-side-metric-row">
                      <span className="cs-sm-label">Niche Category</span>
                      <span className="cs-sm-value">{study.category}</span>
                    </div>
                    {study.stats.map((st, i) => (
                      <div key={i} className="cs-side-metric-row">
                        <span className="cs-sm-label">{st.label}</span>
                        <span className="cs-sm-value highlight">{st.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="cs-side-cta">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%' }}
                      onClick={scrollToContact}
                    >
                      <span>Scale Your Brand</span>
                      <ArrowRightIcon size={14} />
                    </button>
                  </div>
                </div>

                {/* Trust Signal */}
                <div className="cs-sidebar-trust">
                  <div className="cs-trust-item">
                    <ShieldCheckIcon size={20} />
                    <div>
                      <strong>Senior-Level Attention</strong>
                      <p>Veteran account architects manage strategy personally.</p>
                    </div>
                  </div>
                  <div className="cs-trust-item">
                    <AwardIcon size={20} />
                    <div>
                      <strong>Profit-First Guarantee</strong>
                      <p>Growth is aligned strictly with contribution margin.</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------------- Other Case Studies ---------------- */}
      <section className="section cs-more-section">
        <div className="container">
          <div className="section-head center">
            <Reveal variant="up">
              <span className="eyebrow">Explore More Proof</span>
            </Reveal>
            <Reveal variant="up" delay={60}>
              <h2 className="h2">
                Other Documented <span className="grad-text-blue">Case Studies</span>
              </h2>
            </Reveal>
          </div>

          <div className="cs-more-grid">
            {otherStudies.map((other) => (
              <div
                key={other.id}
                className="cs-more-card"
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/case-studies/${other.id}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') navigate(`/case-studies/${other.id}`);
                }}
              >
                <div className="cs-more-header">
                  <div className="cs-stat-chip">
                    <span className="cs-chip-dot" />
                    <span>CASE STUDY #{other.number}</span>
                  </div>
                  <span className="cs-meta-pill">{other.category}</span>
                </div>
                <h4 className="cs-more-title">{other.title}</h4>
                <div className="cs-more-stat-pill">
                  <strong>{other.stats[0]?.value}</strong> — {other.stats[0]?.label}
                </div>
                <span className="cs-more-link">
                  <span>Read Full Case Study</span>
                  <ArrowRightIcon size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Unified Main Contact Section ---------------- */}
      <FinalCta />


      {/* ---------------- Lightbox Modal ---------------- */}
      {lightboxImg && (
        <div
          className="cs-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="cs-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cs-lightbox-header">
              <div>
                <span className="cs-lightbox-tag">Case Study #{study.number} Proof</span>
                <h4 className="cs-lightbox-title">{lightboxImg.caption}</h4>
              </div>
              <button
                type="button"
                className="cs-lightbox-close"
                onClick={() => setLightboxImg(null)}
                aria-label="Close image preview"
              >
                <XIcon size={20} />
              </button>
            </div>

            <div className="cs-lightbox-img-wrapper">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.caption}
                className="cs-lightbox-img"
              />
            </div>

            <div className="cs-lightbox-caption">
              <span className="cs-chip-dot" />
              <span>{lightboxImg.caption}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
