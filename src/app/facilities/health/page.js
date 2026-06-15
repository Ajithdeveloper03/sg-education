"use client";

import Link from "next/link";
import "./health-advanced.css"; // We will rename the classes in health-advanced.css or just use beyond CSS. Actually, since the user said swap the *design and layout*, I should just use the exact CSS rules. The easiest way is to literally copy beyond-advanced.css to health and vice-versa, or just swap the class names in the files. Let's just import beyond's CSS for Health and Health's CSS for Beyond to save time, OR I can rename them. Let's stick to using the existing CSS files and just applying the classes.

import "../beyond/beyond-advanced.css"; // Using Beyond's layout styles
import "../../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function HealthPage() {
  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Page Banner (Keep Health Banner Content) */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.pexels.com/photos/31864392/pexels-photo-31864392.jpeg?auto=compress&cs=tinysrgb&w=1600")', 
        backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(7, 6, 16, 0.6)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title" style={{ color: '#fff' }}>Health & Well-being</h1>
          <p className="vm-banner-desc" style={{ color: '#fff' }}>
            Nurturing healthy habits, active bodies, and confident minds.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#fff' }}>Facilities</span>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Health & Well-being</span>
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
          SECTION 1: Healthy Habits (Using Beyond's Masonry Layout)
          ========================================== */}
      <section className="beyond-section-padding beyond-s1-wrapper">
        <i className="fa-solid fa-star beyond-shape" style={{ top: '10%', left: '5%', color: '#FFC300', fontSize: '3rem' }}></i>
        <i className="fa-solid fa-apple-whole beyond-shape" style={{ bottom: '15%', right: '8%', color: '#00C853', fontSize: '4rem', animationDelay: '1s' }}></i>
        
        <div className="container">
          <div className="beyond-s1-grid">
            
            {/* Left Content */}
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className="vm-tag tag-green">EVERYDAY LIFE</div>
              <h2 className="beyond-title-main">
                Healthy Habits for <br/><span className="underline-green">Everyday Life</span>
              </h2>
              <p className="beyond-text-main">
                We believe that healthy children learn better and grow with confidence. Our Health & Well-Being program encourages students to develop good hygiene practices, healthy eating habits, and positive daily routines from an early age. Through regular guidance and awareness activities, children learn the importance of taking care of their physical and mental well-being.
              </p>
            </div>

            {/* Right Masonry Grid */}
            <div className="beyond-s1-masonry">
              <div className="beyond-s1-card featured">
                <img src="https://images.pexels.com/photos/35493021/pexels-photo-35493021.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Children maintaining hygiene" />
              </div>
              <div className="beyond-s1-masonry-col">
                <div className="beyond-s1-card">
                  <div className="beyond-s1-card-icon" style={{ background: '#ECC440' }}><i className="fa-solid fa-hands-bubbles"></i></div>
                  <h4>Hygiene Practices</h4>
                  <p>Developing essential cleanliness routines.</p>
                </div>
              </div>
              {/* Nutritional Awareness Wide Card */}
              <div className="beyond-s1-card featured" style={{ display: 'flex', alignItems: 'center', textAlign: 'left', padding: '1.5rem', gridColumn: 'span 2' }}>
                <div style={{ flex: 1 }}>
                  <div className="beyond-s1-card-icon" style={{ background: '#00C853', margin: '0 0 1rem 0' }}><i className="fa-solid fa-apple-whole"></i></div>
                  <h4>Nutritional Awareness</h4>
                  <p>Understanding the value of healthy eating.</p>
                </div>
                <div style={{ flex: 1, paddingLeft: '1rem' }}>
                  <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Healthy Food" style={{ width: '100%', height: '140px', borderRadius: '15px', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: Active Bodies (Using Beyond's Horizontal Showcase)
          ========================================== */}
      <section className="beyond-section-padding beyond-s2-wrapper">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="vm-tag tag-blue">PHYSICAL FITNESS</div>
            <h2 className="beyond-title-main">Active Bodies, <span className="underline-blue">Active Minds</span></h2>
            <p className="beyond-text-main" style={{ maxWidth: '700px', margin: '0 auto' }}>A safe and supportive environment is essential for every child's growth. We promote active learning through physical activities and outdoor play.</p>
          </div>

          <div className="beyond-s2-slider-container">
            
            {/* Horizontal Card 1 */}
            <div className="beyond-s2-horizontal-card">
              <div className="beyond-s2-card-img">
                <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80" alt="Outdoor Play" />
              </div>
              <div className="beyond-s2-card-content">
                <h3>Outdoor Exploration</h3>
                <p>Engaging in outdoor games and playground activities helps improve strength, coordination, and overall fitness.</p>
                <div className="beyond-s2-highlight-list">
                  <div className="beyond-s2-highlight-item"><i className="fa-solid fa-tree" style={{ color: '#00C853' }}></i> Nature Walks</div>
                  <div className="beyond-s2-highlight-item"><i className="fa-solid fa-futbol" style={{ color: '#ECC440' }}></i> Playground</div>
                </div>
              </div>
            </div>

            {/* Horizontal Card 2 (Reverse) */}
            <div className="beyond-s2-horizontal-card reverse">
              <div className="beyond-s2-card-img">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" alt="Structured Exercises" />
              </div>
              <div className="beyond-s2-card-content">
                <h3>Structured Exercises</h3>
                <p>Age-appropriate exercises and yoga sessions encourage students to stay active, energetic, and engaged throughout the school day.</p>
                <div className="beyond-s2-highlight-list">
                  <div className="beyond-s2-highlight-item"><i className="fa-solid fa-person-running" style={{ color: '#FF9800' }}></i> Agility Drills</div>
                  <div className="beyond-s2-highlight-item"><i className="fa-solid fa-om" style={{ color: '#FF2A7A' }}></i> Yoga Sessions</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: Growing with Confidence (Using Beyond's Spotlight Grid)
          ========================================== */}
      <section className="beyond-s3-spotlight" style={{ overflow: 'hidden' }}>
        <div className="beyond-s3-overlay" style={{ background: 'linear-gradient(135deg, rgba(15, 20, 35, 0.8) 0%, rgba(0, 0, 0, 0.7) 100%)' }}></div>
        
        {/* Animated Glassmorphism Background Orbs */}
        <div className="glass-orb-container">
          <div className="glass-orb glass-orb-pink"></div>
          <div className="glass-orb glass-orb-blue"></div>
          <div className="glass-orb glass-orb-yellow"></div>
        </div>

        <div className="container beyond-s3-container" style={{ zIndex: 10 }}>
          
          <div className="beyond-s3-header">
            <div className="vm-tag tag-yellow" style={{ backgroundColor: 'rgba(236, 196, 64, 0.2)', color: '#FFC300', border: '1px solid #FFC300', marginBottom: '1rem' }}>EMOTIONAL WELL-BEING</div>
            <h2 className="beyond-title-main">Growing with Confidence & Happiness</h2>
            <p className="beyond-text-main">
              Our focus on health and well-being goes beyond physical fitness. We strive to create a positive atmosphere where children feel secure, valued, and motivated to learn. By supporting their emotional, social, and physical development, we help students build confidence, resilience, and a strong foundation for lifelong success.
            </p>
          </div>

          <div className="beyond-s3-glass-grid">
            
            <div className="beyond-s3-glass-card">
              <div className="beyond-s3-glass-icon"><i className="fa-regular fa-face-smile-beam"></i></div>
              <h4>Happiness First</h4>
              <p>Fostering a joyful environment where every child feels appreciated.</p>
            </div>

            <div className="beyond-s3-glass-card">
              <div className="beyond-s3-glass-icon" style={{ color: '#ECC440' }}><i className="fa-solid fa-shield-heart"></i></div>
              <h4>Emotional Security</h4>
              <p>Building a safe space for expression and personal growth.</p>
            </div>

            <div className="beyond-s3-glass-card">
              <div className="beyond-s3-glass-icon" style={{ color: '#00C853' }}><i className="fa-solid fa-users"></i></div>
              <h4>Social Bonding</h4>
              <p>Encouraging positive interactions and lasting friendships among peers.</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
