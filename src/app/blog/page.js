"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./blog.css";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://inymartlabs.com/sg-education/php-backend/api_blog.php");
        const data = await res.json();
        if (data.status === 'success') {
          setBlogs(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <main style={{ backgroundColor: '#F8F9FA', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Blog Hero Section */}
      <section className="blog-hero" style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("/sg-education/blog banner.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.45)', zIndex: 1 }}></div>
        <div className="container blog-hero-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          
          <h1 className="blog-hero-title">Stories & Insights from SG Education</h1>
          <p className="blog-hero-desc">
            Parenting tips, early learning guides, and joyful success stories<br />
            from our thriving kids&apos; educational ecosystem.
          </p>
          <div className="blog-hero-meta">DISCOVERED {blogs.length} ARTICLES</div>
        </div>
        
        {/* Cloud Transition */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            <img src="/sg-education/cloud.webp" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
            <img src="/sg-education/cloud.webp" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
          </div>
        </div>
      </section>

      {/* Blog Card Grid Section */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            
            {loading ? (
              <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '50px' }}>Loading articles...</div>
            ) : blogs.length === 0 ? (
              <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '50px' }}>No articles found.</div>
            ) : (
              blogs.map((blog) => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={blog.image_url || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"} alt={blog.title} />
                    <div className="blog-card-badge">{blog.category || 'EDUCATION'}</div>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span><i className="fa-regular fa-calendar"></i> {new Date(blog.created_at).toLocaleDateString()}</span>
                      <span><i className="fa-regular fa-clock"></i> {blog.read_time || '5 min read'}</span>
                    </div>
                    <h2 className="blog-card-title">{blog.title}</h2>
                    <p className="blog-card-text">{blog.excerpt}</p>
                  </div>
                  <div className="blog-card-footer">
                    <div className="blog-author">
                      <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                      <span className="author-name">By {blog.author || 'Admin'}</span>
                    </div>
                    <Link href={`/blog/details?id=${blog.id}`} className="blog-read-link">Read Article <i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </article>
              ))
            )}

          </div>
        </div>
      </section>

    </main>
  );
}

