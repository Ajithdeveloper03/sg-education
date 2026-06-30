"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const isInnerPage = pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAdminRoute = pathname?.includes('/admin');
  const isAdmissionRoute = pathname?.includes('/admission');

  if (isAdmissionRoute || isAdminRoute) return null;

  return (
    <>
      {!isAdminRoute && (
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
      )}

      <header id="header" className={`${headerScrolled ? "scrolled" : ""} ${isInnerPage ? "inner-page" : ""}`.trim()}>
        <div className="container navbar">
          <Link href="/" className="logo-container" id="logo-link">
            <img 
              src={pathname === '/about/sg-early-budding' ? "/sg-education/early budding logo.png" : "/sg-education/logo.webp"} 
              className="logo-img" 
              alt={pathname === '/about/sg-early-budding' ? "SG Early Budding Logo" : "SG Education Logo"} 
            />
          </Link>

          {!isAdminRoute && (
            <>
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
                      <Link href="/about/founders-message" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Meet Our Team</Link>
                      <Link href="/about/school-motto" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>School Motto</Link>
                      <Link href="/facilities" className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>Facilities</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link href="/our-programs" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Our Programs</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link href="/franchise" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Franchise</Link>
                  </li>
                  
                  <li className="nav-item"><Link href="/gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</Link></li>
                  <li className="nav-item"><Link href="/blog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
                  <li className="nav-item"><Link href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                </ul>
                <div className="nav-cta">
                  <Link href="/admission" className="btn btn-rainbow" onClick={() => setMobileMenuOpen(false)} style={{ border: 'none', textDecoration: 'none' }}>
                    Admission
                  </Link>
                </div>
              </nav>
            </>
          )}
        </div>
      </header>
    </>
  );
}