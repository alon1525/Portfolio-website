import { useEffect, useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug } from './projectsData.js'
import './App.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  const figures = useMemo(() => {
    if (!project) return []
    if (project.gallery?.length) return project.gallery
    if (project.image) {
      return [
        {
          src: project.image,
          alt: project.imageAlt ?? `${project.title} preview`,
          caption: 'Product preview',
        },
      ]
    }
    return []
  }, [project])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const [heroShot, ...moreShots] = figures

  return (
    <div className="site-shell project-detail-page">
      <header className="navbar">
        <Link className="brand" to="/">
          Portfolio
        </Link>
        <nav className="nav nav--inline">
          <Link className="text-link" to="/#portfolio">
            All work
          </Link>
          <Link className="button nav-cta" to="/#contact">
            Contact
          </Link>
        </nav>
      </header>

      <article className="project-detail">
        <header className="project-detail-header section">
          <p className="eyebrow">{project.category}</p>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-lead">{project.summary}</p>
          <div className="tag-row tag-row--center">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="project-detail-actions">
            <Link className="text-link" to="/#portfolio">
              Back to grid
            </Link>
            {project.link ? (
              <a
                className="button"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
              </a>
            ) : null}
          </div>
        </header>

        {heroShot ? (
          <figure className="project-detail-hero-shot">
            <img
              src={heroShot.src}
              alt={heroShot.alt ?? ''}
              width={1200}
              height={640}
              loading="eager"
              decoding="async"
            />
            {heroShot.caption ? (
              <figcaption>{heroShot.caption}</figcaption>
            ) : null}
          </figure>
        ) : null}

        {moreShots.length > 0 ? (
          <div className="project-detail-gallery section">
            {moreShots.map((shot, index) => (
              <figure className="project-detail-shot" key={`${shot.src}-${index}`}>
                <img
                  src={shot.src}
                  alt={shot.alt ?? ''}
                  width={900}
                  height={560}
                  loading="lazy"
                  decoding="async"
                />
                {shot.caption ? <figcaption>{shot.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        ) : null}

        <div className="project-detail-body section">
          <h2 className="project-detail-body-title">The full story</h2>
          {project.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      <footer className="footer footer--compact">
        <Link className="text-link" to="/">
          Home
        </Link>
        <span className="footer-dot">·</span>
        <Link className="text-link" to="/#portfolio">
          Work
        </Link>
        <span className="footer-dot">·</span>
        <Link className="text-link" to="/#contact">
          Contact
        </Link>
        <p className="footer-copy">Copyright 2026 Portfolio</p>
      </footer>
    </div>
  )
}
