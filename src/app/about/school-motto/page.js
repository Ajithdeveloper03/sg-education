"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../vision-mission/vision-mission.css"; // Reuse Mission & Vision styles

export default function SchoolMottoPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <style>{`
        /* Remove top padding of the footer only on the motto page */
        .newsletter-section.section-padding {
          padding-top: 0 !important;
        }
        .motto-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .motto-img-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .motto-img-wrapper img {
          max-width: 100%;
          height: auto;
          max-height: 600px;
          object-fit: contain;
        }
        @media (max-width: 1024px) {
          .motto-hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .motto-center-text {
            order: 1;
            padding: 0 1rem;
            text-align: center;
          }
          .motto-side-img-2 {
            order: 2;
          }
        }
      `}</style>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(7, 6, 16, 0.6)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title">School Motto</h1>
          <p className="vm-banner-desc">
            The core beliefs that guide our educational journey.<br />
            Inspiring excellence, character, and lifelong learning.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <Link href="/about" className="breadcrumb-link" style={{ color: '#fff', textDecoration: 'none' }}>About SG</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>School Motto</span>
          </div>
        </div>
        
        {/* Cloud Transition */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.95) sepia(0.05) hue-rotate(180deg)' }} />
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.95) sepia(0.05) hue-rotate(180deg)' }} />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="vm-section" style={{ paddingTop: isMobile ? '3rem' : '6rem', paddingBottom: isMobile ? '2rem' : '3rem', position: 'relative', backgroundColor: '#F0F4F8' }}>
        
        <div className="container motto-hero-grid">
          
          {/* Left Text Content */}
          <div className="motto-center-text">
            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <div className="vm-tag tag-pink">OUR MOTTO</div>
              <h2 className="vm-title" style={{ marginTop: '0.5rem' }}>
                Educate, Empower, <span className="underline-pink">Elevate</span>
              </h2>
            </div>
            <p className="vm-desc" style={{ fontSize: '1.05rem', textAlign: 'justify', lineHeight: '1.8', color: '#4A5568' }}>
              Our motto encapsulates the essence of what we strive to achieve every day at SG Education. We believe that true education is a collaborative journey between teachers, students, and parents. Through this collaboration, we give our students the tools, wisdom, and confidence they need to succeed and make a positive impact on the world. Ultimately, our goal is to lift them up to reach their highest potential, both academically and morally, ensuring they become the leaders and visionaries of tomorrow.
            </p>
          </div>

          {/* Right Decorative Image */}
          <div className="motto-img-wrapper motto-side-img-2">
            <img src="/sg-education/about-student.png" alt="Student learning" />
          </div>

        </div>

        {/* Highlighted Key Points - Unconstrained wider container */}
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1300px', margin: '0 auto', padding: isMobile ? '0 1rem' : '0' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: isMobile ? '1.5rem' : '2.5rem',
            alignItems: 'stretch'
          }}>
            
            <div style={{ 
              backgroundColor: '#FFFEFA', 
              borderRadius: '16px', 
              padding: '1.5rem', 
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)', 
              border: '1px solid #FEF08A',
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              height: '100%',
              boxSizing: 'border-box'
            }}>
              <div className="vm-c-icon icon-yellow" style={{ marginRight: '1rem', width: '60px', height: '60px', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px', flexShrink: 0 }}>
                <i className="fa-solid fa-users"></i>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#000000', fontWeight: '700', marginBottom: '0.3rem' }}>Educate</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4', margin: '0' }}>
                  Collaborative learning uniting teachers, students, and parents.
                </p>
              </div>
            </div>

            <div style={{ 
              backgroundColor: '#FFF5F8', 
              borderRadius: '16px', 
              padding: '1.5rem', 
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)', 
              border: '1px solid #FBCFE8',
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              height: '100%',
              boxSizing: 'border-box'
            }}>
              <div className="vm-c-icon icon-pink" style={{ marginRight: '1rem', width: '60px', height: '60px', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px', flexShrink: 0 }}>
                <i className="fa-solid fa-bolt"></i>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#000000', fontWeight: '700', marginBottom: '0.3rem' }}>Empower</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4', margin: '0' }}>
                  Building confidence, critical thinking, and practical skills.
                </p>
              </div>
            </div>

            <div style={{ 
              backgroundColor: '#F5F9FF', 
              borderRadius: '16px', 
              padding: '1.5rem', 
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)', 
              border: '1px solid #BFDBFE',
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              height: '100%',
              boxSizing: 'border-box'
            }}>
              <div className="vm-c-icon icon-blue" style={{ marginRight: '1rem', width: '60px', height: '60px', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '12px', flexShrink: 0 }}>
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#000000', fontWeight: '700', marginBottom: '0.3rem' }}>Elevate</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4', margin: '0' }}>
                  Lifting students to their highest academic and moral potential.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
