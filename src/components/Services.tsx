import { detailedServices } from '../data/servicesData';
import { useRouter } from '../context/RouterContext';
import { Reveal } from './Reveal';
import { Tilt } from './Tilt';
import { ArrowRightIcon, CheckIcon, Icon } from './icons';

export function Services() {
  const { navigate } = useRouter();

  const handleCardClick = (slug: string) => {
    navigate('/services/' + slug);
  };

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <Reveal variant="up">
            <span className="eyebrow">Our Services</span>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <h2 className="h2">
              A Complete Growth Partner, <span className="grad-text-blue">Not Just a Vendor</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <p className="lead" style={{ maxWidth: 740 }}>
              From data-backed product validation and patent-proof brand defense to high-converting listings and profit-driven PPC advertising — we engineer every facet of your Amazon compounding growth.
            </p>
          </Reveal>
        </div>

        <div className="services-grid">
          {detailedServices.map((s, i) => (
            <Reveal key={s.slug} variant="up" delay={(i % 3) * 80}>
              <Tilt
                className="svc-card svc-card-enhanced"
                onClick={() => handleCardClick(s.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(s.slug);
                  }
                }}
                aria-label={`View details for ${s.title}`}
              >
                {/* Top Image Media Showcase */}
                <div className="svc-img-wrapper">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="svc-card-img"
                    loading="lazy"
                  />
                  <div className="svc-img-overlay" />
                  <div className="svc-img-badges">
                    <span className={`svc-icon-badge ${s.gradient}`}>
                      <Icon name={s.icon} size={20} />
                    </span>
                    <span className="svc-num-badge">{s.num}</span>
                  </div>
                  <span className="svc-cat-tag">{s.category}</span>
                </div>

                {/* Card Content */}
                <div className="svc-body">
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.shortDesc}</p>

                  {/* Extended Details Revealed on Hover */}
                  <div className="svc-hover-content">
                    <div className="svc-highlights">
                      {s.highlights.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="svc-tag">
                          <CheckIcon size={12} /> {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Row */}
                  <div className="svc-footer">
                    <button
                      type="button"
                      className="svc-more-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(s.slug);
                      }}
                    >
                      <span>Explore Service</span>
                      <ArrowRightIcon size={15} />
                    </button>
                    <span className="svc-click-hint">Click to view full details</span>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
