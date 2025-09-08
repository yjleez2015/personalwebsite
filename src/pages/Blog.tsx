import { useState } from 'react';
import './Blog.css';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    date: "2024-01-15",
    excerpt: "Learn how to set up a modern React project with TypeScript, exploring the benefits and best practices.",
    content: `
      <p>React and TypeScript make a powerful combination for building robust web applications. In this post, we'll explore how to get started with this stack.</p>
      
      <h3>Why TypeScript?</h3>
      <p>TypeScript provides static type checking, which helps catch errors during development rather than runtime. This leads to more maintainable and reliable code.</p>
      
      <h3>Setting Up Your Project</h3>
      <p>You can create a new React + TypeScript project using:</p>
      <pre><code>npm create vite@latest my-app -- --template react-ts</code></pre>
      
      <h3>Benefits</h3>
      <ul>
        <li>Better IDE support with autocomplete and error detection</li>
        <li>Improved code documentation through type annotations</li>
        <li>Easier refactoring of large codebases</li>
      </ul>
    `,
    tags: ["React", "TypeScript", "Web Development"]
  },
  {
    id: 2,
    title: "Building Responsive Layouts with CSS Grid",
    date: "2024-01-08",
    excerpt: "CSS Grid is a powerful layout system that makes creating responsive designs easier than ever.",
    content: `
      <p>CSS Grid revolutionizes how we create layouts on the web. Let's dive into the fundamentals.</p>
      
      <h3>Grid Container</h3>
      <p>Start by defining a grid container:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
}</code></pre>
      
      <h3>Responsive Design</h3>
      <p>Use auto-fit and minmax for responsive layouts:</p>
      <pre><code>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));</code></pre>
    `,
    tags: ["CSS", "Grid", "Responsive Design"]
  },
  {
    id: 3,
    title: "My Journey into Web Development",
    date: "2024-01-01",
    excerpt: "Reflecting on my path into web development and the lessons learned along the way.",
    content: `
      <p>Every developer's journey is unique. Here's mine.</p>
      
      <h3>The Beginning</h3>
      <p>It all started with curiosity about how websites work. I remember viewing the source code of my first website and being amazed by the HTML structure.</p>
      
      <h3>Key Milestones</h3>
      <p>Some important moments in my development journey:</p>
      <ul>
        <li>First "Hello World" in HTML</li>
        <li>Learning JavaScript and making things interactive</li>
        <li>Building my first full-stack application</li>
        <li>Landing my first developer job</li>
      </ul>
      
      <h3>Advice for Beginners</h3>
      <p>If you're just starting out, remember that everyone was a beginner once. Be patient with yourself and enjoy the learning process.</p>
    `,
    tags: ["Personal", "Career", "Advice"]
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  const filteredPosts = selectedTag 
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  if (selectedPost) {
    return (
      <div className="blog">
        <button 
          className="back-button"
          onClick={() => setSelectedPost(null)}
        >
          ← Back to Blog
        </button>
        
        <article className="blog-post-full">
          <header className="post-header">
            <h1>{selectedPost.title}</h1>
            <div className="post-meta">
              <time>{new Date(selectedPost.date).toLocaleDateString()}</time>
              <div className="post-tags">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </header>
          
          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />
        </article>
      </div>
    );
  }

  return (
    <div className="blog">
      <header className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts, tutorials, and insights from my development journey</p>
      </header>

      <div className="blog-filters">
        <button 
          className={`tag-filter ${!selectedTag ? 'active' : ''}`}
          onClick={() => setSelectedTag(null)}
        >
          All Posts
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`tag-filter ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="blog-posts">
        {filteredPosts.map(post => (
          <article key={post.id} className="blog-post-card">
            <h2>
              <button 
                className="post-title-link"
                onClick={() => setSelectedPost(post)}
              >
                {post.title}
              </button>
            </h2>
            
            <div className="post-meta">
              <time>{new Date(post.date).toLocaleDateString()}</time>
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <p className="post-excerpt">{post.excerpt}</p>
            
            <button 
              className="read-more"
              onClick={() => setSelectedPost(post)}
            >
              Read More →
            </button>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="no-posts">
          <p>No posts found for the selected tag.</p>
        </div>
      )}
    </div>
  );
}