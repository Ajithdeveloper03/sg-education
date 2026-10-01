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
        position: 'relative', width: '100%', minHeight: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("/school motto banner.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '130px', paddingBottom: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.55)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.4rem 1.2rem', borderRadius: '30px', color: '#fff', fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.5)' }}>
              Our Guiding North Star | Hosur
            </span>
          </div>
          <h1 className="vm-banner-title" style={{ fontSize: '2.5rem' }}>School Motto: Educate, Empower, Elevate</h1>
          <p className="vm-banner-desc">
            At SG Education and SG Early Budding, Hosur, our guiding motto is 'Educate, Empower, Elevate.' This core philosophy drives our commitment to holistic learning—fusing Ancient Noble Bharat Culture (ANBC) with Corporate Professional Culture (CPC) to nurture intellectually sharp, morally grounded, and emotionally resilient young leaders.
          </p>
          <div className="vm-pagination" style={{ marginBottom: '1rem' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>School Motto</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/our-programs" className="btn btn-orange" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#FFC300', color: '#333', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Explore Our Curriculum</Link>
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
           SECTION 2: The Three Pillars of Our Motto
           ========================================== */}
      <section className="vm-section" style={{ paddingTop: isMobile ? '3rem' : '5rem', paddingBottom: '4rem', backgroundColor: '#F0F4F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="vm-tag tag-pink">OUR MOTTO PILLARS</div>
            <h2 className="vm-title" style={{ marginTop: '0.5rem' }}>
              The Three Pillars Defining <span className="underline-pink">Everyday Education</span>
            </h2>
            <p style={{ color: '#666', fontSize: '1.2rem', marginTop: '1rem' }}>How Educate, Empower, and Elevate translate into meaningful daily classroom action.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Pillar 1 */}
            <div style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderTop: '5px solid #FFC300' }}>
              <div style={{ width: '70px', height: '70px', backgroundColor: '#fffde7', color: '#FFC300', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-book-open-reader"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>01. Educate: Knowledge Beyond Rote Learning</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                We believe true education is a transformative partnership between teachers, students, and parents. Rather than burdening young minds with rote memorization, our classrooms prioritize experiential inquiry, phonics fluency, mathematical reasoning, and cultural heritage. We introduce learners to concepts through guided play, sensory stations, and interactive storytelling—sparking an organic, lifelong passion for discovery.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderTop: '5px solid #FF2A7A' }}>
              <div style={{ width: '70px', height: '70px', backgroundColor: '#fff0f5', color: '#FF2A7A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>02. Empower: Building Fearless, Capable Thinkers</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Empowerment is about cultivating inner strength, creative expression, and self-reliance. Guided by our Corporate Professional Culture (CPC) principles, we train children to articulate their thoughts clearly, listen actively, solve everyday puzzles, and work collaboratively in peer teams. Children learn to view mistakes not as setbacks, but as joyful opportunities to adapt and grow.
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderTop: '5px solid #00BFA6' }}>
              <div style={{ width: '70px', height: '70px', backgroundColor: '#e0f2f1', color: '#00BFA6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-arrow-up-right-dots"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>03. Elevate: Lifting Mind, Body & Spirit to Highest Potential</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Education is incomplete without ethical elevation. Anchored in Ancient Noble Bharat Culture (ANBC) and our daily signature practice, &quot;One Day, One Good Thing&quot;, we elevate our students’ moral compass. Children practice honesty, respect for elders, environmental compassion, and self-discipline, growing into responsible citizens who uplift their families and communities.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 3: Building Strong Foundations for Life
           ========================================== */}
      <section style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="vm-tag tag-blue">CORNERSTONES</div>
            <h2 className="vm-title" style={{ marginTop: '0.5rem' }}>
              Building Strong <span className="underline-blue">Foundations for Life</span>
            </h2>
            <p style={{ color: '#666', fontSize: '1.2rem', marginTop: '1rem' }}>Four core cornerstones that ensure every child thrives in our care.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            
            <div style={{ backgroundColor: '#fafafa', padding: '2rem', borderRadius: '15px', border: '1px solid #eee' }}>
              <h4 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-shield-cat" style={{ color: '#00C853' }}></i> Safe & Nurturing Atmosphere
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Fully sanitized classrooms, child-safe ergonomic furniture, and round-the-clock CCTV campus security managed by attentive, caring early-childhood educators.
              </p>
            </div>

            <div style={{ backgroundColor: '#fafafa', padding: '2rem', borderRadius: '15px', border: '1px solid #eee' }}>
              <h4 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-chart-line" style={{ color: '#00C853' }}></i> Holistic Skill Progression
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Balanced integration of fine and gross motor skills, linguistic fluency, logical-mathematical cognition, and expressive arts.
              </p>
            </div>

            <div style={{ backgroundColor: '#fafafa', padding: '2rem', borderRadius: '15px', border: '1px solid #eee' }}>
              <h4 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-hands-holding-child" style={{ color: '#00C853' }}></i> Ethical Values & Early Leadership
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Rooted in timeless Indian cultural ethos, mutual respect, empathetic teamwork, and self-motivated personal discipline.
              </p>
            </div>

            <div style={{ backgroundColor: '#fafafa', padding: '2rem', borderRadius: '15px', border: '1px solid #eee' }}>
              <h4 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-face-smile-beam" style={{ color: '#00C853' }}></i> Joyful, Experiential Discovery
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Hands-on activity corners, Montessori-inspired manipulatives, outdoor exploration, and interactive STEM discovery modules.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 4: The Power of Integration (ANBC + CPC)
           ========================================== */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F9FAFB' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div className="vm-tag tag-yellow">THE SG EDUCATION ADVANTAGE</div>
            <h2 className="vm-title" style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '2.2rem' }}>
              Why the Fusion of Ancient Wisdom and Modern Life Skills Matters
            </h2>
            <p style={{ color: '#555', fontSize: '1.15rem', lineHeight: '1.8' }}>
              The harmonious integration of <strong>Ancient Noble Bharat Culture (ANBC)</strong> with <strong>Corporate Professional Culture (CPC)</strong> is what sets SG Education apart in Hosur. While ANBC provides students with an unshakable moral anchor, emotional balance, and cultural pride, CPC equips them with the strategic acumen, communication agility, and poise required in the modern world. Together, this fusion ensures our students excel both in academic examinations and in the test of life.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 5: FAQ SECTION
           ========================================== */}
      <section className="vm-section faq-bg" style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#333' }}>Frequently Asked Questions About <span style={{ color: '#FF2A7A' }}>Our School Motto</span></h2>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FF2A7A', marginTop: '4px' }}></i> 
                  <span>What is the official school motto of SG Education Hosur?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                The official motto of SG Education and SG Early Budding is &apos;Educate, Empower, Elevate.&apos; It represents our holistic mission to impart conceptual knowledge, instill practical 21st-century life competencies, and elevate children’s moral and intellectual character.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#00BFA6', marginTop: '4px' }}></i> 
                  <span>How does SG Education apply &apos;Educate, Empower, Elevate&apos; to preschool students?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                For early learners in Toddler, Nursery, and Kindergarten, &apos;Educate&apos; focuses on sensory discovery and language; &apos;Empower&apos; builds self-expression and motor independence; and &apos;Elevate&apos; instills foundational values through our daily &apos;One Day, One Good Thing&apos; habit routine.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FFC300', marginTop: '4px' }}></i> 
                  <span>How does the school motto connect with Ancient Noble Bharat Culture (ANBC)?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                The &apos;Elevate&apos; pillar of our motto directly stems from ANBC values. It teaches children respect for teachers, parents, and nature, personal humility, and social responsibility, ensuring academic growth is always paired with strong moral character.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#4A90E2', marginTop: '4px' }}></i> 
                  <span>Where can parents in Hosur learn more about the school&apos;s philosophy?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                Parents can visit the SG Early Budding campus at 181, Gopikrishna Colony, R K Road, Gokul Nagar, Hosur (PIN: 635109) from Monday to Saturday, between 9:00 AM and 5:00 PM, to consult our educators and tour our facilities.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 6: Final Call to Action
           ========================================== */}
      <section className="vm-section final-cta-bg" style={{ padding: '5rem 0', backgroundImage: 'url("/kids-bg-pattern.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.92)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>Give Your Child an Education That <span style={{ color: '#E95D2A' }}>Truly Elevates</span></h2>
          <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.8', textAlign: 'center' }}>
            Admissions are open for Academic Year 2026–2027 from Toddler Care to 5th Standard.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href="/admission" className="btn btn-orange" style={{ padding: '1rem 2rem', backgroundColor: '#E95D2A', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(233, 93, 42, 0.3)' }}>Book a Campus Tour</Link>
            <Link href="/admission" className="btn btn-red" style={{ padding: '1rem 2rem', backgroundColor: '#fff', color: '#333', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', border: '2px solid #eee' }}>Apply for Admission</Link>
          </div>
        </div>
      </section>

    </main>
  );
}



