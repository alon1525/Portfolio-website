import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Alon Krumer</h1>
          <h2 className="hero-subtitle">Fullstack Junior Developer</h2>
          <p className="hero-description">
            Passionate about creating modern web applications with React, Node.js, and cutting-edge technologies. 
            Always eager to learn and tackle new challenges in the world of software development.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      <section className="home-preview section">
        <div className="preview-grid">
          <div className="preview-card">
            <div className="preview-icon">🚀</div>
            <h3>Latest Projects</h3>
            <p>Explore my recent web applications built with modern technologies</p>
            <Link to="/projects" className="preview-link">See Projects →</Link>
          </div>
          
          <div className="preview-card">
            <div className="preview-icon">💡</div>
            <h3>Technical Skills</h3>
            <p>Full-stack development with React, Node.js, and cloud technologies</p>
            <Link to="/skills" className="preview-link">View Skills →</Link>
          </div>
          
          <div className="preview-card">
            <div className="preview-icon">📫</div>
            <h3>Let's Connect</h3>
            <p>Ready to collaborate on your next project or discuss opportunities</p>
            <Link to="/contact" className="preview-link">Contact Me →</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
