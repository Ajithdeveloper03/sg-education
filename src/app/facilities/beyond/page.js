"use client";

import Link from "next/link";
import "../health/health-advanced.css"; // Using Health's layout styles
import "../../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function BeyondPage() {
  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Page Banner (Keep Beyond Banner Content) */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(7, 6, 16, 0.6)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title" style={{ color: '#fff' }}>Beyond Academics</h1>
          <p className="vm-banner-desc" style={{ color: '#fff' }}>
            Discovering talents, building character, and inspiring creativity.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#fff' }}>Facilities</span>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Beyond Academics</span>
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
          SECTION 1: Discovering Hidden Talents (Using Health's Curved Block)
          ========================================== */}
      <section className="health-section-padding health-s1-wrapper">
        <div className="container">
          <div className="health-s1-curve-block">
            
            {/* Floating Icons */}
            <div className="health-s1-float-icon health-s1-icon-1"><i className="fa-solid fa-music"></i></div>
            <div className="health-s1-float-icon health-s1-icon-2"><i className="fa-solid fa-masks-theater"></i></div>
            <div className="health-s1-float-icon health-s1-icon-3"><i className="fa-solid fa-palette"></i></div>

            {/* Left Content */}
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className="vm-tag tag-green">CO-CURRICULAR</div>
              <h2 className="health-title-main">
                Discovering <br/><span className="underline-green">Hidden Talents</span>
              </h2>
              <p className="health-text-main">
                At SG Education, we believe every child has unique talents waiting to be discovered. Through a variety of co-curricular activities, students are encouraged to explore their interests, express their creativity, and build confidence beyond the classroom. These experiences help children develop important life skills while enjoying the learning process.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#333', fontWeight: '600' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#00C853', fontSize: '1.3rem' }}></i> Music & Rhythm
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#333', fontWeight: '600' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#00C853', fontSize: '1.3rem' }}></i> Drama & Arts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#333', fontWeight: '600' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#00C853', fontSize: '1.3rem' }}></i> Creative Expressions
                </li>
              </ul>
            </div>

            {/* Right Organic Image */}
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className="health-s1-organic-frame">
                <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80" alt="Creative Arts" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: Learning Through Participation (Using Health's Zig-Zag Timeline)
          ========================================== */}
      <section className="health-section-padding health-s2-wrapper">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="vm-tag tag-blue">ACTIVE ENGAGEMENT</div>
            <h2 className="health-title-main">Learning Through <span className="underline-blue">Participation</span></h2>
          </div>

          <div className="health-s2-timeline">
            
            {/* Timeline Item 1 */}
            <div className="health-s2-item">
              <div className="health-s2-dot"></div>
              <div className="health-s2-content">
                <h3 style={{ fontSize: '1.5rem', color: '#000000', marginBottom: '1rem', fontWeight: '800' }}>School Events & Programs</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>Participation in school events, competitions, and cultural programs helps students develop teamwork, leadership, communication, and problem-solving skills.</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ background: '#E8F5E9', padding: '0.5rem 1rem', borderRadius: '8px', color: '#00C853', fontWeight: '700', fontSize: '0.9rem' }}><i className="fa-solid fa-trophy"></i> Competitions</div>
                  <div style={{ background: '#E3F2FD', padding: '0.5rem 1rem', borderRadius: '8px', color: '#ECC440', fontWeight: '700', fontSize: '0.9rem' }}><i className="fa-solid fa-people-group"></i> Teamwork</div>
                </div>
              </div>
              <div className="health-s2-image">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" alt="School Events" />
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="health-s2-item">
              <div className="health-s2-dot"></div>
              <div className="health-s2-content">
                <h3 style={{ fontSize: '1.5rem', color: '#000000', marginBottom: '1rem', fontWeight: '800' }}>Stepping Out of Comfort Zones</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>These opportunities encourage children to step out of their comfort zones and grow into confident, well-rounded individuals ready to face the world.</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ background: '#FFF3E0', padding: '0.5rem 1rem', borderRadius: '8px', color: '#FF9800', fontWeight: '700', fontSize: '0.9rem' }}><i className="fa-solid fa-bullhorn"></i> Leadership</div>
                  <div style={{ background: '#FCE4EC', padding: '0.5rem 1rem', borderRadius: '8px', color: '#FF2A7A', fontWeight: '700', fontSize: '0.9rem' }}><i className="fa-solid fa-lightbulb"></i> Problem Solving</div>
                </div>
              </div>
              <div className="health-s2-image">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" alt="Group Activities" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: Building Character (Using Health's Spotlight Glass Panel)
          ========================================== */}
      <section className="health-s3-spotlight" style={{ overflow: 'hidden' }}>
        <div className="health-s3-overlay" style={{ background: 'linear-gradient(135deg, rgba(20, 25, 40, 0.8) 0%, rgba(10, 15, 25, 0.7) 100%)' }}></div>
        
        {/* Animated Glassmorphism Background Orbs */}
        <div className="glass-orb-container">
          <div className="glass-orb glass-orb-green"></div>
          <div className="glass-orb glass-orb-blue"></div>
          <div className="glass-orb glass-orb-pink"></div>
        </div>

        <div className="container health-s3-container" style={{ zIndex: 10 }}>
          <div className="health-s3-glass-panel">
            <i className="fa-solid fa-quote-left health-s3-quote-icon"></i>
            
            <div className="vm-tag tag-yellow" style={{ backgroundColor: 'rgba(236, 196, 64, 0.2)', color: '#FFC300', border: '1px solid #FFC300', marginBottom: '1.5rem' }}>FUTURE READY</div>
            
            <h2 className="health-title-main">Building Character for the Future</h2>
            
            <p className="health-text-main">
              Beyond academics, we focus on nurturing values, discipline, responsibility, and self-confidence. Through meaningful experiences and guided activities, students learn essential qualities that prepare them for future success. Our goal is to help every child grow into a confident, compassionate, and capable individual.
            </p>
            
            <div className="health-s3-highlight-tags">
              <span className="health-s3-tag"><i className="fa-solid fa-handshake-angle"></i> Compassion</span>
              <span className="health-s3-tag"><i className="fa-solid fa-scale-balanced"></i> Discipline</span>
              <span className="health-s3-tag"><i className="fa-solid fa-person-rays"></i> Confidence</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
