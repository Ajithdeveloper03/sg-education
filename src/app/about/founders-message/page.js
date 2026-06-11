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
      <div style={{ position: 'absolute', top: '15%', left: '5%', color: '#FFB300', fontSize: '2.5rem', opacity: 0.6, animation: 'fm-float 3s ease-in-out infinite', zIndex: 0 }}>
        <i className="fa-solid fa-star"></i>
      </div>
      <div style={{ position: 'absolute', top: '28%', right: '8%', color: '#00AEFF', fontSize: '3rem', opacity: 0.5, animation: 'fm-float 4s ease-in-out infinite reverse', zIndex: 0 }}>
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
        backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(7, 6, 16, 0.6)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title">Founders Message</h1>
          <p className="vm-banner-desc">
            Empowering the next generation through a unique blend of ancient wisdom and modern corporate excellence.<br />
            Dedicated to shaping character, fostering innovation, and building future-ready leaders.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FF2A7A' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <Link href="/about" className="breadcrumb-link" style={{ color: '#fff', textDecoration: 'none' }}>About SG</Link>
            <span style={{ margin: '0 0.8rem', color: '#FF2A7A' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FF2A7A' }}>Founders Message</span>
          </div>
        </div>

        {/* Cloud Transition */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            <img src="/sg-education/cloud.png" alt="Cloud Transition" />
            <img src="/sg-education/cloud.png" alt="Cloud Transition" />
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
              <div className="vm-tag tag-pink">THE FOUNDER'S VISION</div>
              <h2 className="vm-title">
                Bridging <span className="underline-pink">Tradition</span> & Innovation
              </h2>
              
              <div className="eb-founder-identity">
                <h3 className="eb-founder-name">Ms. Mamatha M.C</h3>
                <span className="eb-founder-designation">Founder & Chairman, SG Education</span>
              </div>
              
              <div className="eb-founder-vision-statement">
                <p>
                  "Ms. Mamatha M.C is the driving force behind SG Education, envisioning an institution that merges ancient Bharath’s wisdom with modern corporate excellence to create future-ready individuals. Her leadership is rooted in the belief that education should not only impart knowledge but also shape character, discipline, and leadership qualities."
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
                  <h4 className="fm-leadership-item-title" style={{ color: '#FFB300' }}>
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
                  <h4 className="fm-leadership-item-title" style={{ color: '#00AEFF' }}>
                    <i className="fa-solid fa-city" style={{ marginRight: '8px' }}></i>Real Estate
                  </h4>
                  <p className="fm-leadership-item-role" style={{ color: '#333' }}>Director – SG Builders Pvt. Ltd.</p>
                  <p className="fm-leadership-item-desc">Leading residential and commercial projects with a focus on quality, trust, and long-term value.</p>
                  <div className="fm-leadership-item-divider"></div>
                </div>
              </div>

              <div className="fm-leadership-list-item">
                <div className="fm-leadership-item-thumbnail">
                  <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ce122?auto=format&fit=crop&w=150&q=80" alt="Healthcare" />
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
                  <div className="fm-stat-title"><i className="fa-solid fa-hand-holding-heart" style={{color: '#00AEFF', marginRight: '8px'}}></i> Social Welfare</div>
                  <div className="fm-stat-desc">Driving impactful community initiatives.</div>
                </div>
                <div className="fm-stat-card">
                  <div className="fm-stat-title"><i className="fa-solid fa-seedling" style={{color: '#00C853', marginRight: '8px'}}></i> Empowerment</div>
                  <div className="fm-stat-desc">Educational & Healthcare support.</div>
                </div>
                <div className="fm-stat-card">
                  <div className="fm-stat-title"><i className="fa-solid fa-user-group" style={{color: '#FFB300', marginRight: '8px'}}></i> Leadership</div>
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
          <div className="eb-founder-dark-layout" style={{ flexDirection: 'row-reverse' }}>
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
                  "A visionary leader with a deep commitment to social responsibility and national development, combining moral character with modern tools."
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
