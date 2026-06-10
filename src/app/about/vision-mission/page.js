"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./vision-mission.css"; // We will create a local css file for the specific designs

export default function VisionMissionPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0' }}>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("/sg-education/banner page.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title">Vision & Mission</h1>
          <p className="vm-banner-desc">
            Empowering minds through ancient wisdom and modern education.<br/>
            Building character, leadership, and a brighter future.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span>About Us</span>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Vision & Mission</span>
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
           MISSION SECTION (Ref Image 1)
           ========================================== */}
      <section className="vm-section mission-bg" style={{ paddingTop: '6rem', paddingBottom: '3rem', backgroundColor: '#fff' }}>
        <i className="fa-solid fa-paper-plane decor-float decor-1"></i>
        <i className="fa-solid fa-star decor-float decor-2"></i>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="vm-grid">
            
            {/* Left Content */}
            <div className="vm-content">
              <div className="vm-tag tag-pink">OUR MISSION</div>
              <h2 className="vm-title">
                Cultivating <span className="underline-pink">Ancient Wisdom</span> & Modern Excellence
              </h2>
              <p className="vm-desc" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                Our mission is to cultivate individuals with ancient wisdom, strong values, and corporate culture knowledge while nurturing intellectual growth and active minds. Through continuous guidance and collaboration with parents, we help students discover their vision, develop their passion, and unlock their full potential, empowering them to contribute meaningfully to national growth and development.
              </p>
              
              <div className="vm-features-compact">
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-green"><i className="fa-solid fa-seedling"></i></div>
                  <div className="vm-c-text">
                    <h4>Holistic Growth</h4>
                    <p>Balanced learning and development.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-pink"><i className="fa-solid fa-shield-halved"></i></div>
                  <div className="vm-c-text">
                    <h4>Strong Character</h4>
                    <p>Building values and integrity.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-blue"><i className="fa-solid fa-crown"></i></div>
                  <div className="vm-c-text">
                    <h4>Leadership Skills</h4>
                    <p>Developing confident leaders.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-yellow"><i className="fa-solid fa-globe"></i></div>
                  <div className="vm-c-text">
                    <h4>Nation Building</h4>
                    <p>Contributing to a better future.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Setup */}
            <div className="vm-image-container">
              <div className="vm-main-img-wrapper outline-white">
                <img src="/sg-education/mission.png" alt="Students in class" className="vm-main-img" />
              </div>
              <div className="vm-overlay-card overlay-pink">
                <img src="/sg-education/2 mission.png" alt="Student studying" className="vm-overlay-img" />
                <div className="vm-overlay-label bg-pink">
                  <i className="fa-solid fa-heart" style={{ fontSize: '1.2rem' }}></i> Dream Big, Little One
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ==========================================
           VISION SECTION (Ref Image 2)
           ========================================== */}
      <section className="vm-section vision-bg" style={{ padding: '4rem 0', backgroundColor: '#F0F7F4' }}>
        <i className="fa-solid fa-lightbulb decor-float decor-3"></i>
        <i className="fa-solid fa-shapes decor-float decor-4"></i>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="vm-grid">
            
            {/* Left Image Setup (Swapped) */}
            <div className="vm-image-container">
              <div className="vm-main-img-wrapper outline-white">
                <img src="/sg-education/vision.png" alt="Stack of books" className="vm-main-img" />
              </div>
              <div className="vm-overlay-card overlay-green" style={{ left: '-15px', right: 'auto' }}>
                <img src="/sg-education/2 vision.png" alt="Classroom" className="vm-overlay-img" />
                <div className="vm-overlay-label bg-green">
                  <i className="fa-solid fa-leaf" style={{ fontSize: '1.2rem' }}></i> Little Minds, Big Futures
                </div>
              </div>
            </div>

            {/* Right Content (Swapped) */}
            <div className="vm-content">
              <div className="vm-tag tag-yellow">OUR VISION</div>
              <h2 className="vm-title">
                Nurturing <span className="underline-yellow">Well-Rounded<br/>Individuals</span>
              </h2>
              <p className="vm-desc">
                Our vision at SG Educations is to nurture well-rounded individuals with clear conscience, strong bodies, and unwavering faith, empowering them to contribute to national growth and development.
              </p>
              
              <div className="vm-features-compact">
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-orange"><i className="fa-solid fa-arrow-trend-up"></i></div>
                  <div className="vm-c-text">
                    <h4>100% Growth</h4>
                    <p>Holistic Development</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-green"><i className="fa-solid fa-om"></i></div>
                  <div className="vm-c-text">
                    <h4>ANBC</h4>
                    <p>Ancient Bharath Culture</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-pink"><i className="fa-solid fa-briefcase"></i></div>
                  <div className="vm-c-text">
                    <h4>CPC</h4>
                    <p>Corporate Culture</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-yellow"><i className="fa-solid fa-building-columns"></i></div>
                  <div className="vm-c-text">
                    <h4>4 Pillars</h4>
                    <p>Core Foundation</p>
                  </div>
                </div>
              </div>
              
              <div className="vm-quote-block">
                <p>"Empowering individuals to contribute to national growth and development through wisdom, values, and leadership."</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ==========================================
           VALUES SECTION (New)
           ========================================== */}
      <section className="vm-section values-bg" style={{ padding: '4rem 0', backgroundColor: '#F0F4F8' }}>
        <i className="fa-solid fa-rocket decor-float decor-1" style={{ color: '#00BFA6' }}></i>
        <i className="fa-solid fa-sun decor-float decor-2" style={{ color: '#FF2A7A' }}></i>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="vm-grid">
            
            {/* Left Content (Swapped) */}
            <div className="vm-content">
              <div className="vm-tag tag-blue">OUR VALUES</div>
              <h2 className="vm-title">
                The Core of Our <span className="underline-blue">Foundation</span>
              </h2>
              <p className="vm-desc">
                We believe in establishing a strong moral compass and encouraging intellectual curiosity. Our core values guide every action and decision we make at SG Educations.
              </p>
              
              <div className="vm-features-compact">
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-pink"><i className="fa-solid fa-lightbulb"></i></div>
                  <div className="vm-c-text">
                    <h4>Right Knowledge</h4>
                    <p>Blending ancient wisdom with modern education.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-green"><i className="fa-solid fa-seedling"></i></div>
                  <div className="vm-c-text">
                    <h4>Persistent Learning</h4>
                    <p>Fostering a lifelong love for discovering new skills.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-yellow"><i className="fa-solid fa-scale-balanced"></i></div>
                  <div className="vm-c-text">
                    <h4>Disciplined Living</h4>
                    <p>Instilling strong ethical practices and values.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-blue"><i className="fa-solid fa-users-rays"></i></div>
                  <div className="vm-c-text">
                    <h4>Leadership Potential</h4>
                    <p>Empowering individuals to unlock their true potential.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Setup (Swapped) */}
            <div className="vm-image-container">
              <div className="vm-main-img-wrapper outline-white">
                <img src="/sg-education/our values.png" alt="Students collaborating" className="vm-main-img" />
              </div>
              <div className="vm-overlay-card" style={{ right: '-15px', bottom: '-15px', border: '6px solid #fff' }}>
                <img src="/sg-education/2 our values.png" alt="Leadership" className="vm-overlay-img" />
                <div className="vm-overlay-label bg-blue">
                  <i className="fa-solid fa-face-smile-beam" style={{ fontSize: '1.2rem' }}></i> Happy Kids, Bright Futures
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
