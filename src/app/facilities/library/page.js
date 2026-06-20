"use client";

import Link from "next/link";
import "./library-advanced.css"; // The new advanced CSS
import "../../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function LibraryPage() {
  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.45)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title" style={{ color: '#fff' }}>Library</h1>
          <p className="vm-banner-desc" style={{ color: '#fff' }}>
            A treasure trove of imagination fostering a lifelong love for reading.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Library</span>
          </div>
        </div>
        
        {/* Cloud Transition */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            <img src="/sg-education/cloud.png" alt="Cloud Transition" />
            <img src="/sg-education/cloud.png" alt="Cloud Transition" />
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 1: A World of Stories & Learning
          ========================================== */}
      <section className="lib-section-padding" style={{ backgroundColor: '#fff' }}>
        <i className="fa-solid fa-book-open lib-doodle" style={{ top: '10%', right: '10%', color: '#ECC440' }}></i>
        <i className="fa-solid fa-star lib-doodle" style={{ bottom: '15%', left: '5%', color: '#FFC300', fontSize: '2rem' }}></i>
        
        <div className="container">
          <div className="lib-s1-container">
            {/* Left Content */}
            <div className="lib-s1-content">
              <div className="vm-tag tag-pink">DISCOVER & EXPLORE</div>
              <h2 className="lib-title-main">
                A World of Stories <br/> & <span className="underline-pink">Learning</span>
              </h2>
              <p className="lib-text-main">
                Our library opens the door to a world of knowledge, imagination, and discovery. With a wide collection of storybooks, picture books, educational resources, and age-appropriate reading materials, students from LKG to Grade 5 are encouraged to develop a love for reading and lifelong learning. The library supports both academic growth and creative thinking in a fun and engaging way.
              </p>
              
              <div className="lib-s1-features">
                <div className="lib-s1-feature-card">
                  <div className="lib-s1-icon" style={{ background: '#FF2A7A' }}><i className="fa-solid fa-book-journal-whills"></i></div>
                  <div className="lib-s1-feature-text">
                    <h4>Vast Book Collection</h4>
                    <p>Thousands of hand-picked books ranging from illustrated fairytales to early science explorers.</p>
                  </div>
                </div>
                <div className="lib-s1-feature-card">
                  <div className="lib-s1-icon" style={{ background: '#ECC440' }}><i className="fa-solid fa-magnifying-glass-plus"></i></div>
                  <div className="lib-s1-feature-text">
                    <h4>Curated for Kids</h4>
                    <p>Materials carefully selected to perfectly match the reading levels of LKG to Grade 5 students.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image (Bubble Style Gallery) */}
            <div className="lib-bubble-gallery">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" alt="Children Reading in Library" className="lib-bubble-img-1" />
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80" alt="Books on shelf" className="lib-bubble-img-2" />
              
              <div className="lib-s1-badge">
                <span style={{ fontSize: '2rem', display: 'block' }}>10k+</span>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Books</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: Building Strong Reading Habits
          ========================================== */}
      <section className="lib-section-padding lib-s2-wrapper">
        <i className="fa-solid fa-lightbulb lib-doodle" style={{ top: '20%', left: '10%', color: '#FF2A7A' }}></i>
        
        <div className="container">
          <div className="lib-s2-card">
            
            {/* Image Left */}
            <div className="lib-s2-image">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Group Reading Session" />
            </div>

            {/* Content Right */}
            <div className="lib-s2-content">
              <div className="vm-tag tag-blue" style={{ alignSelf: 'flex-start' }}>GROWTH & DEVELOPMENT</div>
              <h2 className="lib-title-main" style={{ marginTop: '0.5rem' }}>
                Building Strong <br/><span className="underline-blue">Reading Habits</span>
              </h2>
              <p className="lib-text-main" style={{ marginBottom: '1rem' }}>
                Reading plays an important role in a child’s overall development. Through regular library sessions, students enhance their vocabulary, language skills, comprehension, and confidence. Our library helps young learners cultivate positive reading habits that strengthen their academic foundation and encourage independent learning.
              </p>
              
              <div className="lib-s2-stats-grid">
                <div className="lib-s2-stat-box">
                  <div className="lib-s2-stat-num">100%</div>
                  <div className="lib-s2-stat-text">Engagement</div>
                </div>
                <div className="lib-s2-stat-box">
                  <div className="lib-s2-stat-num">Weekly</div>
                  <div className="lib-s2-stat-text">Story Sessions</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: An Inspiring Space
          ========================================== */}
      <section className="lib-section-padding lib-s3-wrapper">
        <i className="fa-solid fa-rocket lib-doodle" style={{ bottom: '10%', right: '5%', color: '#FFC300', opacity: 0.1 }}></i>
        
        <div className="container">
          <div className="lib-s3-grid">
            
            {/* Left Content (Premium Showcase text) */}
            <div className="lib-s3-content">
              <div className="vm-tag tag-yellow" style={{ backgroundColor: 'rgba(236, 196, 64, 0.2)', color: '#FFC300', border: '1px solid #FFC300' }}>CREATIVE ENVIRONMENT</div>
              <h2 className="lib-title-main" style={{ marginTop: '0.5rem' }}>
                An Inspiring Space for <br/><span style={{ color: '#FFC300' }}>Young Readers</span>
              </h2>
              <p className="lib-text-main">
                Designed especially for young learners, our library provides a welcoming and comfortable environment where children can explore, read, and learn. The engaging atmosphere, child-friendly resources, and interactive reading experiences inspire curiosity, creativity, and a passion for knowledge among students.
              </p>
              
              <div className="lib-s3-glass-card">
                <div className="lib-s3-glass-icon"><i className="fa-solid fa-couch"></i></div>
                <div className="lib-s3-glass-text">
                  <strong>Comfort First:</strong> Ergonomic, colorful seating designed to let kids sink into a good book for hours.
                </div>
              </div>

              <div className="lib-s3-glass-card">
                <div className="lib-s3-glass-icon" style={{ background: '#00C853', color: '#fff' }}><i className="fa-solid fa-laptop-code"></i></div>
                <div className="lib-s3-glass-text">
                  <strong>Interactive Tech:</strong> Digital storytelling stations equipped with safe, curated educational software.
                </div>
              </div>
            </div>

            {/* Right Image Gallery (Overlapping Layout) */}
            <div className="lib-s3-gallery">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80" alt="Modern Library Environment" className="lib-s3-img-main" />
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80" alt="Child Reading Comfortably" className="lib-s3-img-float" />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}



