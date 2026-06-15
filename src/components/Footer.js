"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/admission') return null;

  return (
    <section className="newsletter-section section-padding" style={{ backgroundColor: '#FAF8F0', paddingBottom: '0' }}>
      <div className="container">
      </div>

      {/* Playful Decorative Grass Footer (Light Background, Navy elements for absolute visibility) */}
      <div className="decorative-grass-wrapper" style={{ position: 'relative' }}>
        {/* Layered Decorative Image (Above Grass) */}
        <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', overflow: 'hidden' }}>
          <img src="/sg-education/backgroung remove.png" alt="Decorative Kids" style={{ maxWidth: '80%', height: 'auto', maxHeight: '350px', objectFit: 'contain', marginBottom: '2rem' }} />
        </div>
        
        <div className="grass-doodles"></div>

        <div className="container footer-content-grid">
          <div className="footer-col brand-col">
            <Link href="/" className="footer-logo">
              <img src="/sg-education/logo.webp" alt="SG Education Logo" />
              <span className="logo-text">SG Education</span>
            </Link>
            <p className="footer-about-text">
              CoEducate · Empower · Elevate! Nurturing clear conscience, strong bodies, and values since July 2023.
            </p>
            <div className="social-icons">
              <a href="#" className="soc-btn" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="soc-btn" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="soc-btn" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about/sg-early-budding">SG Early Budding</Link></li>
              <li><Link href="/">Facilities</Link></li>
              <li><Link href="/gallery">Memory Clips</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3>Email us</h3>
            <div className="contact-row">
              <div className="c-icon"><i className="fa-solid fa-envelope"></i></div>
              <p className="footer-contact-p">support@sgeducations.com</p>
            </div>
            <h3 style={{ marginTop: '2rem' }}>Location</h3>
            <div className="contact-row">
              <div className="c-icon"><i className="fa-solid fa-map-location-dot"></i></div>
              <p className="footer-contact-p">Flat no. D337, near Nanthavanam, Gokul Nagar, Agraharam, Hosur, Tamil Nadu - 635109</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
