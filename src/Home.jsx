import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from './projectsData.js'
import './App.css'

const navItems = [
  ['Home', 'home'],
  ['Service', 'service'],
  ['About', 'about'],
  ['Portfolio', 'portfolio'],
  ['Testimonials', 'testimonials'],
]

const profile = {
  name: 'Alon Krumer',
  role: 'Fullstack Developer',
  headline:
    'I build end-to-end web products: solid APIs, reliable data layers, and polished React interfaces.',
  summary:
    'I enjoy shipping complete features from database and server to responsive UI, with an eye for performance and maintainability.',
  email: 'alon1525@gmail.com',
  location: 'Herzliya, Israel',
  githubUrl: 'https://github.com/alon1525',
  photoSrc: '/alon-krumer.png',
}

const services = [
  {
    title: 'Web Design',
    code: 'UI',
    description:
      'I design clean, mobile-first interfaces with a strong visual system. In Kardingo, I translated the brand, mascot, colors, progress states, and study flows into screens that feel calm, playful, and easy to use.',
  },
  {
    title: 'React Development',
    code: 'JS',
    description:
      'I build component-driven React and React Native experiences connected to real product data. In Zporti, that means challenge flows, match picks, fixtures, auth-aware screens, and live score updates.',
  },
  {
    title: 'Product Polish',
    code: 'QA',
    description:
      'I care about the details that make a product feel reliable: clear states, responsive layouts, smooth flows, and behavior that holds up under real use—from Zporti match days to Kardingo study sessions.',
  },
]

const skills = [
  ['HTML & CSS', 90, '#fca61f'],
  ['JavaScript', 82, '#6f34fe'],
  ['React.js', 78, '#20c997'],
  ['UI Polish', 86, '#3f396d'],
]

const portfolioFilterOrder = ['all', 'webapp', 'game', 'website', 'brand']

const portfolioFilters = portfolioFilterOrder.filter(
  (key) =>
    key === 'all' || projects.some((p) => p.category === key),
)

const testimonials = [
  {
    id: 'zporti-senior',
    quote:
      'Alon works hard and stays hungry to learn—he digs into unfamiliar parts of the stack, asks sharp questions, and follows through. That attitude made him easy to rely on while we shipped Zporti.',
    name: 'Senior developer',
    title: 'Zporti',
  },
]

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 360)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Thanks. I will connect this form to your email once you share the details.')
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          Portfolio
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <nav
          id="site-navigation"
          className={menuOpen ? 'nav nav-main open' : 'nav nav-main'}
        >
          {navItems.map(([label, id]) => (
            <Link key={id} to={`/#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button nav-cta" to="/#contact">
          Contact
        </Link>
      </header>

      <main>
        <section className="hero-section section" id="home">
          <div className="hero-copy reveal">
            <span className="eyebrow">Hello, I am</span>
            <h1>
              {profile.name}
              <span>{profile.role}</span>
            </h1>
            <p>{profile.headline}</p>
            <div className="hero-actions">
              <a className="button" href="#contact">
                Hire Me
              </a>
              <a className="text-link" href="#portfolio">
                See My Work
              </a>
            </div>
          </div>
          <div className="hero-art reveal" aria-label="Alon Krumer portrait">
            <div className="portrait-card">
              <div className="portrait-glow" />
              <img
                className="portrait-photo"
                src={profile.photoSrc}
                alt="Alon Krumer"
                width={480}
                height={560}
                decoding="async"
              />
              <span className="floating-chip chip-one">React</span>
              <span className="floating-chip chip-two">Node</span>
              <span className="floating-chip chip-three">API</span>
            </div>
          </div>
        </section>

        <section className="section" id="service">
          <SectionHeading eyebrow="My Expertise" title="Provide Wide Range of Digital Services" />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card reveal" key={service.title}>
                <div className="service-icon">{service.code}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="text-link" href="#contact">
                  Read More
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section section" id="about">
          <div className="skill-grid">
            <div className="progress-grid reveal">
              {skills.map(([label, value, color]) => (
                <div className="progress-card" key={label}>
                  <div
                    className="progress-ring"
                    style={{
                      '--value': `${value * 3.6}deg`,
                      '--ring-color': color,
                    }}
                  >
                    <span>{value}%</span>
                  </div>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
            <div className="skill-copy reveal">
              <SectionHeading
                align="left"
                eyebrow="My Skills"
                title="Beautiful and Unique Digital Experiences"
              />
              <p>{profile.summary}</p>
              <p>
                I care about clear architecture and interfaces that stay maintainable as
                products grow, whether on web, mobile, or the server.
              </p>
              <a
                className="button"
                href="/Alon_KrumerCV.pdf"
                download="Alon_KrumerCV.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <SectionHeading eyebrow="Creative Work" title="Check My Portfolio" />
          <div className="filter-bar" aria-label="Project filters">
            {portfolioFilters.map((filter) => (
              <button
                className={activeFilter === filter ? 'active' : ''}
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'All' : filter}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card reveal" key={project.slug}>
                <div
                  className={
                    project.image ? 'project-image has-photo' : 'project-image'
                  }
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt ?? `${project.title} preview`}
                      width={640}
                      height={210}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span>{project.category}</span>
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-card-actions">
                    <Link className="text-link" to={`/work/${project.slug}`}>
                      Read more
                    </Link>
                    {project.link ? (
                      <a
                        className="button button-compact"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit site
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonial-section section" id="testimonials">
          <div className="testimonial-art reveal" />
          <div className="testimonial-copy reveal">
            <SectionHeading align="left" eyebrow="Testimonials" title="From Zporti" />
            <div className="testimonial-list">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.id}>
                  <p>"{testimonial.quote}"</p>
                  <footer>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.title}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <SectionHeading eyebrow="Get in Touch" title="Any Questions? Feel Free to Contact" />
          <div className="contact-grid">
            <div className="contact-details reveal">
              <ContactLine label="Location" value={profile.location} />
              <ContactLine
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactLine
                label="GitHub"
                icon="GH"
                value="github.com/alon1525"
                href={profile.githubUrl}
              />
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="E-mail" required />
              <textarea name="message" placeholder="Message" rows="5" required />
              <button className="button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      {showBackToTop && (
        <button
          className="back-to-top"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}

      <footer className="footer">
        <h2>Portfolio</h2>
        <nav>
          {navItems.map(([label, id]) => (
            <Link key={id} to={`/#${id}`}>
              {label}
            </Link>
          ))}
          <Link to="/#contact">Contact</Link>
        </nav>
        <p>Copyright 2026 Portfolio | All Rights Reserved.</p>
      </footer>
    </div>
  )
}

function SectionHeading({ eyebrow, title, align = 'center' }) {
  return (
    <div className={`section-heading ${align === 'left' ? 'left' : ''}`}>
      <small>{eyebrow}</small>
      <h2>{title}</h2>
    </div>
  )
}

function ContactLine({ label, value, href, icon }) {
  const badge = icon ?? label.slice(0, 2).toUpperCase()
  const isMailto = href?.startsWith('mailto:')
  const main = href ? (
    <a
      className="contact-line-link"
      href={href}
      {...(isMailto
        ? {}
        : { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {value}
    </a>
  ) : (
    value
  )
  return (
    <div className="contact-line">
      <span>{badge}</span>
      <p>
        <strong>{label}</strong>
        {main}
      </p>
    </div>
  )
}

