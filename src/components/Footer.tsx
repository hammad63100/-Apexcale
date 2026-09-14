import { navLinks } from '../data/content';
import { detailedServices } from '../data/servicesData';
import { useRouter } from '../context/RouterContext';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  XIcon,
  YoutubeIcon,
} from './icons';

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="f-brand">
            <a
              href="#hero"
              className="logo"
              style={{ color: '#fff' }}
              onClick={(e) => {
                e.preventDefault();
                navigate('#hero');
              }}
            >
              <span className="logo-mark">
                <LogoIcon size={36} />
              </span>
              <span style={{ color: '#fff' }}>
                Apex<b>cale</b>
              </span>
            </a>
            <p>
              Apexcale is a full-service Amazon growth partner for brands that are serious about
              scaling profitably — across Amazon, Walmart, and every major global marketplace.
            </p>
            <div className="f-social">
              <a href="#" aria-label="Apexcale on X">
                <XIcon size={18} />
              </a>
              <a href="#" aria-label="Apexcale on LinkedIn">
                <LinkedInIcon size={18} />
              </a>
              <a href="#" aria-label="Apexcale on Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="#" aria-label="Apexcale on Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="#" aria-label="Apexcale on YouTube">
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          <div className="f-col">
            <h4>Explore</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(l.href);
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="f-col f-col-services">
            <h4>Our Services</h4>
            <ul>
              {detailedServices.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/services/' + s.slug);
                    }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="f-col">
            <h4>Get in Touch</h4>
            <ul className="f-contact">
              <li>
                <MailIcon size={16} /> <a href="mailto:Apexcale786@gmail.com">Apexcale786@gmail.com</a>
              </li>
              <li>
                <PhoneIcon size={16} /> <a href="tel:03485035847">0348 5035847</a>
              </li>
              <li>
                <PinIcon size={16} /> <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="f-bottom">
          <span>© 2026 Apexcale. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
