"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./blog-details.css";

export default function BlogDetailsPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  // Sample blog data since this is a static demonstration
  const article = {
    title: "Find Your Ideal Early Learning Path for Creativity",
    category: "EDUCATION",
    date: "February 7, 2026",
    author: "Admin",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80"
  };

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

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // offset for fixed header
        behavior: "smooth"
      });
    }
  };

  return (
    <main style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Hero Section */}
      <section className="blog-details-hero" style={{ backgroundImage: `url(${article.image})` }}>
        <div className="blog-details-hero-content container">
          <div className="blog-details-badge">{article.category}</div>
          <h1 className="blog-details-title">{article.title}</h1>
          <div className="blog-details-meta">
            <span><i className="fa-solid fa-user"></i> By {article.author}</span>
            <span><i className="fa-regular fa-calendar"></i> {article.date}</span>
            <span><i className="fa-regular fa-clock"></i> {article.readTime}</span>
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

            <div id="introduction">
              <h2>Introduction</h2>
              <p>
                Early childhood is the most critical phase in human development. During these formative years, a child&apos;s brain develops at an astonishing rate, absorbing information like a sponge. Cultivating creativity during this period isn&apos;t just about teaching them to paint or draw; it&apos;s about teaching them how to think, solve problems, and express themselves confidently.
              </p>
              <p>
                At SG Education, we believe that every child is born with an innate sense of wonder and creativity. The challenge for educators and parents is to find the right learning path that nurtures this creativity rather than stifling it with rigid structures.
              </p>
            </div>

            <div id="main-content">
              <h2>The Core Methodologies</h2>
              <p>
                To build a strong foundation for innovative thinking, we must step away from rote memorization and embrace experiential learning. When children are allowed to touch, feel, and experience the world around them, their cognitive boundaries expand.
              </p>
              <blockquote>
                &quot;Play is the highest form of research.&quot; – Albert Einstein
              </blockquote>
              <p>
                Our curriculum integrates the <strong>ANBC (Ancient Bharath Culture) CPC Methodology</strong>. This unique approach perfectly blends modern corporate educational standards with traditional values. By teaching children ancient stories, morals, and customs alongside modern problem-solving techniques, we provide a holistic brain-development environment.
              </p>
            </div>

            <div id="key-points">
              <h2>Key Points for Fostering Creativity</h2>
              <p>If you are looking to enhance your child&apos;s creative potential at home, consider these fundamental strategies:</p>
              <ul>
                <li><strong>Encourage Open-Ended Play:</strong> Provide materials that can be used in multiple ways—like blocks, clay, and blank paper—rather than toys that only do one specific thing.</li>
                <li><strong>Embrace the Mess:</strong> Creative exploration is often messy. Allow children the freedom to get their hands dirty while painting or playing outdoors.</li>
                <li><strong>Ask Thought-Provoking Questions:</strong> Instead of giving them the answers, ask "What do you think will happen if...?" or "How can we solve this?"</li>
                <li><strong>Limit Screen Time:</strong> Passive consumption of media limits the brain&apos;s need to imagine. Replace screen time with interactive reading and physical play.</li>
              </ul>
            </div>

            <div id="conclusion">
              <h2>Conclusion</h2>
              <p>
                Finding the ideal early learning path requires patience, observation, and a willingness to let children lead the way. By choosing an educational environment like SG Early Budding that prioritizes holistic, joyful, and cultural learning, you are setting the stage for a lifetime of innovative thinking.
              </p>
              <p>
                Remember, the goal isn&apos;t to mold a child into a specific shape, but to give them the tools to shape their own brilliant future.
              </p>
            </div>
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
