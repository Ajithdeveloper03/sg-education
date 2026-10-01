"use client";

import { useState } from "react";
import Link from "next/link";
import "./sg-early-budding.css"; 

export default function SGEarlyBuddingPage() {
  const [activeTab, setActiveTab] = useState(0);

  const pillarsData = [
    {
      id: 0,
      number: "01",
      title: "Hygiene & Safety",
      icon: "fa-hands-bubbles",
      image: "/Hygiene.webp",
      content: {
        badge: "Pillar 01",
        heading: "Hygiene & Safety",
        text: "Prioritizing physical well-being through ultra-clean environments, age-appropriate sanitized play materials, and child-safe physical infrastructure.",
        list: []
      }
    },
    {
      id: 1,
      number: "02",
      title: "Traditional Customs & Values",
      icon: "fa-om",
      image: "/Traditional Customs.png",
      content: {
        badge: "Pillar 02",
        heading: "Traditional Customs & Values",
        text: "Integrating heritage, daily respectful greetings, cultural celebration, and moral storytelling based on our ANBC foundation.",
        list: []
      }
    },
    {
      id: 2,
      number: "03",
      title: "Joyful Experiential Learning",
      icon: "fa-shapes",
      image: "/Fun Learning.png",
      content: {
        badge: "Pillar 03",
        heading: "Joyful Experiential Learning",
        text: "Hands-on sensory activities, play-based exploration, interactive games, and story-driven discovery that make learning intuitive and fun.",
        list: []
      }
    },
    {
      id: 3,
      number: "04",
      title: "Skill & Personality Identity",
      icon: "fa-medal",
      image: "/Skill Identity.png",
      content: {
        badge: "Pillar 04",
        heading: "Skill & Personality Identity",
        text: "Developing communication, confidence, independence, self-expression, and structured habits via our CPC framework.",
        list: []
      }
    }
  ];

  return (
    <main>
      {/* 1. Welcome to SG Early Budding (Hero Section) */}
      <section className="eb-hero" style={{ 
        backgroundImage: 'url("/sg early budding banner.png")'
      }}>
        <div className="eb-hero-overlay" style={{ backgroundColor: 'rgba(17, 24, 39, 0.45)' }}></div>
        <div className="eb-hero-content" style={{ paddingBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span className="hero-pill-btn">
              Nurturing Young Minds in Hosur
            </span>
          </div>
          <h1 className="eb-hero-title" style={{ marginTop: '0', fontSize: '2.2rem', lineHeight: '1.4' }}>
            SG Early Budding: <br />Where Culture Meets Modern Excellence
          </h1>
          <p className="eb-hero-desc">
            SG Early Budding is a premier playschool and early childhood education centre in Hosur. We combine the values of Ancient Noble Bharat Culture (ANBC) with the discipline of Corporate Professional Culture (CPC) to nurture foundational habits, joyful learning, safety, and holistic personality development for young learners.
          </p>
          <div className="eb-pagination" style={{
            display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(5px)', padding: '0.5rem 1.2rem', borderRadius: '30px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', marginBottom: '1rem'
          }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Early Budding</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/admission" className="btn btn-orange" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#E95D2A', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Book a Campus Tour</Link>
            <Link href="/our-programs" className="btn btn-red" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#fff', color: '#333', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>Explore Our Curriculum</Link>
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

      {/* 2. About SG Early Budding (Interactive Tabs) */}
      <section className="eb-section eb-about">
        {/* Decorators */}
        <div className="eb-deco" style={{ top: '10%', left: '5%', color: 'var(--playful-pink)' }}><i className="fa-solid fa-star"></i></div>
        <div className="eb-deco" style={{ bottom: '15%', right: '5%', color: 'var(--kidza-orange)' }}><i className="fa-solid fa-shapes"></i></div>
        
        <div className="container">
          <div className="eb-section-header" style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#E95D2A', textTransform: 'uppercase', letterSpacing: '1px' }}>Core Pillars of SG Early Budding</span>
            <h2 style={{ marginTop: '0.5rem' }}>Our Four Pillars of Early Childhood <span style={{ color: 'var(--playful-pink)' }}>Excellence</span></h2>
          </div>

          <div className="eb-interactive-container">
            
            {/* Left Tabs List */}
            <div className="eb-tabs-list">
              {pillarsData.map((pillar, index) => (
                <div 
                  key={pillar.id}
                  className={`eb-tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="eb-tab-btn-left">
                    <div className="eb-tab-icon"><i className={`fa-solid ${pillar.icon}`}></i></div>
                    <div className="eb-tab-info">
                      <span className="eb-tab-num">{pillar.number}</span>
                      <span className="eb-tab-title">{pillar.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Content Area */}
            <div className="eb-tab-content-area">
              <img 
                key={`img-${activeTab}`}
                src={pillarsData[activeTab].image} 
                alt={pillarsData[activeTab].title} 
                className="eb-tab-img" 
              />
              <div className="eb-tab-details" key={`content-${activeTab}`}>
                <div className="eb-tab-badge">
                  <i className="fa-solid fa-check"></i>
                  {pillarsData[activeTab].content.badge}
                </div>
                <h2>{pillarsData[activeTab].content.heading}</h2>
                <p className="eb-tab-text">{pillarsData[activeTab].content.text}</p>
                <ul className="eb-tab-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  {pillarsData[activeTab].content.list.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '10px' }}><i className={`fa-solid ${item.icon}`} style={{color: 'var(--kidza-orange)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i> {item.text}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Unique Approach (Dual Cards Layout) */}
      <section className="eb-section eb-unique-approach">
        {/* Decorators */}
        <div className="eb-deco" style={{ top: '20%', right: '8%', color: 'var(--joyful-yellow)' }}><i className="fa-solid fa-book"></i></div>
        <div className="eb-deco" style={{ bottom: '10%', left: '5%', color: 'var(--lime-green)' }}><i className="fa-solid fa-palette"></i></div>
        
        <div className="container">
          <div className="eb-section-header">
            <h2>The Foundation of Our <span style={{ color: '#E95D2A' }}>Educational Vision</span></h2>
            <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '800px', margin: '1rem auto 0', textAlign: 'center' }}>
              At SG Early Budding, we believe early childhood education must balance rooted cultural values with modern global readiness. Our signature ANBC & CPC Framework provides a balanced environment where children grow emotionally, ethically, and intellectually.
            </p>
          </div>

          <div className="culture-cards-wrapper">
            
            {/* ANBC Card */}
            <div className="culture-card-container">
              <div className="culture-img-wrapper">
                <img src="/Ancient Bharath Culture.png" alt="Ancient Bharath Culture" />
              </div>
              <div className="culture-info-card anbc-theme" style={{ minHeight: 'auto', paddingBottom: '2rem' }}>
                <h3>Ancient Noble Bharat Culture <span className="acronym">(ANBC)</span></h3>
                <p className="culture-intro">Ancient Noble Bharat Culture grounds children in traditional Indian values, respect, empathy, and gratitude. Through stories, cultural practices, and community awareness, young learners develop character, emotional intelligence, and respect for family and heritage.</p>
              </div>
            </div>

            {/* CPC Card */}
            <div className="culture-card-container">
              <div className="culture-img-wrapper">
                <img src="/Corporate Culture.png" alt="Corporate Culture" />
              </div>
              <div className="culture-info-card cpc-theme" style={{ minHeight: 'auto', paddingBottom: '2rem' }}>
                <h3>Corporate Professional Culture <span className="acronym">(CPC)</span></h3>
                <p className="culture-intro">Corporate Professional Culture introduces structure, discipline, task ownership, time management, and modern soft skills suited for a rapidly changing world. Children learn clear communication, teamwork, structured routines, and proactive problem-solving from an early age.</p>
              </div>
            </div>

          </div>

          <div style={{ background: '#FFF5E6', padding: '2rem', borderRadius: '12px', marginTop: '2rem', textAlign: 'center', border: '1px solid #FFE4C4' }}>
            <h3 style={{ color: '#E95D2A', marginBottom: '0.5rem' }}>Synthesis & Real-World Benefits</h3>
            <p style={{ color: '#555', fontSize: '1.05rem', margin: 0 }}>
              By unifying ANBC and CPC, SG Early Budding ensures children do not have to choose between traditional values and modern excellence. This dual synthesis creates self-disciplined, compassionate, and confident young leaders equipped for both academic success and life.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Building Lifelong Character (Asymmetrical Grid) */}
      <section className="eb-section eb-why-choose">
        {/* Decorators */}
        <div className="eb-deco" style={{ top: '15%', left: '10%', color: 'var(--sky-blue)' }}><i className="fa-solid fa-cloud"></i></div>
        <div className="eb-deco" style={{ bottom: '20%', right: '8%', color: 'var(--playful-pink)' }}><i className="fa-solid fa-pencil"></i></div>
        
        <div className="container">
          
          <div className="eb-section-header" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem' }}>Building Lifelong Character: <span style={{ color: '#ECC440' }}>&quot;One Day, One Good Thing&quot;</span></h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '1rem', lineHeight: '1.8', maxWidth: '800px', margin: '1rem auto 0', textAlign: 'center' }}>
              Habits formed in early childhood shape adult character. SG Early Budding implements a structured &quot;One Day, One Good Thing&quot; Habit Architecture to make character-building a natural, daily experience.</p>
          </div>

          <div className="eb-asym-grid">
            
            <div className="eb-highlight-box">
              <h3><i className="fa-solid fa-star"></i> One Day, One Good Thing</h3>
              <p style={{ color: '#fff', textAlign: 'justify', marginBottom: '2rem' }}>
                Every single day, children are guided to execute one small, intentional act of kindness, responsibility, or personal discipline. Activities include sharing a toy, keeping learning spaces tidy, expressing gratitude, helping a peer, or practicing self-care routine habits.
              </p>
            </div>

            <div>
              <div className="eb-horizontal-cards-container">
                <div className="eb-horizontal-card eb-hc-pink">
                  <div className="eb-horizontal-card-content">
                    <h4 className="eb-horizontal-card-title"><i className="fa-solid fa-lightbulb" style={{ color: 'var(--playful-pink)' }}></i> Core Concept</h4>
                    <p className="eb-horizontal-card-desc">Every single day, children are guided to execute one small, intentional act of kindness, responsibility, or personal discipline.</p>
                  </div>
                </div>

                <div className="eb-horizontal-card eb-hc-blue">
                  <div className="eb-horizontal-card-content">
                    <h4 className="eb-horizontal-card-title"><i className="fa-solid fa-calendar-check" style={{ color: 'var(--sky-blue)' }}></i> Daily Implementation</h4>
                    <p className="eb-horizontal-card-desc">Activities include sharing a toy, keeping learning spaces tidy, expressing gratitude, helping a peer, or practicing self-care routine habits.</p>
                  </div>
                </div>

                <div className="eb-horizontal-card eb-hc-green">
                  <div className="eb-horizontal-card-content">
                    <h4 className="eb-horizontal-card-title"><i className="fa-solid fa-arrow-trend-up" style={{ color: 'var(--lime-green)' }}></i> Long-Term Impact</h4>
                    <p className="eb-horizontal-card-desc">Over time, these daily intentional actions convert into ingrained habits, fostering high self-esteem, social responsibility, empathy, and consistent personal discipline.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Campus Safety, Hygiene & Child Wellbeing */}
      <section className="eb-section eb-discover">
        {/* Decorators */}
        <div className="eb-deco" style={{ top: '5%', right: '10%', color: 'var(--lime-green)' }}><i className="fa-solid fa-shield-halved"></i></div>
        <div className="eb-deco" style={{ bottom: '10%', left: '8%', color: 'var(--kidza-orange)' }}><i className="fa-solid fa-hands-bubbles"></i></div>
        
        <div className="container">
          
          <div className="eb-section-header" style={{ marginBottom: '2rem' }}>
            <h2>Uncompromising Standards for <span style={{ color: 'var(--joyful-yellow)' }}>Campus Safety & Hygiene</span></h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '1rem', lineHeight: '1.8', maxWidth: '800px', margin: '1rem auto 0', textAlign: 'center' }}>
              We provide a secure, nurturing space where parents have complete peace of mind while their children explore and learn.
            </p>
          </div>

          <div className="eb-party-grid">
            
            <div className="eb-party-card pink-theme">
              <div className="eb-party-card-top">
                <div className="eb-party-badge">
                  <span className="eb-party-number" style={{ fontSize: '1.5rem', marginTop: '5px', display: 'block' }}><i className="fa-solid fa-spray-can-sparkles"></i></span>
                </div>
                <div className="eb-party-title-area">
                  <h3>Strict Sanitization Protocols</h3>
                </div>
              </div>
              <div className="eb-party-card-body" style={{ paddingBottom: '1rem' }}>
                <p>Daily multi-surface cleaning, non-toxic sanitization of toys, and clean washroom facilities designed specifically for young children.</p>
              </div>
            </div>

            <div className="eb-party-card orange-theme">
              <div className="eb-party-card-top">
                <div className="eb-party-badge">
                  <span className="eb-party-number" style={{ fontSize: '1.5rem', marginTop: '5px', display: 'block' }}><i className="fa-solid fa-apple-whole"></i></span>
                </div>
                <div className="eb-party-title-area">
                  <h3>Nutrition & Healthy Habits</h3>
                </div>
              </div>
              <div className="eb-party-card-body" style={{ paddingBottom: '1rem' }}>
                <p>Guided mealtime routines that emphasize balanced nutrition, proper handwashing hygiene, and polite table manners.</p>
              </div>
            </div>

            <div className="eb-party-card green-theme">
              <div className="eb-party-card-top">
                <div className="eb-party-badge">
                  <span className="eb-party-number" style={{ fontSize: '1.5rem', marginTop: '5px', display: 'block' }}><i className="fa-solid fa-video"></i></span>
                </div>
                <div className="eb-party-title-area">
                  <h3>CCTV & Physical Security</h3>
                </div>
              </div>
              <div className="eb-party-card-body" style={{ paddingBottom: '1rem' }}>
               <p>Continuous CCTV coverage across play areas and classrooms, with controlled entry points and secure pickup protocols.</p>
              </div>
            </div>

            <div className="eb-party-card blue-theme">
              <div className="eb-party-card-top">
                <div className="eb-party-badge" style={{ backgroundColor: 'var(--sky-blue)' }}>
                  <span className="eb-party-number" style={{ fontSize: '1.5rem', marginTop: '5px', display: 'block' }}><i className="fa-solid fa-user-nurse"></i></span>
                </div>
                <div className="eb-party-title-area">
                  <h3>Dedicated Caretaker Support</h3>
                </div>
              </div>
              <div className="eb-party-card-body" style={{ paddingBottom: '1rem' }}>
               <p>Attentive, background-verified support staff and trained teachers ensuring every child receives individualized care and supervision.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. AEO-Driven FAQ Section */}
      <section className="eb-section eb-faq" style={{ backgroundColor: '#fdf8f5', padding: '4rem 0' }}>
        <div className="container">
          <div className="eb-section-header" style={{ marginBottom: '3rem' }}>
            <h2>Frequently Asked <span style={{ color: '#E95D2A' }}>Questions</span></h2>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: 'var(--kidza-orange)', marginTop: '4px' }}></i> 
                  <span>What makes SG Early Budding unique compared to other playschools in Hosur?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                SG Early Budding uniquely integrates Ancient Noble Bharat Culture (ANBC) with Corporate Professional Culture (CPC). This framework balances traditional values, moral character, and cultural roots with modern structured habits, communication skills, hygiene standards, and personality development, preparing children holistically for future schooling and life.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: 'var(--playful-pink)', marginTop: '4px' }}></i> 
                  <span>What age group does SG Early Budding cater to?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                SG Early Budding caters to early childhood learners, typically ranging from 2 to 6 years of age. Our programs cover Playschool, Nursery, Junior KG, and Senior KG, offering age-appropriate experiential learning and foundational habit-building routines for each stage of development.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: 'var(--lime-green)', marginTop: '4px' }}></i> 
                  <span>How does the "One Day, One Good Thing" program work?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                The "One Day, One Good Thing" program is a daily habit framework where children practice one small positive action every day, such as sharing, tidying up, or thanking a peer. This consistent daily practice builds long-term empathy, personal responsibility, and strong moral character.
              </p>
            </details>
            
            <details className="faq-accordion" name="faq-group" style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <summary style={{ padding: '1rem', cursor: 'pointer', outline: 'none', margin: 0, fontWeight: 'bold' }}>
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', color: '#333', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-circle-question" style={{ color: 'var(--sky-blue)', marginTop: '4px' }}></i> 
                  <span>What safety and security measures are implemented on campus?</span>
                </div>
              </summary>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, padding: '0 1rem 1rem 34px' }}>
                Our campus features comprehensive CCTV monitoring, controlled access gates, child-safe furniture, continuous sanitization of learning tools, clean drinking water, and trained, background-verified support staff to ensure maximum child safety, hygiene, and well-being throughout the school day.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 7. Final Campus Visit CTA & Local NAP */}
      <section className="eb-section eb-final-cta" style={{ padding: '3rem 0', backgroundImage: 'url("/kids-bg-pattern.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.92)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>Experience <span style={{ color: '#E95D2A' }}>SG Early Budding</span> Firsthand</h2>
          <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.8', textAlign: 'center' }}>
            Give your child the ideal foundation for lifelong success, values, and learning. We invite parents to visit our Hosur campus, interact with our educators, and explore our learning environments.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Link href="/admission" className="btn btn-orange" style={{ padding: '1rem 2rem', backgroundColor: '#E95D2A', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(233, 93, 42, 0.3)' }}>Schedule a Campus Visit</Link>
            <Link href="/contact" className="btn btn-red" style={{ padding: '1rem 2rem', backgroundColor: '#fff', color: '#333', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', border: '2px solid #eee' }}>Contact Admissions</Link>
          </div>
          

        </div>
      </section>



    </main>
  );
}



