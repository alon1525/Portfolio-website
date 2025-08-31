import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    // Languages
    { name: "C", category: "Languages", level: 3, icon: "🔧" },
    { name: "C#", category: "Languages", level: 3, icon: "💙" },
    { name: "C++", category: "Languages", level: 3, icon: "⚡" },
    { name: "CSS3", category: "Languages", level: 4, icon: "🎨" },
    { name: "HTML5", category: "Languages", level: 4, icon: "🌐" },
    { name: "JavaScript", category: "Languages", level: 4, icon: "🟨" },
    { name: "Java", category: "Languages", level: 3, icon: "☕" },
    { name: "Python", category: "Languages", level: 3, icon: "🐍" },
    
    // Frameworks & Tools
    { name: "Express.js", category: "Frameworks", level: 3, icon: "🚀" },
    { name: "Node.js", category: "Frameworks", level: 3, icon: "🟢" },
    { name: "NPM", category: "Frameworks", level: 3, icon: "📦" },
    { name: "React", category: "Frameworks", level: 4, icon: "⚛️" },
    { name: "Postman", category: "Frameworks", level: 3, icon: "📮" },
    
    // Databases
    { name: "PostgreSQL", category: "Database", level: 3, icon: "🐘" },
    { name: "MongoDB", category: "Database", level: 3, icon: "🍃" },
    { name: "MySQL", category: "Database", level: 3, icon: "🐬" },
    { name: "Firebase", category: "Database", level: 3, icon: "🔥" },
    
    // Tools
    { name: "Git", category: "Tools", level: 4, icon: "📝" },
    { name: "Vercel", category: "Tools", level: 3, icon: "▲" }
  ];

  const categories = ["Languages", "Frameworks", "Database", "Tools"];

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  const renderSkillLevel = (level) => {
    return (
      <div className="skill-level">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div 
            key={dot} 
            className={`level-dot ${dot <= level ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  };

  return (
    <main className="skills-page">
      <div className="section">
        <h1 className="section-title">Skills & Technologies</h1>
        <p className="skills-subtitle">
          Here's an overview of the technologies and tools I work with
        </p>

        <div className="skills-overview">
          <div className="overview-stats">
            <div className="stat-item">
              <span className="stat-number">{skills.length}</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{categories.length}</span>
              <span className="stat-label">Categories</span>
            </div>
          </div>
        </div>

        <div className="skills-categories">
          {categories.map((category) => (
            <div key={category} className="skill-category">
              <h2 className="category-title">{category}</h2>
              <div className="skills-grid">
                {getSkillsByCategory(category).map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <h3 className="skill-name">{skill.name}</h3>
                    </div>
                    {renderSkillLevel(skill.level)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-note">
          <div className="note-content">
            <h3>Continuous Learning</h3>
            <p>
              I'm always expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring advanced React patterns, serverless architectures, and DevOps practices.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
