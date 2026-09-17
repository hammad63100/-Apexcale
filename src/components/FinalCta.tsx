import { useState, type FormEvent } from 'react';
import { detailedServices } from '../data/servicesData';
import { Reveal } from './Reveal';
import { CheckCircleIcon, MailIcon, PhoneIcon, PinIcon, SendIcon } from './icons';

interface FinalCtaProps {
  defaultService?: string;
}

export function FinalCta({ defaultService }: FinalCtaProps = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService || '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Optional: reset after 6 seconds or keep success badge
  };

  return (
    <section className="section fsc-section" id="cta">
      <div className="container">
        {/* Section Header */}
        <div className="section-head center" style={{ maxWidth: 860, marginInline: 'auto' }}>
          <Reveal variant="up">
            <span className="eyebrow">Free Strategy Call</span>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <h2 className="h2">
              Ready to Turn Your Amazon Store Into a{' '}
              <span className="grad-text-blue">Predictable Growth Engine?</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <p className="lead">
              Schedule a free strategy call with our team and get a clear, honest assessment of
              what's holding your account back — and how we can help you achieve your goals.
            </p>
          </Reveal>
        </div>

        {/* Main 2-Column Grid */}
        <div className="fsc-grid">
          {/* Left Column: Contact Cards + Why Choose Us */}
          <div className="fsc-left">
            <Reveal variant="up" delay={140}>
              <a href="mailto:Apexcale786@gmail.com" className="fsc-info-card">
                <div className="fsc-icon-box">
                  <MailIcon size={20} />
                </div>
                <div className="fsc-info-body">
                  <span className="fsc-info-label">Email</span>
                  <span className="fsc-info-val">Apexcale786@gmail.com</span>
                </div>
              </a>
            </Reveal>

            <Reveal variant="up" delay={180}>
              <a href="tel:03485035847" className="fsc-info-card">
                <div className="fsc-icon-box">
                  <PhoneIcon size={20} />
                </div>
                <div className="fsc-info-body">
                  <span className="fsc-info-label">Phone / WhatsApp</span>
                  <span className="fsc-info-val">0348 5035847</span>
                </div>
              </a>
            </Reveal>

            <Reveal variant="up" delay={220}>
              <div className="fsc-info-card">
                <div className="fsc-icon-box">
                  <PinIcon size={20} />
                </div>
                <div className="fsc-info-body">
                  <span className="fsc-info-label">Location</span>
                  <span className="fsc-info-val">United States of America</span>
                </div>
              </div>
            </Reveal>

            <Reveal variant="up" delay={260}>
              <div className="fsc-why-card">
                <h3 className="fsc-why-title">Why Choose Us?</h3>
                <ul className="fsc-why-list">
                  <li>
                    <span className="fsc-check-ico">
                      <CheckCircleIcon size={18} />
                    </span>
                    <span>Free initial consultation</span>
                  </li>
                  <li>
                    <span className="fsc-check-ico">
                      <CheckCircleIcon size={18} />
                    </span>
                    <span>Customized growth strategy</span>
                  </li>
                  <li>
                    <span className="fsc-check-ico">
                      <CheckCircleIcon size={18} />
                    </span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li>
                    <span className="fsc-check-ico">
                      <CheckCircleIcon size={18} />
                    </span>
                    <span>Transparent reporting</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="fsc-right">
            <Reveal variant="up" delay={180}>
              <div className="fsc-form-card">
                {submitted ? (
                  <div className="fsc-success-box">
                    <div className="fsc-success-ico">
                      <CheckCircleIcon size={42} />
                    </div>
                    <h3>Thank You for Reaching Out!</h3>
                    <p>
                      We have received your request. A senior Apexcale strategist will review your
                      details and reach out within 24 hours to schedule your free strategy call.
                    </p>
                    <button
                      type="button"
                      className="fsc-btn-reset"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          company: '',
                          service: '',
                          message: '',
                        });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="fsc-form" onSubmit={handleSubmit}>
                    <div className="fsc-form-row">
                      <div className="fsc-form-group">
                        <label htmlFor="fsc-name">Full Name *</label>
                        <input
                          id="fsc-name"
                          type="text"
                          required
                          placeholder="John Smith"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                        />
                      </div>

                      <div className="fsc-form-group">
                        <label htmlFor="fsc-email">Email Address *</label>
                        <input
                          id="fsc-email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="fsc-form-row">
                      <div className="fsc-form-group">
                        <label htmlFor="fsc-phone">Phone Number</label>
                        <input
                          id="fsc-phone"
                          type="tel"
                          placeholder="0348 5035847"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>

                      <div className="fsc-form-group">
                        <label htmlFor="fsc-company">Company Name</label>
                        <input
                          id="fsc-company"
                          type="text"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="fsc-form-group full">
                      <label htmlFor="fsc-service">Service Interest *</label>
                      <select
                        id="fsc-service"
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {detailedServices.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                        <option value="full-growth-partnership">Full Growth Partnership (All Services)</option>
                      </select>
                    </div>

                    <div className="fsc-form-group full">
                      <label htmlFor="fsc-message">Message *</label>
                      <textarea
                        id="fsc-message"
                        required
                        rows={4}
                        placeholder="Tell us about your Amazon business and goals..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <button type="submit" className="fsc-submit-btn">
                      <span>Send Message</span>
                      <SendIcon size={18} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

