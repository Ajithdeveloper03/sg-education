"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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
    <path d="M20,65 C30,75 40,75 50,65 C60,55 70,55 80,65" stroke="#ECC440" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
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
    color: "#ECC440"
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
    color: "#ECC440",
    img: "/pillars1.webp"
  },
  {
    title: "ANBC Culture",
    desc: "Connecting kids to their roots. Value-based lessons, moral stories, yoga, and meditation elements in our daily schedule.",
    icon: "fa-om",
    color: "#FF2A7A",
    img: "/pillars2.webp"
  },
  {
    title: "CPC Foundations",
    desc: "Developing essential professional skills like dynamic communication, public speaking, tech integration, and polite gestures.",
    icon: "fa-laptop-code",
    color: "#5A49E3",
    img: "/pillars3.webp"
  },
  {
    title: "Parent Partnership",
    desc: "Continuous parent engagement, developmental workshops, and interactive tools to align home guidance with school learning.",
    icon: "fa-handshake-angle",
    color: "#FFC300",
    img: "/pillars4.webp"
  }
];



export default function Home() {
  const [testiIndex, setTestiIndex] = useState(0);
  const testiAutoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);


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

  // Auto-scroll testimonials every 4 seconds
  const startTestiAutoScroll = () => {
    if (testiAutoRef.current) clearInterval(testiAutoRef.current);
    testiAutoRef.current = setInterval(() => {
      setTestiIndex((prev) => (prev + 1) % 5);
    }, 4000);
  };

  useEffect(() => {
    startTestiAutoScroll();
    return () => {
      if (testiAutoRef.current) clearInterval(testiAutoRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAdmissionSubmit = async (e) => {
    e.preventDefault();
    let err = false;

    if (!parentName.trim()) { setParentInvalid(true); err = true; } else { setParentInvalid(false); }
    if (!emailId.trim() || !emailId.includes("@")) { setEmailInvalid(true); err = true; } else { setEmailInvalid(false); }
    if (!childName.trim()) { setChildNameInvalid(true); err = true; } else { setChildNameInvalid(false); }
    if (!childDob) { setChildDobInvalid(true); err = true; } else { setChildDobInvalid(false); }

    const cleanPhone = phoneNum.replace(/\D/g, "");
    if (cleanPhone.length < 10) { setPhoneInvalid(true); err = true; } else { setPhoneInvalid(false); }

    if (!err) {
      setIsSubmitting(true);
      try {
        const payload = {
          student_name: childName,
          dob: childDob,
          parent_name: parentName,
          mobile_number: phoneNum,
          email_address: emailId,
          residential_address: place,
          applying_for: "SG Early Budding"
        };

        const response = await fetch("https://sgeducations.in/php-backend/api_admission.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        
        const data = await response.json();
        if (data.success) {
          setParentName("");
          setPhoneNum("");
          setEmailId("");
          setChildName("");
          setChildDob("");
          setPlace("");
          setSuccessOpen(true);
        } else {
          alert("Submission failed: " + (data.message || "Please try again."));
        }
      } catch (error) {
        console.error("Admission form error:", error);
        alert("A network error occurred. Please try again.");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <>


            {/* ==========================================
           2. HERO SECTION WITH ELEGANT MINIMAL DESIGN
           ========================================== */}
      <section className="hero-section" id="hero" style={{ padding: "1rem 0" }}>
        <video 
          src="/kids.mp4" 
          autoPlay={true} 
          loop={true} 
          muted={true} 
          playsInline={true} 
          className="hero-video-bg" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
        />

        {/* Navy Overlay */}
        <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%)', zIndex: 2 }}></div>

        <div className="hero-shapes">
          <SunDoodle style={{ top: "12%", right: "8%" }} />
          <AirplaneDoodle style={{ bottom: "18%", left: "4%" }} />
          <HeartDoodle style={{ top: "35%", left: "8%" }} />
          <LightningDoodle style={{ bottom: "25%", right: "12%" }} />
        </div>

        <div className="container hero-container" style={{ position: "relative", zIndex: 5 }}>
          <div className="hero-center-content">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
              <div className="hero-pill-btn">
                Educate, Empower, Elevate
              </div>
            </div>
            <h1 className="hero-title" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)', marginBottom: '0.5rem' }}>
              Welcome to <span className="text-yellow">SG Educations</span>
            </h1>
            
            
            <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
             SG Education, established in 2023 under Sarathi Groups, provides quality education by blending Ancient Noble Bharat Culture(ANBC) with Corporate Professional Culture(CPC). We nurture knowledgeable, disciplined, and future-ready individuals.  
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
      <section className="about-section scroll-reveal" id="about" style={{ position: "relative", overflow: "hidden", padding: "1rem 0" }}>
        
        {/* Soft atmospheric gradient glows */}
        <div className="about-atmospheric-glow radial-yellow"></div>
        <div className="about-atmospheric-glow radial-pink"></div>

        <div className="container">
          <div className="about-intro-split-grid" style={{ gap: '3rem', marginBottom: '3rem', alignItems: 'center' }}>

            {/* LEFT COLUMN: Image Collage Only */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* REF 2: STICKER COLLAGE */}
              <div className="sticker-collage-container">
                
                {/* Main Portrait */}
                <div className="sc-main-portrait hover-lift">
                  <img 
                    src="/about sg1.png" 
                    alt="Portrait smiling" 
                  />
                </div>

                {/* Floating Elements */}
                <div className="sc-float-card sc-left-card float-anim-1">
                  <img src="/about sg3.JPG" alt="Activity" />
                </div>

                <div className="sc-float-card sc-right-card float-anim-2">
                  <img src="/Corporate Culture.png" alt="Outdoors" />
                </div>

                {/* Stickers */}
                <div className="sc-sticker sc-heart float-anim-3">💖</div>
                <div className="sc-sticker sc-cupcake float-anim-2">🧁</div>
                
                <div className="sc-text-sticker float-anim-1">
                  <span className="sc-text-line1">Stay</span>
                  <span className="sc-text-line2">Positive</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Text, Feature Boxes, Button */}
            <div className="about-details-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%', justifyContent: 'center' }}>
              <div>
                <span className="label-brand color-blue">Welcome to SG Educations</span>
                <h2 className="about-main-title">
                  Blending <span className="highlight-text-gradient">Ancient Noble Bharat Culture </span> with Corporate Professional Culture
                </h2>
                <p className="about-lead-text">
                  Sarathi Groups is a successful organization contributing to economic growth through 
professional services.SG Education established in 2023, aims to provide quality education by combining traditional Ancient Noble Bharat Culture with Corporate Professional Culture learning standards. Through SG Early Budding starts from July 2023 in Hosur. It focuses on building strong foundations for young learners and shaping future leaders with knowledge, discipline, and leadership skills. 

                </p>
              </div>

              {/* Both Feature Boxes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '0.5rem' }}>
                <div className="highlight-row">
                  <div className="h-icon blue"><i className="fa-solid fa-om"></i></div>
                  <div className="h-info">
                    <h4>Ancient Noble Bharat Culture </h4>
                    <p>Fostering respect and cultural traditions. </p>
                  </div>
                </div>

                <div className="highlight-row">
                  <div className="h-icon pink"><i className="fa-solid fa-building"></i></div>
                  <div className="h-info">
                    <h4>Corporate Professional Culture</h4>
                    <p>Preparing young minds for future excellence.</p>
                  </div>
                </div>
              </div>

              {/* CENTERED BUTTON BENEATH BOXES */}
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1.5rem' }}>
                <Link href="/admission" className="btn btn-orange" style={{ textDecoration: 'none' }}>Online Admission <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i></Link>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ==========================================
           4. SYSTEM PILLARS SECTION (DARK INDIGO - SCREENSHOT 4 ALIGNMENT)
           ========================================== */}
      <section className="pedagogy-section dark-navy-bg" id="pedagogy" style={{ position: "relative", padding: "1rem 0" }}>
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
          <div className="section-title text-white scroll-reveal" style={{ marginBottom: '1rem' }}>
            <span className="label-brand color-yellow" style={{ background: 'rgba(236, 196, 64, 0.15)', color: 'var(--joyful-yellow)' }}>Learning is an Adventure</span>
            <h2 className="text-white" style={{ fontSize: '1.8rem' }}>Nurturing Young Minds - with <span className="text-orange">Love & Learning</span></h2>
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
      <section className="video-section scroll-reveal" id="video-section" style={{ position: 'relative', overflow: 'hidden', padding: '1rem 0' }}>
        
        <div className="container">
          <div className="video-section-container" style={{ padding: '4rem 0 4rem 0', gap: '2rem' }}>
            <div className="vs-video-thumb hover-lift" onClick={() => setIsVideoModalOpen(true)} style={{ cursor: 'pointer' }}>
              <img src="https://img.youtube.com/vi/TZj4cIfW4YU/maxresdefault.jpg" alt="Video thumbnail" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
              <div className="vs-play-btn"><i className="fa-solid fa-play" style={{ color: 'white', fontSize: '2rem' }}></i></div>
            </div>

            <div className="vs-content">
              <div className="vs-doodle bee"><i className="fa-solid fa-bug"></i></div>
              <div className="vs-doodle hands"><i className="fa-solid fa-hands-clapping"></i></div>
              
              <h2 className="vs-title" style={{ fontWeight: '800', lineHeight: '1.2', margin: '1rem 0', color: '#fff' }}>
                <i className="fa-solid fa-brain" style={{ marginRight: '10px' }}></i>Educate – Empower – Elevate
              </h2>
              <p className="vs-desc">
                We provide quality education that builds strong knowledge, values, and lifelong learning habits.We nurture confidence, leadership, communication, and practical skills to prepare students for real-world challenges.We inspire students to achieve their full potential and grow into responsible, successful, and future-ready individuals.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1.5rem', position: 'relative', zIndex: 20 }}>
                <Link href="/contact" className="vs-btn" style={{ textDecoration: 'none' }}>JOIN US NOW</Link>
              </div>
              
              <div className="vs-doodle bike"><i className="fa-solid fa-bicycle"></i></div>
            </div>
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
      <section className="testimonials-section scroll-reveal" style={{ position: "relative", padding: "1rem 0" }}>
        <div className="bg-mesh-glow glow-pink" style={{ top: '15%', right: '10%' }}></div>
        <div className="bg-mesh-glow glow-purple" style={{ bottom: '15%', left: '5%' }}></div>

        {/* Floating doodles */}
        <LightningDoodle style={{ top: '10%', right: '6%' }} />
        <AirplaneDoodle style={{ bottom: '15%', left: '8%' }} />
        <HeartDoodle style={{ top: '30%', left: '6%' }} />
        <LightbulbDoodle style={{ bottom: '30%', right: '8%' }} />

        <div className="container">
          <div className="section-title" style={{ marginBottom: '1rem' }}>
            <span className="label-brand color-orange">Our Testimonials</span>
            <h2 style={{ fontSize: '1.8rem' }}>Read & <span className="highlight-orange text-orange-line">Student&apos;s Parent</span> Testimonials</h2>
          </div>

          <div className="testimonial-slider-container" style={{ marginTop: '0' }}>
            <div className="testimonial-carousel-row">

              {/* Left purple navigation arrow gutter */}
              <button
                className="purple-nav-btn"
                aria-label="Previous Testimonials Set"
                onClick={() => {
                  setTestiIndex((prev) => (prev - 1 + 5) % 5);
                  startTestiAutoScroll();
                }}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>

              <div
                className="testimonial-grid-three"
                key={testiIndex}
                style={{
                  animation: 'testiSlideIn 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
                }}
              >
                {[0, 1, 2].map(offset => {
                  const idx = (testiIndex + offset) % 5;
                  const item = [
                    { name: "Seerthi", role: "Student Mother", quote: "It's a wonderful place to join and grow . I am very happy with their mother-teacher care .  As a mother I was relieved that my daughter is in the right hand. Thank you for the management too 👍", stars: 5, theme: "green", img: "https://images.pexels.com/photos/16562722/pexels-photo-16562722.jpeg" },
                    { name: "Nehna", role: "Parent", quote: "We appreciate the teachers dedication. My daughter comes home energized and excited about what she's learning without feeling burdened.. also this school takes more care and responsibilities with the kids securely...", stars: 5, theme: "blue", img: "https://images.pexels.com/photos/14673049/pexels-photo-14673049.jpeg" },
                    { name: "Rithun", role: "Parent", quote: "Good education system and well training given to the students and taking care of student health with nutrition food chart..And encouraging the students.", stars: 5, theme: "orange", img: "https://images.pexels.com/photos/20133860/pexels-photo-20133860.jpeg" },
                    { name: "Ramesh Kumar", role: "Student Father", quote: "The curriculum perfectly balances traditional values and modern learning. My son looks forward to school every day!", stars: 5, theme: "purple", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" },
                    { name: "Anita Desai", role: "Student Mother", quote: "SG Education has built a fantastic foundation for my daughter. Highly recommend their unique approach to education.", stars: 4.5, theme: "pink", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" }
                  ][idx];
                  return (
                    <div key={idx} className={`speech-bubble-card ${item.theme}-theme hover-lift`}>
                      <div className="speech-avatar">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className="speech-stars">
                        {Array.from({ length: 5 }).map((_, i) => {
                          if (i < Math.floor(item.stars)) return <i key={i} className="fa-solid fa-star"></i>;
                          if (i < item.stars) return <i key={i} className="fa-solid fa-star-half-stroke"></i>;
                          return null;
                        })}
                      </div>
                      <p className="speech-quote">
                        &quot;{item.quote}&quot;
                      </p>
                      <h4 className="speech-author">{item.name}</h4>
                      <span className="speech-subtitle">{item.role}</span>
                    </div>
                  );
                })}
              </div>

              {/* Right purple navigation arrow gutter */}
              <button
                className="purple-nav-btn"
                aria-label="Next Testimonials Set"
                onClick={() => {
                  setTestiIndex((prev) => (prev + 1) % 5);
                  startTestiAutoScroll();
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
      <section className="gallery-section" id="gallery" style={{ backgroundColor: '#FAF9F5', position: 'relative', zIndex: 10, padding: '1rem 0' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '1rem' }}>
            <span className="label-brand color-blue">Discover the Magic</span>
            <h2 style={{ color: '#111', fontSize: '1.8rem', fontWeight: '800' }}>
              SG Early Budding <br/>
              <span style={{ color: 'var(--playful-pink)' }}>Moments</span>
            </h2>
          </div>
          
          <div className="kimono-gallery-grid">
            <div className="k-item k-item-1">
              <img src="/home gallery 1.JPG" alt="Gallery 1" />
              <div className="k-item-overlay">
                <h3>Culturals</h3>
                <p>Annual Cultural Celebration</p>
              </div>
            </div>
            <div className="k-item k-item-2">
              <img src="/home gallery 2.JPG" alt="Gallery 2" />
              <div className="k-item-overlay">
                <h3>Yoga</h3>
                <p>Morning Yoga Session</p>
              </div>
            </div>
            <div className="k-item k-item-3">
              <img src="/home gallery 3.JPG" alt="Gallery 3" />
              <div className="k-item-overlay">
                <h3>Green Day</h3>
                <p>Green Day Celebration</p>
              </div>
            </div>
            <div className="k-item k-item-4">
              <img src="/home gallery 4.JPG" alt="Gallery 4" />
              <div className="k-item-overlay">
                <h3>Green Day</h3>
                <p>Little Nature Lover</p>
              </div>
            </div>
            <div className="k-item k-item-5">
              <img src="/home gallery 7.jpeg" alt="Gallery 5" />
              <div className="k-item-overlay">
                <h3>Joy</h3>
                <p>Kids Showcasing Their Creativity</p>
              </div>
            </div>
            <div className="k-item k-item-6">
              <img src="/home gallery 6.JPG" alt="Gallery 6" />
              <div className="k-item-overlay">
                <h3>Exploration</h3>
                <p>Best Costume Moments</p>
              </div>
            </div>
            <div className="k-item k-item-7">
              <img src="/home gallery 5.JPG" alt="Gallery 7" />
              <div className="k-item-overlay">
                <h3>Yoga Day</h3>
                <p>Kids Performing Yoga</p>
              </div>
            </div>
            <div className="k-item k-item-8">
              <img src="/home gallery 8.jpeg" alt="Gallery 8" />
              <div className="k-item-overlay">
                <h3>Cultural</h3>
                <p>Celebration of Talent</p>
              </div>
            </div>
            <div className="k-item k-item-9">
              <img src="/home gallery 9.JPG" alt="Gallery 9" />
              <div className="k-item-overlay">
                <h3>Music & Dance</h3>
                <p>Kids Showcasing Their Talents</p>
              </div>
            </div>
            <div className="k-item k-item-10">
              <img src="/home gallery 10.jpeg" alt="Gallery 10" />
              <div className="k-item-overlay">
                <h3>Teamwork</h3>
                <p>Students in Blue Attire</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/gallery" className="btn btn-red" style={{ backgroundColor: '#D90013', color: '#fff', borderRadius: '4px', textTransform: 'uppercase', padding: '0.8rem 1.5rem', fontWeight: 'bold', fontSize: '0.8rem', textDecoration: 'none', display: 'inline-block' }}>
              See All Memories <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
           7. ADMISSIONS ENROLLMENT FORM
           ========================================== */}
      <section className="admissions-section scroll-reveal" id="admissions" style={{ position: "relative", padding: "1rem 0" }}>
        <div className="wave-divider top">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32C240,64,480,0,720,32C960,64,1200,0,1440,32L1440,0L0,0Z" fill="#FAF8F0"></path>
          </svg>
        </div>

        {/* Floating doodles */}
        <LightbulbDoodle style={{ top: '12%', left: '5%' }} />
        <LightningDoodle style={{ bottom: '10%', right: '10%' }} />
        <HeartDoodle style={{ top: '25%', right: '5%' }} />


        <div className="container admissions-grid" style={{ marginTop: '2rem' }}>

          <div className="admit-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
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
                <p>Talk to our Hosur admissions coordinators instantly: <strong>+91 9994664346</strong>.</p>
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
                    placeholder="e.g. 9994664346"
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

                <button type="submit" className="btn btn-chalk-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
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

      {isVideoModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 999999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button 
            onClick={() => setIsVideoModalOpen(false)}
            style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'transparent', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer', zIndex: 100000 }}
            aria-label="Close modal"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div style={{ width: '90%', maxWidth: '900px', aspectRatio: '16/9', position: 'relative' }}>
            <iframe 
              src="https://www.youtube.com/embed/0FATcRHSiXw?autoplay=1" 
              title="SG Education Sample Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ width: '100%', height: '100%', display: 'block' }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

