import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1>YongJae Lee</h1>
      <div className="links">
        <Link to="/resume">Resume</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
}