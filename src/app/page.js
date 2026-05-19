"use client";

import { useState, useEffect } from "react";

// ==========================================
// 1. FLOATING KIDS-RELATED UNIQUE DOODLES (SVGs)
// ==========================================

const LightbulbDoodle = ({ style }) => (
  <svg className="floating-doodle" style={{ width: '55px', height: '55px', stroke: 'var(--joyful-yellow)', strokeWidth: '5', fill: 'none', position: 'absolute', zIndex: 12, ...style }} viewBox="0 0 100 100">
    <path d="M30,40 A20,20 0 1,1 70,40 C70,50 60,55 60,65 L40,65 C40,55 30,50 30,40 Z" strokeLinecap="round" />
    <line x1="45" y1="75" x2="55" y2="75" strokeLinecap="round" />
    <line x1="40" y1="85" x2="60" y2="85" strokeLinecap="round" />
    <line x1="50" y1="10" x2="50" y2="20" strokeLinecap="round" />
    <line x1="15" y1="35" x2="25" y2="40" strokeLinecap="round" />
    <line x1="85" y1="35" x2="75" y2="40" strokeLinecap="round" />
  </svg>
);

const HeartDoodle = ({ style }) => (
  <svg className="floating-doodle-rotate" style={{ width: '48px', height: '48px', stroke: 'var(--playful-pink)', strokeWidth: '5', fill: 'none', position: 'absolute', zIndex: 12, ...style }} viewBox="0 0 100 100">
    <path d="M50,35 C50,20 30,15 20,25 C10,35 15,55 50,80 C85,55 90,35 80,25 C70,15 50,20 50,35 Z" strokeLinecap="round" />
  </svg>
);

const LightningDoodle = ({ style }) => (
  <svg className="floating-doodle" style={{ width: '42px', height: '42px', fill: 'var(--joyful-yellow)', position: 'absolute', zIndex: 12, ...style }} viewBox="0 0 100 100">
    <path d="M40,10 L65,10 L45,45 L70,45 L35,90 L45,55 L30,55 Z" />
  </svg>
);

const SunDoodle = ({ style }) => (
  <svg className="floating-doodle-rotate" style={{ width: '65px', height: '65px', fill: '#FFC300', position: 'absolute', zIndex: 12, ...style }} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="22" />
    <path d="M50,10 L50,22 M50,78 L50,90 M10,50 L22,50 M78,50 L90,50 M22,22 L31,31 M69,69 L78,78 M22,78 L31,69 M69,31 L78,22" stroke="#FFC300" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const AirplaneDoodle = ({ style }) => (
  <svg className="floating-doodle" style={{ width: '55px', height: '55px', stroke: '#E95D2A', fill: 'none', position: 'absolute', zIndex: 12, ...style }} viewBox="0 0 100 100">
    <path d="M20,50 L80,20 L60,80 L50,60 L20,50 Z" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50,60 L80,20" strokeWidth="4" strokeLinecap="round" />
    <path d="M20,65 C30,75 40,75 50,65 C60,55 70,55 80,65" stroke="#00AEFF" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
  </svg>
);

// ==========================================
// 2. DATA CONSTANTS
// ==========================================

const THREE_PILLARS = [
  {
    title: "Hygiene & Safety",
    desc: "Maintaining a fully sanitized, safe environment with healthy meals and CCTV security.",
    img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=500&q=80",
    icon: "fa-shield-heart",
    color: "#FF2A7A"
  },
  {
    title: "Traditional Customs",
    desc: "Preserving cultural heritage through moral lessons, festival celebrations, and gratitude.",
    img: "https://images.unsplash.com/photo-1561489396-888724a1543d?auto=format&fit=crop&w=500&q=80",
    icon: "fa-om",
    color: "#5A49E3"
  },
  {
    title: "Fun & Skill Learning",
    desc: "Activity-based project puzzles, early public speaking, and confidence-building skills.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
    icon: "fa-graduation-cap",
    color: "#00AEFF"
  }
];

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "SG Early Budding is magical! My son Aarav now tidies his play space, greets elders, and runs happily to school.",
    name: "Priyanka Sharma",
    role: "Mother of Aarav",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    border: "var(--lime-green)"
  },
  {
    stars: 5,
    quote: "The blend of traditional moral stories with modern speech training has boosted my daughter's confidence immensely.",
    name: "Rajesh Balan",
    role: "Father of Deepthi",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    border: "var(--sky-blue)"
  },
  {
    stars: 5,
    quote: "Safe campus, warm teachers, and beautiful cultural custom exposure. It is exactly what my child needed.",
    name: "Sarah Taylor",
    role: "Mother of Kabir",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
    border: "var(--joyful-yellow)"
  }
];

export default function Home() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Form states
  const [parentName, setParentName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [emailId, setEmailId] = useState("");
  const [childName, setChildName] = useState("");
  const [childDob, setChildDob] = useState("");
  const [place, setPlace] = useState("");

  const [parentInvalid, setParentInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [childNameInvalid, setChildNameInvalid] = useState(false);
  const [childDobInvalid, setChildDobInvalid] = useState(false);

  const [successOpen, setSuccessOpen] = useState(false);

  // Scroll Reveal hook
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    // Scroll reveal observer
    const revealElems = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElems.forEach((elem) => observer.observe(elem));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    let err = false;

    if (!parentName.trim()) { setParentInvalid(true); err = true; } else { setParentInvalid(false); }
    if (!emailId.trim() || !emailId.includes("@")) { setEmailInvalid(true); err = true; } else { setEmailInvalid(false); }
    if (!childName.trim()) { setChildNameInvalid(true); err = true; } else { setChildNameInvalid(false); }
    if (!childDob) { setChildDobInvalid(true); err = true; } else { setChildDobInvalid(false); }

    const cleanPhone = phoneNum.replace(/\D/g, "");
    if (cleanPhone.length < 10) { setPhoneInvalid(true); err = true; } else { setPhoneInvalid(false); }

    if (!err) {
      setParentName("");
      setPhoneNum("");
      setEmailId("");
      setChildName("");
      setChildDob("");
      setPlace("");
      setSuccessOpen(true);
    }
  };

  return (
    <>
      {/* ==========================================
           TOP BAR
           ========================================== */}
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

      {/* ==========================================
           1. PLAYFUL HEADER
           ========================================== */}
      <header id="header">
        <div className="container navbar">
          <a href="#hero" className="logo-container" id="logo-link">
            <img src="/sg-education/logo.png" className="logo-img" alt="SG Education Logo" />
            <div className="brand-text">
              <span className="brand-name">SG Education</span>
              <span className="brand-tag">Early Budding</span>
            </div>
          </a>

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
              <li><a href="#hero" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
              <li><a href="#pedagogy" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pillars</a></li>
              <li><a href="#gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</a></li>
              <li><a href="#admissions" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Admissions</a></li>
            </ul>
            <div className="nav-cta">
              <a href="#admissions" className="btn btn-rainbow" onClick={() => setMobileMenuOpen(false)}>
                Schedule a Tour
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ==========================================
           2. HERO SECTION WITH VIDEO BACKGROUND
           ========================================== */}
      <section className="hero-section" id="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
        >
          <source src="/sg-education/kids.mp4" type="video/mp4" />
        </video>

        {/* Navy Overlay */}
        <div className="hero-overlay"></div>

        <div className="hero-shapes">
          <SunDoodle style={{ top: "12%", right: "8%" }} />
          <AirplaneDoodle style={{ bottom: "18%", left: "4%" }} />
          <HeartDoodle style={{ top: "35%", left: "8%" }} />
          <LightningDoodle style={{ bottom: "25%", right: "12%" }} />
        </div>

        <div className="container hero-container" style={{ position: "relative", zIndex: 5 }}>
          <div className="hero-center-content">
            <h1 className="hero-title">
              Welcome to <span className="text-yellow">SG Educations</span>
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
              We merge ancient Bharath wisdom with modern corporate culture standards to shape confident, discipline-driven young leaders.
            </p>
            <div className="hero-btns justify-center">
              <a href="#admissions" className="btn btn-yellow-large">Enroll Now</a>
              <a href="#about" className="btn btn-outline-white">Explore Ethos</a>
            </div>
          </div>
        </div>

        <div className="wave-divider bottom">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,96C240,128,480,32,720,64C960,96,1200,32,1440,80L1440,120L0,120Z" fill="#FAF9F5"></path>
          </svg>
        </div>
      </section>

      {/* ==========================================
           3. ABOUT US (SCREENSHOT 1 & 5 EXACT ALIGNMENT)
           ========================================== */}
      <section className="section-padding about-section scroll-reveal" id="about" style={{ position: "relative", overflow: "hidden" }}>

        <div className="container">
          <div className="intro-grid">

            {/* Left side: Portrait with overlapping yellow circle & teardrop badge (Screenshot 5 style) */}
            <div className="about-portrait-side">

              {/* Floating doodles */}
              <LightbulbDoodle style={{ top: '-15px', left: '10%' }} />
              <HeartDoodle style={{ right: '-25px', top: '42%' }} />
              <LightningDoodle style={{ bottom: '-35px', left: '50%' }} />
              <SunDoodle style={{ top: '10%', right: '10%' }} />
              <AirplaneDoodle style={{ bottom: '15%', right: '5%' }} />

              {/* Large solid yellow circle */}
              <div className="about-yellow-bg-circle"></div>

              {/* Image representing schoolboy with backpack */}
              <div className="about-student-frame">
                <img
                  src="/sg-education/about-student.png"
                  alt="Happy schoolboy cutout"
                  className="about-student-img"
                />

                {/* Overlay phone number badge */}
                <div className="about-phone-badge">
                  <i className="fa-solid fa-phone"></i>
                  <span>7339475210</span>
                </div>
              </div>

              {/* Absolutely positioned teardrop EXPERIENCE badge */}
              <div className="about-experience-badge hover-lift">
                <strong>38+</strong>
                <span>Experience</span>
              </div>
            </div>

            {/* Right side: about details */}
            <div className="intro-text">
              <span className="label-brand color-blue">About Us</span>
              <h2>Safe, Fun & Educational - <span className="highlight-blue text-blue-line">Just What Your Child Needs</span></h2>
              <p className="intro-lead-p" style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
                Established in July 2023, SG Education blends traditional culture values with contemporary business skills to lay a solid foundation for early budding minds.
              </p>

              {/* 2-Column Checklist (Screenshot 5 style) */}
              <div className="about-checklist-grid">
                <div className="check-item">
                  <div className="check-icon-circle"><i className="fa-solid fa-circle-check"></i></div>
                  <span>Learning & Fun</span>
                </div>
                <div className="check-item">
                  <div className="check-icon-circle"><i className="fa-solid fa-circle-check"></i></div>
                  <span>Healthy Meals</span>
                </div>
                <div className="check-item">
                  <div className="check-icon-circle"><i className="fa-solid fa-circle-check"></i></div>
                  <span>Children Safety</span>
                </div>
                <div className="check-item">
                  <div className="check-icon-circle"><i className="fa-solid fa-circle-check"></i></div>
                  <span>Cute Environment</span>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <a href="#admissions" className="btn btn-orange">Online Admission <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
           3B. FOUNDER & MENTOR SECTION (NEW)
           ========================================== */}
      <section className="founder-mentor-section section-padding scroll-reveal" id="leadership" style={{ position: "relative" }}>

        {/* Top Wave divider filled with previous section's end bg (#EEF2F7) */}
        <div className="wave-divider top">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32C240,64,480,0,720,32C960,64,1200,0,1440,32L1440,0L0,0Z" fill="#EEF2F7"></path>
          </svg>
        </div>

        {/* MASSIVE POPULATED FLOATING ELEMENTS */}
        <SunDoodle style={{ top: '8%', left: '6%' }} />
        <AirplaneDoodle style={{ top: '25%', right: '8%' }} />
        <HeartDoodle style={{ top: '45%', left: '5%' }} />
        <LightningDoodle style={{ bottom: '28%', right: '6%' }} />
        <LightbulbDoodle style={{ bottom: '10%', left: '8%' }} />

        <div className="container" style={{ marginTop: '5rem', position: 'relative', zIndex: 10 }}>
          <div className="leadership-split-grid">

            {/* Left side detail panel */}
            <div className="leadership-left-details">
              <span className="label-brand color-orange">Our Pillars</span>
              <h2 className="leadership-split-title">
                Most <span className="highlight-orange text-orange-line">Dedicated Staff</span> for Your Child
              </h2>
              <p className="leadership-split-p">
                Our leadership combines ancient Bharath’s character-building wisdom with modern corporate excellence to create a nurturing, secure, and future-ready environment for your children.
              </p>
            </div>

            {/* Right side staff card panel (Flex Row) */}
            <div className="leadership-right-cards">

              {/* CARD 1: M.C MAMATHA (FOUNDER) */}
              <div className="leader-card hover-lift">
                <div className="leader-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                    alt="M.C Mamatha - Founder"
                  />
                  <div className="leader-share-btn" aria-label="Share profile">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                </div>
                <h3 className="leader-name">M.C Mamatha</h3>
                <span className="leader-role">Founder & Director</span>
              </div>

              {/* CARD 2: SHASHI KIRAN K.N (MENTOR) */}
              <div className="leader-card hover-lift">
                <div className="leader-image-frame">
                  <img
                    src="/sg-education/mentor.png"
                    alt="Shashi Kiran K.N - Mentor"
                  />
                  <div className="leader-share-btn" aria-label="Share profile">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                </div>
                <h3 className="leader-name">Shashi Kiran K.N</h3>
                <span className="leader-role">Chief Mentor & Co-Founder</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
           4. SYSTEM PILLARS SECTION (DARK INDIGO - SCREENSHOT 4 ALIGNMENT)
           ========================================== */}
      <section className="pedagogy-section section-padding dark-navy-bg scroll-reveal" id="pedagogy" style={{ position: "relative" }}>
        <div className="wave-divider top">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32C240,64,480,0,720,32C960,64,1200,0,1440,32L1440,0L0,0Z" fill="#FFF5E6"></path>
          </svg>
        </div>

        {/* Floating doodles */}
        <HeartDoodle style={{ top: '15%', left: '8%' }} />
        <LightbulbDoodle style={{ bottom: '20%', right: '8%' }} />
        <SunDoodle style={{ top: '15%', right: '12%' }} />
        <LightningDoodle style={{ bottom: '15%', left: '12%' }} />

        <div className="container" style={{ marginTop: '5rem', position: 'relative', zIndex: 10 }}>
          <div className="section-title text-white">
            <span className="label-brand color-yellow" style={{ background: 'rgba(255, 195, 0, 0.15)', color: 'var(--joyful-yellow)' }}>Learning is an Adventure</span>
            <h2 className="text-white">Nurturing Young Minds - with <span className="text-orange">Love & Learning</span></h2>
            <p className="text-white-muted">Our holistic early education is securely anchored on three robust key pillars.</p>
          </div>

          <div className="three-cards-grid">
            {THREE_PILLARS.map((pillar, idx) => (
              <div key={idx} className="three-pillar-card hover-lift">
                <div className="pillar-image-header">
                  <img src={pillar.img} alt={pillar.title} />

                  {/* Overlapping circular colored icon */}
                  <div className="pillar-circular-icon" style={{ backgroundColor: pillar.color }}>
                    <i className={`fa-solid ${pillar.icon}`}></i>
                  </div>
                </div>
                <div className="pillar-body">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                  <a href="#admissions" className="pillar-arrow-btn" style={{ backgroundColor: pillar.color }}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wave-divider bottom">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,96C240,128,480,32,720,64C960,96,1200,32,1440,80L1440,120L0,120Z" fill="#FFF6F9"></path>
          </svg>
        </div>
      </section>

      {/* ==========================================
           5. PARENTS TESTIMONIALS SLIDER (SCREENSHOT 2 SPEECH BUBBLE AVATAR TOP)
           ========================================== */}
      <section className="testimonials-section section-padding scroll-reveal" style={{ position: "relative" }}>
        <div className="bg-mesh-glow glow-pink" style={{ top: '15%', right: '10%' }}></div>
        <div className="bg-mesh-glow glow-purple" style={{ bottom: '15%', left: '5%' }}></div>

        {/* Floating doodles */}
        <LightningDoodle style={{ top: '10%', right: '6%' }} />
        <AirplaneDoodle style={{ bottom: '15%', left: '8%' }} />
        <HeartDoodle style={{ top: '30%', left: '6%' }} />
        <LightbulbDoodle style={{ bottom: '30%', right: '8%' }} />

        <div className="container">
          <div className="section-title">
            <span className="label-brand color-orange">Our Testimonials</span>
            <h2>Read & <span className="highlight-orange text-orange-line">Student's Parent</span> Testimonials</h2>
          </div>

          <div className="testimonial-slider-container">
            <div className="testimonial-carousel-row">

              {/* Left purple navigation arrow gutter */}
              <button
                className="purple-nav-btn"
                aria-label="Previous Testimonials Set"
                onClick={() => {
                  // Interactive carousel slide triggers (handled gracefully via CSS scroll-behaviors)
                }}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>

              <div className="testimonial-grid-three">

                {/* CARD 1 */}
                <div className="speech-bubble-card green-theme hover-lift">
                  <div className="speech-avatar">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                      alt="William John"
                    />
                  </div>
                  <div className="speech-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="speech-quote">
                    "Flexible Classes refers to the process of acquiring knowledge or skills the use of digital Supply and the Internet"
                  </p>
                  <h4 className="speech-author">William John</h4>
                  <span className="speech-subtitle">Student Mother</span>

                  {/* Huge background quotation */}
                  <span className="card-quote-bg">”</span>
                </div>

                {/* CARD 2 */}
                <div className="speech-bubble-card blue-theme hover-lift">
                  <div className="speech-avatar">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                      alt="Devis Taylor"
                    />
                  </div>
                  <div className="speech-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="speech-quote">
                    "Flexible Classes refers to the process of acquiring knowledge or skills the use of digital Supply and the Internet"
                  </p>
                  <h4 className="speech-author">Devis Taylor</h4>
                  <span className="speech-subtitle">Student Mother</span>

                  {/* Huge background quotation */}
                  <span className="card-quote-bg">”</span>
                </div>

                {/* CARD 3 */}
                <div className="speech-bubble-card orange-theme hover-lift">
                  <div className="speech-avatar">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80"
                      alt="Sarah Taylor"
                    />
                  </div>
                  <div className="speech-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="speech-quote">
                    "Flexible Classes refers to the process of acquiring knowledge or skills the use of digital Supply and the Internet"
                  </p>
                  <h4 className="speech-author">Sarah Taylor</h4>
                  <span className="speech-subtitle">Student Mother</span>

                  {/* Huge background quotation */}
                  <span className="card-quote-bg">”</span>
                </div>

              </div>

              {/* Right purple navigation arrow gutter */}
              <button
                className="purple-nav-btn"
                aria-label="Next Testimonials Set"
                onClick={() => {
                  // Interactive carousel slide triggers (handled gracefully via CSS scroll-behaviors)
                }}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
           6. GALLERY SECTION (SCREENSHOT 6 EXACT PHOTO WAVY GRID)
           ========================================== */}
      <section className="gallery-section section-padding scroll-reveal" id="gallery" style={{ position: "relative" }}>
        <div className="wave-divider top">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,96C240,64,480,128,720,96C960,64,1200,96,1440,64L1440,0L0,0Z" fill="#FAF8F0"></path>
          </svg>
        </div>

        {/* Floating doodles */}
        <SunDoodle style={{ top: '8%', left: '6%' }} />
        <HeartDoodle style={{ bottom: '12%', right: '8%' }} />
        <LightningDoodle style={{ top: '20%', right: '10%' }} />
        <AirplaneDoodle style={{ bottom: '8%', left: '12%' }} />

        <div className="container" style={{ marginTop: '5rem' }}>
          <div className="section-title">
            <span className="label-brand color-pink">Photo Gallery</span>
            <h2>Discover the Magic of <span className="highlight-pink text-pink-line">SG Early Budding</span></h2>
            <p>Our Memory Clips — Capturing happy learning faces and daily childhood smiles.</p>
          </div>

          {/* EXACT SCREENSHOT 6 PHOTO MASONRY GRID LAYOUT */}
          <div className="wavy-masonry-gallery">

            {/* COLUMN 1: Stack of 2 */}
            <div className="gallery-masonry-col">
              <div className="wavy-img-container wavy-top-left hover-lift">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=500&q=80" alt="Children painting activity" />
                <div className="wavy-card-overlay"><h4>Creative Play</h4></div>
              </div>
              <div className="wavy-img-container wavy-bottom-right hover-lift">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80" alt="Pre-school group classroom" />
                <div className="wavy-card-overlay"><h4>Classroom Learning</h4></div>
              </div>
            </div>

            {/* COLUMN 2: 1 Tall Vertical Image */}
            <div className="gallery-masonry-col">
              <div className="wavy-img-container tall-portrait wavy-vertical-long hover-lift" style={{ height: '100%' }}>
                <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80" alt="Girl painting apron cutout" style={{ height: '100%' }} />
                <div className="wavy-card-overlay"><h4>Young Painter</h4></div>
              </div>
            </div>

            {/* COLUMN 3: Stack of 2 */}
            <div className="gallery-masonry-col">
              <div className="wavy-img-container wavy-bottom-left hover-lift">
                <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=500&q=80" alt="Children indoor playtime" />
                <div className="wavy-card-overlay"><h4>Indoor Activities</h4></div>
              </div>
              <div className="wavy-img-container wavy-top-right hover-lift">
                <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=500&q=80" alt="Empathetic sharing shapes" />
                <div className="wavy-card-overlay"><h4>Sharing is Caring</h4></div>
              </div>
            </div>

            {/* COLUMN 4: Stack of 2 */}
            <div className="gallery-masonry-col">
              <div className="wavy-img-container wavy-top-left hover-lift">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80" alt="Child soccer ball play" />
                <div className="wavy-card-overlay"><h4>Sports & Games</h4></div>
              </div>
              <div className="wavy-img-container wavy-bottom-right hover-lift orange-overlay-tint">
                <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=500&q=80" alt="Children sharing toys plus overlay" />
                <div className="wavy-card-overlay plus-active">
                  <span className="plus-sign-dec">+</span>
                  <h4>More Memories</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
           7. ADMISSIONS ENROLLMENT FORM
           ========================================== */}
      <section className="admissions-section section-padding scroll-reveal" id="admissions" style={{ position: "relative" }}>
        <div className="wave-divider top">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32C240,64,480,0,720,32C960,64,1200,0,1440,32L1440,0L0,0Z" fill="#FAF8F0"></path>
          </svg>
        </div>

        {/* Floating doodles */}
        <LightbulbDoodle style={{ top: '12%', left: '5%' }} />
        <LightningDoodle style={{ bottom: '10%', right: '10%' }} />
        <HeartDoodle style={{ top: '25%', right: '5%' }} />
        <SunDoodle style={{ bottom: '25%', left: '12%' }} />

        <div className="container admissions-grid" style={{ marginTop: '6rem' }}>

          <div className="admit-info">
            <span className="label-brand color-blue">Secure A Seat</span>
            <h2>Sow the Seeds of a <span className="highlight-blue text-blue-line">Brighter Future</span></h2>
            <p className="admit-intro-p">
              Admissions are open! Fill out our clean digital chalkboard, schedule a physical tour, and explore our Hosur campus facilities in person.
            </p>

            <div className="benefit-row">
              <div className="b-icon blue"><i className="fa-solid fa-check"></i></div>
              <div className="b-text">
                <h4>Online Application Process</h4>
                <p>Register parent/child details and receive an prompt scheduling email within 24 hours.</p>
              </div>
            </div>
            <div className="benefit-row">
              <div className="b-icon pink"><i className="fa-solid fa-check"></i></div>
              <div className="b-text">
                <h4>Direct Coordinator helpline</h4>
                <p>Talk to our Hosur admissions coordinators instantly: <strong>+91 7339475210</strong>.</p>
              </div>
            </div>
          </div>

          {/* Chalkboard form */}
          <div className="chalkboard-form-container hover-lift">
            <div className="chalk-board">
              <div className="chalk-header">
                <h3>Enroll Now</h3>
                <p>Admission Application</p>
              </div>

              <form className="chalk-form" onSubmit={handleAdmissionSubmit}>
                <div className="chalk-group">
                  <label htmlFor="parent_name"><i className="fa-solid fa-user-group"></i> Parent Name *</label>
                  <input
                    type="text"
                    id="parent_name"
                    className={`chalk-input ${parentInvalid ? "invalid" : ""}`}
                    placeholder="e.g. Mamatha M.C"
                    value={parentName}
                    onChange={(e) => {
                      setParentName(e.target.value);
                      if (e.target.value.trim()) setParentInvalid(false);
                    }}
                  />
                </div>

                <div className="chalk-group">
                  <label htmlFor="phone_num"><i className="fa-solid fa-phone"></i> Mobile Number *</label>
                  <input
                    type="tel"
                    id="phone_num"
                    className={`chalk-input ${phoneInvalid ? "invalid" : ""}`}
                    placeholder="e.g. 7339475210"
                    value={phoneNum}
                    onChange={(e) => {
                      setPhoneNum(e.target.value);
                      if (e.target.value.replace(/\D/g, "").length >= 10) setPhoneInvalid(false);
                    }}
                  />
                </div>

                <div className="chalk-group full-width">
                  <label htmlFor="email_id"><i className="fa-solid fa-envelope"></i> Email Address *</label>
                  <input
                    type="email"
                    id="email_id"
                    className={`chalk-input ${emailInvalid ? "invalid" : ""}`}
                    placeholder="e.g. parent@example.com"
                    value={emailId}
                    onChange={(e) => {
                      setEmailId(e.target.value);
                      if (e.target.value.includes("@")) setEmailInvalid(false);
                    }}
                  />
                </div>

                <div className="chalk-group">
                  <label htmlFor="child_name"><i className="fa-solid fa-baby"></i> Child's Name *</label>
                  <input
                    type="text"
                    id="child_name"
                    className={`chalk-input ${childNameInvalid ? "invalid" : ""}`}
                    placeholder="e.g. Little Bud"
                    value={childName}
                    onChange={(e) => {
                      setChildName(e.target.value);
                      if (e.target.value.trim()) setChildNameInvalid(false);
                    }}
                  />
                </div>

                <div className="chalk-group">
                  <label htmlFor="child_dob"><i className="fa-solid fa-calendar-days"></i> Child's DOB *</label>
                  <input
                    type="date"
                    id="child_dob"
                    className={`chalk-input ${childDobInvalid ? "invalid" : ""}`}
                    value={childDob}
                    onChange={(e) => {
                      setChildDob(e.target.value);
                      if (e.target.value) setChildDobInvalid(false);
                    }}
                  />
                </div>

                <div className="chalk-group full-width">
                  <label htmlFor="place_loc"><i className="fa-solid fa-map-pin"></i> Location Place</label>
                  <input
                    type="text"
                    id="place_loc"
                    className="chalk-input"
                    placeholder="e.g. Gokul Nagar, Hosur"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-chalk-submit">
                  Submit Application
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Success Modal */}
      {successOpen && (
        <div className="success-overlay open">
          <div className="success-box hover-lift">
            <div className="success-icon-badge"><i className="fa-solid fa-circle-check"></i></div>
            <h3>Application Received!</h3>
            <p>
              Thank you for trusting <strong>SG Education</strong>. Our coordinators will coordinate your tour scheduling shortly.
            </p>
            <button className="btn btn-close-success btn-pink" onClick={() => setSuccessOpen(false)}>
              Perfect!
            </button>
          </div>
        </div>
      )}

      {/* ==========================================
           8. NEWSLETTER & DECORATIVE GRASS FOOTER (SCREENSHOT 3 ALIGNMENT)
           ========================================== */}
      <section className="newsletter-section section-padding" style={{ backgroundColor: '#FAF8F0', paddingBottom: '0' }}>
        <div className="container">
          {/* <div className="newsletter-box hover-lift">
            <span className="newsletter-badge">Subscribe Now</span>
            <h3>Sign up for our newsletter</h3>
            <p>Keep up to date with the latest news, curriculum releases, and events.</p>
            
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); setSuccessOpen(true); }}>
              <input type="email" placeholder="Enter your email address *" required />
              <button type="submit">Subscribe Now <i className="fa-solid fa-paper-plane" style={{ marginLeft: '6px' }}></i></button>
            </form>
          </div> */}
        </div>

        {/* Playful Decorative Grass Footer (Light Background, Navy elements for absolute visibility) */}
        <div className="decorative-grass-wrapper">
          <div className="grass-doodles"></div>

          <div className="container footer-content-grid">
            <div className="footer-col brand-col">
              <a href="#hero" className="footer-logo">
                <img src="/sg-education/logo.png" alt="SG Education Logo" />
                <span className="logo-text">SG Education</span>
              </a>
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
                <li><a href="#hero">Home Base</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#pedagogy">Our Pillars</a></li>
                <li><a href="#gallery">Memory Clips</a></li>
                <li><a href="#admissions">Admissions</a></li>
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

          {/* <div className="container footer-bottom-meta">
            <p>&copy; 2026 <strong>SG Educations</strong>. All Rights Reserved.</p>
            <p>Powered by <strong>Sarathi Groups</strong></p>
          </div> */}
        </div>
      </section>
    </>
  );
}
