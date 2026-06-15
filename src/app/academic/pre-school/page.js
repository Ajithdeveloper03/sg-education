"use client";

import Link from "next/link";
import "../academic.css";
import "../../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function PreSchoolPage() {
  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(7, 6, 16, 0.6)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title" style={{ color: '#fff' }}>Pre School</h1>
          <p className="vm-banner-desc" style={{ color: '#eee' }}>
            Nurturing curiosity and sparking joy in our youngest learners.<br />
            A perfect foundation for your child's lifelong educational journey.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#ECC440' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#fff' }}>Academic</span>
            <span style={{ margin: '0 0.8rem', color: '#ECC440' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#ECC440' }}>Pre School</span>
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

      {/* Pre School Section Content */}
      <section className="academic-section">
        {/* Using official logo colors for doodles */}
        <i className="fa-solid fa-shapes ac-doodle" style={{ top: '10%', left: '5%', color: '#ECC440' }}></i>
        <i className="fa-solid fa-puzzle-piece ac-doodle" style={{ bottom: '15%', right: '8%', color: '#ECC440' }}></i>
        
        <div className="container">
          <div className="ac-grid">
            <div className="ac-content">
              {/* Force pink to match #ECC440 if standard pink class wasn't right, but tag-pink should be updated in CSS */}
              <div className="vm-tag" style={{ background: 'rgba(236, 196, 64,0.1)', color: '#ECC440', border: '1px solid rgba(236, 196, 64,0.2)' }}>EARLY YEARS</div>
              <h2 className="academic-title">
                Pre <span style={{ position: 'relative', display: 'inline-block' }}>School
                  <span style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '8px', background: 'rgba(236, 196, 64,0.2)', zIndex: '-1', borderRadius: '4px' }}></span>
                </span>
              </h2>
              <p className="academic-desc" style={{ marginLeft: 0 }}>
                Our Pre School program provides a nurturing, play-based environment designed to spark curiosity and develop foundational motor, social, and cognitive skills.
              </p>
              
              <ul className="ac-feature-list">
                <li className="ac-feature-item">
                  <div className="ac-feature-icon" style={{ background: 'rgba(236, 196, 64,0.1)', color: '#ECC440' }}><i className="fa-solid fa-hands-holding-child"></i></div>
                  <div className="ac-feature-text">
                    <h4>Nurturing Care</h4>
                    <p>A safe, hygienic, and comforting environment that feels like a second home.</p>
                  </div>
                </li>
                <li className="ac-feature-item">
                  <div className="ac-feature-icon" style={{ background: 'rgba(236, 196, 64,0.1)', color: '#ECC440' }}><i className="fa-solid fa-face-smile"></i></div>
                  <div className="ac-feature-text">
                    <h4>Play-Based Learning</h4>
                    <p>Exploration through sensory play, music, and interactive storytelling.</p>
                  </div>
                </li>
                <li className="ac-feature-item">
                  <div className="ac-feature-icon" style={{ background: 'rgba(144, 112, 16,0.1)', color: '#907010' }}><i className="fa-solid fa-seedling"></i></div>
                  <div className="ac-feature-text">
                    <h4>Motor Skill Development</h4>
                    <p>Activities focused on developing fine and gross motor skills.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ac-image-wrapper">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" alt="Pre School Kids" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
