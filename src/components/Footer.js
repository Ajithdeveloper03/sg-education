"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  if (pathname === '/admission' || isAdminRoute) return null;

  return (
    <section className="newsletter-section section-padding" style={{ backgroundColor: '#FAF8F0', paddingBottom: '0' }}>
      <div className="container">
      </div>

      {/* Playful Decorative Grass Footer (Light Background, Navy elements for absolute visibility) */}
      <div className="decorative-grass-wrapper" style={{ position: 'relative' }}>
        <div className="grass-doodles"></div>

        <div className="container footer-content-grid">
          <div className="footer-col brand-col">
            <Link href="/" className="footer-logo">
              <img src="/sg-education/logo.webp" alt="SG Education Logo" />
              <span className="logo-text">SG Education</span>
            </Link>
            <p className="footer-about-text" style={{ marginBottom: '1.5rem' }}>
              Educate · Empower · Elevate! Nurturing clear conscience, strong bodies, and values since Jun 2023.
            </p>
            <div className="footer-contact-info" style={{ marginBottom: '1.5rem' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '0.95rem', color: '#555', display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-envelope" style={{ marginRight: '10px', color: '#E95D2A', fontSize: '1.1rem' }}></i> sg.educations.org@gmail.com
              </p>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-phone" style={{ marginRight: '10px', color: '#E95D2A', fontSize: '1.1rem' }}></i> +91 9994664346
              </p>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1FcMDCoN6F/" target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/sg_early_budding?igsh=MWJlejYwOHVpajRtdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.youtube.com/@SGEDUCATIONS" target="_blank" rel="noopener noreferrer" className="soc-btn" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about/sg-early-budding">SG Early Budding</Link></li>
              <li><Link href="/facilities">Facilities</Link></li>
              <li><Link href="/gallery">Memory Clips</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3>Location</h3>
            <p style={{ color: 'var(--playful-pink)', fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '1.2rem', marginTop: '-0.5rem' }}>Your Kids Second Home!!</p>
            <div className="contact-row" style={{ alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div className="footer-contact-item" style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                <div className="footer-contact-icon">
                  <i className="fa-solid fa-location-dot" style={{ color: '#E95D2A' }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#1d2a44' }}>SG Early Budding</h4>
                  <p className="footer-contact-p" style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>181, Gopikrishna Colony, R K Road, Gokul Nagar, Hosur - 635109</p>
                </div>
              </div>
              <div className="footer-contact-item" style={{ display: 'flex', gap: '10px' }}>
                <div className="footer-contact-icon">
                  <i className="fa-solid fa-location-dot" style={{ color: '#E95D2A' }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#1d2a44' }}>SG Educations</h4>
                  <p className="footer-contact-p" style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>Rangopanditha Agraharam Village, Gokul Nagar, Hosur - 635109</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

