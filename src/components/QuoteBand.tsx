import { Reveal } from './Reveal';
import { SparkleIcon } from './icons';

/** Parallax quote band — background image fixed via CSS `background-attachment`. */
export function QuoteBand() {
  return (
    <div className="quote-band" data-parallax-bg>
      <div className="container">
        <Reveal variant="zoom">
          <blockquote>
            <span className="qb-mark">
              <SparkleIcon size={44} />
            </span>
            <p>
              “We combine data-driven advertising, conversion-focused listing optimization, and
              hands-on account management to help you win the Buy Box, dominate search results, and
              turn your marketplace presence into a predictable revenue engine.”
            </p>
            <cite>— The Apexcale Way</cite>
          </blockquote>
        </Reveal>
      </div>
    </div>
  );
}
