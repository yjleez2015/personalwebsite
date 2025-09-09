import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>YongJae Lee</h1>
        <p className="hero-subtitle">
          Computer Science Student & Software Engineer passionate about AI and Systems Programming
        </p>
        <div className="hero-buttons">
          <a href="/resume" className="btn primary">View Resume</a>
          <a href="/blog" className="btn secondary">Read Blog</a>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science student at Johns Hopkins University with a minor in Physics, graduating in May 2026. 
          I'm passionate about AI/ML, systems programming, and building efficient software solutions. 
          Currently conducting research in Dr. Mallada's Control and Dynamical Systems group, focusing on advanced 
          MPC algorithms. I love working on challenging projects from GPU-accelerated machine learning to 
          low-level systems programming.
        </p>
      </section>

      <section className="highlights">
        <h2>Highlights</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <h3>Experience</h3>
            <p>AWS SDE Intern (2025), Research Assistant at JHU, Course Assistant, and international internship experience</p>
          </div>
          <div className="highlight-card">
            <h3>Skills</h3>
            <p>Proficient in Java, TypeScript, C/C++; experienced with Python, CUDA, AWS, and modern web technologies</p>
          </div>
          <div className="highlight-card">
            <h3>Projects</h3>
            <p>KorGPT.c (GPT-2 in C/CUDA), Educational Physics Engine, and various systems programming projects</p>
          </div>
        </div>
      </section>
    </div>
  );
}