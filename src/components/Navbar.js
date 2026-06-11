"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdmissionModal from "./AdmissionModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const isInnerPage = pathname !== '/';

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isAdmissionModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isAdmissionModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="header-top-bar">
        <div className="container top-bar-content">
          <div className="top-info-left">
            <span><i className="fa-solid fa-map-location-dot"></i> Gokul Nagar, Hosur</span>
            <span><i className="fa-solid fa-phone-volume"></i> +91 7339475210</span>
          </div>
          <div className="top-social-right">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <header id="header" className={`${headerScrolled ? "scrolled" : ""} ${isInnerPage ? "inner-page" : ""}`.trim()}>
        <div className="container navbar">
          <Link href="/" className="logo-container" id="logo-link">
            <img src="/sg-education/logo.webp" className="logo-img" alt="SG Education Logo" />
          </Link>

          <button
            className={`mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`} id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item"><Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              
              <li className="nav-item">
                <span className="nav-link" style={{ cursor: 'pointer' }}>About Us <i className="fa-solid fa-chevron-down" style={{fontSize: '0.7rem'}}></i></span>
                <div className="dropdown-menu">
                  <Link href="/about/sg-early-budding" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>SG Early Budding</Link>
                  <Link href="/about/vision-mission" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Vision & Mission</Link>
                  <Link href="/about/founders-message" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Founders Message</Link>
                  <Link href="/about/school-motto" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>School Motto</Link>
                </div>
              </li>
              
              <li className="nav-item">
                <Link href="/academic" className="nav-link">Academic <i className="fa-solid fa-chevron-down" style={{fontSize: '0.7rem'}}></i></Link>
                <div className="dropdown-menu">
                  <Link href="/academic#pre-school" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Pre School</Link>
                  <Link href="/academic#lkg-ukg" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>LKG & UKG</Link>
                  <Link href="/academic/primary" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>1st to 5th Std</Link>
                </div>
              </li>
              
              <li className="nav-item">
                <Link href="/facilities" className="nav-link">Facilities <i className="fa-solid fa-chevron-down" style={{fontSize: '0.7rem'}}></i></Link>
                <div className="dropdown-menu">
                  <Link href="/facilities/library" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Library</Link>
                  <Link href="/facilities/health" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Health & Well-being</Link>
                  <Link href="/facilities/beyond" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Beyond Academics</Link>
                </div>
              </li>
              
              <li className="nav-item"><Link href="/gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</Link></li>
              <li className="nav-item"><Link href="/blog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
              <li className="nav-item"><Link href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
            <div className="nav-cta">
              <button 
                className="btn btn-rainbow" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdmissionModalOpen(true);
                }}
                style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Admission
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Admission Modal */}
      <AdmissionModal 
        isOpen={isAdmissionModalOpen} 
        onClose={() => setIsAdmissionModalOpen(false)} 
      />
    </>
  );
}
