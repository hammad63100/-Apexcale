import { chartMonths, chartValues, counters, resultFeats } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { Reveal } from './Reveal';
import { CheckIcon, Icon, TrendUpIcon } from './icons';
import type { CSSProperties } from 'react';

// Import the dedicated images for each of the 4 performance advantages
import multiMarketplaceImg from '../assets/images/Multi-Marketplace Management.jpg.jpeg';
import profitFirstImg from '../assets/images/Profit-First Advertising.jpg.jpeg';
import proactiveHealthImg from '../assets/images/Proactive Account Health.jpg.jpeg';
import seniorStrategistsImg from '../assets/images/Senior-Level Attention, Not Junior Handoffs.jpg.jpeg';

const featImages = [
  multiMarketplaceImg,
  profitFirstImg,
  proactiveHealthImg,
  seniorStrategistsImg,
];

function CounterCard({
  icon,
  value,
  prefix,
  suffix,
  label,
  gradient,
  run,
}: (typeof counters)[number] & { run: boolean }) {
  const text = useCountUp({ value, run, prefix, suffix });
  return (
    <div className="counter">
      <span className={`c-ico ${gradient}`}>
        <Icon name={icon} size={20} />
      </span>
      <div className="c-num">
        <span className="count">{text}</span>
      </div>
      <div className="c-label">{label}</div>
    </div>
  );
}

export function Results() {
  const { ref: panelRef, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      className={`section results-section${inView ? ' in' : ''}`}
      id="results"
      ref={panelRef}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <Reveal variant="up">
            <span className="eyebrow">Results That Matter</span>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <h2 className="h2">
              What Sets Our <span className="grad-text-blue">Performance</span> Apart
            </h2>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <p className="lead" style={{ maxWidth: 660 }}>
              A unified marketplace ecosystem engineered for high-margin scaling, 24/7 account protection, and compounding organic velocity.
            </p>
          </Reveal>
        </div>

        {/* 4 Animated Key Performance Counters */}
        <div className="counters">
          {counters.map((c) => (
            <CounterCard key={c.label} {...c} run={inView} />
          ))}
        </div>

        {/* 4 Redesigned Performance Advantage Cards with Images */}
        <div className="perf-grid">
          {resultFeats.map((f, i) => {
            const img = featImages[i];
            return (
              <Reveal key={f.title} variant="up" delay={i * 80}>
                <div className="perf-card">
                  <div className="perf-media">
                    <img
                      src={img}
                      alt={f.title}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="perf-media-overlay" />
                    <div className="perf-top-badges">
                      <span className={`perf-badge ${f.gradient}`}>
                        <Icon name={f.icon} size={14} />
                        <span>{f.tagline}</span>
                      </span>
                    </div>
                    <div className="perf-stat-chip">
                      <span className="perf-chip-dot" />
                      <span>{f.badge}</span>
                    </div>
                  </div>

                  <div className="perf-body">
                    <h3 className="perf-title">{f.title}</h3>
                    <p className="perf-desc">{f.desc}</p>
                    <div className="perf-highlights">
                      {f.highlights.map((h) => (
                        <span key={h} className="perf-highlight-pill">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Compounding Growth Month-over-Month Showcase Card */}
        <Reveal variant="up" delay={120}>
          <div className="results-chart-panel">
            <div className="rcp-info">
              <div className="rcp-eyebrow">
                <TrendUpIcon size={14} />
                <span>Compounding Trajectory</span>
              </div>
              <h3 className="rcp-title">Compounding Growth, Month Over Month</h3>
              <p className="rcp-desc">
                Marketplace success isn&apos;t built on short-term ad spikes that collapse once budgets pause. Our cross-channel flywheel expands organic keyword rank and optimizes unit economics so revenue compounds month after month.
              </p>

              <div className="rcp-stats-row">
                <div className="rcp-stat-box">
                  <span className="rcp-stat-num">+214%</span>
                  <span className="rcp-stat-lbl">Average 12-Mo GMV Compound</span>
                </div>
                <div className="rcp-stat-box">
                  <span className="rcp-stat-num">3.4x</span>
                  <span className="rcp-stat-lbl">Organic-to-Ad Velocity Ratio</span>
                </div>
              </div>

              <ul className="rcp-checklist">
                <li>
                  <span className="rcp-check-icon">
                    <CheckIcon size={13} />
                  </span>
                  <span>Synchronized Amazon, Walmart & global ad pacing</span>
                </li>
                <li>
                  <span className="rcp-check-icon">
                    <CheckIcon size={13} />
                  </span>
                  <span>Durable organic rank indexing on high-intent buyer terms</span>
                </li>
                <li>
                  <span className="rcp-check-icon">
                    <CheckIcon size={13} />
                  </span>
                  <span>Continuous TACOS & net margin protection across all SKUs</span>
                </li>
              </ul>
            </div>

            <div className="chart-card">
              <div className="cc-head">
                <div>
                  <h4>12-Month Performance Trajectory</h4>
                  <span className="cc-sub">Normalized GMV expansion index</span>
                </div>
                <span className="cc-badge">
                  <TrendUpIcon size={14} /> +214%
                </span>
              </div>
              <div className={`chart${inView ? ' bars-on' : ''}`}>
                {chartMonths.map((m, i) => (
                  <div key={`${m}-${i}`} className={`bar${inView ? ' in' : ''}`}>
                    <span className="bar-val">{chartValues[i]}%</span>
                    <i style={{ '--h': `${chartValues[i]}%` } as CSSProperties} />
                    <b>{m}</b>
                  </div>
                ))}
              </div>
              <div className="cc-footer">
                <p>Illustrative compounding trajectory — verified client performance reporting.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

