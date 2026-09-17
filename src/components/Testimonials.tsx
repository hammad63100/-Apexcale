import { useRef, useState } from 'react';
import { testimonials } from '../data/content';
import { Reveal } from './Reveal';
import { StarIcon, TrendUpIcon } from './icons';

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate array for seamless infinite looping right-to-left
  const marqueeList = [...testimonials, ...testimonials];

  return (
    <section
      className="section testi-section"
      id="testimonials"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,.6), transparent)' }}
    >
      <div className="container">
        <div className="section-head">
          <Reveal variant="up">
            <span className="eyebrow">Reviews</span>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <h2 className="h2">
              Client <span className="grad-text-blue">Testimonials</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <Reveal variant="up" delay={140}>
        <div
          className={`testi-marquee-outer${isPaused ? ' paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div ref={trackRef} className="testi-marquee-track">
            {marqueeList.map((t, idx) => (
              <div key={`${t.name}-${idx}`} className="t-card-marquee">
                <span className="t-quote-mark" aria-hidden="true">“</span>
                <div className="t-card-head">
                  <div className="t-stars" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} size={16} />
                    ))}
                  </div>
                  {t.metric && (
                    <span className="t-metric-badge">
                      <TrendUpIcon size={13} />
                      {t.metric}
                    </span>
                  )}
                </div>

                <p className="t-card-quote">“{t.quote}”</p>

                <div className="t-card-footer">
                  <span className={`t-avatar ${t.gradient}`}>{t.initials}</span>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}


