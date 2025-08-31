import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      <div className="section">
        <h1 className="section-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-profile">
            <div className="profile-picture">
                <div className="profile-placeholder">
                <span className="profile-initials">AK</span>
              </div>
            </div>
            
            <div className="profile-info">
              <h2 className="profile-name">Alon Krumer</h2>
              <p className="profile-title">Fullstack Junior Developer</p>
              <div className="profile-location">
                📍 Herzelia, Israel
              </div>
            </div>
          </div>

          <div className="about-bio">
            <div className="bio-section">
              <h3>My Journey</h3>
              <p>
                I'm a passionate fullstack developer with a love for creating elegant solutions to complex problems. 
                My journey into programming began during my Computer Science studies at Ben Gurion University, where I discovered the joy of bringing ideas to life through code.
              </p>
              <p>
                As a recent graduate, I've focused on building practical projects to master modern web technologies and best practices. 
                I believe in writing clean, maintainable code and creating user experiences that truly make a difference.
              </p>
            </div>

            <div className="bio-section">
              <h3>What I Do</h3>
              <p>
                I specialize in building modern web applications using React, Node.js, and cloud technologies. 
                From responsive front-end interfaces to robust back-end APIs, I enjoy working across the entire technology stack.
              </p>
              <p>
                I'm particularly interested in performance optimization, user experience design, and implementing 
                scalable architectures that can grow with business needs.
              </p>
            </div>

            <div className="bio-section">
              <h3>Beyond Code</h3>
              <p>
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, 
                or learning new frameworks and tools. I believe in continuous learning and staying current with industry developments.
              </p>
              <p>
                I also enjoy hiking, photography, and playing guitar. I find that these creative outlets often inspire 
                innovative solutions to programming challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🎓</div>
              <h4>Education</h4>
              <p>Computer Science</p>
              <span className="highlight-detail">Ben Gurion University</span>
            </div>
          
            <div className="highlight-card">
              <div className="highlight-icon">💼</div>
              <h4>Experience</h4>
              <p>Projects & Studies</p>
              <span className="highlight-detail">Web Development</span>
            </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">🚀</div>
            <h4>Projects</h4>
            <p>15+ Completed</p>
            <span className="highlight-detail">Personal & Client Work</span>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">🌟</div>
            <h4>Focus</h4>
            <p>User Experience</p>
            <span className="highlight-detail">& Performance</span>
          </div>
        </div>

        <div className="about-cta">
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you're looking for a dedicated team member or a freelance developer, 
            let's discuss how we can bring your ideas to life.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">Get In Touch</a>
            <a href="/projects" className="btn-secondary">View My Work</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
