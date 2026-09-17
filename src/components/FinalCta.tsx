import { useState, type FormEvent } from 'react';
import { detailedServices } from '../data/servicesData';
import { Reveal } from './Reveal';
import {
  AlertCircleIcon,
  CheckCircleIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  SendIcon,
  SpinnerIcon,
} from './icons';

interface FinalCtaProps {
  defaultService?: string;
}

export function FinalCta({ defaultService }: FinalCtaProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [botcheck, setBotcheck] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService || '',
    message: '',
  });

  // Keep track of submitted data for the success screen
  const [submittedData, setSubmittedData] = useState({
    fullName: '',
    email: '',
    serviceName: '',
  });

  const getServiceLabel = (slug: string) => {
    if (slug === 'full-growth-partnership') return 'Full Growth Partnership (All Services)';
    const found = detailedServices.find((s) => s.slug === slug);
    return found ? found.title : slug || 'General Inquiry';
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // If botcheck is checked, silent drop (bot detected)
    if (botcheck) {
      setSubmitStatus('success');
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      setSubmitStatus('error');
      setErrorMessage(
        'Web3Forms Access Key is missing or not set in .env file. Please add your key to VITE_WEB3FORMS_ACCESS_KEY, or email Apexcale786@gmail.com directly.'
      );
      return;
    }

    setIsSubmitting(true);
    const selectedServiceLabel = getServiceLabel(formData.service);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Client Strategy Call Request: ${formData.fullName} (${formData.company || 'Private'})`,
          from_name: 'Apexcale Website Inquiry',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          service: selectedServiceLabel,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmittedData({
          fullName: formData.fullName,
          email: formData.email,
          serviceName: selectedServiceLabel,
        });
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          service: defaultService || '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(
          result.message || 'Unable to send your request right now. Please try again or email us directly.'
        );
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage(
        'A network error occurred while sending your request. Please check your connection or contact Apexcale786@gmail.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section fsc-section" id="cta">
      <div className="container">
        {/* Section Header */}
        <div className="section-head" style={{ maxWidth: 860 }}>
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
                {submitStatus === 'success' ? (
                  <div className="fsc-success-box">
                    <div className="fsc-success-ico">
                      <CheckCircleIcon size={46} />
                    </div>
                    <h3>Thank You, {submittedData.fullName || 'Valued Client'}!</h3>
                    <p>
                      Your request has been successfully sent to the Apexcale team (
                      <strong>Apexcale786@gmail.com</strong>). A senior strategist will review your
                      details and reach out within 24 hours.
                    </p>

                    {submittedData.serviceName && (
                      <div className="fsc-success-details">
                        <div>
                          <span className="label">Requested Service:</span>
                          <span className="val">{submittedData.serviceName}</span>
                        </div>
                        <div>
                          <span className="label">Your Email:</span>
                          <span className="val">{submittedData.email}</span>
                        </div>
                      </div>
                    )}

                    <button
                      type="button"
                      className="fsc-btn-reset"
                      onClick={() => {
                        setSubmitStatus('idle');
                        setErrorMessage('');
                      }}
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form className="fsc-form" onSubmit={handleSubmit}>
                    {/* Honeypot anti-spam field */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      style={{ display: 'none' }}
                      checked={botcheck}
                      onChange={(e) => setBotcheck(e.target.checked)}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="fsc-form-row">
                      <div className="fsc-form-group">
                        <label htmlFor="fsc-name">Full Name *</label>
                        <input
                          id="fsc-name"
                          type="text"
                          required
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        <option value="full-growth-partnership">
                          Full Growth Partnership (All Services)
                        </option>
                      </select>
                    </div>

                    <div className="fsc-form-group full">
                      <label htmlFor="fsc-message">Message *</label>
                      <textarea
                        id="fsc-message"
                        required
                        disabled={isSubmitting}
                        rows={4}
                        placeholder="Tell us about your Amazon business and goals..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    {submitStatus === 'error' && errorMessage && (
                      <div className="fsc-error-box">
                        <AlertCircleIcon size={20} />
                        <div>
                          <strong>Submission Alert: </strong>
                          {errorMessage}
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="fsc-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <SpinnerIcon size={18} />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <SendIcon size={18} />
                        </>
                      )}
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


