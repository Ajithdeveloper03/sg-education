"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import "./primary-advanced.css"; // The premium styles created from reference

export default function PrimaryStandardPage() {
  const animatedElements = useRef([]);

  // Intersection Observer for scroll animations (fade-up effect)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedElements.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !animatedElements.current.includes(el)) {
      animatedElements.current.push(el);
    }
  };

  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* ==========================================
          SECTION 1: HERO BANNER
          ========================================== */}
      <section 
        className="primary-hero"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/8613133/pexels-photo-8613133.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
      >
        <div className="primary-hero-overlay"></div>
        <div className="primary-hero-content" ref={addToRefs} style={{ opacity: 0 }}>
          <div className="primary-breadcrumbs">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#fff' }}>Academic</span>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>1st to 5th Standard</span>
          </div>
          
          <div className="primary-hero-subtitle">6 - 10 Years</div>
          <h1 className="primary-hero-title">A Strong Start for Growing Minds</h1>
          <p className="primary-hero-desc">
            The curriculum and the content is specially designed to introduce young students to an expansive learning environment that bridges foundational academics with real-world understanding.
          </p>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: VISUAL HIGHLIGHT (SPLIT LAYOUT)
          ========================================== */}
      <section className="primary-section-padding">
        <div className="container">
          <div className="primary-split-container">
            {/* Left side: Animated Text */}
            <div ref={addToRefs} style={{ opacity: 0 }}>
              <div className="vm-tag tag-blue">CAMPUS LIFE</div>
              <h2 className="primary-title-main">
                Discovering the Joy of <span style={{ color: '#00AEFF' }}>Learning Every Day</span>
              </h2>
              <p className="primary-text-main">
                At SG Education, we believe that primary schooling is the most crucial phase in a child's academic journey. Our beautifully designed classrooms, interactive methodologies, and holistic approach ensure that every day is a new adventure in learning.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#4A5568' }}>
                  <i className="fa-solid fa-check" style={{ color: '#00C853', background: 'rgba(0,200,83,0.1)', padding: '0.5rem', borderRadius: '50%' }}></i> 
                  Innovative and interactive teaching models
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#4A5568' }}>
                  <i className="fa-solid fa-check" style={{ color: '#00C853', background: 'rgba(0,200,83,0.1)', padding: '0.5rem', borderRadius: '50%' }}></i> 
                  Focus on both conceptual and practical knowledge
                </li>
              </ul>
            </div>

            {/* Right side: Split Images with hover animations */}
            <div className="primary-split-images" ref={addToRefs} style={{ opacity: 0 }}>
              {/* Decorative background shape */}
              <img src="/sg-education/shape-1.png" alt="Decoration" className="primary-shape-decorator" onError={(e) => e.target.style.display = 'none'} />
              
              <img src="https://images.pexels.com/photos/8926543/pexels-photo-8926543.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Students learning" className="primary-img-back" />
              <img src="https://images.pexels.com/photos/5212351/pexels-photo-5212351.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Student activity" className="primary-img-front" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: CORE CURRICULUM PILLARS (4 CARDS)
          ========================================== */}
      <section className="primary-section-padding primary-pillars-wrapper">
        <div className="container">
          <div ref={addToRefs} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', opacity: 0 }}>
            <h2 className="primary-title-main">Holistic Educational Pillars</h2>
            <p className="primary-text-main">
              Our 1st to 5th Standard curriculum is thematic-based, providing a 360-degree focus on developing cognitive, physical, and emotional skills in young learners.
            </p>
          </div>

          <div className="primary-pillars-grid">
            
            {/* Card 1 */}
            <div className="primary-pillar-card" ref={addToRefs} style={{ opacity: 0 }}>
              <div className="primary-pillar-header">
                <div className="primary-pillar-icon">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="primary-pillar-title">360° Skill Development</h3>
              </div>
              <p className="primary-pillar-desc">
                Our primary curriculum provides a holistic focus on developing fine and gross motor skills, ensuring students are physically active and mentally engaged throughout the day.
              </p>
            </div>

            {/* Card 2 */}
            <div className="primary-pillar-card delay-100" ref={addToRefs} style={{ opacity: 0 }}>
              <div className="primary-pillar-header">
                <div className="primary-pillar-icon">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="primary-pillar-title">Foundational Academics</h3>
              </div>
              <p className="primary-pillar-desc">
                We introduce comprehensive in-house books on core subjects which enhances the child to learn language, mathematics, and environmental sciences with immense confidence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="primary-pillar-card" ref={addToRefs} style={{ opacity: 0 }}>
              <div className="primary-pillar-header">
                <div className="primary-pillar-icon">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="primary-pillar-title">Preparing for Future Grades</h3>
              </div>
              <p className="primary-pillar-desc">
                Our aim is to ensure that every child who graduates from our primary approach gets fully prepared for their next major educational step into middle school.
              </p>
            </div>

            {/* Card 4 */}
            <div className="primary-pillar-card delay-100" ref={addToRefs} style={{ opacity: 0 }}>
              <div className="primary-pillar-header">
                <div className="primary-pillar-icon">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="primary-pillar-title">Mind, Movement & Character</h3>
              </div>
              <p className="primary-pillar-desc">
                We deeply focus on the cognitive, psychomotor, and linguistic skills through various fun-filled, creative activities and strict character-building exercises.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: ADMISSIONS CTA BANNER
          ========================================== */}
      <section className="primary-cta-wrapper" ref={addToRefs} style={{ opacity: 0 }}>
        <div className="primary-cta-bg-shape"></div>
        <div className="container">
          <div className="primary-cta-content">
            <span className="primary-cta-badge">Admissions</span>
            <h2 className="primary-cta-title">Admissions Open for 2026–27</h2>
            <p className="primary-cta-text">
              Admissions are now open! Explore a curriculum that focuses on robust academics, strong character building, and complete all-round development for your child.
            </p>
            <Link href="/contact" className="primary-btn-premium">
              Admissions Open <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
