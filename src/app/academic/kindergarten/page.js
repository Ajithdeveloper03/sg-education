"use client";

import Link from "next/link";
import "../academic.css";
import "../../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function KindergartenPage() {
  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(7, 6, 16, 0.6)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title" style={{ color: '#fff' }}>LKG & UKG</h1>
          <p className="vm-banner-desc" style={{ color: '#eee' }}>
            Building strong academic and social foundations.<br />
            Our unique kindergarten approach emphasizes language, logic, and life skills.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#ECC440' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#fff' }}>Academic</span>
            <span style={{ margin: '0 0.8rem', color: '#ECC440' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#ECC440' }}>LKG & UKG</span>
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

      {/* LKG & UKG Section */}
      <section className="academic-section academic-bg-light">
        {/* Using official logo colors */}
        <i className="fa-solid fa-pencil ac-doodle" style={{ top: '20%', right: '5%', color: '#907010' }}></i>
        <i className="fa-solid fa-music ac-doodle" style={{ bottom: '10%', left: '5%', color: '#ECC440' }}></i>
        
        <div className="container">
          <div className="ac-grid" style={{ direction: 'rtl' }}>
            <div className="ac-image-wrapper" style={{ direction: 'ltr' }}>
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="LKG UKG Learning" />
            </div>
            <div className="ac-content" style={{ direction: 'ltr' }}>
              <div className="vm-tag" style={{ background: 'rgba(0, 0, 0, 0.1)', color: '#000000', border: '1px solid rgba(0, 0, 0, 0.2)' }}>FOUNDATION</div>
              <h2 className="academic-title">
                LKG & <span style={{ position: 'relative', display: 'inline-block' }}>UKG
                  <span style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '8px', background: 'rgba(0, 0, 0, 0.2)', zIndex: '-1', borderRadius: '4px' }}></span>
                </span>
              </h2>
              <p className="academic-desc" style={{ marginLeft: 0 }}>
                In Kindergarten, we blend academic readiness with our unique Corporate Culture (CPC) methodologies, emphasizing language development, critical thinking, and social skills.
              </p>
              
              <ul className="ac-feature-list">
                <li className="ac-feature-item">
                  <div className="ac-feature-icon" style={{ background: 'rgba(236, 196, 64,0.1)', color: '#ECC440' }}><i className="fa-solid fa-language"></i></div>
                  <div className="ac-feature-text">
                    <h4>Phonics & Language</h4>
                    <p>Early reading and writing skills focused on vocabulary and expression.</p>
                  </div>
                </li>
                <li className="ac-feature-item">
                  <div className="ac-feature-icon" style={{ background: 'rgba(144, 112, 16,0.1)', color: '#907010' }}><i className="fa-solid fa-calculator"></i></div>
                  <div className="ac-feature-text">
                    <h4>Numeracy & Logic</h4>
                    <p>Interactive math games to build strong logical foundations.</p>
                  </div>
                </li>
                <li className="ac-feature-item">
                  <div className="ac-feature-icon" style={{ background: 'rgba(236, 196, 64,0.1)', color: '#ECC440' }}><i className="fa-solid fa-users"></i></div>
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

    </main>
  );
}
