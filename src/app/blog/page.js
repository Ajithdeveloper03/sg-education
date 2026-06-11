"use client";

import Link from "next/link";
import "./blog.css";
import "../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function BlogPage() {
  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(7, 6, 16, 0.6)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title" style={{ color: '#fff' }}>Our Blog</h1>
          <p className="vm-banner-desc" style={{ color: '#eee' }}>
            Discover insights, tips, and the latest news about <br />
            early childhood education and our campus.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Blog</span>
          </div>
        </div>
        
        {/* Cloud Transition */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-page-section">
        <div className="container">
          <div className="blog-container">
            
            {/* Main Content Area */}
            <div className="blog-main">
              
              {/* Blog Post 1 */}
              <article className="blog-card">
                <div className="blog-image">
                  <div className="blog-tag">Education</div>
                  <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" alt="Blog 1" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="fa-solid fa-user"></i> Admin</span>
                    <span><i className="fa-regular fa-calendar-days"></i> Oct 15, 2023</span>
                    <span><i className="fa-regular fa-comments"></i> 3 Comments</span>
                  </div>
                  <h2>The Importance of Ancient Bharath Culture in Early Education</h2>
                  <p>Incorporating traditional values such as Yoga, moral storytelling, and respect into modern education provides children with a strong ethical foundation. At SG Education, our ANBC approach bridges the gap between the past and the future...</p>
                  <Link href="/blog" className="blog-read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </article>

              {/* Blog Post 2 */}
              <article className="blog-card">
                <div className="blog-image">
                  <div className="blog-tag" style={{ backgroundColor: '#00AEFF' }}>Parenting</div>
                  <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80" alt="Blog 2" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="fa-solid fa-user"></i> Teacher Jane</span>
                    <span><i className="fa-regular fa-calendar-days"></i> Sep 28, 2023</span>
                    <span><i className="fa-regular fa-comments"></i> 5 Comments</span>
                  </div>
                  <h2>How Play-Based Learning Shapes Critical Thinking</h2>
                  <p>Play is not just a break from learning; it is the way children learn best. Interactive games, puzzles, and group activities help stimulate brain development, enhance problem-solving skills, and encourage social collaboration...</p>
                  <Link href="/blog" className="blog-read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </article>

              {/* Blog Post 3 */}
              <article className="blog-card">
                <div className="blog-image">
                  <div className="blog-tag" style={{ backgroundColor: '#00C853' }}>Campus News</div>
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Blog 3" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="fa-solid fa-user"></i> Admin</span>
                    <span><i className="fa-regular fa-calendar-days"></i> Sep 10, 2023</span>
                    <span><i className="fa-regular fa-comments"></i> 0 Comments</span>
                  </div>
                  <h2>Highlights from Our Recent Cultural Fest</h2>
                  <p>Last week, our campus was filled with joy, colors, and incredible performances as we celebrated our annual Cultural Fest. Students showcased their talents in traditional dances, art exhibitions, and music, proving that creativity knows no bounds...</p>
                  <Link href="/blog" className="blog-read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </article>

              {/* Pagination */}
              <div className="blog-pagination">
                <button className="page-btn"><i className="fa-solid fa-angle-left"></i></button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn"><i className="fa-solid fa-angle-right"></i></button>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              
              <div className="sidebar-widget">
                <h3 className="widget-title">Search</h3>
                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Search keywords..." />
                </form>
              </div>

              <div className="sidebar-widget">
                <h3 className="widget-title">Recent Posts</h3>
                <ul className="recent-post-list">
                  <li className="recent-post-item">
                    <div className="recent-img"><img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=150&q=80" alt="Recent 1" /></div>
                    <div className="recent-info">
                      <h4>Ancient Bharath Culture in Early Education</h4>
                      <span className="recent-date">Oct 15, 2023</span>
                    </div>
                  </li>
                  <li className="recent-post-item">
                    <div className="recent-img"><img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=150&q=80" alt="Recent 2" /></div>
                    <div className="recent-info">
                      <h4>Play-Based Learning Shapes Thinking</h4>
                      <span className="recent-date">Sep 28, 2023</span>
                    </div>
                  </li>
                  <li className="recent-post-item">
                    <div className="recent-img"><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=150&q=80" alt="Recent 3" /></div>
                    <div className="recent-info">
                      <h4>Highlights from Our Cultural Fest</h4>
                      <span className="recent-date">Sep 10, 2023</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="category-list">
                  <li className="category-item">
                    <span>Education</span>
                    <span className="category-count">12</span>
                  </li>
                  <li className="category-item">
                    <span>Parenting</span>
                    <span className="category-count">8</span>
                  </li>
                  <li className="category-item">
                    <span>Campus News</span>
                    <span className="category-count">5</span>
                  </li>
                  <li className="category-item">
                    <span>Events & Fests</span>
                    <span className="category-count">3</span>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3 className="widget-title">Tags</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ background: '#F0F4F8', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', color: '#666', cursor: 'pointer' }}>#Learning</span>
                  <span style={{ background: '#F0F4F8', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', color: '#666', cursor: 'pointer' }}>#Kids</span>
                  <span style={{ background: '#F0F4F8', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', color: '#666', cursor: 'pointer' }}>#Culture</span>
                  <span style={{ background: '#F0F4F8', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', color: '#666', cursor: 'pointer' }}>#Sports</span>
                  <span style={{ background: '#F0F4F8', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', color: '#666', cursor: 'pointer' }}>#Events</span>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

    </main>
  );
}
