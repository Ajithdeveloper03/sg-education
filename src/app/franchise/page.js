import React from 'react';
import Link from 'next/link';
import './franchise.css';
import FranchiseTestimonials from './FranchiseTestimonials';

export const metadata = {
  title: 'Franchise Opportunities | SG Education',
  description: 'Join the SG Education family. Partner with us and shape the future of education in your community.',
};

export default function FranchisePage() {
  return (
    <>
      <main className="franchise-page">
        
        {/* 1. HERO SECTION */}
        <section className="franchise-hero">
          <div className="container">
            <div className="franchise-hero-container">
              <h1>Partner with SG Education</h1>
              <p>
                Join our proven franchise model and build a successful educational institution in your community.
              </p>
              <div className="franchise-cta-group">
                <Link href="/contact" className="btn-franchise-primary">
                  Apply for Franchise
                </Link>
                <a href="#benefits" className="btn-franchise-secondary">
                  Explore Benefits
                </a>
              </div>
            </div>
          </div>
          
          {/* Cloud Transition */}
          <div className="cloud-container">
            <div className="cloud-wrapper">
              <img src="/sg-education/cloud.webp" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
              <img src="/sg-education/cloud.webp" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
            </div>
          </div>
        </section>

        {/* 2. WHY FRANCHISE WITH US (Benefits Grid) */}
        <section id="benefits" className="franchise-benefits">
          <div className="container">
            <div className="section-header-centered">
              <h2>Why Franchise With Us?</h2>
              <p>We provide comprehensive support at every step of your journey, ensuring your educational venture thrives from day one.</p>
            </div>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3>Proven Business Model</h3>
                <p>Benefit from our years of experience. Our established operational processes and academic frameworks ensure a high return on investment.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-book-open-reader"></i>
                </div>
                <h3>Innovative Curriculum</h3>
                <p>Access our proprietary, research-backed curriculum designed to foster holistic development and 21st-century skills in children.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-chalkboard-user"></i>
                </div>
                <h3>Comprehensive Training</h3>
                <p>We provide rigorous training for center heads, teachers, and staff, along with continuous academic and operational support.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-bullhorn"></i>
                </div>
                <h3>Marketing Support</h3>
                <p>Leverage our strong brand presence. We assist with local marketing strategies, digital campaigns, and enrollment drives.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <h3>Operational Guidance</h3>
                <p>Detailed standard operating procedures (SOPs) for daily operations, quality control, and seamless administration.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fa-solid fa-network-wired"></i>
                </div>
                <h3>Community Network</h3>
                <p>Connect with a vast network of successful franchisees to exchange ideas, strategies, and best practices for growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE JOURNEY (Process Timeline) */}
        <section className="franchise-process">
          <div className="container">
            <div className="section-header-centered">
              <h2>Your Journey to Success</h2>
              <p>A transparent and streamlined process to help you launch your SG Education center smoothly.</p>
            </div>
            
            <div className="timeline">
              <div className="timeline-item left">
                <div className="timeline-content">
                  <div className="step-number">01</div>
                  <h3>Inquiry & Discovery</h3>
                  <p>Submit your franchise application. Our team will connect with you to discuss your vision, location preferences, and basic requirements.</p>
                </div>
              </div>
              
              <div className="timeline-item right">
                <div className="timeline-content">
                  <div className="step-number">02</div>
                  <h3>Site Selection & Approval</h3>
                  <p>We assist you in identifying the ideal location and evaluating the property based on our infrastructural guidelines.</p>
                </div>
              </div>
              
              <div className="timeline-item left">
                <div className="timeline-content">
                  <div className="step-number">03</div>
                  <h3>Agreement & Planning</h3>
                  <p>Sign the franchise agreement. We provide detailed architectural layouts and guidelines for setting up the center.</p>
                </div>
              </div>
              
              <div className="timeline-item right">
                <div className="timeline-content">
                  <div className="step-number">04</div>
                  <h3>Training & Setup</h3>
                  <p>While your infrastructure gets ready, we conduct comprehensive training programs for you and your newly recruited staff.</p>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="timeline-content">
                  <div className="step-number">05</div>
                  <h3>Grand Launch</h3>
                  <p>With marketing campaigns and operational readiness verified, you successfully launch your SG Education center!</p>
                </div>
              </div>
            </div>
            
            <div style={{textAlign: 'center', marginTop: '60px'}}>
              <Link href="/contact" className="btn-franchise-primary" style={{display: 'inline-block'}}>
                Start Your Journey Today
              </Link>
            </div>
          </div>
        </section>

        {/* 4. TESTIMONIALS */}
        <FranchiseTestimonials />

      </main>
    </>
  );
}
