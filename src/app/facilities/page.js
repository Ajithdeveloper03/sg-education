"use client";

import Link from "next/link";
import "./health/health-advanced.css"; // For Discovering Hidden Talents and Learning Through Participation
import "./beyond/beyond-advanced.css"; // For Healthy Habits
import "../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function FacilitiesPage() {
  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("/sg-education/facilities banner.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.45)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title" style={{ color: '#fff' }}>Facilities</h1>
          <p className="vm-banner-desc" style={{ color: '#fff' }}>
            Nurturing healthy habits, discovering talents, and active engagement.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Facilities</span>
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
          SECTION 1: Discovering Hidden Talents (Curved Block)
          ========================================== */}
      <section className="health-section-padding health-s1-wrapper">
        <div className="container">
          <div className="health-s1-curve-block">
            
            {/* Floating Icons */}
            <div className="health-s1-float-icon health-s1-icon-1"><i className="fa-solid fa-heart-pulse"></i></div>
            <div className="health-s1-float-icon health-s1-icon-2"><i className="fa-solid fa-apple-whole"></i></div>
            <div className="health-s1-float-icon health-s1-icon-3"><i className="fa-solid fa-person-running"></i></div>

            {/* Left Content */}
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className="vm-tag tag-green">HEALTH & WELL-BEING</div>
              <h2 className="health-title-main">
                Nurturing <br/><span className="underline-green">Healthy Minds</span>
              </h2>
              <p className="health-text-main">
                At SG Education, we prioritize the physical and mental well-being of our students. We provide a supportive environment that encourages healthy habits, active lifestyles, and emotional resilience. Our comprehensive approach ensures that every child grows up healthy, happy, and ready to learn.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#333', fontWeight: '600' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#00C853', fontSize: '1.3rem' }}></i> Physical Fitness
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#333', fontWeight: '600' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#00C853', fontSize: '1.3rem' }}></i> Mental Wellness
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#333', fontWeight: '600' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#00C853', fontSize: '1.3rem' }}></i> Nutritional Care
                </li>
              </ul>
            </div>

            {/* Right Organic Image */}
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className="health-s1-organic-frame">
                <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80" alt="Health and Well-being" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: Learning Through Participation (Zig-Zag Timeline)
          ========================================== */}
      <section className="health-section-padding health-s2-wrapper">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="vm-tag tag-blue">BEYOND ACADEMICS</div>
            <h2 className="health-title-main">Holistic Growth & <span className="underline-blue">Development</span></h2>
          </div>

          <div className="health-s2-timeline">
            
            {/* Timeline Item 1 */}
            <div className="health-s2-item">
              <div className="health-s2-dot"></div>
              <div className="health-s2-content">
                <h3 style={{ fontSize: '1.5rem', color: '#000000', marginBottom: '1rem', fontWeight: '800' }}>Extracurriculars & Arts</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>We provide a vibrant platform for students to explore their creative talents through arts, music, and drama, fostering a well-rounded and expressive personality.</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ background: '#E8F5E9', padding: '0.5rem 1rem', borderRadius: '8px', color: '#00C853', fontWeight: '700', fontSize: '0.9rem' }}><i className="fa-solid fa-palette"></i> Creativity</div>
                  <div style={{ background: '#E3F2FD', padding: '0.5rem 1rem', borderRadius: '8px', color: '#ECC440', fontWeight: '700', fontSize: '0.9rem' }}><i className="fa-solid fa-music"></i> Performing Arts</div>
                </div>
              </div>
              <div className="health-s2-image">
                <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80" alt="Extracurricular Arts" />
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="health-s2-item">
              <div className="health-s2-dot"></div>
              <div className="health-s2-content">
                <h3 style={{ fontSize: '1.5rem', color: '#000000', marginBottom: '1rem', fontWeight: '800' }}>Sports & Leadership</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>Physical education and team sports instill discipline and leadership. These activities encourage students to step out of their comfort zones, building resilience and team spirit.</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ background: '#FFF3E0', padding: '0.5rem 1rem', borderRadius: '8px', color: '#FF9800', fontWeight: '700', fontSize: '0.9rem' }}><i className="fa-solid fa-medal"></i> Leadership</div>
                  <div style={{ background: '#FCE4EC', padding: '0.5rem 1rem', borderRadius: '8px', color: '#FF2A7A', fontWeight: '700', fontSize: '0.9rem' }}><i className="fa-solid fa-basketball"></i> Sports</div>
                </div>
              </div>
              <div className="health-s2-image">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" alt="Sports and Leadership" />
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="health-s2-item">
              <div className="health-s2-dot"></div>
              <div className="health-s2-content">
                <h3 style={{ fontSize: '1.5rem', color: '#000000', marginBottom: '1rem', fontWeight: '800' }}>Clubs & Enrichment Programs</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>Through various clubs, coding workshops, and eco-initiatives, we nurture curiosity and practical skills that prepare students for the future.</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ background: '#E3F2FD', padding: '0.5rem 1rem', borderRadius: '8px', color: '#1976D2', fontWeight: '700', fontSize: '0.9rem' }}><i className="fa-solid fa-code"></i> Coding</div>
                  <div style={{ background: '#E8F5E9', padding: '0.5rem 1rem', borderRadius: '8px', color: '#388E3C', fontWeight: '700', fontSize: '0.9rem' }}><i className="fa-solid fa-leaf"></i> Eco Club</div>
                </div>
              </div>
              <div className="health-s2-image">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80" alt="Enrichment Programs" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: Healthy Habits (Masonry Layout)
          ========================================== */}
      <section className="beyond-section-padding beyond-s1-wrapper">
        <i className="fa-solid fa-book-open beyond-shape" style={{ top: '10%', left: '5%', color: '#FFC300', fontSize: '3rem' }}></i>
        <i className="fa-solid fa-laptop-code beyond-shape" style={{ bottom: '15%', right: '8%', color: '#00C853', fontSize: '4rem', animationDelay: '1s' }}></i>
        
        <div className="container">
          <div className="beyond-s1-grid">
            
            {/* Left Content */}
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className="vm-tag tag-green">LIBRARY & LEARNING</div>
              <h2 className="beyond-title-main">
                A Hub for <br/><span className="underline-green">Academic Support</span>
              </h2>
              <p className="beyond-text-main">
                Our library is a treasure trove of knowledge, offering an extensive collection of reading materials, digital learning resources, and academic support. We encourage students to explore diverse genres, conduct research, and develop a lifelong love for reading in a quiet and inspiring environment.
              </p>
            </div>

            {/* Right Masonry Grid */}
            <div className="beyond-s1-masonry">
              <div className="beyond-s1-card featured">
                <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80" alt="Library Facilities" />
              </div>
              <div className="beyond-s1-masonry-col">
                <div className="beyond-s1-card">
                  <div className="beyond-s1-card-icon" style={{ background: '#ECC440' }}><i className="fa-solid fa-book-open"></i></div>
                  <h4>Reading Resources</h4>
                  <p>Extensive collection of books and journals.</p>
                </div>
              </div>
              {/* Digital Learning Wide Card */}
              <div className="beyond-s1-card featured" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', textAlign: 'left', padding: '1.5rem', gridColumn: 'span 2' }}>
                <div style={{ flex: '1 1 200px', minWidth: 0, marginBottom: '1rem' }}>
                  <div className="beyond-s1-card-icon" style={{ background: '#00C853', margin: '0 0 1rem 0' }}><i className="fa-solid fa-laptop-file"></i></div>
                  <h4>Digital Learning</h4>
                  <p>Access to e-books and online materials.</p>
                </div>
                <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Digital Learning" style={{ width: '100%', height: '140px', borderRadius: '15px', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ==========================================
          SECTION 4: Transportation (Using Health's Spotlight Glass Panel)
          ========================================== */}
      <section className="health-s3-spotlight" style={{ overflow: 'hidden', backgroundImage: "url('/sg-education/transport/school-bus-bg.jpg')" }}>
        <div className="health-s3-overlay" style={{ background: 'linear-gradient(135deg, rgba(20, 25, 40, 0.8) 0%, rgba(10, 15, 25, 0.7) 100%)' }}></div>
        
        <div className="container health-s3-container" style={{ zIndex: 10 }}>
          <div className="transportation-split-layout">
            <div className="health-s3-glass-panel" style={{ textAlign: 'left', padding: '2rem', maxWidth: '100%', margin: 0 }}>
              <i className="fa-solid fa-quote-left health-s3-quote-icon" style={{ left: '10px' }}></i>
              
              <div className="vm-tag tag-yellow" style={{ backgroundColor: 'rgba(236, 196, 64, 0.2)', color: '#FFC300', border: '1px solid #FFC300', marginBottom: '1.5rem', display: 'inline-block' }}>TRANSPORTATION</div>
              
              <h2 className="health-title-main" style={{ textAlign: 'center' }}>Safe & Reliable Commute</h2>
              
              <p className="health-text-main" style={{ textAlign: 'left' }}>
                We provide a secure, comfortable, and efficient transportation system for our students. Our modern fleet of school buses is equipped with advanced safety features and driven by trained professionals, ensuring a stress-free journey and giving parents complete peace of mind every day.
              </p>
              
              <div className="health-s3-highlight-tags" style={{ justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="health-s3-tag" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}><i className="fa-solid fa-shield-halved"></i> Safety First</span>
                <span className="health-s3-tag" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}><i className="fa-solid fa-bus"></i> Modern Fleet</span>
                <span className="health-s3-tag" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}><i className="fa-solid fa-route"></i> Convenient Routes</span>
              </div>
            </div>
            
            <div className="transportation-image-wrapper">
              <img src="/sg-education/TRANSPORTATION.png" alt="School Transportation" className="transportation-img" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}



