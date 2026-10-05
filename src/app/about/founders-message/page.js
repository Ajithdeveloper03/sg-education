"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./founders-message.css";
import "../vision-mission/vision-mission.css";
import "../sg-early-budding/sg-early-budding.css";

export default function FoundersMessagePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={{ position: 'relative', backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Kids-Themed Decorative Elements */}
      <div style={{ position: 'absolute', top: '15%', left: '5%', color: '#ECC440', fontSize: '2.5rem', opacity: 0.6, animation: 'fm-float 3s ease-in-out infinite', zIndex: 0 }}>
        <i className="fa-solid fa-star"></i>
      </div>
      <div style={{ position: 'absolute', top: '28%', right: '8%', color: '#ECC440', fontSize: '3rem', opacity: 0.5, animation: 'fm-float 4s ease-in-out infinite reverse', zIndex: 0 }}>
        <i className="fa-solid fa-paper-plane"></i>
      </div>
      <div style={{ position: 'absolute', top: '45%', left: '6%', color: '#00C853', fontSize: '2.5rem', opacity: 0.5, animation: 'fm-float 3.5s ease-in-out infinite', zIndex: 0 }}>
        <i className="fa-solid fa-lightbulb"></i>
      </div>
      <div style={{ position: 'absolute', top: '65%', right: '5%', color: '#FF2A7A', fontSize: '3.5rem', opacity: 0.4, animation: 'fm-float 4.5s ease-in-out infinite', zIndex: 0 }}>
        <i className="fa-solid fa-puzzle-piece"></i>
      </div>
      <div style={{ position: 'absolute', bottom: '10%', left: '8%', color: '#9C27B0', fontSize: '2.8rem', opacity: 0.5, animation: 'fm-float 3.8s ease-in-out infinite reverse', zIndex: 0 }}>
        <i className="fa-solid fa-cubes"></i>
      </div>

      {/* Upgraded Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', minHeight: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("/meet our team.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '130px', paddingBottom: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.45)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.4rem 1.2rem', borderRadius: '30px', color: '#fff', fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.5)' }}>
              Leadership & Inspiration | Hosur
            </span>
          </div>
          <h1 className="vm-banner-title" style={{ fontSize: '2.5rem' }}>Founder&apos;s Message: Nurturing Values, Inspiring Excellence</h1>
          <p className="vm-banner-desc">
            Welcome to SG Education and SG Early Budding, Hosur. Founded by Ms. Mamatha M.C. with strategic guidance from Mr. Shashi Kiran K.N., our institution is dedicated to harmonizing timeless Ancient Noble Bharat Culture (ANBC) with Corporate Professional Culture (CPC) to nurture ethical, joyful, and future-ready young leaders.
          </p>
          <div className="vm-pagination" style={{ marginBottom: '1rem' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FF2A7A' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FF2A7A' }}>Founder&apos;s Message</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/admission" className="btn btn-orange" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#E95D2A', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Schedule a Campus Tour</Link>
            <Link href="/our-programs" className="btn btn-red" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#fff', color: '#333', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Explore Our Programs</Link>
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
           SECTION 2: The Heart of Our Foundation
           ========================================== */}
      <section className="eb-section fm-founder-vision-light" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="fm-2col-grid">
            <div className="fm-vision-text">
              <div style={{ marginBottom: '2rem' }}>
                <div className="vm-tag tag-pink" style={{ marginBottom: '1rem' }}>THE HEART OF OUR FOUNDATION</div>
                <h2 className="vm-title" style={{ fontSize: '2.5rem' }}>
                  A Lifelong Commitment to <span className="underline-pink">Nurturing Young Potential</span>
                </h2>
                <p style={{ color: '#666', fontSize: '1.2rem', marginTop: '1rem' }}>Why early childhood education is the most critical foundation of human life.</p>
              </div>
              
              <div className="eb-founder-vision-statement" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <p><strong>Dear Parents, Guardians, and Well-Wishers,</strong></p>
                <p>Welcome to the SG Education family.</p>
                <p style={{ marginTop: '15px' }}>
                  When we envisioned SG Education and SG Early Budding in Hosur, our driving motivation was simple yet profound: to create an educational sanctuary where academic curiosity and character development flourish hand in hand. The formative years of early childhood—from toddlerhood through primary grades—are not merely preparation for school; they are the bedrock upon which a child&apos;s entire worldview, emotional security, and moral compass are constructed.
                </p>
                <p style={{ marginTop: '15px' }}>
                  In an increasingly fast-paced and technology-driven world, young learners face a unique paradox. They require 21st-century technological literacy and intellectual agility, yet they equally crave emotional grounding, empathy, and rooted ethical values. At SG Education, we made a conscious commitment never to compromise on either.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/mamtha 1.jpeg" alt="Ms. Mamatha M.C." style={{ width: '100%', maxWidth: '450px', borderRadius: '30px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 3: The Educational Philosophy
           ========================================== */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F0F4F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="vm-tag tag-blue" style={{ margin: '0 auto 1rem auto' }}>THE EDUCATIONAL PHILOSOPHY</div>
            <h2 className="vm-title">
              ANBC Meets <span className="underline-blue">Modern CPC</span>
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '800px', margin: '1rem auto 0' }}>
              Bridging Ancient Cultural Wisdom with 21st-Century Competencies. To provide our children with a balanced head start, we developed an educational philosophy anchored in two transformative pillars:
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Pillar 1 */}
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#fff0eb', color: '#E95D2A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-om"></i>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '1rem' }}>1. Ancient Noble Bharat Culture (ANBC)</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Our Indian heritage holds timeless wisdom regarding respect for parents and teachers, mindfulness, self-discipline, and environmental reverence. Through our signature daily practice, &quot;One Day, One Good Thing&quot;, we introduce small, consistent habits of gratitude, cleanliness, kindness, and truthfulness. These daily actions build genuine strength of character.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#f0f9ff', color: '#0ea5e9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '1rem' }}>2. Corporate Professional Culture (CPC)</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Modern life demands clarity of expression, adaptable problem-solving, collaborative teamwork, and early resilience. We nurture these professional qualities in an age-appropriate, joyful way—empowering children to articulate their thoughts fearlessly, respect differing viewpoints, and approach challenges with a solutions mindset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 4 & 5: Our Pledge & Parent Partnership
           ========================================== */}
      <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            
            {/* Section 4 */}
            <div>
              <div className="vm-tag tag-green">OUR PLEDGE TO EVERY PARENT</div>
              <h3 style={{ fontSize: '2rem', color: '#333', marginTop: '1rem', marginBottom: '1.5rem' }}>
                A Safe, Hygienic & Joyful Sanctuary for Your Child
              </h3>
              <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Entrusting your child to a school is an act of immense trust. We honor that trust with unyielding dedication to child safety, mental wellbeing, and hygienic care. At our Gokul Nagar campus in Hosur:
              </p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <i className="fa-solid fa-shield-halved" style={{ color: '#00C853', marginTop: '5px', fontSize: '1.2rem', flexShrink: 0 }}></i>
                  <span style={{ color: '#555', lineHeight: '1.6', flex: 1 }}><strong>Comprehensive Safety Monitoring:</strong> Every learning zone and play area is sanitized daily and monitored by round-the-clock CCTV cameras.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <i className="fa-solid fa-user-group" style={{ color: '#00C853', marginTop: '5px', fontSize: '1.2rem', flexShrink: 0 }}></i>
                  <span style={{ color: '#555', lineHeight: '1.6', flex: 1 }}><strong>Attentive Care Ratios:</strong> Our teacher-to-child ratios are strictly maintained to ensure every young learner receives individualized attention, warmth, and encouragement.</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <i className="fa-solid fa-face-smile-beam" style={{ color: '#00C853', marginTop: '5px', fontSize: '1.2rem', flexShrink: 0 }}></i>
                  <span style={{ color: '#555', lineHeight: '1.6', flex: 1 }}><strong>Child-Centric Learning:</strong> Learning is never forced through rote stress; it is ignited through hands-on discovery, phonics, joyful storytelling, and conceptual exploration.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 5 */}
            <div style={{ backgroundColor: '#fcfcfc', padding: '2.5rem', borderRadius: '15px', border: '1px solid #eee' }}>
              <div className="vm-tag tag-yellow">THE PARENT-SCHOOL PARTNERSHIP</div>
              <h3 style={{ fontSize: '2rem', color: '#333', marginTop: '1rem', marginBottom: '1.5rem' }}>
                Walking Hand in Hand with Parents
              </h3>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>
                We view parents as our vital co-educators. True educational success happens when home and school reinforce the same noble habits, mutual respect, and enthusiasm for learning. 
              </p>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem', marginTop: '1rem' }}>
                Through open consultations, regular developmental feedback, and interactive family workshops, we walk together with you at every milestone of your child&apos;s journey.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 6: Closing Words & Institutional Leadership
           ========================================== */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F0F7F4' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', color: '#00BFA6', marginBottom: '1rem' }}><i className="fa-solid fa-quote-left"></i></div>
            <p style={{ fontSize: '1.3rem', color: '#444', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '2rem' }}>
              &quot;Our greatest reward is watching our children walk into campus with eager eyes and graduate with clear minds, compassionate hearts, and confident voices. We warmly invite you to visit our campus, experience our classrooms, and join us in shaping a luminous future for our children.&quot;
            </p>
          </div>
          
          <div className="fm-profiles-container">
            <div className="fm-profile-card">
              <img src="/mamtha 1.jpeg" alt="Ms. Mamatha M.C." style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #E95D2A' }} />
              <div>
                <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#333' }}>Ms. Mamatha M.C.</h4>
                <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  Founder & Chairperson, SG Education & SG Early Budding<br/>
                  Co-Founder, Sarathi Groups
                </p>
              </div>
            </div>
            
            <div className="fm-profile-card with-border">
              <img src="/mentor.webp" alt="Mr. Shashi Kiran K.N." style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #00BFA6' }} />
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#00BFA6', fontWeight: 'bold' }}>In Mentorship & Strategic Association with:</span>
                <h4 style={{ margin: '5px 0', fontSize: '1.2rem', color: '#333' }}>Mr. Shashi Kiran K.N.</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Strategic Advisor & Education Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 7: FAQ SECTION
           ========================================== */}
      <section className="vm-section faq-bg" style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#333' }}>Frequently Asked Questions About <span style={{ color: '#FF2A7A' }}>SG Education Leadership</span></h2>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FF2A7A', marginTop: '4px' }}></i> 
                  <span>Who is the founder of SG Education in Hosur?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                SG Education and SG Early Budding were founded by Ms. Mamatha M.C., who serves as Founder & Chairperson. Supported by strategic mentor Mr. Shashi Kiran K.N. and backed by the institutional credibility of Sarathi Groups, she established the institution to provide value-based early childhood and primary schooling in Hosur.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#00BFA6', marginTop: '4px' }}></i> 
                  <span>What is the core vision behind the founding of SG Early Budding?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                The core vision of SG Early Budding is to synthesize Ancient Noble Bharat Culture (ANBC) with modern Corporate Professional Culture (CPC). This unique curriculum nurtures children with strong moral character, empathy, disciplined habits, and future-ready 21st-century leadership skills.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FFC300', marginTop: '4px' }}></i> 
                  <span>How does the founder ensure child safety and hygiene at the Hosur campus?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                Under Ms. Mamatha M.C.&apos;s leadership, SG Education implements strict safety protocols, including round-the-clock CCTV campus surveillance, daily sanitized play spaces, child-safe infrastructure, low student-teacher ratios, and dedicated female support staff for attentive toddler supervision.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#4A90E2', marginTop: '4px' }}></i> 
                  <span>Where is the SG Education founder’s office and campus located?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                The SG Education campus is located at 181, Gopikrishna Colony, R K Road, Gokul Nagar, Hosur, Tamil Nadu – 635109. Parents and prospective partners can schedule personal consultations and campus tours from Monday to Saturday, 9:00 AM to 5:00 PM.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 8: Final Call to Action
           ========================================== */}
      <section className="vm-section final-cta-bg" style={{ padding: '3rem 0', backgroundImage: 'url("/kids-bg-pattern.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.92)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>Experience Our <span style={{ color: '#E95D2A' }}>Value-Driven Campus</span> Firsthand</h2>
          <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.8', textAlign: 'center' }}>
            Admissions are open for Toddler Care, Playgroup, Nursery, Kindergarten, and Classes 1 to 5 in Hosur.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Link href="/admission" className="btn btn-orange" style={{ padding: '1rem 2rem', backgroundColor: '#E95D2A', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(233, 93, 42, 0.3)' }}>Schedule a Campus Tour</Link>
            <Link href="/contact" className="btn btn-red" style={{ padding: '1rem 2rem', backgroundColor: '#fff', color: '#333', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', border: '2px solid #eee' }}>Speak to Admissions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}



