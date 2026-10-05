"use client";

import Link from "next/link";
import "./facilities.css";
import "../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function FacilitiesPage() {
  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* ==========================================
           SECTION 1: Hero Banner
           ========================================== */}
      <section style={{ 
        position: 'relative', width: '100%', minHeight: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("/facilities banner.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden', paddingTop: '130px', paddingBottom: '40px'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.65)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px', maxWidth: '1000px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.4rem 1.2rem', borderRadius: '30px', color: '#fff', fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.5)' }}>
              Designed for Safety, Play & Joyful Learning | Hosur Campus
            </span>
          </div>
          <h1 className="vm-banner-title" style={{ color: '#fff', fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1rem' }}>State-of-the-Art Facilities Designed for Your Child’s Safety & Growth</h1>
          <p className="vm-banner-desc">
            At SG Education and SG Early Budding, Hosur, our world-class campus facilities provide a safe, sanitized, and stimulating environment. From CCTV-monitored learning spaces and interactive smart classrooms to dedicated sensory play zones, every corner is thoughtfully engineered for early childhood discovery and physical wellbeing.
          </p>
          <div className="vm-pagination" style={{ marginBottom: '1rem' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Facilities</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/admission" className="btn btn-orange" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#FFC300', color: '#333', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Book a Campus Tour</Link>
            <Link href="/contact" className="btn btn-red" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#fff', color: '#333', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Download Campus Brochure</Link>
          </div>
        </div>
        
        {/* Cloud Transition */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            <img src="/cloud.webp" alt="Cloud Transition" />
            <img src="/cloud.webp" alt="Cloud Transition" />
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 2: Trust Highlights / Stats Bar
           ========================================== */}
      <section style={{ backgroundColor: '#fff', padding: '3rem 0', marginTop: '-20px', position: 'relative', zIndex: 12 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', backgroundColor: '#fff', padding: '2rem', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', borderRight: '1px solid #eee' }}>
              <i className="fa-solid fa-video" style={{ fontSize: '2rem', color: '#FF2A7A', marginBottom: '1rem' }}></i>
              <h4 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold', textAlign: 'center' }}>24/7 CCTV Security</h4>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 auto', textAlign: 'center', maxWidth: '250px' }}>Complete Indoor & Outdoor Campus Surveillance</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', borderRight: '1px solid #eee' }}>
              <i className="fa-solid fa-hands-bubbles" style={{ fontSize: '2rem', color: '#00C853', marginBottom: '1rem' }}></i>
              <h4 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold', textAlign: 'center' }}>100% Sanitized</h4>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 auto', textAlign: 'center', maxWidth: '250px' }}>Ergonomic, Non-Toxic, Injury-Free Furniture</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', borderRight: '1px solid #eee' }}>
              <i className="fa-solid fa-users" style={{ fontSize: '2rem', color: '#FFC300', marginBottom: '1rem' }}></i>
              <h4 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold', textAlign: 'center' }}>1:10 Student-Teacher Ratio</h4>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 auto', textAlign: 'center', maxWidth: '250px' }}>Personal Attention in Spacious, Well-Ventilated Rooms</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
              <i className="fa-solid fa-bus" style={{ fontSize: '2rem', color: '#0ea5e9', marginBottom: '1rem' }}></i>
              <h4 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold', textAlign: 'center' }}>Safe School Transit</h4>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 auto', textAlign: 'center', maxWidth: '250px' }}>GPS-Enabled Vans with Trained Female Attendants</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 3: Core Campus Facilities
           ========================================== */}
      <section className="beyond-section-padding" style={{ backgroundColor: '#F9FAFB', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            <div className="vm-tag tag-blue">CORE FACILITIES</div>
            <h2 className="beyond-title-main" style={{ marginTop: '0.5rem' }}>
              Modern Infrastructure Engineered for <span className="underline-blue">Holistic Child Development</span>
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '1rem', textAlign: 'center' }}>Every space at SG Education is purposefully built to support intellectual, social, and physical growth.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Card 1 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '2rem', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', borderBottom: '4px solid #FF2A7A' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#fff0f5', color: '#FF2A7A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-chalkboard-user"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem' }}>Smart & Interactive Learning Spaces</h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Spacious, naturally lit, and air-conditioned classrooms equipped with audio-visual learning aids. Children engage with concepts through animated storytelling, interactive digital phonics, and hands-on teaching manipulatives.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '2rem', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', borderBottom: '4px solid #00C853' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#e8f5e9', color: '#00C853', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-shapes"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem' }}>Indoor Play & Sensory Discovery Zone</h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Padded, rubberized flooring with soft-play obstacles, ball pools, sensory tactile boards, and fine-motor activity stations where toddlers and preschoolers safely build balance and agility.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '2rem', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', borderBottom: '4px solid #FFC300' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#fffde7', color: '#FFC300', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-tree"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem' }}>Safe Outdoor Playgrounds & Green Turf</h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Secure outdoor play park featuring age-appropriate slides, swings, balancing beams, and sandbox zones. Promotes gross motor skills, teamwork, and healthy outdoor physical activity under teacher supervision.
              </p>
            </div>

            {/* Card 4 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '2rem', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', borderBottom: '4px solid #0ea5e9' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#f0f9ff', color: '#0ea5e9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-book-open"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem' }}>The Wonder Library & Reading Corner</h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Curated collection of early reader books, vibrant picture encyclopedias, and touch-and-feel books designed to foster an early love for reading, vocabulary building, and imaginative listening.
              </p>
            </div>

            {/* Card 5 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '2rem', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', borderBottom: '4px solid #9C27B0' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#f3e5f5', color: '#9C27B0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-utensils"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem' }}>Hygienic Dining & Healthy Meal Area</h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Dedicated dining hall encouraging clean eating habits and table etiquette under our &quot;One Day, One Good Thing&quot; program. Supported by pure RO-purified drinking water systems.
              </p>
            </div>

            {/* Card 6 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '2rem', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', borderBottom: '4px solid #FF5722' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#fbe9e7', color: '#FF5722', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-bed"></i>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem' }}>Quiet, Comfortable Daycare Nap Rooms</h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Clean, tranquil resting spaces with individual sanitized cots and soothing ventilation, providing toddlers with scheduled power naps under continuous female nanny supervision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: Safety, Health & Hygiene Protocols (Using Curved Block design)
          ========================================== */}
      <section className="health-section-padding health-s1-wrapper" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="health-s1-curve-block" style={{ flexDirection: 'row-reverse' }}>
            
            {/* Right Content */}
            <div style={{ position: 'relative', zIndex: 5, padding: '2rem' }}>
              <div className="vm-tag tag-green">SAFETY & HYGIENE</div>
              <h2 className="health-title-main">
                Uncompromised Standards of <span className="underline-green">Safety, Hygiene & Medical Readiness</span>
              </h2>
              <p className="health-text-main" style={{ marginBottom: '2rem' }}>
                How we guarantee peace of mind for every parent in Hosur.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ marginTop: '5px', color: '#00C853', fontSize: '1.5rem' }}><i className="fa-solid fa-video"></i></div>
                  <div>
                    <h4 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.3rem', fontWeight: 'bold' }}>Comprehensive CCTV Campus Monitoring</h4>
                    <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>Round-the-clock high-definition surveillance across all classrooms, activity corridors, dining areas, and outdoor gates.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ marginTop: '5px', color: '#00C853', fontSize: '1.5rem' }}><i className="fa-solid fa-pump-medical"></i></div>
                  <div>
                    <h4 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.3rem', fontWeight: 'bold' }}>Strict Daily Sanitization</h4>
                    <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>Twice-daily medical-grade cleaning of all toys, learning kits, play gym equipment, and child-sized restrooms.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ marginTop: '5px', color: '#00C853', fontSize: '1.5rem' }}><i className="fa-solid fa-user-nurse"></i></div>
                  <div>
                    <h4 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.3rem', fontWeight: 'bold' }}>Verified Staff & Female Caretakers</h4>
                    <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>Comprehensive background checks for all teaching and support staff, with attentive female attendants assisting children with washroom and dining needs.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ marginTop: '5px', color: '#00C853', fontSize: '1.5rem' }}><i className="fa-solid fa-kit-medical"></i></div>
                  <div>
                    <h4 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '0.3rem', fontWeight: 'bold' }}>First-Aid & Emergency Medical Protocol</h4>
                    <p style={{ color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>Well-equipped infirmary on campus with certified first-aid personnel and established tie-ups with leading pediatric hospitals in Hosur for rapid emergency response.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Left Organic Image */}
            <div style={{ position: 'relative', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="health-s1-organic-frame" style={{ maxWidth: '100%' }}>
                <img src="/HEALTH & WELL-BEING.png" alt="Safety and Hygiene" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: Safe Transit Facility
          ========================================== */}
      <section className="health-s3-spotlight" style={{ overflow: 'hidden', backgroundImage: "url('/transport background.png')" }}>
        <div className="health-s3-overlay" style={{ background: 'linear-gradient(135deg, rgba(20, 25, 40, 0.8) 0%, rgba(10, 15, 25, 0.7) 100%)' }}></div>
        
        <div className="container health-s3-container" style={{ zIndex: 10 }}>
          <div className="transportation-split-layout">
            <div className="health-s3-glass-panel" style={{ textAlign: 'left', padding: '2rem', maxWidth: '100%', margin: 0 }}>
              <i className="fa-solid fa-quote-left health-s3-quote-icon" style={{ left: '10px' }}></i>
              
              <div className="vm-tag tag-yellow" style={{ backgroundColor: 'rgba(236, 196, 64, 0.2)', color: '#FFC300', border: '1px solid #FFC300', marginBottom: '1.5rem', display: 'inline-block' }}>SAFE TRANSIT FACILITY</div>
              
              <h2 className="health-title-main" style={{ textAlign: 'center' }}>Safe, Reliable School Transportation Across Hosur</h2>
              
              <p className="health-text-main" style={{ textAlign: 'left' }}>
                We provide convenient, safe, and dependable transportation across major residential neighborhoods in Hosur. Our fleet of school vans features GPS live tracking, speed governors, first-aid kits, and dedicated female attendants on every trip to ensure your child travels safely from doorstep to campus.
              </p>
              
              <div className="health-s3-highlight-tags" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                <span className="health-s3-tag" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}><i className="fa-solid fa-map-location-dot"></i> GPS Monitored</span>
                <span className="health-s3-tag" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}><i className="fa-solid fa-user-shield"></i> Female Attendants</span>
                <span className="health-s3-tag" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}><i className="fa-solid fa-bus"></i> Speed Governed</span>
              </div>
            </div>
            
            <div className="transportation-image-wrapper">
              <img src="/TRANSPORTATION.webp" alt="School Transportation" className="transportation-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 6: FAQ SECTION
           ========================================== */}
      <section className="vm-section faq-bg" style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#333' }}>Frequently Asked Questions About <span style={{ color: '#FF2A7A' }}>Our Facilities</span></h2>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FF2A7A', marginTop: '4px' }}></i> 
                  <span>What safety and security facilities are available at SG Education Hosur?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                SG Education features 24/7 CCTV surveillance across all classrooms and grounds, gated security entry, child-safe rounded furniture, fire extinguishers, first-aid stations, and trained female caretakers to ensure 100% physical and emotional safety for toddlers and young learners.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#00BFA6', marginTop: '4px' }}></i> 
                  <span>Does the school provide transportation facilities in Hosur?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                Yes. SG Education operates safe, GPS-monitored school transport vans with trained drivers and female attendants, connecting Gokul Nagar, R K Road, and major residential neighborhoods across Hosur.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#FFC300', marginTop: '4px' }}></i> 
                  <span>How does SG Education maintain hygiene in preschool play areas and restrooms?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                All classrooms, indoor play gyms, and child-sized restrooms undergo scheduled multi-stage sanitization twice daily using child-safe disinfectants. Restrooms are maintained by dedicated female staff with strict hygiene standards.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: '#4A90E2', marginTop: '4px' }}></i> 
                  <span>Can parents visit the campus to inspect the facilities before admission?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                Yes. We warmly invite parents to book a personalized campus tour from Monday to Saturday, between 9:00 AM and 5:00 PM, to inspect our classrooms, play zones, and safety measures at 181, Gopikrishna Colony, Gokul Nagar, Hosur.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ==========================================
           SECTION 7: Final Call to Action
           ========================================== */}
      <section className="vm-section final-cta-bg" style={{ padding: '5rem 0', backgroundImage: 'url("/kids-bg-pattern.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.92)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>See Our Inspiring <span style={{ color: '#E95D2A' }}>Facilities in Person</span></h2>
          <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
            Book a guided campus walk-through with our admissions team. Admissions are open from Toddler Care to 5th Standard.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href="/admission" className="btn btn-orange" style={{ padding: '1rem 2rem', backgroundColor: '#E95D2A', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(233, 93, 42, 0.3)' }}>Schedule a Campus Visit</Link>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#fff', padding: '1.5rem 2rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#fff0eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E95D2A', fontSize: '1.5rem' }}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#333', fontSize: '1.1rem' }}>SG Early Budding Campus</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>181, Gopikrishna Colony, R K Road,<br/>Gokul Nagar, Hosur, Tamil Nadu – 635109</p>
              </div>
            </div>
            
            <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#fff', padding: '1.5rem 2rem', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9', fontSize: '1.5rem' }}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#333', fontSize: '1.1rem' }}>Admissions Helpline</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>Call: +91 99946 64346<br/>sg.educations.org@gmail.com</p>
                <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.85rem' }}>Mon-Sat: 9:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}



