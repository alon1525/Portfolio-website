import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Honda Shokudoo",
      description: "A restaurant management system or food-related application. This project demonstrates my skills in full-stack development and practical application design.",
      techStack: ["React", "Node.js", "Express", "Database"],
      githubUrl: "https://github.com/alon1525/Honda-Shokudoo",
      demoUrl: "https://honda-resturant.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Premier League Predictor",
      description: "A machine learning application that predicts Premier League match outcomes. This project showcases my skills in data analysis, algorithms, and sports prediction modeling.",
      techStack: ["Python", "Machine Learning", "Data Analysis", "Algorithms"],
      githubUrl: "https://github.com/alon1525/Premier_League_Predictor"
    },
    {
      id: 3,
      title: "Set Game",
      description: "A Set card game implementation developed during university coursework. This project demonstrates my skills in Java programming, multithreading, and game logic implementation.",
      techStack: ["Java", "Multithreading", "Game Development"],
      githubUrl: "https://github.com/alon1525/Set-game"
    },
    {
      id: 4,
      title: "Improved Visited Countries",
      description: "An enhanced application for tracking visited countries. This project showcases improvements in user experience and functionality for geographical data visualization.",
      techStack: ["JavaScript", "Web Development", "Data Visualization"],
      githubUrl: "https://github.com/alon1525/Improved-Visited-Countries"
    },
    {
      id: 5,
      title: "The Quarantrees",
      description: "A game developed during a game jam with the theme of contamination, created in response to COVID-19. This project demonstrates my game development skills and ability to work under time constraints.",
      techStack: ["Game Development", "Game Jam", "Interactive Design"],
      githubUrl: "https://alon1525.itch.io/the-quarantrees",
      demoUrl: "https://alon1525.itch.io/the-quarantrees"
    }
  ];

  return (
    <main className="projects-page">
      <div className="section">
        <h1 className="section-title">My Projects</h1>
        <p className="projects-subtitle">
          Here are some of the projects I've worked on, showcasing my skills in full-stack development
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`portfolio-card project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                <h4 className="tech-label">Tech Stack:</h4>
                <div className="tech-tags">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                >
                  View Code
                </a>
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link demo-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
