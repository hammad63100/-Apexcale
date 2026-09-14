import { whyFeatures } from '../data/content';
import { Reveal } from './Reveal';
import { Tilt } from './Tilt';
import { Icon } from './icons';

import whyFeaturedImg from '../assets/images/One Accountable Team, Every Marketplace..jpg.jpeg';
import whyTeamImg from '../assets/images/why.jpg';

export function Why() {
  return (
    <section
      className="section why-section"
      id="why"
    >
      <div className="container">
        <div className="section-head">
          <Reveal variant="up">
            <span className="eyebrow">Why Us</span>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <h2 className="h2">
              Why Brands Choose <span className="grad-text-blue">Apexcale</span>
            </h2>
          </Reveal>
        </div>

        <div className="why-grid">
          {whyFeatures.map((f, i) =>
            f.featured ? (
              <Reveal key={f.title} variant="left" className="why-featured">
                <img
                  src={whyFeaturedImg || whyTeamImg}
                  alt={f.title}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = whyTeamImg;
                  }}
                  loading="lazy"
                />
                <div className="w-body">
                  <span className="ico">
                    <Icon name={f.icon} size={24} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ) : (
              <Reveal key={f.title} variant="up" delay={(i % 2) * 100}>
                <Tilt className="why-card">
                  <span className={`ico ${f.gradient}`}>
                    <Icon name={f.icon} size={22} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </Tilt>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
