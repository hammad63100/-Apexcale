import { useState } from 'react';
import { caseStudies } from '../data/caseStudiesData';
import { useRouter } from '../context/RouterContext';
import { Reveal } from './Reveal';
import {
  ArrowRightIcon,
  SparkleIcon,
  TrendUpIcon,
  XIcon,
} from './icons';

export function CaseStudies() {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    caption: string;
    caseNum: string;
    title: string;
  } | null>(null);

  // Track active image tab index per case study (for 2-image studies)
  const [activeImgTab, setActiveImgTab] = useState<Record<string, number>>({
    'case-study-2': 0,
    'case-study-3': 0,
  });

  const handleImageTabChange = (studyId: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgTab((prev) => ({ ...prev, [studyId]: index }));
  };

  const filteredStudies =
    activeFilter === 'all'
      ? caseStudies
      : caseStudies.filter((c) => c.id === activeFilter);

  return (
    <section className="section case-studies-section" id="case-studies">
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <Reveal variant="up">
            <span className="eyebrow">
              Verified Case Studies
            </span>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <h2 className="h2">
              Real Brands, <span className="grad-text-blue">Documented Scale</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <p className="lead" style={{ maxWidth: 740 }}>
              Inspect the exact data, strategy blueprints, and compounding financial outcomes from real marketplace accounts engineered and scaled by Apexcale.
            </p>
          </Reveal>
        </div>

        {/* Quick Filter Navigation Tabs */}
        <Reveal variant="up" delay={120}>
          <div className="cs-filter-bar">
            <button
              type="button"
              className={`cs-filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              <span>All Case Studies</span>
              <span className="cs-filter-count">4</span>
            </button>
            {caseStudies.map((cs) => (
              <button
                key={cs.id}
                type="button"
                className={`cs-filter-tab ${activeFilter === cs.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cs.id)}
              >
                <span>{cs.category}</span>
                <span className="cs-filter-metric">
                  {cs.stats[0]?.value}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Case Studies Showcase Grid */}
        <div className="cs-grid">
          {filteredStudies.map((cs, idx) => {
            const currentImgIndex = activeImgTab[cs.id] || 0;
            const activeImage = cs.images[currentImgIndex] || cs.images[0];

            return (
              <Reveal key={cs.id} variant="up" delay={idx * 100}>
                <div
                  className="cs-card cs-card-clickable"
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/case-studies/${cs.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') navigate(`/case-studies/${cs.id}`);
                  }}
                  title="Click to view full case study & deep-dive strategy"
                >
                  {/* Top Meta Header */}
                  <div className="cs-card-header">
                    <div className="cs-badges-row">
                      {/* Gradient Badge matching Services and Results sections */}
                      <div className="cs-stat-chip">
                        <span className="cs-chip-dot" />
                        <span>CASE STUDY #{cs.number}</span>
                      </div>
                      <span className="cs-meta-pill">
                        {cs.category}
                      </span>
                      <span className="cs-market-pill">
                        <span className="cs-flag-dot" />
                        {cs.marketplace}
                      </span>
                    </div>

                    <h3 className="cs-title">{cs.title}</h3>
                    <p className="cs-tagline">{cs.tagline}</p>
                  </div>

                  {/* 4 Stat Highlights Grid */}
                  <div className="cs-stats-grid">
                    {cs.stats.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className={`cs-stat-box ${st.highlight ? 'cs-stat-highlight' : ''}`}
                      >
                        <span className="cs-stat-val">{st.value}</span>
                        <span className="cs-stat-lbl">{st.label}</span>
                        {st.sub && <span className="cs-stat-sub">{st.sub}</span>}
                      </div>
                    ))}
                  </div>

                  {/* Visual Proof Media Area */}
                  <div className="cs-media-container">
                    {/* If multiple images, show interactive switcher tabs */}
                    {cs.images.length > 1 && (
                      <div
                        className="cs-img-tabs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="cs-tabs-label">
                          <SparkleIcon size={12} /> Proof Charts ({cs.images.length})
                        </span>
                        <div className="cs-tabs-buttons">
                          {cs.images.map((_, iIdx) => (
                            <button
                              key={iIdx}
                              type="button"
                              className={`cs-img-tab-btn ${currentImgIndex === iIdx ? 'active' : ''}`}
                              onClick={(e) => handleImageTabChange(cs.id, iIdx, e)}
                            >
                              Chart 0{iIdx + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div
                      className="cs-image-frame"
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage({
                          src: activeImage.src,
                          caption: activeImage.caption,
                          caseNum: cs.number,
                          title: cs.title,
                        });
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.stopPropagation();
                          setSelectedImage({
                            src: activeImage.src,
                            caption: activeImage.caption,
                            caseNum: cs.number,
                            title: cs.title,
                          });
                        }
                      }}
                      title="Click to zoom full screen chart"
                    >
                      <img
                        src={activeImage.src}
                        alt={`${cs.title} - ${activeImage.caption}`}
                        className="cs-proof-img"
                        loading="lazy"
                      />
                      <div className="cs-img-zoom-overlay">
                        <span className="cs-zoom-btn">
                          <TrendUpIcon size={15} /> Click to Enlarge Chart
                        </span>
                      </div>
                      <div className="cs-caption-bar">
                        <span className="cs-caption-text">{activeImage.caption}</span>
                        <span className="cs-caption-tag">Verified Proof</span>
                      </div>
                    </div>
                  </div>

                  {/* Executive Summary & Main Topic */}
                  <div className="cs-body">
                    <div className="cs-summary-block">
                      <h4 className="cs-block-title">Executive Diagnosis & Focus</h4>
                      <p className="cs-summary-text">{cs.summary}</p>
                    </div>

                    {/* Prominent CTA to Redirect to Detail Page */}
                    <div className="cs-footer-action">
                      <button
                        type="button"
                        className="btn btn-primary cs-view-study-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/case-studies/${cs.id}`);
                        }}
                      >
                        <span>Read Full Case Study & Strategies</span>
                        <ArrowRightIcon size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Call to Action Card */}
        <Reveal variant="up" delay={160}>
          <div className="cs-cta-banner">
            <div className="cs-cta-content">
              <span className="cs-cta-eyebrow">Your Brand Could Be Next</span>
              <h3 className="cs-cta-title">
                Ready to Stop Guessing and Engineer Predictable Compounding Growth?
              </h3>
              <p className="cs-cta-desc">
                We review your account velocity, diagnostic ad waste, and unit economics before proposing an aggressive roadmap tailored strictly to your margins.
              </p>
            </div>
            <div className="cs-cta-action">
              <a href="#cta" className="btn btn-primary cs-cta-btn">
                <span>Request Account Diagnostic</span>
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Full Resolution Lightbox Modal */}
      {selectedImage && (
        <div
          className="cs-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="cs-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cs-lightbox-header">
              <div>
                <span className="cs-lightbox-tag">Case Study #{selectedImage.caseNum}</span>
                <h4 className="cs-lightbox-title">{selectedImage.title}</h4>
              </div>
              <button
                type="button"
                className="cs-lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
              >
                <XIcon size={20} />
              </button>
            </div>

            <div className="cs-lightbox-img-wrapper">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="cs-lightbox-img"
              />
            </div>

            <div className="cs-lightbox-caption">
              <span className="cs-chip-dot" />
              <span>{selectedImage.caption}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

