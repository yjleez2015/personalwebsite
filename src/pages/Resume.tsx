import './Resume.css';

export default function Resume() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Your Name</h1>
        <div className="contact-info">
          <span>your.email@example.com</span>
          <span>•</span>
          <span>(555) 123-4567</span>
          <span>•</span>
          <span>City, State</span>
          <span>•</span>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span>•</span>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="resume-section">
        <h2>Summary</h2>
        <p>
          Brief professional summary highlighting your key strengths, experience, and career objectives.
          Customize this section to reflect your background and goals.
        </p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="job">
          <div className="job-header">
            <h3>Job Title</h3>
            <span className="company">Company Name</span>
            <span className="dates">Month Year - Present</span>
          </div>
          <ul className="job-duties">
            <li>Key responsibility or achievement with measurable impact</li>
            <li>Another important responsibility or project you led</li>
            <li>Technical skills or tools you used in this role</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>Previous Job Title</h3>
            <span className="company">Previous Company</span>
            <span className="dates">Month Year - Month Year</span>
          </div>
          <ul className="job-duties">
            <li>Key responsibility or achievement with measurable impact</li>
            <li>Another important responsibility or project you led</li>
            <li>Technical skills or tools you used in this role</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education">
          <div className="education-header">
            <h3>Degree Name</h3>
            <span className="school">University Name</span>
            <span className="dates">Graduation Year</span>
          </div>
          <p>Relevant coursework, honors, or activities</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Frameworks & Libraries</h4>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">Vue.js</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Tools & Technologies</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>

      <div className="resume-actions">
        <button 
          className="btn primary" 
          onClick={() => window.print()}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}