import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/alon1525',
      icon: '🐱',
      handle: '@alon1525'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alon-krumer/',
      icon: '💼',
      handle: '/in/alon-krumer'
    },
    {
      name: 'Email',
      url: 'mailto:alon1525@gmail.com',
      icon: '📧',
      handle: 'alon1525@gmail.com'
    }
  ];

  return (
    <main className="contact-page">
      <div className="section">
        <h1 className="section-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Let's discuss your project or explore opportunities to work together
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new opportunities, interesting projects, 
                or just chatting about technology and development.
              </p>
              <p>
                Whether you're looking for a developer to join your team, need help with a project, 
                or want to collaborate on something exciting, I'd love to hear from you.
              </p>
            </div>

            <div className="social-links">
              <h4>Find me online</h4>
              <div className="social-grid">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{link.icon}</span>
                    <div className="social-info">
                      <span className="social-name">{link.name}</span>
                      <span className="social-handle">{link.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-status">
              <div className="status-indicator">
                <span className="status-dot available"></span>
                <span className="status-text">Available for new projects</span>
              </div>
              <p className="status-description">
                Currently accepting freelance projects and open to full-time opportunities.
              </p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message error">
                  ❌ Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
