import { useEffect, useRef, useState } from 'react';
import { faqs } from '../data/content';
import { Reveal } from './Reveal';
import { ArrowRightIcon, ChatIcon, PlusIcon } from './icons';

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // animate open/close (max-height transition)
  useEffect(() => {
    faqs.forEach((_, k) => {
      const el = answerRefs.current[k];
      if (!el) return;
      el.style.maxHeight = k === openIdx ? `${el.scrollHeight}px` : '';
    });
  }, [openIdx]);

  return (
    <section className="section" id="faq">
      <div className="container faq-grid">
        <div className="faq-side">
          <Reveal variant="up">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="h2">Frequently Asked Questions</h2>
            </div>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <div className="faq-help">
              <span className="ico">
                <ChatIcon size={20} />
              </span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy-900)' }}>
                Still have questions?
              </h3>
              <p style={{ fontSize: '.92rem', color: 'var(--muted)' }}>
                Get honest answers before you commit to anything — our team is one call away.
              </p>
              <a href="#cta" className="btn btn-primary btn-sm">
                Schedule a Free Strategy Call <ArrowRightIcon size={15} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q} variant="up" delay={i * 60}>
                <div className={`faq-item${open ? ' open' : ''}`}>
                  <button
                    className="faq-q"
                    aria-expanded={open}
                    onClick={() => setOpenIdx(open ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className="q-ico">
                      <PlusIcon size={16} />
                    </span>
                  </button>
                  <div
                    className="faq-a"
                    ref={(el) => {
                      answerRefs.current[i] = el;
                    }}
                  >
                    <div className="faq-a-inner">{f.a}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
