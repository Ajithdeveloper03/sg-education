import React from "react";
import Link from "next/link";
import "./our-programs.css";
import "../about/vision-mission/vision-mission.css";

export const metadata = {
  title: 'Preschool & Primary School Programs in Hosur | SG Education',
  description: 'Explore holistic learning programs in Hosur: Toddler Care, Playgroup, Nursery, LKG, UKG & Classes 1–5 at SG Education. Combining ANBC values with 21st-century skills.',
  alternates: {
    canonical: "https://sgeducations.in/our-programs/"
  }
};

export default function OurProgramsPage() {
  return (
    <main className="programs-page-wrapper">
      
      {/* Page Banner Section */}
      <section className="op-page-banner" style={{ backgroundImage: 'url("/program banner.png")' }}>
        <div className="op-banner-overlay"></div>
        <div className="op-banner-content" style={{ paddingBottom: '30px' }}>
          <h1 className="op-banner-title">A UNIT OF SG EDUCATIONS</h1>
          <p className="op-banner-subtitle">SOWING SEEDS OF KNOWLEDGE</p>
          <div className="vm-pagination" style={{ marginTop: '1.5rem', justifyContent: 'center' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Our Programs</span>
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

      {/* 1. Hero Section */}
      <section className="op-hero-section">
        <div className="op-hero-left" style={{ position: 'relative' }}>
          
          {/* Kids Decorative Elements */}
          <div className="op-deco" style={{ position: 'absolute', top: '5%', right: '5%', color: '#FFB300', zIndex: -1, animation: 'spin 20s linear infinite' }}>
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="50" cy="50" r="20" />
              <path d="M50 15 V25 M50 75 V85 M15 50 H25 M75 50 H85 M25 25 L32 32 M68 68 L75 75 M25 75 L32 68 M68 25 L75 32" />
              <path d="M42 45 Q42 45 42 45.5" strokeWidth="6" />
              <path d="M58 45 Q58 45 58 45.5" strokeWidth="6" />
              <path d="M42 55 Q50 62 58 55" />
            </svg>
          </div>

          <div className="op-deco" style={{ position: 'absolute', top: '25%', right: '-10%', color: '#4CAF50', zIndex: -1, animation: 'float-bob 3s infinite ease-in-out' }}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round">
              <polygon points="50,10 61,35 88,35 66,51 74,78 50,61 26,78 34,51 12,35 39,35" />
            </svg>
          </div>

          <div className="op-deco" style={{ position: 'absolute', bottom: '30%', left: '-5%', color: '#E91E63', zIndex: -1, animation: 'float-bob 4s infinite ease-in-out' }}>
            <svg width="35" height="35" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round">
              <polygon points="50,10 61,35 88,35 66,51 74,78 50,61 26,78 34,51 12,35 39,35" />
            </svg>
          </div>

          <div className="op-deco" style={{ position: 'absolute', bottom: '0', right: '10%', color: '#FFB300', zIndex: -1, animation: 'float-bob 3.5s infinite ease-in-out' }}>
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round">
              <polygon points="50,10 61,35 88,35 66,51 74,78 50,61 26,78 34,51 12,35 39,35" />
            </svg>
          </div>

          <div className="op-deco" style={{ position: 'absolute', bottom: '15%', right: '-15%', color: '#4CAF50', zIndex: -1 }}>
            <svg width="100" height="120" viewBox="0 0 120 150" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 30 L80 10 L50 70 L40 40 Z" />
              <path d="M40 40 L30 65 L45 55" />
              <path d="M80 10 L40 40" />
              <path d="M40 70 Q 55 110 30 140" strokeDasharray="6 6" />
            </svg>
          </div>
          
          <div style={{ display: 'inline-block', backgroundColor: '#FFF5F8', color: '#E91E63', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem', border: '1px solid #F48FB1' }}>
            Admissions Open for Academic Year 2026–2027 | Gokul Nagar, Hosur
          </div>
          <h1 className="op-hero-title-main" style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '0.2rem' }}>Holistic Learning Programs:</h1>
          <h1 className="op-hero-title-sub" style={{ fontSize: '2rem', margin: '0 0 0.5rem 0' }}>From Toddler Care to 5th Standard</h1>
          
          <p className="op-hero-subtitle" style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '0.5rem', marginBottom: '0.5rem', maxWidth: '600px' }}>
            At SG Education and SG Early Budding, Hosur, our research-backed curriculum guides children through every crucial developmental stage. Blending the cultural grounding of Ancient Noble Bharat Culture (ANBC) with Corporate Professional Culture (CPC) life skills, we prepare young learners for academic excellence and life readiness.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <Link href="/admission" className="op-btn-explore" style={{ width: 'auto', flex: '1 1 auto', justifyContent: 'center', padding: '1rem', fontSize: '1rem', whiteSpace: 'nowrap' }}>
              Book a Campus Tour <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link href="/admission" className="op-btn-explore" style={{ backgroundColor: '#fff', color: '#1565C0', border: '2px solid #1565C0', width: 'auto', flex: '1 1 auto', justifyContent: 'center', padding: '1rem', fontSize: '1rem', whiteSpace: 'nowrap' }}>
              Apply for Admission
            </Link>
          </div>
        </div>

        <div className="op-hero-right">
          <div className="op-hero-image-wrapper">
            <img src="/banner page.png" alt="Children Learning" />
            <div className="op-pink-circle">
              Every Child.<br/>
              Every Talent.<br/>
              Every Day.<br/>
              A Step Ahead.
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Highlights / Stats Bar */}
      <section style={{ backgroundColor: '#fff', padding: '3rem 0', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--playful-pink)', fontWeight: 'bold', marginBottom: '0.5rem' }}>6</div>
              <h4 style={{ fontSize: '1.1rem', color: '#333', textAlign: 'center', fontWeight: 'bold' }}>Comprehensive Stages</h4>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', margin: '0.5rem auto 0 auto', maxWidth: '250px' }}>From Toddler Care at 1.2 Yrs to 5th Standard</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--joyful-yellow)', fontWeight: 'bold', marginBottom: '0.5rem' }}>1:10</div>
              <h4 style={{ fontSize: '1.1rem', color: '#333', textAlign: 'center', fontWeight: 'bold' }}>Teacher Ratio</h4>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', margin: '0.5rem auto 0 auto', maxWidth: '250px' }}>Personalized Mentorship & Dedicated Caretakers</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#5A49E3', fontWeight: 'bold', marginBottom: '0.5rem' }}>Integrated</div>
              <h4 style={{ fontSize: '1.1rem', color: '#333', textAlign: 'center', fontWeight: 'bold' }}>Curriculum</h4>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', margin: '0.5rem auto 0 auto', maxWidth: '250px' }}>Play-Based Montessori & Experiential STEM</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#D90013', fontWeight: 'bold', marginBottom: '0.5rem' }}>100%</div>
              <h4 style={{ fontSize: '1.1rem', color: '#333', textAlign: 'center', fontWeight: 'bold' }}>Safe Environment</h4>
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', margin: '0.5rem auto 0 auto', maxWidth: '250px' }}>CCTV Monitored Classrooms & Sanitized Campuses</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Programs Content (Journey of Growth) */}
      <section className="journey-section">
        <div className="op-container">
          
          <div className="text-center" style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <i className="fa-solid fa-leaf" style={{ color: '#4CAF50', fontSize: '1.2rem' }}></i>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1D2A44', margin: 0, textAlign: 'center' }}>Structured Educational Milestones for Every Age Group</h2>
            <i className="fa-solid fa-leaf" style={{ color: '#4CAF50', fontSize: '1.2rem' }}></i>
          </div>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem', marginTop: '-1.5rem', fontSize: '1.1rem' }}>Designed to nurture intellect, emotional maturity, physical agility, and moral character.</p>

          <div className="journey-grid-container">
            {/* Card 1: Toddlers Care */}
            <div className="journey-card jc-daycare">
              <div className="jc-icon">
                <i className="fa-solid fa-baby-carriage"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#E65100' }}>Toddler Care: Warmth, Comfort & Sensory Exploration</h3>
              <span className="jc-age">1.2 – 2 Years</span>
              <p className="jc-desc">Safe separation, loving emotional reassurance, sensory exploration, and gross motor milestones. Toddlers discover colors, textures, music, and social warmth in a hygienic, cheerful setting.</p>
            </div>

            <div className="journey-arrow">
              <span>----&gt;</span>
            </div>

            {/* Card 2: Play Group */}
            <div className="journey-card jc-playgroup">
              <div className="jc-icon">
                <i className="fa-solid fa-cubes"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#0277BD' }}>Play Group: Social Bonding, Speech & Joyful Play</h3>
              <span className="jc-age">2 – 3 Years</span>
              <p className="jc-desc">Vocabulary initiation, positive social habits, interactive games, sharing, and fine motor coordination through clay modeling, coloring, and rhymes.</p>
            </div>

            <div className="journey-arrow">
              <span>----&gt;</span>
            </div>

            {/* Card 3: Nursery */}
            <div className="journey-card jc-nursery">
              <div className="jc-icon">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#2E7D32' }}>Nursery Foundation: Phonics, Language & Creative Discovery</h3>
              <span className="jc-age">3 – 4 Years</span>
              <p className="jc-desc">Structured phonics recognition, basic numeracy, pencil grip development, expressive storytelling, and active classroom curiosity.</p>
            </div>

            <div className="journey-arrow">
              <span>----&gt;</span>
            </div>

            {/* Card 4: LKG */}
            <div className="journey-card jc-lkg">
              <div className="jc-icon">
                <i className="fa-solid fa-palette"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#1565C0' }}>LKG (Junior Kindergarten): Concept Building & Self-Reliance</h3>
              <span className="jc-age">4 – 5 Years</span>
              <p className="jc-desc">Early reading, sentence construction, logical-mathematical sequences, environmental awareness, and personal self-reliance habits.</p>
            </div>

            <div className="journey-arrow">
              <span>----&gt;</span>
            </div>

            {/* Card 5: UKG */}
            <div className="journey-card jc-ukg">
              <div className="jc-icon">
                <i className="fa-solid fa-pencil"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#C62828' }}>UKG (Senior Kindergarten): School Readiness & Confident Expression</h3>
              <span className="jc-age">5 – 6 Years</span>
              <p className="jc-desc">Advanced literacy, mental math, scientific reasoning, public speaking confidence, and seamless preparation for primary school admission.</p>
            </div>

            <div className="journey-arrow">
              <span>----&gt;</span>
            </div>

            {/* Card 6: 1st to 5th Std */}
            <div className="journey-card jc-primary">
              <div className="jc-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#4527A0' }}>Primary School (1st to 5th Standard): Academic Rigor & Ethical Leadership</h3>
              <span className="jc-age">6 – 11 Years</span>
              <p className="jc-desc">Subject-specific mastery in Mathematics, Sciences, Languages, Social Studies, and Computer Literacy, integrated with ANBC moral values and leadership coaching.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Strong Skills Section */}
      <section className="op-skills-section">
        <div className="op-container">
          
          <div className="op-skills-header">
             <i className="fa-solid fa-leaf" style={{ color: '#4CAF50', transform: 'rotate(-45deg)', fontSize: '1.2rem' }}></i>
             <h2 className="op-skills-title" style={{ textAlign: 'center' }}>6 Essential Life Skills We Cultivate (CPC)</h2>
             <i className="fa-solid fa-leaf" style={{ color: '#FFC107', transform: 'scaleX(-1)', fontSize: '1.2rem' }}></i>
          </div>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem', fontSize: '1.1rem', marginTop: '-1rem' }}>Nurturing future-ready competencies that set our students apart throughout life.</p>

          <div className="op-skills-grid">
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-green"><i className="fa-solid fa-comments"></i></div>
                <h4 className="op-skill-name name-blue">Effective Communication</h4>
                <p className="op-skill-desc">Building confident articulation, active listening skills, and clear verbal expression through daily circle time.</p>
             </div>
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-blue"><i className="fa-solid fa-users"></i></div>
                <h4 className="op-skill-name name-blue">Active Involvement</h4>
                <p className="op-skill-desc">Fostering enthusiastic classroom participation, collaborative team spirit, and a deep sense of belonging.</p>
             </div>
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-yellow"><i className="fa-solid fa-person-arrow-up-from-line"></i></div>
                <h4 className="op-skill-name name-blue">Early Leadership</h4>
                <p className="op-skill-desc">Developing decision-making ability, ethical accountability, peer support, and courage to take initiative.</p>
             </div>
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-pink"><i className="fa-regular fa-lightbulb"></i></div>
                <h4 className="op-skill-name name-blue">Critical Thinking</h4>
                <p className="op-skill-desc">Stimulating inquisitive problem-solving, pattern recognition, and logical reasoning beyond textbooks.</p>
             </div>
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-purple"><i className="fa-solid fa-hand-holding-heart"></i></div>
                <h4 className="op-skill-name name-blue">Empathy & Values</h4>
                <p className="op-skill-desc">Grounded in Ancient Noble Bharat Culture (ANBC), cultivating kindness, respect for elders, and honesty.</p>
             </div>
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-teal"><i className="fa-solid fa-person-running"></i></div>
                <h4 className="op-skill-name name-blue">Everyday Life Skills</h4>
                <p className="op-skill-desc">Developing personal independence, time discipline, table manners, and self-organization.</p>
             </div>
          </div>

          <div className="op-cards-row">
             <div className="op-card-left">
                <div className="op-deco" style={{ top: '20px', right: '40px', fontSize: '1.5rem', zIndex: 3 }}><i className="fa-regular fa-star text-pink"></i></div>
                <div className="op-deco" style={{ bottom: '80px', left: '60px', fontSize: '1.2rem', zIndex: 3 }}><i className="fa-regular fa-star text-green"></i></div>
                
                <h3 className="op-card-title title-blue" style={{ marginBottom: '1rem', position: 'relative', zIndex: 2 }}>A Child-Centric Learning Approach Grounded in Real Experience</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.95rem', position: 'relative', zIndex: 2 }}>How we spark lifelong curiosity, critical thinking, and joy in everyday learning.</p>
                <ul className="op-checklist" style={{ fontSize: '0.9rem', position: 'relative', zIndex: 2 }}>
                   <li style={{ alignItems: 'flex-start' }}><i className="fa-solid fa-square-check text-orange" style={{ marginTop: '4px' }}></i> <div><strong>Play-Based & Activity-Led Learning:</strong> Moving away from rote pressure through interactive play stations, sensorial discovery, and tactile learning.</div></li>
                   <li style={{ alignItems: 'flex-start' }}><i className="fa-solid fa-square-check text-blue" style={{ marginTop: '4px' }}></i> <div><strong>Conceptual & Experiential Understanding:</strong> Practical experiments, nature exploration, and real-world problem-solving modules.</div></li>
                   <li style={{ alignItems: 'flex-start' }}><i className="fa-solid fa-square-check text-green" style={{ marginTop: '4px' }}></i> <div><strong>Technology-Integrated Classrooms:</strong> Audio-visual digital phonics, smart boards, and age-appropriate multimedia learning tools.</div></li>
                   <li style={{ alignItems: 'flex-start' }}><i className="fa-solid fa-square-check text-orange" style={{ marginTop: '4px' }}></i> <div><strong>Personalized Attention & Care:</strong> Continuous individual observation tailored to each child's unique cognitive pace.</div></li>
                   <li style={{ alignItems: 'flex-start' }}><i className="fa-solid fa-square-check text-green" style={{ marginTop: '4px' }}></i> <div><strong>Continuous Parent Partnership:</strong> Regular transparent developmental milestone reports and collaborative parent-teacher dialogues.</div></li>
                </ul>
             </div>

             <div className="op-card-right">
                 <h3 className="op-card-title title-blue">Nurturing the Whole Child in a Secure Environment</h3>
                 <div className="op-thrive-grid">
                    <div className="op-thrive-item">
                      <div className="thrive-icon"><i className="fa-solid fa-shield-halved text-blue"></i></div>
                      <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '5px' }}>Safe Campus</div>
                      <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>Round-the-clock CCTV, child-safe furniture & female support staff.</div>
                    </div>
                    <div className="op-thrive-item">
                      <div className="thrive-icon"><i className="fa-solid fa-display text-green"></i></div>
                      <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '5px' }}>Smart Learning</div>
                      <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>Vibrant classrooms with multimedia aids and sensory zones.</div>
                    </div>
                    <div className="op-thrive-item">
                      <div className="thrive-icon"><i className="fa-solid fa-puzzle-piece text-green2"></i></div>
                      <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '5px' }}>Fun Play Areas</div>
                      <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>Indoor soft-play gym, sandbox corners, and outdoor play park.</div>
                    </div>
                    <div className="op-thrive-item">
                      <div className="thrive-icon"><i className="fa-solid fa-apple-whole text-orange"></i></div>
                      <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '5px' }}>Healthy Food</div>
                      <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>Promoting nutritious awareness under "One Day, One Good Thing".</div>
                    </div>
                 </div>
                <div className="op-quote-box" style={{ marginTop: '2rem' }}>
                   <div className="op-quote-icon"><i className="fa-solid fa-quote-left text-blue"></i></div>
                   <p className="op-quote-text text-blue">We don&apos;t just prepare<br/>children for school,<br/>we prepare them for life.</p>
                   <i className="fa-regular fa-heart text-pink quote-heart"></i>
                </div>
                <img src="/boy_thumbs_up.png" alt="Boy thumbs up" className="op-card-img-right" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="vm-section faq-bg" style={{ padding: '5rem 0', backgroundColor: '#F9FAFB', borderTop: '1px solid #eee' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1D2A44', fontWeight: 'bold' }}>Frequently Asked Questions About <span style={{ color: '#FF2A7A' }}>Our Programs</span></h2>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1.5rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FF2A7A', marginTop: '4px' }}></i> 
                  <span>What educational programs are offered at SG Education in Hosur?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1.5rem 1.5rem 36px' }}>
                SG Education offers a continuous learning pathway from early childhood to primary school, including Toddler Care (1.2–2 years), Playgroup (2–3 years), Nursery (3–4 years), LKG (4–5 years), UKG (5–6 years), and Primary School Classes from 1st to 5th Standard.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1.5rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#00BFA6', marginTop: '4px' }}></i> 
                  <span>What is the age criteria for Nursery and Kindergarten admission in Hosur?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1.5rem 1.5rem 36px' }}>
                For Nursery admission at SG Education, children should be 3 years of age. For Junior Kindergarten (LKG), the recommended age is 4 years, and for Senior Kindergarten (UKG), 5 years as of the beginning of the academic year.
              </p>
            </details>

            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1.5rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FFC300', marginTop: '4px' }}></i> 
                  <span>How does SG Education blend play-based learning with academic readiness?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1.5rem 1.5rem 36px' }}>
                In preschool grades, concepts are taught through Montessori manipulatives, sensory games, and phonics storytelling. As children transition to primary school, structured academic subjects are integrated with critical thinking and leadership skills.
              </p>
            </details>

            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1.5rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#0ea5e9', marginTop: '4px' }}></i> 
                  <span>Are admissions open for mid-term or transfer students at SG Education?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1.5rem 1.5rem 36px' }}>
                Yes. Admissions are open for academic year 2026–2027 with limited rolling admissions for preschool and primary grades. Parents can visit our campus at Gokul Nagar, Hosur to assess seat availability.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 6. Final CTA & Campus Contact Details */}
      <section style={{ padding: '0 1.5rem', backgroundColor: '#1D2A44', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '3rem' }}>
          
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '0' }}>Choose the Right Academic Program for Your Child</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#e0e0e0', lineHeight: '1.6' }}>
              Connect with our admissions counselors today to find the perfect learning stage for your child.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '15px' }}>
              <div style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <i className="fa-solid fa-phone" style={{ color: '#FFC300', marginTop: '4px', width: '20px', textAlign: 'center' }}></i> 
                <div><strong>Direct Helpline:</strong> +91 9994664346</div>
              </div>
              <div style={{ fontSize: '1.1rem', color: '#ddd', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <i className="fa-solid fa-envelope" style={{ color: '#FFC300', marginTop: '4px', width: '20px', textAlign: 'center' }}></i> 
                <div>sg.educations.org@gmail.com</div>
              </div>
              <div style={{ fontSize: '1.1rem', color: '#ddd', lineHeight: '1.5', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <i className="fa-solid fa-location-dot" style={{ color: '#FFC300', marginTop: '4px', width: '20px', textAlign: 'center' }}></i> 
                <div><strong>Campus Address:</strong> SG Early Budding, 181, Gopikrishna Colony, R K Road, Gokul Nagar, Hosur, Tamil Nadu – 635109.</div>
              </div>
              <div style={{ fontSize: '1.1rem', color: '#ddd', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <i className="fa-solid fa-clock" style={{ color: '#FFC300', marginTop: '4px', width: '20px', textAlign: 'center' }}></i> 
                <div><strong>Operating Hours:</strong> Monday to Saturday: 9:00 AM – 5:00 PM</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <Link href="/admission" className="op-btn-book" style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontSize: '1.1rem', backgroundColor: '#E95D2A', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', alignItems: 'center', gap: '10px' }}>
                Book a Campus Tour <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
             <img src="/girl_writing.png" alt="Student learning" style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }} />
          </div>

        </div>
      </section>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
"@context": "https://schema.org",
"@graph": [
{
"@type": "WebPage",
"@id": "https://sgeducations.in/our-programs/#webpage",
"url": "https://sgeducations.in/our-programs/",
"name": "Preschool & Primary School Programs in Hosur | SG Education",
"description": "Explore learning programs in Hosur: Toddler Care, Playgroup, Nursery, LKG, UKG & Classes 1–5 at SG Education.",
"inLanguage": "en-US",
"isPartOf": {
"@type": "WebSite",
"@id": "https://sgeducations.in/#website",
"url": "https://sgeducations.in/",
"name": "SG Educations"
}
},
{
"@type": "EducationalOccupationalProgram",
"@id": "https://sgeducations.in/our-programs/#program",
"name": "Early Childhood & Primary Education Program",
"description": "Comprehensive developmental curriculum spanning Toddler Care, Playgroup, Nursery, LKG, UKG, and Primary Grades 1 to 5.",
"provider": {
"@type": "EducationalOrganization",
"name": "SG Education",
"url": "https://sgeducations.in/",
"address": {
"@type": "PostalAddress",
"streetAddress": "181, Gopikrishna Colony, R K Road, Gokul Nagar",
"addressLocality": "Hosur",
"addressRegion": "Tamil Nadu",
"postalCode": "635109",
"addressCountry": "IN"
}
},
"educationalCredentialAwarded": "Preschool & Primary School Completion",
"hasCourse": [
{
"@type": "Course",
"name": "Toddler Care & Playgroup",
"description": "Sensory exploration, motor coordination, and speech initiation for ages 1.2 to 3 years."
},
{
"@type": "Course",
"name": "Nursery & Kindergarten (LKG & UKG)",
"description": "Phonics, early numeracy, logical reasoning, and school readiness for ages 3 to 6 years."
},
{
"@type": "Course",
"name": "Primary School Education (Classes 1st to 5th)",
"description": "Academic progression, STEM conceptual understanding, and ethical leadership for ages 6 to 11 years."
}
]
},
{
"@type": "FAQPage",
"@id": "https://sgeducations.in/our-programs/#faq",
"mainEntity": [
{
"@type": "Question",
"name": "What educational programs are offered at SG Education in Hosur?",
"acceptedAnswer": {
"@type": "Answer",
"text": "SG Education offers a continuous learning pathway from early childhood to primary school, including Toddler Care (1.2–2 years), Playgroup (2–3 years), Nursery (3–4 years), LKG (4–5 years), UKG (5–6 years), and Primary School Classes from 1st to 5th Standard."
}
},
{
"@type": "Question",
"name": "What is the age criteria for Nursery and Kindergarten admission in Hosur?",
"acceptedAnswer": {
"@type": "Answer",
"text": "For Nursery admission at SG Education, children should be 3 years of age. For Junior Kindergarten (LKG), the recommended age is 4 years, and for Senior Kindergarten (UKG), 5 years as of the beginning of the academic year."
}
},
{
"@type": "Question",
"name": "How does SG Education blend play-based learning with academic readiness?",
"acceptedAnswer": {
"@type": "Answer",
"text": "In preschool grades, concepts are taught through Montessori manipulatives, sensory games, and phonics storytelling. As children transition to primary school, structured academic subjects are integrated with critical thinking and leadership skills."
}
}
]
}
]
}
      `}} />

    </main>
  );
}
