"use client";

import Link from "next/link";
import "./academic.css";
import "../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function AcademicPage() {
  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(7, 6, 16, 0.6)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title" style={{ color: '#fff' }}>Academic Excellence</h1>
          <p className="vm-banner-desc" style={{ color: '#eee' }}>
            Fostering curiosity, creativity, and foundational knowledge.<br />
            Our structured programs guide every step of your child's journey.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#00AEFF' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#00AEFF' }}>Academic</span>
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

      {/* Pre School Section */}
      <section id="pre-school" className="academic-section">
        <i className="fa-solid fa-shapes ac-doodle" style={{ top: '10%', left: '5%', color: '#FF2A7A' }}></i>
        <i className="fa-solid fa-puzzle-piece ac-doodle" style={{ bottom: '15%', right: '8%', color: '#00AEFF' }}></i>
        
        <div className="container">
          <div className="ac-grid">
            <div className="ac-content">
              <div className="vm-tag tag-pink">EARLY YEARS</div>
              <h2 className="academic-title">
                Pre <span className="underline-pink">School</span>
              </h2>
              <p className="academic-desc" style={{ marginLeft: 0 }}>
                Our Pre School program provides a nurturing, play-based environment designed to spark curiosity and develop foundational motor, social, and cognitive skills.
              </p>
              
              <ul className="ac-feature-list">
                <li className="ac-feature-item">
                  <div className="ac-feature-icon ac-icon-pink"><i className="fa-solid fa-hands-holding-child"></i></div>
                  <div className="ac-feature-text">
                    <h4>Nurturing Care</h4>
                    <p>A safe, hygienic, and comforting environment that feels like a second home.</p>
                  </div>
                </li>
                <li className="ac-feature-item">
                  <div className="ac-feature-icon ac-icon-yellow"><i className="fa-solid fa-face-smile"></i></div>
                  <div className="ac-feature-text">
                    <h4>Play-Based Learning</h4>
                    <p>Exploration through sensory play, music, and interactive storytelling.</p>
                  </div>
                </li>
                <li className="ac-feature-item">
                  <div className="ac-feature-icon ac-icon-green"><i className="fa-solid fa-seedling"></i></div>
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

      {/* LKG & UKG Section */}
      <section id="lkg-ukg" className="academic-section academic-bg-light">
        <i className="fa-solid fa-pencil ac-doodle" style={{ top: '20%', right: '5%', color: '#00C853' }}></i>
        <i className="fa-solid fa-music ac-doodle" style={{ bottom: '10%', left: '5%', color: '#FFC300' }}></i>
        
        <div className="container">
          <div className="ac-grid" style={{ direction: 'rtl' }}>
            <div className="ac-image-wrapper" style={{ direction: 'ltr' }}>
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="LKG UKG Learning" />
            </div>
            <div className="ac-content" style={{ direction: 'ltr' }}>
              <div className="vm-tag tag-blue">FOUNDATION</div>
              <h2 className="academic-title">
                LKG & <span className="underline-blue">UKG</span>
              </h2>
              <p className="academic-desc" style={{ marginLeft: 0 }}>
                In Kindergarten, we blend academic readiness with our unique Corporate Culture (CPC) methodologies, emphasizing language development, critical thinking, and social skills.
              </p>
              
              <ul className="ac-feature-list">
                <li className="ac-feature-item">
                  <div className="ac-feature-icon ac-icon-blue"><i className="fa-solid fa-language"></i></div>
                  <div className="ac-feature-text">
                    <h4>Phonics & Language</h4>
                    <p>Early reading and writing skills focused on vocabulary and expression.</p>
                  </div>
                </li>
                <li className="ac-feature-item">
                  <div className="ac-feature-icon ac-icon-purple"><i className="fa-solid fa-calculator"></i></div>
                  <div className="ac-feature-text">
                    <h4>Numeracy & Logic</h4>
                    <p>Interactive math games to build strong logical foundations.</p>
                  </div>
                </li>
                <li className="ac-feature-item">
                  <div className="ac-feature-icon ac-icon-yellow"><i className="fa-solid fa-users"></i></div>
                  <div className="ac-feature-text">
                    <h4>Social Interaction</h4>
                    <p>Encouraging teamwork, sharing, and active listening among peers.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Section */}
      <section id="primary" className="academic-section">
        <i className="fa-solid fa-book-open ac-doodle" style={{ top: '15%', left: '8%', color: '#5A49E3' }}></i>
        <i className="fa-solid fa-globe ac-doodle" style={{ bottom: '20%', right: '10%', color: '#FF2A7A' }}></i>
        
        <div className="container">
          <div className="ac-grid">
            <div className="ac-content">
              <div className="vm-tag tag-green">GROWTH</div>
              <h2 className="academic-title">
                1st to <span className="underline-green">5th Std</span>
              </h2>
              <p className="academic-desc" style={{ marginLeft: 0 }}>
                Our primary education incorporates Ancient Bharath Culture (ANBC) for strong moral values while embracing a rigorous academic curriculum that prepares students for the future.
              </p>
              
              <ul className="ac-feature-list">
                <li className="ac-feature-item">
                  <div className="ac-feature-icon ac-icon-green"><i className="fa-solid fa-laptop-code"></i></div>
                  <div className="ac-feature-text">
                    <h4>Modern Curriculum</h4>
                    <p>Comprehensive studies including Science, Tech, and Environmental awareness.</p>
                  </div>
                </li>
                <li className="ac-feature-item">
                  <div className="ac-feature-icon ac-icon-pink"><i className="fa-solid fa-om"></i></div>
                  <div className="ac-feature-text">
                    <h4>Cultural Heritage</h4>
                    <p>Integration of Yoga, moral studies, and respect for traditions.</p>
                  </div>
                </li>
                <li className="ac-feature-item">
                  <div className="ac-feature-icon ac-icon-blue"><i className="fa-solid fa-chalkboard-user"></i></div>
                  <div className="ac-feature-text">
                    <h4>Leadership Training</h4>
                    <p>Activities designed to boost public speaking and confidence.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ac-image-wrapper">
              <img src="https://images.unsplash.com/photo-1427504494785-319ce6649271?auto=format&fit=crop&w=800&q=80" alt="Primary School Education" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
