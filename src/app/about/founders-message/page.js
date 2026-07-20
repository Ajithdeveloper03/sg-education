"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import "./founders-message.css";
import "../vision-mission/vision-mission.css";
import "../sg-early-budding/sg-early-budding.css";

export default function FoundersMessagePage() {
  const [isMobile, setIsMobile] = useState(false);
  const founder1Ref = useRef(null);
  const founder2Ref = useRef(null);

  // Holographic 3D tilt effect on hover
  const handleMouseMoveTilt = (e, ref) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) return;
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const tiltX = (y - 0.5) * -15; // Max 15 degree X rotation
    const tiltY = (x - 0.5) * 15;  // Max 15 degree Y rotation
    ref.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
  };
  
  const handleMouseLeaveTilt = (ref) => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

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
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("/meet our team.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.45)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title">Founder Message</h1>
          <p className="vm-banner-desc">
            Empowering the next generation through a unique blend of Ancient Noble Bharat Culture with Corporate Professional Culture.
            Dedicated to shaping character, fostering innovation, and building future-ready leaders.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FF2A7A' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FF2A7A' }}>Founder Message</span>
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
           1. VISIONARY FOUNDERS & LEADERSHIP
           ========================================== */}
      <section className="founders-section" id="leadership" style={{ padding: "4rem 0 1rem 0" }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '4rem' }}>
            <span className="label-brand color-pink" style={{ background: 'rgba(236, 196, 64, 0.08)', color: 'var(--playful-pink)' }}>Visionary Leadership</span>
            <h2>Meet Our <span className="highlight-pink text-pink-line">Founder & Mentor</span></h2>
          </div>

          <div className="founders-grid" style={{ margin: '0 auto' }}>
            {/* Founder 1 */}
            <div 
              ref={founder1Ref}
              className="founder-card-3d main-founder-theme"
              onMouseMove={(e) => handleMouseMoveTilt(e, founder1Ref)}
              onMouseLeave={() => handleMouseLeaveTilt(founder1Ref)}
            >
              <div className="founder-img-wrapper-3d">
                <img src="/mamtha 1.jpeg" alt="Founder Mamatha M.C" />
                <span className="founder-role-badge">Founder</span>
              </div>
              <div className="founder-info-3d">
                <h3>Mamatha M.C</h3>
                <p className="credential" style={{ color: 'var(--kidza-navy)', fontWeight: 'bold' }}>Founder & Chairperson, SG Education | Co-Founder, Sarathi Groups 
</p>
                <div className="quote-box" style={{ marginTop: '1rem', fontStyle: 'normal', fontSize: '0.95rem', color: 'var(--neutral-dark)' }}>
                  <p>&quot;Ms. Mamatha M.C. is the visionary Founder & Chairperson of SG Education and Co-Founder of Sarathi Groups. She is committed to creating a transformative educational environment that combines academic excellence, cultural values, leadership development, and holistic learning. Her vision is to nurture confident, responsible, and future-ready individuals who contribute positively to society. &quot;</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


      {/* Section 1: The Founder's Vision (Text Only, Centered) */}
      <section className="eb-section fm-founder-vision-light" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="fm-vision-text-centered">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="vm-tag tag-pink" style={{ margin: '0 auto 1rem auto' }}>THE FOUNDER&apos;S VISION</div>
              <h2 className="vm-title">
                Bridging <span className="underline-pink">Tradition</span> & Innovation
              </h2>
            </div>
            
            <div className="eb-founder-identity" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <h3 className="eb-founder-name">Ms. Mamatha M.C</h3>
              <span className="eb-founder-designation">Founder & Chairperson, SG Education</span>
            </div>
            
            <div className="eb-founder-vision-statement">
              <p><strong>Welcome to SG Education.</strong></p>
              <p style={{ marginTop: '10px' }}>
                 SG Education was built on a dream — a dream to create a space where every child&apos;s unique potential is celebrated, nurtured, and guided toward excellence. Our vision is to create an inspiring learning environment that nurtures young minds and prepares them to excel in a rapidly evolving world.
              </p>
              <p style={{ marginTop: '10px' }}>
                We are committed to integrating Ancient Noble Bharat Culture (ANBC) with Corporate Professional Culture (CPC), enabling students to develop strong moral values while acquiring the skills and confidence required for future success. Through this unique approach, we strive to cultivate responsible, compassionate, and future-ready individuals.
              </p>
              <p style={{ marginTop: '10px' }}>
                At SG Early Budding and our future educational institutions, every child is encouraged to explore, learn, create, and grow in a safe and supportive environment. We focus on holistic development by fostering intellectual curiosity, creativity, discipline, leadership, and social responsibility.
              </p>
              <p style={{ marginTop: '10px' }}>
                Our mission is to empower every student with the knowledge, values, and life skills necessary to become a positive force in society and contribute meaningfully to the nation. We thank all parents, educators, and well-wishers for being part of this journey as we continue to shape the leaders of tomorrow.
              </p>
              <p style={{ marginTop: '1.5rem', fontStyle: 'normal', fontWeight: '500', color: 'var(--playful-pink)', textAlign: 'center' }}>
                &quot;Inspiring Minds, Building Character, Creating Future Leaders.&quot;<br/>
                <span style={{ color: 'var(--kidza-navy)', fontStyle: 'normal' }}>– Ms. Mamatha M.C.<br/>Founder &amp; Chairperson, SG Education</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Multi-Sector Expertise (Pill Cards with Backgrounds) */}
      <section className="fm-expertise-section">
        <div className="container">
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div className="vm-tag tag-blue">MULTI-SECTOR EXPERTISE</div>
            <h2 className="vm-title">
              Driving <span className="underline-blue">Growth</span> Across Industries
            </h2>
          </div>

          <div className="fm-expertise-grid">
            
            {/* Sector 1: Education */}
            <div className="fm-expertise-card fm-card-education">
              <div className="fm-expertise-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80)' }}></div>
              <div className="fm-expertise-card-overlay"></div>
              
              <div className="fm-expertise-icon-box">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <div className="fm-expertise-content">
                <h4 className="fm-expertise-card-title">Education</h4>
                <p className="fm-expertise-card-role">Founder – SG Education</p>
                <p className="fm-expertise-card-desc">Building innovative learning environments that empower future generations through quality education and modern teaching methods.</p>
              </div>
            </div>

            {/* Sector 2: Business Leadership */}
            <div className="fm-expertise-card fm-card-business">
              <div className="fm-expertise-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80)' }}></div>
              <div className="fm-expertise-card-overlay"></div>
              
              <div className="fm-expertise-icon-box">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div className="fm-expertise-content">
                <h4 className="fm-expertise-card-title">Business Leadership</h4>
                <p className="fm-expertise-card-role">Co-Founder – Sarathi Groups</p>
                <p className="fm-expertise-card-desc">Driving strategic growth, innovation, and sustainable business development across multiple sectors.</p>
              </div>
            </div>

            {/* Sector 3: Real Estate */}
            <div className="fm-expertise-card fm-card-realestate">
              <div className="fm-expertise-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80)' }}></div>
              <div className="fm-expertise-card-overlay"></div>
              
              <div className="fm-expertise-icon-box">
                <i className="fa-solid fa-city"></i>
              </div>
              <div className="fm-expertise-content">
                <h4 className="fm-expertise-card-title">Real Estate</h4>
                <p className="fm-expertise-card-role">Director – SG Builders Pvt. Ltd.</p>
                <p className="fm-expertise-card-desc">Leading residential and commercial projects with a focus on quality, trust, and long-term value.</p>
              </div>
            </div>

            {/* Sector 4: Healthcare */}
            <div className="fm-expertise-card fm-card-healthcare">
              <div className="fm-expertise-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80)' }}></div>
              <div className="fm-expertise-card-overlay"></div>
              
              <div className="fm-expertise-icon-box">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <div className="fm-expertise-content">
                <h4 className="fm-expertise-card-title">Healthcare</h4>
                <p className="fm-expertise-card-role">Managing Director – SG Health & Care</p>
                <p className="fm-expertise-card-desc">Improving community well-being through accessible healthcare services and patient-centered solutions.</p>
              </div>
            </div>

            {/* Sector 5: Banking & Finance */}
            <div className="fm-expertise-card fm-card-banking">
              <div className="fm-expertise-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80)' }}></div>
              <div className="fm-expertise-card-overlay"></div>
              
              <div className="fm-expertise-icon-box">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div className="fm-expertise-content">
                <h4 className="fm-expertise-card-title">Banking & Finance</h4>
                <p className="fm-expertise-card-role">Managing Director – SG Nidhi Limited</p>
                <p className="fm-expertise-card-desc">Providing reliable financial solutions and strategic investments to foster economic growth and stability.</p>
              </div>
            </div>

            {/* Sector 6: Enterprise */}
            <div className="fm-expertise-card fm-card-enterprise">
              <div className="fm-expertise-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80)' }}></div>
              <div className="fm-expertise-card-overlay"></div>
              
              <div className="fm-expertise-icon-box">
                <i className="fa-solid fa-industry"></i>
              </div>
              <div className="fm-expertise-content">
                <h4 className="fm-expertise-card-title">Enterprise</h4>
                <p className="fm-expertise-card-role">Managing Director – SG Enterprise</p>
                <p className="fm-expertise-card-desc">Fostering scalable business models and impactful corporate ventures for comprehensive market success.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Moved Mentor Card Section */}
      <section style={{ padding: '2rem 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="founders-grid" style={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
            <div 
              ref={founder2Ref}
              className="founder-card-3d sub-founder-theme"
              onMouseMove={(e) => handleMouseMoveTilt(e, founder2Ref)}
              onMouseLeave={() => handleMouseLeaveTilt(founder2Ref)}
              style={{ maxWidth: '800px', width: '100%', margin: '0' }}
            >
              <div className="founder-img-wrapper-3d">
                <img src="/mentor.webp" alt="Mentor Shashi Kiran" />
                <span className="founder-role-badge">Mentor</span>
              </div>
              <div className="founder-info-3d">
                <h3>Shashi Kiran K.N</h3>
                <p className="credential" style={{ color: 'var(--kidza-navy)', fontWeight: 'bold', textTransform: 'uppercase' }}>Mentor, SG Education & Visionary Leader</p>
                <div className="quote-box" style={{ marginTop: '1rem', fontStyle: 'normal', fontSize: '0.95rem', color: 'var(--neutral-dark)' }}>
                  <p>&quot;Mr. Shashi Kiran K.N. is a distinguished mentor, entrepreneur, and visionary leader. Through his guidance and strategic insights, he supports SG Education&apos;s mission of empowering young minds through quality education, ethical values, innovation, and leadership development. His dedication to social progress and nation-building continues to inspire students, educators, and communities alike.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mentor (Text Only) */}
      <section className="eb-section fm-founder-vision-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="fm-vision-text-centered">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="vm-tag tag-green" style={{ margin: '0 auto 1rem auto' }}>MENTOR</div>
              <h2 className="vm-title">
                Visionary <span className="underline-green">Leadership</span>
              </h2>
            </div>
            
            <div className="eb-founder-identity" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <h3 className="eb-founder-name">Shashi Kiran K.N</h3>
              <span className="eb-founder-designation">Mentor at SG Education & Visionary Leader</span>
            </div>
            
            <div className="eb-founder-vision-statement">
              <p>
                &quot;A visionary leader with a deep commitment to social responsibility and national development, combining moral character with modern tools.&quot;
              </p>
              <p style={{ marginTop: '1rem' }}>
                His guidance and expertise play a crucial role in shaping the strategic direction of SG Education, ensuring that the institution remains at the forefront of holistic learning and character development.
              </p>
            </div>

            <ul className="eb-founder-highlights" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem', padding: '0', listStyle: 'none' }}>
              <li><i className="fa-solid fa-check" style={{color: '#FF2A7A', marginRight: '8px'}}></i>Social Responsibility</li>
              <li><i className="fa-solid fa-check" style={{color: '#FF2A7A', marginRight: '8px'}}></i>National Development</li>
              <li><i className="fa-solid fa-check" style={{color: '#FF2A7A', marginRight: '8px'}}></i>Moral Character</li>
              <li><i className="fa-solid fa-check" style={{color: '#FF2A7A', marginRight: '8px'}}></i>Strategic Guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Social Impact (Moved to Bottom) */}
      <section className="fm-section-padding" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="fm-impact-grid">
            
            <div className="fm-impact-content" style={{ position: 'relative', zIndex: 2 }}>
              <div className="vm-tag tag-yellow">SOCIAL RESPONSIBILITY</div>
              <h2 className="vm-title" style={{ marginBottom: '1.5rem' }}>
                Empowering <span className="underline-yellow">Communities</span> & Future Leaders
              </h2>
              
              <p className="vm-desc">
                Beyond their professional achievements, Ms. Mamatha M.C and Mr. Shashi Kiran K.N are deeply committed to community development and social welfare. Through their leadership and dedication, they actively contribute to empowering future generations by supporting education, healthcare, youth leadership, and impactful community initiatives. Their shared vision is to create a positive and lasting impact on society by nurturing responsible, confident, and compassionate individuals.
              </p>

              <div className="fm-stats-container">
                <div className="fm-stat-card">
                  <div className="fm-stat-title"><i className="fa-solid fa-hand-holding-heart" style={{color: '#ECC440', marginRight: '8px'}}></i> Social Welfare</div>
                  <div className="fm-stat-desc">Driving impactful community initiatives.</div>
                </div>
                <div className="fm-stat-card">
                  <div className="fm-stat-title"><i className="fa-solid fa-seedling" style={{color: '#00C853', marginRight: '8px'}}></i> Empowerment</div>
                  <div className="fm-stat-desc">Educational & Healthcare support.</div>
                </div>
                <div className="fm-stat-card">
                  <div className="fm-stat-title"><i className="fa-solid fa-user-group" style={{color: '#ECC440', marginRight: '8px'}}></i> Leadership</div>
                  <div className="fm-stat-desc">Youth leadership development.</div>
                </div>
              </div>
            </div>

            <div className="fm-impact-images">
              <div className="fm-impact-img-box fm-impact-img-1">
                <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80" alt="Community Service and Social Impact" />
              </div>
              <div className="fm-impact-img-box fm-impact-img-2">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80" alt="Inspiring Youth and Generations" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}



