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
      `}</style>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>
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
      <section className="vm-section" style={{ paddingTop: '6rem', paddingBottom: '3rem', position: 'relative', backgroundColor: '#F0F4F8' }}>
        
        {/* Transparent PNG Decorative Images (Left & Right) */}
        {!isMobile && (
          <>
            <div style={{ position: 'absolute', left: '-5%', top: '10%', width: '450px', height: '450px', opacity: 0.85, zIndex: 0, pointerEvents: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/sg-education/motto teacher.png" alt="Decorative Left" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ position: 'absolute', right: '-5%', top: '10%', width: '450px', height: '450px', opacity: 0.85, zIndex: 0, pointerEvents: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/sg-education/about-student.png" alt="Decorative Right" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
          </>
        )}

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="vm-tag tag-pink">OUR MOTTO</div>
            <h2 className="vm-title" style={{ marginTop: '0.5rem' }}>
              CoEducate, Empower, <span className="underline-pink">Elevate</span>
            </h2>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="vm-desc" style={{ fontSize: '1.15rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
              Our motto encapsulates the essence of what we strive to achieve every day at SG Education. We believe that true education is a collaborative journey between teachers, students, and parents.
            </p>
            <p className="vm-desc" style={{ fontSize: '1.15rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
              Through this collaboration, we give our students the tools, wisdom, and confidence they need to succeed and make a positive impact on the world.
            </p>
            <p className="vm-desc" style={{ fontSize: '1.15rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              Ultimately, our goal is to lift them up to reach their highest potential, both academically and morally, ensuring they become the leaders and visionaries of tomorrow.
            </p>
          </div>

        </div> {/* End of 900px constrained container */}

        {/* Highlighted Key Points - Unconstrained wider container */}
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '2.5rem',
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
                <h4 style={{ fontSize: '1.1rem', color: '#1D2A44', fontWeight: '700', marginBottom: '0.3rem' }}>CoEducate</h4>
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
                <h4 style={{ fontSize: '1.1rem', color: '#1D2A44', fontWeight: '700', marginBottom: '0.3rem' }}>Empower</h4>
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
                <h4 style={{ fontSize: '1.1rem', color: '#1D2A44', fontWeight: '700', marginBottom: '0.3rem' }}>Elevate</h4>
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
