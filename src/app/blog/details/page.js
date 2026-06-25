"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "./blog-details.css";

function BlogDetailsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [activeSection, setActiveSection] = useState("introduction");
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    
    const fetchArticle = async () => {
      try {
        const res = await fetch(`https://inymartlabs.com/sg-education/php-backend/api_blog.php?id=${id}`);
        const data = await res.json();
        if (data.status === 'success') {
          setArticle(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch article", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  useEffect(() => {
    // Scroll spy for Table of Contents
    const handleScroll = () => {
      const sections = ["introduction", "main-content", "key-points", "conclusion"];
      
      let current = "introduction";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setIsTocOpen(false); // Close mobile menu on click
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // offset for fixed header
        behavior: "smooth"
      });
    }
  };

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Loading article...</div>;
  if (!article) return <div style={{ padding: '100px', textAlign: 'center' }}>Article not found. <Link href="/blog">Return to blog</Link></div>;

  return (
    <main style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Hero Section */}
      <section className="blog-details-hero" style={{ backgroundImage: `url(${article.image_url || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80"})` }}>
        <div className="blog-details-hero-content container">
          <div className="blog-details-badge">{article.category || 'EDUCATION'}</div>
          <h1 className="blog-details-title">{article.title}</h1>
          <div className="blog-details-meta">
            <span><i className="fa-solid fa-user"></i> By {article.author || 'Admin'}</span>
            <span><i className="fa-regular fa-calendar"></i> {new Date(article.created_at).toLocaleDateString()}</span>
            <span><i className="fa-regular fa-clock"></i> {article.read_time || '5 min read'}</span>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="container">
        <div className="blog-details-container">
          
          {/* Main Article */}
          <div className="blog-article-content">
            <Link href="/blog" className="back-to-blog">
              <i className="fa-solid fa-arrow-left-long"></i> Back to Blog
            </Link>

            <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="blog-sidebar">
              <div className="toc-card">
                <h3 className="toc-title">Table of Contents</h3>
                <ul className="toc-list">
                  <li className="toc-item">
                    <a href="#introduction" onClick={(e) => scrollToSection(e, 'introduction')} className={`toc-link ${activeSection === 'introduction' ? 'active' : ''}`}>
                      Introduction
                    </a>
                  </li>
                  <li className="toc-item">
                    <a href="#main-content" onClick={(e) => scrollToSection(e, 'main-content')} className={`toc-link ${activeSection === 'main-content' ? 'active' : ''}`}>
                      The Core Methodologies
                    </a>
                  </li>
                  <li className="toc-item">
                    <a href="#key-points" onClick={(e) => scrollToSection(e, 'key-points')} className={`toc-link ${activeSection === 'key-points' ? 'active' : ''}`}>
                      Key Points
                    </a>
                  </li>
                  <li className="toc-item">
                    <a href="#conclusion" onClick={(e) => scrollToSection(e, 'conclusion')} className={`toc-link ${activeSection === 'conclusion' ? 'active' : ''}`}>
                      Conclusion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

        </div>

        {/* Related Articles */}
        <div className="related-articles">
          <h2 className="related-title">Read Next</h2>
          <div className="related-grid" style={{ paddingBottom: '60px' }}>
            
            {/* Related Card 1 */}
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80" alt="Related" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '0.8rem', color: '#E95D2A', fontWeight: 'bold' }}>TIPS & TRICKS</span>
                <h3 style={{ margin: '10px 0', fontSize: '1.2rem', color: '#1d2a44' }}>Developing Healthy Eating Habits in Toddlers</h3>
                <Link href="/blog" style={{ color: '#ECC440', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>Read More &rarr;</Link>
              </div>
            </div>

            {/* Related Card 2 */}
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80" alt="Related" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '0.8rem', color: '#E95D2A', fontWeight: 'bold' }}>CURRICULUM</span>
                <h3 style={{ margin: '10px 0', fontSize: '1.2rem', color: '#1d2a44' }}>Why Cultural Education Matters Today</h3>
                <Link href="/blog" style={{ color: '#ECC440', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>Read More &rarr;</Link>
              </div>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}

export default function BlogDetailsPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Loading article...</div>}>
      <BlogDetailsContent />
    </Suspense>
  );
}
