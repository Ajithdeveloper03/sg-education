"use client";

import Link from "next/link";
import "./blog.css";

export default function BlogPage() {
  return (
    <main style={{ backgroundColor: '#F8F9FA', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Blog Hero Section */}
      <section className="blog-hero" style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.85)', zIndex: 1 }}></div>
        <div className="container blog-hero-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          
          <h1 className="blog-hero-title">Stories & Insights from SG Education</h1>
          <p className="blog-hero-desc">
            Parenting tips, early learning guides, and joyful success stories<br />
            from our thriving kids' educational ecosystem.
          </p>
          <div className="blog-hero-meta">DISCOVERED 11 ARTICLES</div>
        </div>
        
        {/* Cloud Transition */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
          </div>
        </div>
      </section>

      {/* Blog Card Grid Section */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            
            {/* Blog Post 1 */}
            <article className="blog-card">
              <div className="blog-card-image">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" alt="Blog 1" />
                <div className="blog-card-badge">EDUCATION</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span><i className="fa-regular fa-calendar"></i> February 7, 2026</span>
                  <span><i className="fa-regular fa-clock"></i> 6 min read</span>
                </div>
                <h2 className="blog-card-title">Find Your Ideal Early Learning Path for Creativity</h2>
                <p className="blog-card-text">Discover the best approaches to innovative thinking. Explore methodologies, vibrant community interactions, and how it can elevate your child's educational experience.</p>
              </div>
              <div className="blog-card-footer">
                <div className="blog-author">
                  <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                  <span className="author-name">By Admin</span>
                </div>
                <Link href="/blog" className="blog-read-link">Read Article <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="blog-card">
              <div className="blog-card-image">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80" alt="Blog 2" />
                <div className="blog-card-badge" style={{ color: '#ECC440' }}>PARENTING</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span><i className="fa-regular fa-calendar"></i> February 11, 2026</span>
                  <span><i className="fa-regular fa-clock"></i> 7 min read</span>
                </div>
                <h2 className="blog-card-title">Play-Based Learning vs Traditional Schooling – Which is Better?</h2>
                <p className="blog-card-text">Compare flexibility, costs, developmental benefits, and amenities to find the best workspace and learning environment for your child's growth and daily routine.</p>
              </div>
              <div className="blog-card-footer">
                <div className="blog-author">
                  <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                  <span className="author-name">By Admin</span>
                </div>
                <Link href="/blog" className="blog-read-link">Read Article <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="blog-card">
              <div className="blog-card-image">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Blog 3" />
                <div className="blog-card-badge" style={{ color: '#907010' }}>CAMPUS GUIDE</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span><i className="fa-regular fa-calendar"></i> February 12, 2026</span>
                  <span><i className="fa-regular fa-clock"></i> 8 min read</span>
                </div>
                <h2 className="blog-card-title">Top 7 Benefits of Choosing our Campus (2026 Guide)</h2>
                <p className="blog-card-text">Discover the top 7 benefits of choosing a dynamic campus in the city. From cost-effective setups and prime locations to unparalleled modern learning resources.</p>
              </div>
              <div className="blog-card-footer">
                <div className="blog-author">
                  <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                  <span className="author-name">By Admin</span>
                </div>
                <Link href="/blog" className="blog-read-link">Read Article <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </article>

          </div>
        </div>
      </section>

    </main>
  );
}
