import React from 'react';
import Link from 'next/link';
import './franchise.css';
import FranchiseTestimonials from './FranchiseTestimonials';

export const metadata = {
  title: 'Preschool Franchise Opportunities in India | SG Education',
  description: 'Partner with SG Education. Start a high-ROI preschool franchise in Tamil Nadu & across India with proven ANBC+CPC curriculum, setup & marketing support.',
  alternates: {
    canonical: "https://sgeducations.in/franchise/"
  }
};

export default function FranchisePage() {
  return (
    <>
      <main className="franchise-page">
        
        {/* 1. HERO SECTION */}
        <section className="franchise-hero">
          <div className="container">
            <div className="franchise-hero-container">
              <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Partner with India&apos;s Fastest Growing Early Learning Network</h1>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '1.5rem', color: '#FFC300' }}>Launch a High-ROI Preschool Franchise with SG Education</h2>
              <p>
                Join SG Education&apos;s proven preschool franchise model. We empower edupreneurs across Tamil Nadu and Pan-India with research-backed ANBC + CPC curriculum, 360-degree infrastructure guidance, comprehensive staff training, and aggressive local enrollment marketing to build a thriving, recession-resilient educational institution in your community.
              </p>
              <div className="franchise-cta-group">
                <a href="#franchise-form" className="btn-franchise-primary">
                  Download Franchise Prospectus
                </a>
                <a href="#franchise-form" className="btn-franchise-secondary">
                  Apply for Franchise
                </a>
              </div>
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

        {/* 2. TRUST HIGHLIGHTS / STATS BAR */}
        <section style={{ backgroundColor: '#fff', padding: '2rem 0', borderBottom: '1px solid #eee' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '2rem', color: 'var(--playful-pink)', fontWeight: 'bold', marginBottom: '0.5rem' }}>Proven Business Model</div>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', margin: '0.5rem auto 0 auto', maxWidth: '250px' }}>High-Demand Early Childhood & Primary Education</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '2rem', color: 'var(--joyful-yellow)', fontWeight: 'bold', marginBottom: '0.5rem' }}>100% Turnkey Setup</div>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', margin: '0.5rem auto 0 auto', maxWidth: '250px' }}>Architectural Design, Classroom Kits & SOP Guidance</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '2rem', color: '#5A49E3', fontWeight: 'bold', marginBottom: '0.5rem' }}>End-to-End Training</div>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', margin: '0.5rem auto 0 auto', maxWidth: '250px' }}>Certified Teacher Coaching & Center Head Mentorship</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '2rem', color: '#D90013', fontWeight: 'bold', marginBottom: '0.5rem' }}>Rapid Break-Even</div>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', textAlign: 'center', margin: '0.5rem auto 0 auto', maxWidth: '250px' }}>Optimized Capital Investment & Fast Enrollment Drives</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY FRANCHISE WITH US (Benefits Grid) */}
        <section id="benefits" className="franchise-benefits">
          <div className="container">
            <div className="section-header-centered">
              <h2>Why Franchise With SG Education?</h2>
              <p>We provide complete 360-degree operational, academic, and marketing support to ensure your center thrives from day one.</p>
            </div>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3>1. Proven Business Model</h3>
                <p>Benefit from established institutional frameworks developed under the leadership of Sarathi Groups. Our tested operational systems and academic excellence ensure strong brand credibility and sustained operational profitability.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-book-open-reader"></i>
                </div>
                <h3>2. Innovative Dual Curriculum</h3>
                <p>Deliver a market-differentiating education combining Ancient Noble Bharat Culture (ANBC) for moral character with Corporate Professional Culture (CPC) for modern communication and leadership. Parents choose us over generic playschools.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-chalkboard-user"></i>
                </div>
                <h3>3. Comprehensive Training</h3>
                <p>We conduct rigorous on-boarding and continuous training for center heads, preschool teachers, and support staff. Your team receives lesson plans, classroom activity guides, and teaching toolkits before launch.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-bullhorn"></i>
                </div>
                <h3>4. Aggressive Marketing</h3>
                <p>Maximize admissions with our centralized marketing backing. We assist with digital lead-generation campaigns, localized print collaterals, social media promotions, and structured launch-event enrollment drives.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <h3>5. Detailed Operational SOPs</h3>
                <p>Receive comprehensive Standard Operating Procedures covering daily school routines, safety protocols, child hygiene maintenance, fee management, parent communication, and staff administration.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-network-wired"></i>
                </div>
                <h3>6. Collaborative Community</h3>
                <p>Connect with a collaborative network of successful franchise partners to exchange innovative ideas, admissions strategies, and operational best practices for continuous institutional growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FRANCHISE MODEL & INVESTMENT OVERVIEW */}
        <section style={{ padding: '5rem 0', backgroundColor: '#F9FAFB' }}>
          <div className="container">
            <div className="section-header-centered">
              <h2>Transparent Investment Models Tailored for Scalable Growth</h2>
              <p>Flexible center formats designed for urban neighborhoods, tier-2 cities, and developing educational hubs.</p>
            </div>
            
            <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
              <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <thead>
                  <tr style={{ backgroundColor: '#E95D2A', color: '#fff', textAlign: 'left' }}>
                    <th style={{ padding: '1.5rem', fontWeight: 'bold' }}>Parameter</th>
                    <th style={{ padding: '1.5rem', fontWeight: 'bold' }}>Preschool & Daycare Center</th>
                    <th style={{ padding: '1.5rem', fontWeight: 'bold' }}>Integrated Early Budding & Primary Center</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1.5rem', fontWeight: 'bold', color: '#333' }}>Space Requirement</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>1,500 – 2,500 Sq. Ft. (Built-up / Independent house)</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>2,500 – 5,000+ Sq. Ft. (With outdoor play area)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '1.5rem', fontWeight: 'bold', color: '#333' }}>Programs Offered</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>Toddler Care, Playgroup, Nursery, LKG, UKG</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>Toddler Care up to 5th Standard</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1.5rem', fontWeight: 'bold', color: '#333' }}>Ideal Location</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>Prime residential areas with high young-family density</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>Accessible educational corridors & developing suburban hubs</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#fafafa' }}>
                    <td style={{ padding: '1.5rem', fontWeight: 'bold', color: '#333' }}>Support Provided</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>Full setup layout, curriculum, digital tools, training</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>Infrastructure planning, lab/library setup, affiliation guidance</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1.5rem', fontWeight: 'bold', color: '#333' }}>Expected Break-Even</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>12 to 18 Months (Subject to local market enrollment)</td>
                    <td style={{ padding: '1.5rem', color: '#666' }}>18 to 24 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. THE JOURNEY (Process Timeline) */}
        <section className="franchise-process">
          <div className="container">
            <div className="section-header-centered">
              <h2>Your 5-Step Journey to Launching an SG Education Center</h2>
              <p>A transparent and structured onboarding roadmap from initial inquiry to your grand opening.</p>
            </div>
            
            <div className="timeline">
              <div className="timeline-item left">
                <div className="timeline-content">
                  <div className="step-number">01</div>
                  <h3>Inquiry & Discovery</h3>
                  <p>Submit your franchise application online. Our dedicated franchise development team connects with you to evaluate your goals, discuss territory availability, and review financial projections.</p>
                </div>
              </div>
              
              <div className="timeline-item right">
                <div className="timeline-content">
                  <div className="step-number">02</div>
                  <h3>Site Selection & Property Approval</h3>
                  <p>We assist you in selecting the ideal location, evaluating property footfall, catchment demographics, road accessibility, and safety compliance according to our brand guidelines.</p>
                </div>
              </div>
              
              <div className="timeline-item left">
                <div className="timeline-content">
                  <div className="step-number">03</div>
                  <h3>Agreement & Architectural Planning</h3>
                  <p>Formalize your partnership with the franchise agreement. Our architects provide customized floor plans, color schemes, classroom zoning, and safety layouts.</p>
                </div>
              </div>
              
              <div className="timeline-item right">
                <div className="timeline-content">
                  <div className="step-number">04</div>
                  <h3>Teacher Training & Infrastructure Setup</h3>
                  <p>While your center interiors, branded furniture, and play areas are installed, we conduct comprehensive academic training for teachers and administrative staff.</p>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="timeline-content">
                  <div className="step-number">05</div>
                  <h3>Grand Launch & Admissions Drive</h3>
                  <p>With pre-launch digital campaigns, community flyer distribution, and verified operational readiness, you host your grand opening and start welcoming student admissions!</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <FranchiseTestimonials />

        {/* 7. FAQ SECTION */}
        <section className="vm-section faq-bg" style={{ padding: '5rem 0', backgroundColor: '#F9FAFB' }}>
          <div className="container">
            <div className="section-header-centered">
              <h2>Frequently Asked Questions About <span style={{ color: '#FF2A7A' }}>SG Education Franchise</span></h2>
            </div>
            
            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
                <summary style={{ padding: '1.5rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                    <i className="fa-solid fa-circle-question" style={{ color: '#FF2A7A', marginTop: '4px' }}></i> 
                    <span>What is the investment required to start an SG Education preschool franchise in India?</span>
                  </div>
                </summary>
                <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1.5rem 1.5rem 36px' }}>
                  Starting an SG Education preschool franchise typically requires an investment ranging based on center size and city tier, alongside a minimum space of 1,500 to 2,500 sq. ft. in a residential area. The investment covers setup, branded furniture, initial curriculum kits, and launch training.
                </p>
              </details>
              
              <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
                <summary style={{ padding: '1.5rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                    <i className="fa-solid fa-circle-question" style={{ color: '#00BFA6', marginTop: '4px' }}></i> 
                    <span>Does SG Education help with preschool teacher recruitment and training?</span>
                  </div>
                </summary>
                <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1.5rem 1.5rem 36px' }}>
                  Yes. SG Education provides complete hiring guidelines, job descriptions, and rigorous multi-module training programs for center heads and teachers, certifying them in our proprietary ANBC + CPC curriculum before the school opens.
                </p>
              </details>

              <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
                <summary style={{ padding: '1.5rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                    <i className="fa-solid fa-circle-question" style={{ color: '#FFC300', marginTop: '4px' }}></i> 
                    <span>How does SG Education support student enrollment and marketing?</span>
                  </div>
                </summary>
                <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1.5rem 1.5rem 36px' }}>
                  We provide end-to-end enrollment support, including localized digital marketing campaigns (Google Ads, Meta Ads), outdoor branding designs, admission brochures, social media creatives, and pre-launch event strategies to drive admissions from day one.
                </p>
              </details>

              <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
                <summary style={{ padding: '1.5rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                    <i className="fa-solid fa-circle-question" style={{ color: '#0ea5e9', marginTop: '4px' }}></i> 
                    <span>Which locations are currently available for SG Education franchise expansion?</span>
                  </div>
                </summary>
                <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1.5rem 1.5rem 36px' }}>
                  Franchise territories are open across major cities and emerging towns in Tamil Nadu (including Hosur, Chennai, Coimbatore, Salem), Karnataka (Bangalore, Mysore), and pan-India educational hubs. Territory exclusivity is granted on a first-come, first-evaluated basis.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 8. FINAL CALL TO ACTION & FORM */}
        <section id="franchise-form" style={{ padding: '5rem 0', backgroundImage: 'url("/kids-bg-pattern.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.92)' }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-header-centered">
              <h2>Build a Legacy of <span style={{ color: '#E95D2A' }}>Educational Excellence</span> in Your City</h2>
              <p>Take the first step toward launching your own prestigious preschool. Contact us today to receive the detailed SG Education Franchise Kit.</p>
            </div>
            
            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
              
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#555', marginBottom: '0.5rem' }}><strong>Direct Franchise Helpdesk:</strong> +91 9994664346</p>
                <p style={{ color: '#555', marginBottom: '0.5rem' }}><strong>Email:</strong> sg.educations.org@gmail.com / info@sgeducations.com</p>
                <p style={{ color: '#555', margin: 0 }}><strong>Corporate Office:</strong> SG Educations, Rangopanditha Agraharam Village, Gokul Nagar, Hosur, Tamil Nadu – 635109</p>
              </div>
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
"@id": "https://sgeducations.in/franchise/#webpage",
"url": "https://sgeducations.in/franchise/",
"name": "Preschool Franchise Opportunities in India | SG Education",
"description": "Start a high-ROI preschool franchise with SG Education. Complete curriculum, setup, training and marketing support across Tamil Nadu and Pan-India.",
"inLanguage": "en-US",
"isPartOf": {
"@type": "WebSite",
"@id": "https://sgeducations.in/#website",
"url": "https://sgeducations.in/",
"name": "SG Educations"
}
},
{
"@type": "EducationalOrganization",
"@id": "https://sgeducations.in/#organization",
"name": "SG Education",
"url": "https://sgeducations.in/",
"logo": "https://sgeducations.in/wp-content/uploads/logo.png",
"telephone": "+91-9994664346",
"email": "sg.educations.org@gmail.com",
"address": {
"@type": "PostalAddress",
"streetAddress": "Rangopanditha Agraharam Village, Gokul Nagar",
"addressLocality": "Hosur",
"addressRegion": "Tamil Nadu",
"postalCode": "635109",
"addressCountry": "IN"
}
},
{
"@type": "FAQPage",
"@id": "https://sgeducations.in/franchise/#faq",
"mainEntity": [
{
"@type": "Question",
"name": "What is the investment required to start an SG Education preschool franchise in India?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Starting an SG Education preschool franchise typically requires an investment based on center size and city tier, alongside a minimum space of 1,500 to 2,500 sq. ft. in a residential area. The investment covers setup, branded furniture, initial curriculum kits, and launch training."
}
},
{
"@type": "Question",
"name": "Does SG Education help with preschool teacher recruitment and training?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes. SG Education provides complete hiring guidelines, job descriptions, and rigorous multi-module training programs for center heads and teachers, certifying them in our proprietary ANBC + CPC curriculum before the school opens."
}
},
{
"@type": "Question",
"name": "How does SG Education support student enrollment and marketing?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We provide end-to-end enrollment support, including localized digital marketing campaigns (Google Ads, Meta Ads), outdoor branding designs, admission brochures, social media creatives, and pre-launch event strategies to drive admissions from day one."
}
},
{
"@type": "Question",
"name": "Which locations are currently available for SG Education franchise expansion?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Franchise territories are open across major cities and emerging towns in Tamil Nadu (including Hosur, Chennai, Coimbatore, Salem), Karnataka (Bangalore, Mysore), and pan-India educational hubs. Territory exclusivity is granted on a first-come, first-evaluated basis."
}
}
]
}
]
}
        `}} />

      </main>
    </>
  );
}
