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
        position: 'relative', width: '100%', minHeight: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("/banner page.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '130px', paddingBottom: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.65)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.4rem 1.2rem', borderRadius: '30px', color: '#fff', fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.5)' }}>
              Guided by Purpose & Principles
            </span>
          </div>
          <h1 className="vm-banner-title">Our Vision & Mission: Inspiring Character, Excellence & Lifelong Leadership</h1>
          <p className="vm-banner-desc">
            At SG Education, our vision and mission center on cultivating well-rounded young individuals in Hosur. We harmonize Ancient Noble Bharat Culture (ANBC) with Corporate Professional Culture (CPC), providing a nurturing environment where children develop moral integrity, intellectual curiosity, and real-world leadership competencies.
          </p>
          <div className="vm-pagination" style={{ marginBottom: '1rem' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Vision & Mission</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/our-programs" className="btn btn-orange" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#E95D2A', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Explore Our Programs</Link>
            <Link href="/admission" className="btn btn-red" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#fff', color: '#333', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Schedule a Campus Tour</Link>
          </div>
        </div>
        
        {/* Cloud Transition */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            <img src="/cloud.webp" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
            <img src="/cloud.webp" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
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
              <div className="vm-tag tag-pink">Little Minds, Big Futures</div>
              <h2 className="vm-title">
                Our Mission: Cultivating <span className="underline-pink">Ancient Wisdom</span> & Modern Excellence
              </h2>
              <p className="vm-desc" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                Our mission is to nurture children with deep cultural wisdom, uncompromising ethical values, and modern corporate professionalism while stimulating active intellectual curiosity. In close partnership with parents, we guide students to discover their purpose, build resilience, and unlock their highest potential—empowering them to become responsible citizens and meaningful contributors to society.
              </p>
              
              <div className="vm-features-compact">
                <div className="vm-compact-card">
                  <div className="vm-c-text">
                    <h4>Holistic Growth</h4>
                    <p>Balanced intellectual, emotional, social, and physical development for every child.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-text">
                    <h4>Strong Moral Character</h4>
                    <p>Rooting daily life in truth, respect, self-discipline, and compassion.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-text">
                    <h4>21st-Century Leadership</h4>
                    <p>Instilling early communication, critical thinking, teamwork, and decision-making confidence.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-text">
                    <h4>Active Intellectual Curiosity</h4>
                    <p>Encouraging questioning, creative exploration, and conceptual mastery over rote learning.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Setup */}
            <div className="vm-image-container">
              <div className="vm-main-img-wrapper outline-white">
                <img src="/mission.webp" alt="Students in class" className="vm-main-img" />
              </div>
              <div className="vm-overlay-card overlay-pink">
                <img src="/2 mission.png" alt="Student studying" className="vm-overlay-img" />
                <div className="vm-overlay-label bg-pink">
                  <i className="fa-solid fa-heart" style={{ fontSize: '1.2rem' }}></i> Little Minds, Big Futures
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
                <img src="/vision.webp" alt="Stack of books" className="vm-main-img" />
              </div>
              <div className="vm-overlay-card overlay-green" style={{ left: '-15px', right: 'auto' }}>
                <img src="/2 vision.png" alt="Classroom" className="vm-overlay-img" />
                <div className="vm-overlay-label bg-green">
                  <i className="fa-solid fa-leaf" style={{ fontSize: '1.2rem' }}></i> Little Minds, Big Futures
                </div>
              </div>
            </div>

            {/* Right Content (Swapped) */}
            <div className="vm-content">
              <div className="vm-tag tag-yellow">Shaping Tomorrow's Citizens</div>
              <h2 className="vm-title">
                Our Vision: Nurturing <span className="underline-yellow">Well-Rounded,</span> Future-Ready Individuals
              </h2>
              <p className="vm-desc">
                Our vision is to build an inspiring educational ecosystem that nurtures individuals with a clear conscience, vibrant physical health, and unwavering self-belief. By fusing timeless Indian heritage with forward-looking academic practices, SG Education prepares young learners to thrive in an evolving global landscape while remaining deeply anchored in social responsibility.
              </p>
              
              <div className="vm-features-compact">
                <div className="vm-compact-card">
                  <div className="vm-c-text">
                    <h4>100% Comprehensive Development</h4>
                    <p>Nurturing mind, body, and character in harmony.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-text">
                    <h4>Ancient Noble Bharat Culture (ANBC)</h4>
                    <p>Preserving heritage, timeless ethical tenets, and respectful living.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-text">
                    <h4>Corporate Professional Culture (CPC)</h4>
                    <p>Developing structured habits, time discipline, and global adaptability.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-text">
                    <h4>Sustainable Societal Contribution</h4>
                    <p>Inspiring students to actively serve their communities and nation.</p>
                  </div>
                </div>
              </div>
              
              <div className="vm-quote-block">
                <p>&quot;Empowering individuals to contribute to national growth and development through wisdom, values, and leadership.&quot;</p>
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
              <div className="vm-tag tag-blue">The Foundation of SG Education</div>
              <h2 className="vm-title">
                The Core Values That <span className="underline-blue">Guide Every Decision We Make</span>
              </h2>
              <p className="vm-desc">
                Establishing a strong moral compass that guides children throughout their academic and personal lives.
              </p>
              
              <div className="vm-features-compact">
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-pink"><i className="fa-solid fa-lightbulb"></i></div>
                  <div className="vm-c-text">
                    <h4>Right Knowledge (Vidya)</h4>
                    <p>Blending ancient philosophical wisdom with modern scientific and digital education to offer relevant, contextual learning.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-green"><i className="fa-solid fa-seedling"></i></div>
                  <div className="vm-c-text">
                    <h4>Persistent Learning (Abhyasa)</h4>
                    <p>Fostering a genuine, lifelong enthusiasm for exploring ideas, acquiring practical skills, and overcoming challenges.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-yellow"><i className="fa-solid fa-scale-balanced"></i></div>
                  <div className="vm-c-text">
                    <h4>Disciplined Living (Samskara)</h4>
                    <p>Instilling daily habits of punctuality, personal hygiene, respectful communication, and ethical accountability.</p>
                  </div>
                </div>
                
                <div className="vm-compact-card">
                  <div className="vm-c-icon icon-blue"><i className="fa-solid fa-users-rays"></i></div>
                  <div className="vm-c-text">
                    <h4>Empathy & Inclusion (Karuna)</h4>
                    <p>Cultivating kindness, mutual respect, collaborative spirit, and active community care among all learners.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Setup (Swapped) */}
            <div className="vm-image-container">
              <div className="vm-main-img-wrapper outline-white">
                <img src="/our values.png" alt="Students collaborating" className="vm-main-img" />
              </div>
              <div className="vm-overlay-card" style={{ right: '-15px', bottom: '-15px', border: '6px solid #fff' }}>
                <img src="/2 our values.png" alt="Leadership" className="vm-overlay-img" />
                <div className="vm-overlay-label bg-blue">
                  <i className="fa-solid fa-face-smile-beam" style={{ fontSize: '1.2rem' }}></i> Happy Kids, Bright Futures
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>


      {/* ==========================================
           FAQ SECTION
           ========================================== */}
      <section className="vm-section faq-bg" style={{ padding: '5rem 0', backgroundColor: '#F0F7F4' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#333' }}>Frequently Asked Questions About Our <span style={{ color: '#00BFA6' }}>Vision & Philosophy</span></h2>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#00BFA6', marginTop: '4px' }}></i> 
                  <span>What is the primary educational mission of SG Education in Hosur?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                The mission of SG Education is to blend ancient cultural wisdom with modern professional excellence. By combining Ancient Noble Bharat Culture (ANBC) and Corporate Professional Culture (CPC), we cultivate intellectually curious, morally disciplined, and future-ready children from toddlerhood through primary grades.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FF2A7A', marginTop: '4px' }}></i> 
                  <span>How does SG Education define Ancient Noble Bharat Culture (ANBC)?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                Ancient Noble Bharat Culture represents the timeless ethical traditions, moral values, respect for family, and self-discipline of ancient India. In our classrooms, ANBC is translated into daily good habits, respectful communication, and empathy toward peers and community.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FFC300', marginTop: '4px' }}></i> 
                  <span>Why does early childhood education need Corporate Professional Culture (CPC)?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                Corporate Professional Culture introduces essential 21st-century life competencies early—such as structured routines, time management, verbal clarity, team collaboration, and proactive problem-solving. This equips children with the confidence and adaptability needed for modern schooling and future careers.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#4A90E2', marginTop: '4px' }}></i> 
                  <span>How are parents involved in achieving SG Education’s mission?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                We believe education is a tripartite partnership between teachers, parents, and students. SG Education conducts regular parent consultations, interactive developmental milestone updates, and family orientation workshops to ensure continuous, aligned growth at school and at home.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ==========================================
           FINAL CTA & CAMPUS CONTACT
           ========================================== */}
      <section className="vm-section final-cta-bg" style={{ padding: '3rem 0', backgroundImage: 'url("/kids-bg-pattern.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.92)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>Join a Community Dedicated to <span style={{ color: '#E95D2A' }}>True Holistic Education</span></h2>
          <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.8', textAlign: 'center' }}>
            Admissions are open for Toddler Care, Playgroup, Nursery, Kindergarten, and Primary Classes (1st to 5th Std) in Hosur.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Link href="/admission" className="btn btn-orange" style={{ padding: '1rem 2rem', backgroundColor: '#E95D2A', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(233, 93, 42, 0.3)' }}>Book a Campus Visit</Link>
            <Link href="/contact" className="btn btn-red" style={{ padding: '1rem 2rem', backgroundColor: '#fff', color: '#333', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', border: '2px solid #eee' }}>Apply for Admission</Link>
          </div>
        </div>
      </section>
    </main>
  );
}



