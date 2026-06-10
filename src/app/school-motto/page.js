"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SchoolMottoPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: '#1D2A44', paddingTop: '0', minHeight: '100vh', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px' 
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(29, 42, 68, 0.7)', zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-comfortaa), sans-serif', color: '#fff', fontWeight: 800, marginBottom: '1rem', textShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>School Motto</h1>
          <p style={{ color: 'var(--kidza-orange)', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Our Core Beliefs</p>
        </div>
      </section>
      
      {/* Background Decor */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,195,0,0.15) 0%, rgba(29,42,68,0) 70%)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,42,122,0.15) 0%, rgba(29,42,68,0) 70%)', zIndex: 0 }}></div>

      <section className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label-brand color-yellow" style={{ backgroundColor: 'rgba(255,195,0,0.1)' }}>Our Core</span>
            <h2 style={{ fontSize: isMobile ? '3rem' : '4rem', color: '#fff', fontFamily: 'var(--font-comfortaa), sans-serif', marginTop: '1rem' }}>
              The School <span className="text-orange" style={{ textDecoration: 'underline', textDecorationStyle: 'wavy', textDecorationColor: 'var(--playful-pink)' }}>Motto</span>
            </h2>
          </div>

          <div style={{ 
            maxWidth: '900px',
            margin: '0 auto',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: isMobile ? '2rem' : '4rem',
            borderRadius: '30px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '4rem', color: 'var(--playful-pink)', marginBottom: '2rem' }}>
              <i className="fa-solid fa-gem"></i>
            </div>
            
            <h3 style={{ fontSize: isMobile ? '2rem' : '2.5rem', color: 'var(--joyful-yellow)', marginBottom: '2rem', fontFamily: 'var(--font-comfortaa), sans-serif', lineHeight: '1.4' }}>
              "CoEducate, Empower, Elevate"
            </h3>
            
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              Our motto encapsulates the essence of what we strive to achieve every day at SG Educations. We believe that true education is a collaborative journey (<span style={{ color: '#fff', fontWeight: 'bold' }}>CoEducate</span>) between teachers, students, and parents.
            </p>

            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              Through this collaboration, we give our students the tools, wisdom, and confidence they need to succeed (<span style={{ color: '#fff', fontWeight: 'bold' }}>Empower</span>). 
            </p>

            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '3rem' }}>
              Ultimately, our goal is to lift them up to reach their highest potential, both academically and morally (<span style={{ color: '#fff', fontWeight: 'bold' }}>Elevate</span>), ensuring they become the leaders and visionaries of tomorrow.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--joyful-yellow)' }}>
                <i className="fa-solid fa-check-circle"></i> Wisdom
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--playful-pink)' }}>
                <i className="fa-solid fa-check-circle"></i> Values
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--kidza-navy)', textShadow: '0 0 5px rgba(255,255,255,0.5)' }}>
                <i className="fa-solid fa-check-circle"></i> Leadership
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/" className="btn btn-rainbow">
               Back to About Us
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
