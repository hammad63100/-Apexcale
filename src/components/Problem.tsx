import { Reveal } from './Reveal';
import { BoxIcon, CoinsIcon, TrendDownIcon } from './icons';
import problemImg from '../assets/images/problem.jpg';

export function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container split">
        <div className="split-copy">
          <Reveal variant="up">
            <span className="eyebrow">The Problem</span>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <h2 className="h2">
              Selling on Amazon Is Easy. Winning Is a <span className="grad-text-blue">Different Game</span> Entirely.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p>
              Every day, thousands of new listings go live on Amazon. Your competitors are running
              ad campaigns, optimizing their content, and fighting for the exact same customers
              you're trying to reach. Without a coordinated strategy across advertising, SEO, and
              operations, even a great product can get buried on page three — while your ad spend
              quietly disappears with nothing to show for it.
            </p>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p>
              Most brands don't have a visibility problem or a demand problem. They have a strategy
              problem. Their advertising isn't aligned with their listing content. Their listing
              content isn't aligned with how customers actually search. And nobody on the account
              is looking at the full picture.
            </p>
          </Reveal>
          <Reveal variant="up" delay={260}>
            <p>
              Apexcale was built to solve exactly that. We bring advertising, content, and
              operations under one roof, managed by a single accountable team, so every part of
              your account is working toward the same goal:{' '}
              <strong>profitable, sustainable growth.</strong>
            </p>
          </Reveal>
        </div>

        <Reveal variant="right" className="split-media media-frame">
          <div className="frame">
            <img
              src={problemImg}
              alt="Busy e-commerce fulfillment warehouse stacked with packages"
              loading="lazy"
            />
            <span className="tag">
              <BoxIcon size={15} /> Thousands of listings go live every day
            </span>
          </div>
          <div className="float f1">
            <span className="ico g3">
              <TrendDownIcon size={17} />
            </span>
            <span>
              Buried on page three <small>great products, zero visibility</small>
            </span>
          </div>
          <div className="float f2">
            <span className="ico g4">
              <CoinsIcon size={17} />
            </span>
            <span>
              Ad spend disappearing <small>without a coordinated strategy</small>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
