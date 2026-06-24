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
        backgroundImage: 'url("/sg-education/meet our team.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.45)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title">Founders Message</h1>
          <p className="vm-banner-desc">
            Empowering the next generation through a unique blend of ancient Bharath’s Culture with Corporate Culture.<br />
            Dedicated to shaping character, fostering innovation, and building future-ready leaders.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FF2A7A' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FF2A7A' }}>Founders Message</span>
          </div>
        </div>

        {/* Cloud Transition */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
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
            <h2>Meet Our <span className="highlight-pink text-pink-line">Founders & Mentors</span></h2>
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
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" alt="Founder Mamatha M.C" />
                <span className="founder-role-badge">Founder</span>
              </div>
              <div className="founder-info-3d">
                <h3>Mamatha M.C</h3>
                <p className="credential" style={{ color: 'var(--kidza-navy)', fontWeight: 'bold' }}>Founder of SG Educations & Co-founder of Sarathi Groups</p>
                <div className="quote-box" style={{ marginTop: '1rem', fontStyle: 'normal', fontSize: '0.95rem', color: 'var(--neutral-dark)' }}>
                  <p>&quot;She is the Founder of SG Education and the Co-Founder of Sarathi Groups. She also serves as the Managing Director of SGNL and SG Health & Care, Director of SG Builders Pvt. Ltd., and Vice President of NSR Social Welfare Trust.&quot;</p>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div 
              ref={founder2Ref}
              className="founder-card-3d sub-founder-theme"
              onMouseMove={(e) => handleMouseMoveTilt(e, founder2Ref)}
              onMouseLeave={() => handleMouseLeaveTilt(founder2Ref)}
            >
              <div className="founder-img-wrapper-3d">
                <img src="/sg-education/mentor.png" alt="Mentor Shashi Kiran" />
                <span className="founder-role-badge">Mentor</span>
              </div>
              <div className="founder-info-3d">
                <h3>Shashi Kiran K.N</h3>
                <p className="credential" style={{ color: 'var(--kidza-navy)', fontWeight: 'bold' }}>Mentor at SG Education & Visionary Leader</p>
                <div className="quote-box" style={{ marginTop: '1rem', fontStyle: 'normal', fontSize: '0.95rem', color: 'var(--neutral-dark)' }}>
                  <p>&quot;Mr. Shashi Kiran K.N. is a distinguished leader, entrepreneur, and visionary. He is committed to education, social welfare, and national development, inspiring individuals through his leadership and dedication to creating a positive impact on society.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 1: The Visionary Behind SG Education */}
      <section className="eb-section fm-founder-vision-light" style={{ paddingTop: '7rem' }}>
        <div className="container">
          <div className="eb-founder-dark-layout">
            {/* Left: Slanted Image Card */}
            <div className="eb-founder-card-left">
              <div className="eb-founder-image-wrapper">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Mamatha M.C - Founder" />
                <div className="eb-founder-orange-bar" style={{ backgroundColor: '#FF2A7A' }}></div>
              </div>
            </div>

            {/* Right: Content Section */}
            <div className="eb-founder-content-right">
              <div className="vm-tag tag-pink">THE FOUNDER&apos;S VISION</div>
              <h2 className="vm-title">
                Bridging <span className="underline-pink">Tradition</span> & Innovation
              </h2>
              
              <div className="eb-founder-identity">
                <h3 className="eb-founder-name">Ms. Mamatha M.C</h3>
                <span className="eb-founder-designation">Founder & Chairman, SG Education</span>
              </div>
              
              <div className="eb-founder-vision-statement">
                <p>
                  &quot;Ms. Mamatha M.C is the driving force behind SG Education, envisioning an institution that merges ancient Bharath&apos;s wisdom with modern corporate excellence to create future-ready individuals. Her leadership is rooted in the belief that education should not only impart knowledge but also shape character, discipline, and leadership qualities.&quot;
                </p>
                <p style={{ marginTop: '1rem' }}>
                  As the Founder of SG Education, she has been instrumental in building a learning environment that nurtures intellectual growth, ethical values, and practical skills. Her commitment to education led to the establishment of SG Early Budding in Gokul Nagar, Hosur, where young minds are given the best foundation to succeed in an evolving world.
                </p>
              </div>

              <ul className="eb-founder-highlights">
                <li><i className="fa-solid fa-check" style={{color: '#FF2A7A'}}></i> Holistic Development Approach</li>
                <li><i className="fa-solid fa-check" style={{color: '#FF2A7A'}}></i> Bridging Tradition & Innovation</li>
                <li><i className="fa-solid fa-check" style={{color: '#FF2A7A'}}></i> Empowering Young Minds</li>
                <li><i className="fa-solid fa-check" style={{color: '#FF2A7A'}}></i> Fostering Moral Integrity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Entrepreneurial Leadership Across Industries */}
      <section className="fm-leadership-section-new" style={{ padding: '2rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
            <div className="vm-tag tag-blue">MULTI-SECTOR EXPERTISE</div>
            <h2 className="vm-title">
              Driving <span className="underline-blue">Growth</span> Across Industries
            </h2>
          </div>

          <div className="fm-leadership-grid-new">
            
            {/* Left Vertical Gradient Card with Image */}
            <div className="fm-leadership-left-card">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                alt="Entrepreneurial Leadership" 
                className="fm-leadership-left-image" 
              />
              <div className="fm-leadership-left-overlay"></div>
            </div>

            {/* Right Vertical List */}
            <div className="fm-leadership-right-list">
              
              <div className="fm-leadership-list-item">
                <div className="fm-leadership-item-thumbnail">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=150&q=80" alt="Education" />
                </div>
                <div className="fm-leadership-item-content">
                  <h4 className="fm-leadership-item-title" style={{ color: '#FF2A7A' }}>
                    <i className="fa-solid fa-book-open" style={{ marginRight: '8px' }}></i>Education
                  </h4>
                  <p className="fm-leadership-item-role" style={{ color: '#333' }}>Founder – SG Education</p>
                  <p className="fm-leadership-item-desc">Building innovative learning environments that empower future generations through quality education and modern teaching methods.</p>
                  <div className="fm-leadership-item-divider"></div>
                </div>
              </div>

              <div className="fm-leadership-list-item">
                <div className="fm-leadership-item-thumbnail">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=150&q=80" alt="Business Leadership" />
                </div>
                <div className="fm-leadership-item-content">
                  <h4 className="fm-leadership-item-title" style={{ color: '#ECC440' }}>
                    <i className="fa-solid fa-briefcase" style={{ marginRight: '8px' }}></i>Business Leadership
                  </h4>
                  <p className="fm-leadership-item-role" style={{ color: '#333' }}>Co-Founder – Sarathi Groups</p>
                  <p className="fm-leadership-item-desc">Driving strategic growth, innovation, and sustainable business development across multiple sectors.</p>
                  <div className="fm-leadership-item-divider"></div>
                </div>
              </div>

              <div className="fm-leadership-list-item">
                <div className="fm-leadership-item-thumbnail">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&q=80" alt="Real Estate" />
                </div>
                <div className="fm-leadership-item-content">
                  <h4 className="fm-leadership-item-title" style={{ color: '#ECC440' }}>
                    <i className="fa-solid fa-city" style={{ marginRight: '8px' }}></i>Real Estate
                  </h4>
                  <p className="fm-leadership-item-role" style={{ color: '#333' }}>Director – SG Builders Pvt. Ltd.</p>
                  <p className="fm-leadership-item-desc">Leading residential and commercial projects with a focus on quality, trust, and long-term value.</p>
                  <div className="fm-leadership-item-divider"></div>
                </div>
              </div>

              <div className="fm-leadership-list-item">
                <div className="fm-leadership-item-thumbnail">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=150&q=80" alt="Healthcare" />
                </div>
                <div className="fm-leadership-item-content">
                  <h4 className="fm-leadership-item-title" style={{ color: '#00C853' }}>
                    <i className="fa-solid fa-heart-pulse" style={{ marginRight: '8px' }}></i>Healthcare
                  </h4>
                  <p className="fm-leadership-item-role" style={{ color: '#333' }}>Managing Director – SG Health & Care</p>
                  <p className="fm-leadership-item-desc">Improving community well-being through accessible healthcare services and patient-centered solutions.</p>
                  <div className="fm-leadership-item-divider"></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Social Impact & Inspiring Future Generations */}
      <section className="fm-section-padding" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="fm-impact-grid">
            
            <div className="fm-impact-content" style={{ position: 'relative', zIndex: 2 }}>
              <div className="vm-tag tag-yellow">SOCIAL RESPONSIBILITY</div>
              <h2 className="vm-title" style={{ marginBottom: '1.5rem' }}>
                Empowering <span className="underline-yellow">Communities</span> & Future Leaders
              </h2>
              
              <p className="vm-desc">
                Beyond her entrepreneurial success, Ms. Mamatha M.C is deeply dedicated to community development and social welfare. As the Vice President of NSR Social Welfare Trust, her commitment to creating a positive social impact shines through her empowerment of future generations via education, healthcare, and vital community initiatives.
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

      {/* Section 4: Mentor */}
      <section className="eb-section fm-founder-vision-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="eb-founder-dark-layout reverse-layout-desktop">
            {/* Right (Visuals): Slanted Image Card */}
            <div className="eb-founder-card-left">
              <div className="eb-founder-image-wrapper">
                <img src="/sg-education/mentor.png" alt="Shashi Kiran K.N - Mentor" />
                <div className="eb-founder-orange-bar"></div>
              </div>
            </div>

            {/* Left (Content): Content Section */}
            <div className="eb-founder-content-right">
              <div className="vm-tag tag-green">MENTOR</div>
              <h2 className="vm-title">
                Visionary <span className="underline-green">Leadership</span>
              </h2>
              
              <div className="eb-founder-identity">
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

              <ul className="eb-founder-highlights">
                <li><i className="fa-solid fa-check" style={{color: '#FF2A7A'}}></i> Social Responsibility</li>
                <li><i className="fa-solid fa-check" style={{color: '#FF2A7A'}}></i> National Development</li>
                <li><i className="fa-solid fa-check" style={{color: '#FF2A7A'}}></i> Moral Character</li>
                <li><i className="fa-solid fa-check" style={{color: '#FF2A7A'}}></i> Strategic Guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



