import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p className="hero-subtitle">
          I'm a [Your Title/Role] passionate about [Your Interests/Field]
        </p>
        <div className="hero-buttons">
          <a href="/resume" className="btn primary">View Resume</a>
          <a href="/blog" className="btn secondary">Read Blog</a>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Write a brief introduction about yourself here. Talk about your background,
          interests, and what visitors can expect to find on your website.
        </p>
      </section>

      <section className="highlights">
        <h2>Highlights</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <h3>Experience</h3>
            <p>Brief overview of your professional experience</p>
          </div>
          <div className="highlight-card">
            <h3>Skills</h3>
            <p>Key skills and technologies you work with</p>
          </div>
          <div className="highlight-card">
            <h3>Projects</h3>
            <p>Notable projects you've worked on</p>
          </div>
        </div>
      </section>
    </div>
  );
}