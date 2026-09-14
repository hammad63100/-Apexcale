import { processSteps } from '../data/content';
import { useInView } from '../hooks/useInView';
import { Reveal } from './Reveal';
import { ChartLineIcon, CheckIcon, Icon } from './icons';

// Import the 5 process step images provided in src/assets/images
import discoveryImg from '../assets/images/Discovery Call.jpg.jpeg';
import auditImg from '../assets/images/Account & Market Audit.jpg.jpeg';
import strategyImg from '../assets/images/custom growth strategy.jpg.jpeg';
import executionImg from '../assets/images/Execution & Continuous Optimization.jpg.jpeg';
import reportingImg from '../assets/images/Transparent Reporting & Strategic Review.jpg.jpeg';
import processMainImg from '../assets/images/process.jpg';

const processImages: Record<string, string> = {
  '1': discoveryImg,
  '2': auditImg,
  '3': strategyImg,
  '4': executionImg,
  '5': reportingImg,
};

export function Process() {
  const { ref: timelineRef, inView: timelineInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section className="section" id="process">
      <div className="container">
        <div className="process-intro">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <Reveal variant="up">
              <span className="eyebrow">Our Process</span>
            </Reveal>
            <Reveal variant="up" delay={60}>
              <h2 className="h2">How We Work With You</h2>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <p className="lead">
                A clear, proven roadmap — from the first conversation to compounding, sustainable
                growth.
              </p>
            </Reveal>
          </div>

          <Reveal variant="right" className="media-frame process-media">
            <div className="frame">
              <img
                src={processMainImg}
                alt="Apexcale strategist reviewing account performance data"
                loading="lazy"
              />
              <span className="tag">
                <ChartLineIcon size={15} /> Built on live performance data
              </span>
            </div>
            <div className="float f1">
              <span className="ico g2">
                <CheckIcon size={17} />
              </span>
              <span>
                One accountable team <small>planning &amp; execution together</small>
              </span>
            </div>
          </Reveal>
        </div>

        <div className="timeline">
          <div className="t-track" aria-hidden="true">
            <div className={`t-fill${timelineInView ? ' filled' : ''}`} />
          </div>
          <div className="t-steps" ref={timelineRef}>
            {processSteps.map((s, i) => (
              <Reveal key={s.title} variant="up" delay={i * 90} className="t-step-wrapper">
                <div className="t-flip-card" tabIndex={0} role="region" aria-label={s.title}>
                  <div className="t-flip-inner">
                    {/* Front Face: Image with corner icon, corner step number, and single-line heading */}
                    <div className="t-flip-front">
                      <div className="t-card-img-wrap">
                        <img
                          src={processImages[s.step]}
                          alt={s.title}
                          loading="lazy"
                          className="t-card-img"
                        />
                        <div className="t-card-overlay" />
                        
                        {/* Corner Icon - Touches exact top-left corner */}
                        <span className={`t-corner-icon ${s.gradient}`}>
                          <Icon name={s.icon} size={20} />
                        </span>

                        {/* Corner Step Number - Touches exact top-right corner */}
                        <span className="t-corner-num">0{s.step}</span>

                        <span className="t-rotate-hint">Hover to flip ↻</span>
                      </div>

                      {/* Single Line Heading below image */}
                      <div className="t-card-front-title">
                        <h3 title={s.title}>{s.title}</h3>
                      </div>
                    </div>

                    {/* Back Face: Revealed on card 3D rotation with full descriptive text */}
                    <div className="t-flip-back">
                      <div className="t-back-top">
                        <span className={`t-back-icon ${s.gradient}`}>
                          <Icon name={s.icon} size={18} />
                        </span>
                        <span className="t-back-step">Step 0{s.step}</span>
                      </div>
                      <h3 className="t-back-title" title={s.title}>
                        {s.title}
                      </h3>
                      <p className="t-back-desc">{s.text}</p>
                      <span className="t-back-arrow">✓ Phase 0{s.step}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
