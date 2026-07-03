"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "./blog-details.css";

function BlogDetailsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [activeSection, setActiveSection] = useState("");
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [structuredContent, setStructuredContent] = useState({ sections: [], faqs: [] });

  useEffect(() => {
    if (!id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
      return;
    }
    
    const fetchArticle = async () => {
      try {
        const apiBase = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost';

        // Helper: resolve relative image paths to absolute URLs
        const resolveImageUrl = (url) => {
          if (!url) return null;
          if (url.startsWith('http')) return url;
          return `${apiBase}${url}`;
        };

        const res = await fetch(`${apiBase}/php-backend/api_blog.php?id=${id}`);
        const data = await res.json();
        if (data.status === 'success') {
          setArticle(data.data);
          try {
            const parsed = JSON.parse(data.data.content);
            if (parsed && typeof parsed === 'object') {
              setStructuredContent({
                sections: (parsed.sections || []).map(section => ({
                  ...section,
                  image_url: resolveImageUrl(section.image_url)
                })),
                faqs: parsed.faqs || []
              });
            } else {
              setStructuredContent({
                sections: [{ id: 'main', heading: 'Content', body: data.data.content, bullets: [] }],
                faqs: []
              });
            }
          } catch(e) {
            setStructuredContent({
              sections: [{ id: 'main', heading: 'Content', body: data.data.content, bullets: [] }],
              faqs: []
            });
          }
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
    if (!structuredContent.sections.length) return;
    
    const handleScroll = () => {
      const sectionIds = structuredContent.sections.map(s => 'section-' + s.id);
      if (structuredContent.faqs && structuredContent.faqs.length > 0) {
        sectionIds.push('section-faqs');
      }
      
      let current = sectionIds[0] || "";
      
      for (const sId of sectionIds) {
        const element = document.getElementById(sId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = sId;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [structuredContent]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Loading article...</div>;
  if (!article) return <div style={{ padding: '100px', textAlign: 'center' }}>Article not found. <Link href="/blog">Return to blog</Link></div>;

  return (
    <main className="blog-page-wrapper">

      {/* ===== Full-Width Hero Banner ===== */}
      <section className="blog-details-hero" style={{ backgroundImage: `url(${article.image_url || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80'})` }}>
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content container">
          <div className="blog-details-badge">{article.category || 'EDUCATION'}</div>
          <h1 className="blog-details-hero-title">{article.title}</h1>
          <div className="blog-details-hero-meta">
            <span><i className="fa-solid fa-user"></i> By {article.author || 'Admin'}</span>
            <span><i className="fa-regular fa-calendar"></i> {new Date(article.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span><i className="fa-regular fa-clock"></i> {article.read_time || '5 min read'}</span>
          </div>
        </div>
      </section>

      {/* ===== Blog Content (unchanged) ===== */}
      <section className="container">
        <Link href="/blog" className="back-to-blog">
          <i className="fa-solid fa-arrow-left-long"></i> Back to Blog
        </Link>
        
        <div className="blog-details-container">
          
          {/* Main Article Content */}
          <div className="blog-article-content">
            <div className="article-body">
              {article.excerpt && <p style={{ fontWeight: 'bold' }}>{article.excerpt}</p>}
              
              {structuredContent.sections.map((section) => (
                <div key={section.id} className="article-section">
                  {section.heading && <h2 id={`section-${section.id}`}>{section.heading}</h2>}
                  
                  {section.image_url && (
                    <div style={{ margin: '30px 0', borderRadius: '12px', overflow: 'hidden' }}>
                      <img src={section.image_url} alt={section.heading || 'Section Image'} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  )}

                  {section.body && <p style={{ whiteSpace: 'pre-wrap' }}>{section.body}</p>}
                  
                  {section.bullets && section.bullets.length > 0 && (
                    <ul>
                      {section.bullets.map(b => (
                        <li key={b.id}>{b.text}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {structuredContent.faqs && structuredContent.faqs.length > 0 && (
                <div style={{ marginTop: '50px' }}>
                  <h2 id="section-faqs">Frequently Asked Questions</h2>
                  {structuredContent.faqs.map(faq => (
                    <div key={faq.id} style={{ marginBottom: '20px' }}>
                      <h4 style={{ color: '#111827', margin: '0 0 10px 0', fontSize: '1.2rem' }}>Q: {faq.question}</h4>
                      <p style={{ margin: 0 }}>A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Author Info Box */}
            <div className="article-author-box">
              <div className="author-box-avatar">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <div className="author-box-details">
                <h4>{article.author || 'Admin'}</h4>
                <p>{article.author || 'Admin'} is an expert contributor sharing insights and valuable knowledge with our community.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="blog-sidebar">
              {structuredContent.sections && structuredContent.sections.length > 0 && (
                <div className="toc-card">
                  <h3 className="toc-title">Table of Contents</h3>
                  <ul className="toc-list">
                    {structuredContent.sections.map(section => {
                      if (!section.heading) return null;
                      return (
                        <li key={section.id} className="toc-item">
                          <a href={`#section-${section.id}`} onClick={(e) => scrollToSection(e, `section-${section.id}`)} className={`toc-link ${activeSection === `section-${section.id}` ? 'active' : ''}`}>
                            {section.heading}
                          </a>
                        </li>
                      );
                    })}
                    {structuredContent.faqs && structuredContent.faqs.length > 0 && (
                      <li className="toc-item">
                        <a href="#section-faqs" onClick={(e) => scrollToSection(e, 'section-faqs')} className={`toc-link ${activeSection === 'section-faqs' ? 'active' : ''}`}>
                          FAQs
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Read More Articles Section */}
              <div className="toc-card">
                <h3 className="toc-title">Read More Articles</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <Link href="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }} className="read-more-item">
                      <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=150&q=80" alt="Article" style={{ width: '70px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                      <div>
                        <h4 style={{ margin: '0 0 5px 0', fontSize: '0.95rem', color: '#111827', lineHeight: '1.4' }}>The Power of Content Marketing</h4>
                        <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>Oct 10, 2023</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }} className="read-more-item">
                      <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=150&q=80" alt="Article" style={{ width: '70px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                      <div>
                        <h4 style={{ margin: '0 0 5px 0', fontSize: '0.95rem', color: '#111827', lineHeight: '1.4' }}>Mastering Local SEO</h4>
                        <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>Oct 05, 2023</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}

export default function BlogDetailsPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>}>
      <BlogDetailsContent />
    </Suspense>
  );
}
