import { useEffect, useRef } from 'react';
import { marketplaces } from '../data/content';
import { useInView } from '../hooks/useInView';
import { Reveal } from './Reveal';
import {
  ArrowRightIcon,
  BoxIcon,
  CartIcon,
  ChartLineIcon,
  CheckIcon,
  GlobeIcon,
  SparkleIcon,
  StarIcon,
  TrendUpIcon,
} from './icons';
import heroImg from '../assets/images/hero.jpg';

function SparkBars() {
  return (
    <span className="spark" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

/** 3D hero scene: rotating product cube, floating cards/chips, mouse parallax */
function HeroScene() {
  const { ref: sceneRef, inView } = useInView<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  });
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    if (!scene || !stage) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layers = scene.querySelectorAll<HTMLElement>('[data-depth]');
    const shine = scene.querySelector<HTMLElement>('.hero-shine');
    const DEPTH = 1.6;

    const onMove = (e: MouseEvent) => {
      const r = scene.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      stage.style.transform = `rotateY(${(nx * 10).toFixed(2)}deg) rotateX(${(-ny * 8).toFixed(2)}deg)`;
      layers.forEach((l) => {
        const d = parseFloat(l.dataset.depth || '0');
        l.style.setProperty('--px', `${(nx * d * DEPTH).toFixed(1)}px`);
        l.style.setProperty('--py', `${(ny * d * DEPTH).toFixed(1)}px`);
      });
      if (shine) {
        shine.style.setProperty('--mx', `${((nx + 0.5) * 100).toFixed(1)}%`);
        shine.style.setProperty('--my', `${((ny + 0.5) * 100).toFixed(1)}%`);
      }
    };
    const onLeave = () => {
      stage.style.transform = '';
      layers.forEach((l) => {
        l.style.setProperty('--px', '0px');
        l.style.setProperty('--py', '0px');
      });
    };

    scene.addEventListener('mousemove', onMove);
    scene.addEventListener('mouseleave', onLeave);
    return () => {
      scene.removeEventListener('mousemove', onMove);
      scene.removeEventListener('mouseleave', onLeave);
    };
  }, [sceneRef]);

  return (
    <div
      className={`scene${inView ? ' in' : ''}`}
      ref={sceneRef}
      data-reveal="zoom"
    >
      <div className="scene-stage" ref={stageRef}>
        <div className="orb o1" data-depth="20" aria-hidden="true" />
        <div className="orb o2" data-depth="45" aria-hidden="true" />
        <div className="orb o3" data-depth="30" aria-hidden="true" />

        <div className="ring" data-depth="60" aria-hidden="true" />
        <div className="orbit" data-depth="50" aria-hidden="true">
          <i />
          <i />
        </div>

        <div className="cube-wrap" data-depth="80">
          <div className="cube">
            <i className="f">
              <CartIcon size={52} />
            </i>
            <i className="b">
              <StarIcon size={52} />
            </i>
            <i className="r">
              <BoxIcon size={52} />
            </i>
            <i className="l">
              <GlobeIcon size={52} />
            </i>
            <i className="t">
              <SparkleIcon size={52} />
            </i>
            <i className="d">
              <TrendUpIcon size={52} />
            </i>
          </div>
        </div>

        <div className="img-card" data-depth="40">
          <img src={heroImg} alt="E-commerce shopping and online payment" loading="eager" />
        </div>

        <div className="chip chip-buy" data-depth="95">
          <span className="ico g1">
            <CheckIcon size={16} />
          </span>
          <span>
            Buy Box Win <small>Ranked #1 seller</small>
          </span>
        </div>

        <div className="chip chip-sales" data-depth="70">
          <span className="ico g2">
            <TrendUpIcon size={16} />
          </span>
          <span>
            <span className="up">+214%</span> Sales <small>in 6 months</small>
          </span>
        </div>

        <div className="chip chip-acos" data-depth="85">
          <span className="ico g3">
            <ChartLineIcon size={16} />
          </span>
          <span>
            ACOS <span className="down">↓ 38%</span> <small>while scaling</small>
          </span>
        </div>

        <div className="chip chip-rating" data-depth="55">
          <span className="ico g4">
            <StarIcon size={16} />
          </span>
          <span>
            4.9 ★ <small>customer rating</small>
          </span>
          <SparkBars />
        </div>

        <div className="hero-shine" aria-hidden="true" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-orb a" aria-hidden="true" />
      <div className="hero-orb b" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal variant="up">
            <div className="hero-badge">
              <span className="dot" aria-hidden="true" />
              <StarIcon size={15} />
              Full-Service Amazon Growth Partner
            </div>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <h1 className="hero-title">
              Scale Your Brand to the <span className="grad-text-blue">Top of Amazon</span>{' '}
              <span className="underline">
                — Anywhere
                <svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M4 17c62-9 168-11 292-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              in the World
            </h1>
          </Reveal>

          <Reveal variant="up" delay={160}>
            <p className="hero-sub">
              Apexcale is a full-service Amazon growth partner for brands that are serious about
              scaling profitably. We combine data-driven advertising, conversion-focused listing
              optimization, and hands-on account management to help you win the Buy Box, dominate
              search results, and turn your marketplace presence into a predictable revenue engine
              — across Amazon, Walmart, and every major global marketplace.
            </p>
          </Reveal>

          <Reveal variant="up" delay={240}>
            <div className="hero-ctas">
              <a href="#cta" className="btn btn-primary btn-lg">
                Schedule a Free Strategy Call <ArrowRightIcon size={18} />
              </a>
              <a href="#results" className="btn btn-ghost btn-lg">
                View Our Results
              </a>
            </div>
          </Reveal>

          <Reveal variant="up" delay={320}>
            <div className="hero-trust">
              <span className="t-label">One account, every marketplace</span>
              <div className="hero-mp">
                {marketplaces.map((m) => (
                  <span key={m} className="mp-chip">
                    <GlobeIcon size={14} /> {m}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <HeroScene />
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <div className="mouse">
          <i />
        </div>
        Scroll
      </div>
    </section>
  );
}
