"use client";

import Link from "next/link";
import "./our-programs.css";
import "../about/vision-mission/vision-mission.css";

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
          <h1 className="op-hero-title-main">Big Dreams</h1>
          <h1 className="op-hero-title-sub">Bright Beginnings</h1>
          
          <p className="op-hero-subtitle">
            From Toddler Care to 5th Standard  <br />
            Building   <span>Strong Foundations</span> for Life.
          </p>

          <div className="op-hero-features">
            <div className="op-feature-item">
              <div className="op-feature-icon op-fi-green">
                <i className="fa-solid fa-shield"></i>
              </div>
              <span className="op-feature-text">Safe & Nurturing<br/>Environment</span>
            </div>

            <div className="op-feature-item">
              <div className="op-feature-icon op-fi-pink">
                <i className="fa-solid fa-spa"></i>
              </div>
              <span className="op-feature-text">Holistic Skill<br/>Development</span>
            </div>

            <div className="op-feature-item">
              <div className="op-feature-icon op-fi-purple">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <span className="op-feature-text">Strong Values &<br/>Leadership</span>
            </div>

            <div className="op-feature-item">
              <div className="op-feature-icon op-fi-blue">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <span className="op-feature-text">Joyful & Engaging<br/>Learning</span>
            </div>
          </div>

          <Link href="/contact" className="op-btn-explore">
            Explore Our Programs <i className="fa-solid fa-arrow-right"></i>
          </Link>
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

      {/* 2. Programs Content (Journey of Growth) */}
      <section className="journey-section">
        <div className="op-container">
          
          <div className="text-center" style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <i className="fa-solid fa-leaf" style={{ color: '#4CAF50', fontSize: '1.2rem' }}></i>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1D2A44', margin: 0, textAlign: 'center' }}>A Journey of Growth from Toddler Care to 5th Standard</h2>
            <i className="fa-solid fa-leaf" style={{ color: '#4CAF50', fontSize: '1.2rem' }}></i>
          </div>

          <div className="journey-grid-container">
            {/* Card 1: Toddlers Care */}
            <div className="journey-card jc-daycare">
              <div className="jc-icon">
                <i className="fa-solid fa-baby-carriage"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#E65100' }}>Toddler Care</h3>
              <span className="jc-age">9 Months - 2 Years</span>
              <p className="jc-desc">Care, comfort & sensory exploration</p>
            </div>

            <div className="journey-arrow">
              <span>----&gt;</span>
            </div>

            {/* Card 2: Play Group */}
            <div className="journey-card jc-playgroup">
              <div className="jc-icon">
                <i className="fa-solid fa-cubes"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#0277BD' }}>Play Group</h3>
              <span className="jc-age">2 - 3 Years</span>
              <p className="jc-desc">Play, social skills & early expressions</p>
            </div>

            <div className="journey-arrow">
              <span>----&gt;</span>
            </div>

            {/* Card 3: Nursery */}
            <div className="journey-card jc-nursery">
              <div className="jc-icon">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#2E7D32' }}>Nursery</h3>
              <span className="jc-age">3 - 4 Years</span>
              <p className="jc-desc">Curiosity, creativity & language foundation</p>
            </div>

            <div className="journey-arrow">
              <span>----&gt;</span>
            </div>

            {/* Card 4: LKG */}
            <div className="journey-card jc-lkg">
              <div className="jc-icon">
                <i className="fa-solid fa-palette"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#1565C0' }}>LKG</h3>
              <span className="jc-age">4 - 5 Years</span>
              <p className="jc-desc">Concept building & independence</p>
            </div>

            <div className="journey-arrow">
              <span>----&gt;</span>
            </div>

            {/* Card 5: UKG */}
            <div className="journey-card jc-ukg">
              <div className="jc-icon">
                <i className="fa-solid fa-pencil"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#C62828' }}>UKG</h3>
              <span className="jc-age">5 - 6 Years</span>
              <p className="jc-desc">School readiness & confident learning</p>
            </div>

            <div className="journey-arrow">
              <span>----&gt;</span>
            </div>

            {/* Card 6: 1st to 5th Std */}
            <div className="journey-card jc-primary">
              <div className="jc-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="jc-title" style={{ color: '#4527A0' }}>1st to 5th Std</h3>
              <span className="jc-age">6 - 11 Years</span>
              <p className="jc-desc">Academic excellence,<br/>leadership & life skills</p>
            </div>
          </div>

          <div className="journey-banner">
            <div className="jb-icon-wrapper">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3 className="jb-text">Age-Appropriate Learning. Strong Foundations. Bright Futures.</h3>
          </div>

        </div>
      </section>

      {/* 3. Strong Skills Section */}
      <section className="op-skills-section">
        <div className="op-container">
          
          <div className="op-skills-header">
             <i className="fa-solid fa-leaf" style={{ color: '#4CAF50', transform: 'rotate(-45deg)', fontSize: '1.2rem' }}></i>
             <h2 className="op-skills-title" style={{ textAlign: 'center' }}>Strong Skills for a Stronger Tomorrow</h2>
             <i className="fa-solid fa-leaf" style={{ color: '#FFC107', transform: 'scaleX(-1)', fontSize: '1.2rem' }}></i>
          </div>

          <div className="op-skills-grid">
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-green"><i className="fa-solid fa-comments"></i></div>
                <h4 className="op-skill-name name-blue">Communication</h4>
                <p className="op-skill-desc">Building confidence through speaking, listening & expressing ideas clearly.</p>
             </div>
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-blue"><i className="fa-solid fa-users"></i></div>
                <h4 className="op-skill-name name-blue">Involvement</h4>
                <p className="op-skill-desc">Encouraging participation, teamwork & a sense of belonging in every child.</p>
             </div>
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-yellow"><i className="fa-solid fa-person-arrow-up-from-line"></i></div>
                <h4 className="op-skill-name name-blue">Leadership</h4>
                <p className="op-skill-desc">Nurturing decision-making, responsibility & the courage to lead.</p>
             </div>
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-pink"><i className="fa-regular fa-lightbulb"></i></div>
                <h4 className="op-skill-name name-blue">Critical Thinking</h4>
                <p className="op-skill-desc">Sparking curiosity, problem-solving & logical reasoning.</p>
             </div>
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-purple"><i className="fa-solid fa-hand-holding-heart"></i></div>
                <h4 className="op-skill-name name-blue">Empathy & Values</h4>
                <p className="op-skill-desc">Building kindness, respect & strong moral values.</p>
             </div>
             <div className="op-skill-item">
                <div className="op-skill-icon icon-bg-teal"><i className="fa-solid fa-person-running"></i></div>
                <h4 className="op-skill-name name-blue">Life Skills</h4>
                <p className="op-skill-desc">Independence, time management & everyday life readiness.</p>
             </div>
          </div>

          <div className="op-cards-row">
             <div className="op-card-left">
                <h3 className="op-card-title title-blue">Our Learning Approach</h3>
                <ul className="op-checklist">
                   <li><i className="fa-solid fa-square-check text-orange"></i> Play-based & Activity-led Learning</li>
                   <li><i className="fa-solid fa-square-check text-blue"></i> Conceptual & Experiential Understanding</li>
                   <li><i className="fa-solid fa-square-check text-green"></i> Technology-integrated Classrooms</li>
                   <li><i className="fa-solid fa-square-check text-orange"></i> Personalized Attention & Care</li>
                   <li><i className="fa-solid fa-square-check text-green"></i> Continuous Parent Partnership</li>
                </ul>
                <img src="/girl_writing.webp" alt="Girl writing" className="op-card-img-left" />
                <div className="op-deco" style={{ top: '20px', right: '40px', fontSize: '1.5rem' }}><i className="fa-regular fa-star text-pink"></i></div>
                <div className="op-deco" style={{ bottom: '80px', left: '60px', fontSize: '1.2rem' }}><i className="fa-regular fa-star text-green"></i></div>
             </div>

             <div className="op-card-right">
                 <h3 className="op-card-title title-blue">A Safe Place to Learn, Play & Grow</h3>
                 <div className="op-thrive-grid">
                    <div className="op-thrive-item"><div className="thrive-icon"><i className="fa-solid fa-shield-halved text-blue"></i></div>Safe<br/>Campus</div>
                    <div className="op-thrive-item"><div className="thrive-icon"><i className="fa-solid fa-display text-green"></i></div>Smart<br/>Learning</div>
                    <div className="op-thrive-item"><div className="thrive-icon"><i className="fa-solid fa-puzzle-piece text-green2"></i></div>Fun<br/>Play Areas</div>
                    <div className="op-thrive-item"><div className="thrive-icon"><i className="fa-solid fa-apple-whole text-orange"></i></div>Healthy Food<br/>Chart Habit</div>
                 </div>
                <div className="op-quote-box">
                   <div className="op-quote-icon"><i className="fa-solid fa-quote-left text-blue"></i></div>
                   <p className="op-quote-text text-blue">We don&apos;t just prepare<br/>children for school,<br/>we prepare them for life.</p>
                   <i className="fa-regular fa-heart text-pink quote-heart"></i>
                </div>
                <img src="/boy_thumbs_up.webp" alt="Boy thumbs up" className="op-card-img-right" />
             </div>
          </div>

          <div className="op-admissions-bar">
             <div className="op-ad-left">
                <i className="fa-regular fa-paper-plane ad-plane-icon"></i>
                <div>Let&apos;s build a beautiful<br/>future for your child.</div>
             </div>
             <div className="op-ad-center">
                <div className="ad-grad-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                <div className="ad-center-text">
                   <strong>Admissions Open</strong><br/>
                   for Toddler Care to 5th Standard
                </div>
             </div>
             <div className="op-ad-right">
                <Link href="/admission" className="op-btn-book">Book a Visit Today <i className="fa-solid fa-arrow-right"></i></Link>
                <p className="ad-btn-subtext">Come. Explore. Experience the Difference.</p>
             </div>
          </div>

         
        </div>
      </section>

    </main>
  );
}

