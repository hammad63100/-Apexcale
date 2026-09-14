import { chartMonths, chartValues, counters, resultFeats } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { Reveal } from './Reveal';
import { Icon, TrendUpIcon } from './icons';
import type { CSSProperties } from 'react';

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
  const { ref: panelRef, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section
      className={`section results-section${inView ? ' in' : ''}`}
      id="results"
      ref={panelRef}
    >
      <div className="container">
          <div className="section-head">
            <Reveal variant="up">
              <span className="eyebrow">Results That Matter</span>
            </Reveal>
            <Reveal variant="up" delay={60}>
              <h2 className="h2">
                What Sets Our <span className="grad-text-blue">Performance</span> Apart
              </h2>
            </Reveal>
            {/*
              The four counter values below are SAMPLE placeholders — replace
              `value` in src/data/content.ts (counters[]) with real client
              performance data once available.
            */}
          </div>

          <div className="counters">
            {counters.map((c) => (
              <CounterCard key={c.label} {...c} run={inView} />
            ))}
          </div>

          <div className="results-lower">
            <div>
              {resultFeats.map((f, i) => (
                <Reveal key={f.text} variant="up" delay={i * 90} className="result-feat">
                  <span className={`ico ${f.gradient}`}>
                    <Icon name={f.icon} size={19} />
                  </span>
                  <p>{f.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal variant="right">
              <div className="chart-card">
                <div className="cc-head">
                  <h4>Compounding growth, month over month</h4>
                  <span>
                    <TrendUpIcon size={14} /> +214%
                  </span>
                </div>
                <div className={`chart${inView ? ' bars-on' : ''}`}>
                  {chartMonths.map((m, i) => (
                    <div key={`${m}-${i}`} className={`bar${inView ? ' in' : ''}`}>
                      <i style={{ '--h': `${chartValues[i]}%` } as CSSProperties} />
                      <b>{m}</b>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: 16, fontSize: '.78rem', color: 'rgba(238,242,251,.55)' }}>
                  Illustrative chart — client performance data to be added.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
  );
}
