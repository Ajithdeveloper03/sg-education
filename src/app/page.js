"use client";

import { useState, useEffect, useRef } from "react";

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
    desc: "Fully sanitized, CCTV secured campus.",
    img: "https://images.pexels.com/photos/30889597/pexels-photo-30889597.jpeg",
    icon: "fa-shield-heart",
    color: "#FF2A7A"
  },
  {
    title: "Traditional Customs",
    desc: "Moral lessons and cultural heritage.",
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=500&q=80",
    icon: "fa-om",
    color: "#5A49E3"
  },
  {
    title: "Fun & Skill Learning",
    desc: "Activity-based puzzles and early speaking.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80",
    icon: "fa-graduation-cap",
    color: "#00AEFF"
  }
];

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "SG Early Budding is simply magical! Best futuristic campus in Hosur. Aarav now tidies his play space, greets elders with folded hands, and runs happily to school.",
    name: "Priyanka Sharma",
    role: "Mother of Aarav",
    img: "https://images.pexels.com/photos/16562722/pexels-photo-16562722.jpeg"
  },
  {
    stars: 5,
    quote: "The blend of traditional moral stories with modern speech training has boosted my daughter's confidence immensely.",
    name: "Rajesh Balan",
    role: "Father of Deepthi",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  },
  {
    stars: 5,
    quote: "Safe campus, warm teachers, and beautiful cultural exposure in a modern way. It is exactly what my child Kabir needed.",
    name: "Sarah Taylor",
    role: "Mother of Kabir",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80"
  },
  {
    stars: 5,
    quote: "The safety measures and clean classrooms give me complete peace of mind. Vihaan has blossomed here.",
    name: "Dr. Anjali R.",
    role: "Mother of Vihaan",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
  },
  {
    stars: 5,
    quote: "SG's unique approach of blending tradition with logic/coding sets them apart. Advait loves the coding games and stories!",
    name: "Karthik Meyyappan",
    role: "Father of Advait",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80"
  }
];

const FOUR_PILLARS = [
  {
    title: "Inquiry-Led Play",
    desc: "Children explore concepts by questioning, doing, and playing. No rote learning. We encourage curiosity and self-discovery.",
    icon: "fa-child-reaching",
    color: "#00AEFF",
    img: "/sg-education/pillars1.png"
  },
  {
    title: "ANBC Culture",
    desc: "Connecting kids to their roots. Value-based lessons, moral stories, yoga, and meditation elements in our daily schedule.",
    icon: "fa-om",
    color: "#FF2A7A",
    img: "/sg-education/pillars2.png"
  },
  {
    title: "CPC Foundations",
    desc: "Developing essential professional skills like dynamic communication, public speaking, tech integration, and polite gestures.",
    icon: "fa-laptop-code",
    color: "#5A49E3",
    img: "/sg-education/pillars3.png"
  },
  {
    title: "Parent Partnership",
    desc: "Continuous parent engagement, developmental workshops, and interactive tools to align home guidance with school learning.",
    icon: "fa-handshake-angle",
    color: "#FFC300",
    img: "/sg-education/pillars4.png"
  }
];

const row1Images = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=500&q=80"
];

const row2Images = [
  "https://images.pexels.com/photos/618116/pexels-photo-618116.jpeg",
  "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1536337005238-94b997371b40?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?auto=format&fit=crop&w=500&q=80"
];

const row3Images = [
  "https://images.pexels.com/photos/31864392/pexels-photo-31864392.jpeg",
  "https://images.pexels.com/photos/35493021/pexels-photo-35493021.jpeg",
  "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=500&q=80"
];

const row4Images = [
  "https://images.pexels.com/photos/12818151/pexels-photo-12818151.jpeg",
  "https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1471286174240-e67f29dbb499?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80"
];

export default function Home() {
  const [testiIndex, setTestiIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const founder1Ref = useRef(null);
  const founder2Ref = useRef(null);
  const pinWrapperRef = useRef(null);
  const aboutImageRef = useRef(null);

  // Monitor screen size for responsiveness adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Viewport-relative ScrollTrigger Cards progress calculator
  useEffect(() => {
    const handleScroll = () => {
      if (!pinWrapperRef.current) return;
      const rect = pinWrapperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const containerHeight = rect.height;
      
      const scrolledPast = -rect.top;
      const maxScroll = containerHeight - viewportHeight;
      if (maxScroll <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolledPast / maxScroll));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Auto slider for testimonials (5 items)
  useEffect(() => {
    const interval = setInterval(() => {
      setTestiIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

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

  const handleMouseMoveTiltEvent = (e) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) return;
    const el = e.currentTarget;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const tiltX = (y - 0.5) * -15; 
    const tiltY = (x - 0.5) * 15;  
    el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
    el.style.transition = 'transform 0.1s ease-out';
    el.style.zIndex = 20;
  };
  
  const handleMouseLeaveTiltEvent = (e) => {
    const el = e.currentTarget;
    if (!el) return;
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    el.style.transition = 'transform 0.5s ease-out';
    el.style.zIndex = 1;
  };



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
           2. HERO SECTION WITH ELEGANT MINIMAL DESIGN
           ========================================== */}
      <section className="hero-section" id="hero">
        <video 
          src="/sg-education/kids.mp4" 
          autoPlay={true} 
          loop={true} 
          muted={true} 
          playsInline={true} 
          className="hero-video-bg" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
        />

        {/* Navy Overlay */}
        <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(29, 42, 68, 0.7) 0%, rgba(29, 42, 68, 0.4) 100%)', zIndex: 2 }}></div>

        <div className="hero-shapes">
          <SunDoodle style={{ top: "12%", right: "8%" }} />
          <AirplaneDoodle style={{ bottom: "18%", left: "4%" }} />
          <HeartDoodle style={{ top: "35%", left: "8%" }} />
          <LightningDoodle style={{ bottom: "25%", right: "12%" }} />
        </div>

        <div className="container hero-container" style={{ position: "relative", zIndex: 5 }}>
          <div className="hero-center-content">
            <h1 className="hero-title" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Welcome to <span className="text-yellow">SG Educations</span>
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              CoEducate, Empower, Elevate. Nurturing young minds by blending ancient Bharath values with modern academic excellence. 
            </p>
          </div>
        </div>

        {/* Gentle wavy bottom divider */}
        <div className="wave-divider bottom" style={{ bottom: 0, height: '140px', zIndex: 10 }}>
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            <path d="M0,224 C180,96 540,352 720,224 C900,96 1260,352 1440,224 L1440,320 L0,320 Z" fill="#FAF8F5"></path>
          </svg>
        </div>
      </section>

      {/* ==========================================
           3. ABOUT US SECTION ENHANCED
           ========================================== */}
      <section className="section-padding about-section scroll-reveal" id="about" style={{ position: "relative", overflow: "hidden" }}>
        
        {/* Soft atmospheric gradient glows */}
        <div className="about-atmospheric-glow radial-yellow"></div>
        <div className="about-atmospheric-glow radial-pink"></div>

        <div className="container">
          <div className="about-intro-split-grid">

            {/* REF 2: STICKER COLLAGE */}
            <div className="sticker-collage-container">
              
              {/* Main Portrait */}
              <div className="sc-main-portrait hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=700&q=80" 
                  alt="Portrait smiling" 
                />
              </div>

              {/* Floating Elements */}
              <div className="sc-float-card sc-left-card float-anim-1">
                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=300&q=80" alt="Activity" />
              </div>

              <div className="sc-float-card sc-right-card float-anim-2">
                <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=300&q=80" alt="Outdoors" />
              </div>

              {/* Stickers */}
              <div className="sc-sticker sc-heart float-anim-3">💖</div>
              <div className="sc-sticker sc-cupcake float-anim-2">🧁</div>
              
              <div className="sc-text-sticker float-anim-1">
                <span className="sc-text-line1">Stay</span>
                <span className="sc-text-line2">Positive</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="about-details-content">
              <span className="label-brand color-blue">Welcome to SG Educations</span>
              <h2 className="about-main-title">
                Blending <span className="highlight-text-gradient">Ancient Wisdom</span> with Modern Corporate Excellence
              </h2>
              <p className="about-lead-text">
                Established in July 2023, we aim to nurture individuals with knowledge, discipline, and leadership qualities.
              </p>

              {/* Feature Highlights Grid */}
              <div className="about-premium-highlights">
                <div className="highlight-row">
                  <div className="h-icon blue"><i className="fa-solid fa-om"></i></div>
                  <div className="h-info">
                    <h4>Ancient Bharath Values</h4>
                    <p>Fostering respect and cultural traditions.</p>
                  </div>
                </div>
                <div className="highlight-row">
                  <div className="h-icon pink"><i className="fa-solid fa-building"></i></div>
                  <div className="h-info">
                    <h4>Corporate Standards</h4>
                    <p>Preparing young minds for future excellence.</p>
                  </div>
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
           3.5 VISIONARY FOUNDERS & LEADERSHIP
           ========================================== */}
      <section className="founders-section scroll-reveal" id="leadership">
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '4rem' }}>
            <span className="label-brand color-pink" style={{ background: 'rgba(233, 30, 99, 0.08)', color: 'var(--playful-pink)' }}>Visionary Leadership</span>
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
                  <p>"Strongly believes in education that builds character alongside capabilities, cultivating willpower and persistent focus among young children."</p>
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
                  <p>"A visionary leader with a deep commitment to social responsibility and national development, combining moral character with modern tools."</p>
                </div>
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
            <p className="text-white-muted">Our holistic early education is securely anchored on four robust key pillars.</p>
          </div>

          <div className="stacked-cards-container">
            {FOUR_PILLARS.map((pillar, idx) => (
              <div key={idx} className="stacked-card">
                <div className="stacked-card-img">
                  <img src={pillar.img} alt={pillar.title} />
                </div>
                <div className="stacked-card-content">
                  <div className="stacked-card-icon" style={{ backgroundColor: pillar.color }}>
                    <i className={`fa-solid ${pillar.icon}`}></i>
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wave-divider bottom">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,96C240,128,480,32,720,64C960,96,1200,32,1440,80L1440,120L0,120Z" fill="#E91E63"></path>
          </svg>
        </div>
      </section>

      {/* ==========================================
           4.5 VIDEO SECTION (REF 2)
           ========================================== */}
      <section className="video-section scroll-reveal" id="video-section" style={{ position: 'relative', overflow: 'hidden' }}>
        
        <div className="container video-section-container">
          <div className="vs-video-thumb hover-lift">
            <img src="https://images.pexels.com/photos/31864391/pexels-photo-31864391.jpeg" alt="Video thumbnail" />
            <div className="vs-play-btn"><i className="fa-solid fa-play"></i></div>
          </div>
          <div className="vs-content">
            <div className="vs-doodle bee"><i className="fa-solid fa-bug"></i></div>
            <div className="vs-doodle hands"><i className="fa-solid fa-hands-clapping"></i></div>
            
            <div className="vs-badge">
              <i className="fa-solid fa-brain"></i> Mental Health Growth
            </div>
            <h2 className="vs-title">Solve Problem And Learn More</h2>
            <p className="vs-desc">
              Merging ancient Bharath wisdom with modern learning techniques to foster mental resilience and logical problem-solving.
            </p>
            <a href="#admissions" className="vs-btn">Watch More Videos</a>
            
            <div className="vs-doodle bike"><i className="fa-solid fa-bicycle"></i></div>
          </div>
        </div>

        {/* Wavy bottom divider transitioning to Testimonials background */}
        <div className="wave-divider bottom" style={{ bottom: 0, height: '100px', zIndex: 10 }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            <path d="M0,96 C240,128 480,32 720,64 C960,96 1200,32 1440,80 L1440,120 L0,120 Z" fill="#FFF6F9"></path>
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
            <h2>Read & <span className="highlight-orange text-orange-line">Student&apos;s Parent</span> Testimonials</h2>
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
                      src="https://images.pexels.com/photos/16562722/pexels-photo-16562722.jpeg"
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
                    &quot;Flexible Classes refers to the process of acquiring knowledge or skills the use of digital Supply and the Internet&quot;
                  </p>
                  <h4 className="speech-author">Priyanka</h4>
                  <span className="speech-subtitle">Student Mother</span>


                </div>

                {/* CARD 2 */}
                <div className="speech-bubble-card blue-theme hover-lift">
                  <div className="speech-avatar">
                    <img
                      src="https://images.pexels.com/photos/14673049/pexels-photo-14673049.jpeg"
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
                    &quot;Flexible Classes refers to the process of acquiring knowledge or skills the use of digital Supply and the Internet&quot;
                  </p>
                  <h4 className="speech-author">Deepan</h4>
                  <span className="speech-subtitle">Student Father</span>


                </div>

                {/* CARD 3 */}
                <div className="speech-bubble-card orange-theme hover-lift">
                  <div className="speech-avatar">
                    <img
                      src="https://images.pexels.com/photos/20133860/pexels-photo-20133860.jpeg"
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
                    &quot;Flexible Classes refers to the process of acquiring knowledge or skills the use of digital Supply and the Internet&quot;
                  </p>
                  <h4 className="speech-author">Sharmila</h4>
                  <span className="speech-subtitle">Student Mother</span>


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
           6. GALLERY SECTION (REFERENCE 1 EXACT LAYOUT)
           ========================================== */}
      <section className="gallery-section section-padding" id="gallery" style={{ backgroundColor: '#FAF9F5', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '4rem' }}>
            <span className="label-brand color-blue">Discover the Magic</span>
            <h2 style={{ color: '#111', fontSize: '3.5rem', fontWeight: '800' }}>
              SG Early Budding <br/>
              <span style={{ color: 'var(--playful-pink)' }}>Moments</span>
            </h2>
          </div>
          
          <div className="kimono-gallery-grid">
            <div className="k-item k-item-1 hover-lift" style={{ position: 'relative' }} onMouseMove={handleMouseMoveTiltEvent} onMouseLeave={handleMouseLeaveTiltEvent}>
              <img src={row1Images[0]} alt="Gallery 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="k-caption" style={{ background: '#fff', color: '#111', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>Creative Arts</div>
            </div>
            <div className="k-item k-item-2 hover-lift" style={{ position: 'relative' }} onMouseMove={handleMouseMoveTiltEvent} onMouseLeave={handleMouseLeaveTiltEvent}>
              <img src={row1Images[1]} alt="Gallery 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="k-caption" style={{ background: '#fff', color: '#111', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>Learning</div>
            </div>
            <div className="k-item k-item-3 hover-lift" style={{ position: 'relative' }} onMouseMove={handleMouseMoveTiltEvent} onMouseLeave={handleMouseLeaveTiltEvent}>
              <img src={row2Images[0]} alt="Gallery 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="k-caption" style={{ background: '#fff', color: '#111', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>Playtime</div>
            </div>
            <div className="k-item k-item-4 hover-lift" style={{ position: 'relative' }} onMouseMove={handleMouseMoveTiltEvent} onMouseLeave={handleMouseLeaveTiltEvent}>
              <img src={row2Images[1]} alt="Gallery 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="k-caption" style={{ background: '#fff', color: '#111', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>Nature</div>
            </div>
            <div className="k-item k-item-5 hover-lift" style={{ position: 'relative' }} onMouseMove={handleMouseMoveTiltEvent} onMouseLeave={handleMouseLeaveTiltEvent}>
              <img src={row3Images[0]} alt="Gallery 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="k-caption" style={{ background: '#fff', color: '#111', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>Joy</div>
            </div>
            <div className="k-item k-item-6 hover-lift" style={{ position: 'relative' }} onMouseMove={handleMouseMoveTiltEvent} onMouseLeave={handleMouseLeaveTiltEvent}>
              <img src={row4Images[0]} alt="Gallery 6" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="k-caption" style={{ background: '#fff', color: '#111', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>Exploration</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-red" style={{ backgroundColor: '#D90013', color: '#fff', borderRadius: '4px', textTransform: 'uppercase', padding: '0.8rem 1.5rem', fontWeight: 'bold', fontSize: '0.8rem' }}>
              See All Memories <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
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
                  <label htmlFor="child_name"><i className="fa-solid fa-baby"></i> Child&apos;s Name *</label>
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
                  <label htmlFor="child_dob"><i className="fa-solid fa-calendar-days"></i> Child&apos;s DOB *</label>
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

      {/* Footer is now globally imported in layout.js */}
    </>
  );
}
