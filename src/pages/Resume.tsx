import './Resume.css';

export default function Resume() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>YongJae Lee</h1>
        <div className="contact-info">
          <span>ylee207@jh.edu</span>
          <span>•</span>
          <span>949-295-3389</span>
          <span>•</span>
          <span>Baltimore, MD</span>
          <span>•</span>
          <a href="https://www.linkedin.com/in/yongjae-lee-43138b1a6/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span>•</span>
          <a href="https://github.com/ylee207" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education">
          <div className="education-header">
            <h3>Bachelor of Science in Computer Science, Minor in Physics</h3>
            <span className="school">Johns Hopkins University</span>
            <span className="dates">Aug. 2022 - May 2026</span>
          </div>
          <p>Activities: ACM, Jiu Jitsu Club</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="job">
          <div className="job-header">
            <h3>Software Development Engineer Intern</h3>
            <span className="company">Amazon Web Services (AWS)</span>
            <span className="dates">June 2025 - Aug. 2025</span>
          </div>
          <ul className="job-duties">
            <li>Migrated AWS Marketplace ReviewList page to a server-side rendered React architecture using AWS Lambda, CloudFront, and S3, cutting initial page load time by 45%</li>
            <li>Implemented automated pipeline to pre-render first-page HTML and upload to ContentPublisher, eliminating manual operations</li>
            <li>Designed edge-cache strategy and client-side hydration for 12+ sorting and filtering combinations, improving p95 latency by 30%</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>Research Assistant</h3>
            <span className="company">Johns Hopkins University</span>
            <span className="dates">Jan. 2024 - Present</span>
          </div>
          <ul className="job-duties">
            <li>Conduct research in Dr. Mallada's Control and Dynamical Systems group, focusing on advanced MPC algorithms in DeepMind Mujoco</li>
            <li>Developed custom tasks, graphed trajectories, and leveraged GPU hyper-clusters for RL experimentation</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>Course Assistant</h3>
            <span className="company">Johns Hopkins University</span>
            <span className="dates">Aug. 2023 - Present</span>
          </div>
          <ul className="job-duties">
            <li>Lead lab sections for EN.601.220 Intermediate Programming (C/C++); assist students with debugging and Gradescope autograder configuration</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>Software Developer Intern</h3>
            <span className="company">IPortfolio</span>
            <span className="dates">June 2023 - Aug. 2023</span>
          </div>
          <ul className="job-duties">
            <li>Built automation software for eBook text-to-speech in TypeScript/Node.js, eliminating third-party costs and boosting operational efficiency</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <div className="job">
          <div className="job-header">
            <h3>KorGPT.c</h3>
            <span className="company">C, CUDA, Python</span>
            <span className="dates">Jul. 2024 - Present</span>
          </div>
          <ul className="job-duties">
            <li>Re-implemented GPT-2 entirely in C/CUDA; trained on full Korean corpus with custom tokenizer and S3-based data pipeline</li>
            <li>Forked and extended Andrej Karpathy's llm.c; hosted demo on personal site</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>Physics Engine</h3>
            <span className="company">C++</span>
            <span className="dates">Mar. 2023 - Present</span>
          </div>
          <ul className="job-duties">
            <li>Developing educational physics engine to visualize linear-algebra concepts with ray-tracing and LLM-assisted shape generation</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Programming Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">Java (proficient)</span>
              <span className="skill-tag">TypeScript (proficient)</span>
              <span className="skill-tag">C/C++ (proficient)</span>
              <span className="skill-tag">Python (intermediate)</span>
              <span className="skill-tag">C# (beginner)</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Developer Tools</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">3D Printing</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Spoken Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">Korean (native)</span>
              <span className="skill-tag">English (fluent)</span>
              <span className="skill-tag">Chinese (conversational)</span>
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