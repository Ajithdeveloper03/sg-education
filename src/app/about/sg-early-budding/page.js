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
      title: "Hygiene – Safe & Healthy",
      icon: "fa-hands-bubbles",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      content: {
        badge: "Pillar 01",
        heading: "A Safe & Healthy Learning Environment",
        text: "We prioritize maintaining a hygienic and safe environment for children. A clean space fosters better learning and development while ensuring the well-being of our little ones. Our hygiene measures include:",
        list: [
          { text: "Regular sanitization of classrooms and play areas", icon: "fa-spray-can-sparkles" },
          { text: "Educating children about personal hygiene habits", icon: "fa-hands-bubbles" },
          { text: "Providing nutritious and healthy meals", icon: "fa-apple-whole" },
          { text: "Ensuring a safe and secure campus for all", icon: "fa-shield-halved" }
        ]
      }
    },
    {
      id: 1,
      number: "02",
      title: "Traditional Customs",
      icon: "fa-om",
      image: "https://images.unsplash.com/photo-1604313049589-3221941655b3?auto=format&fit=crop&w=800&q=80",
      content: {
        badge: "Pillar 02",
        heading: "Preserving Our Rich Heritage",
        text: "We take pride in incorporating ancient traditions and cultural values into early childhood education. Children are introduced to:",
        list: [
          { text: "Moral and ethical lessons from Indian traditions", icon: "fa-book-open" },
          { text: "Celebrations of cultural festivals and rituals", icon: "fa-om" },
          { text: "Practicing values like respect, kindness, and gratitude", icon: "fa-hands-praying" },
          { text: "Learning through stories, folklore, and ancient wisdom", icon: "fa-scroll" }
        ]
      }
    },
    {
      id: 2,
      number: "03",
      title: "Fun Learning",
      icon: "fa-shapes",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      content: {
        badge: "Pillar 03",
        heading: "Knowledge with Creativity",
        text: "Learning should be fun and engaging! Our curriculum focuses on blending education with creative thinking to make learning an enjoyable experience. Our approach includes:",
        list: [
          { text: "Activity-based and experiential learning", icon: "fa-flask" },
          { text: "Hands-on projects that enhance critical thinking", icon: "fa-puzzle-piece" },
          { text: "Storytelling, art, music, and role-playing for better understanding", icon: "fa-masks-theater" },
          { text: "Interactive classroom sessions with innovative teaching techniques", icon: "fa-chalkboard-user" }
        ]
      }
    },
    {
      id: 3,
      number: "04",
      title: "Skill Identity",
      icon: "fa-medal",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      content: {
        badge: "Pillar 04",
        heading: "Recognizing & Enhancing Talents",
        text: "Every child is unique, and we aim to identify and nurture their innate talents to help them reach their full potential. We focus on:",
        list: [
          { text: "Early identification of children's interests and skills", icon: "fa-magnifying-glass-chart" },
          { text: "Encouraging problem-solving, leadership, and teamwork", icon: "fa-people-group" },
          { text: "Introducing basic corporate skills like communication and confidence-building", icon: "fa-bullhorn" },
          { text: "Providing opportunities for extracurricular activities like sports, drama, and public speaking", icon: "fa-medal" }
        ]
      }
    }
  ];

  return (
    <main>
      {/* 1. Welcome to SG Early Budding (Hero Section) */}
      <section className="eb-hero" style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80")'
      }}>
        <div className="eb-hero-overlay" style={{ backgroundColor: 'rgba(7, 6, 16, 0.6)' }}></div>
        <div className="eb-hero-content">
          <h1 className="eb-hero-title">Welcome to SG Early Budding</h1>
          <p className="eb-hero-desc">
            Nurturing young minds with a balanced approach of traditional values, modern learning techniques, creativity, and essential life skills.
          </p>
          <div className="eb-pagination" style={{
            display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(5px)', padding: '0.5rem 1.2rem', borderRadius: '30px', fontSize: '0.9rem', color: '#fff', fontWeight: '600'
          }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span>About Us</span>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>SG Early Budding</span>
          </div>
        </div>
        
        {/* Cloud Transition */}
        <div className="cloud-container" style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 3, overflow: 'hidden', lineHeight: 0 }}>
          <div className="cloud-wrapper" style={{ display: 'flex', width: '200%', animation: 'moveCloudsRight 30s linear infinite' }}>
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ width: '50%', height: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ width: '50%', height: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
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
            <h2>About <span style={{ color: 'var(--playful-pink)' }}>SG Early Budding</span></h2>
            <p style={{ color: 'var(--neutral-dark)', fontSize: '1.1rem', marginTop: '1rem', lineHeight: '1.8', maxWidth: '800px', margin: '1rem auto 1.5rem' }}>
              At <strong>SG Early Budding</strong>, we believe in nurturing young minds with a balanced approach that integrates traditional values, modern learning techniques, creativity, and essential life skills.
            </p>
            
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
            <h2>Our <span style={{ color: '#E95D2A' }}>Unique Approach</span></h2>
            <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '800px', margin: '1rem auto 0' }}>
              SG Education integrates the profound wisdom of Ancient Bharath Culture with the dynamic skills of Corporate Culture to nurture well-rounded, future-ready individuals.
            </p>
          </div>

          <div className="culture-cards-wrapper">
            
            {/* ANBC Card */}
            <div className="culture-card-container">
              <div className="culture-img-wrapper">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" alt="Ancient Bharath Culture" />
              </div>
              <div className="culture-info-card anbc-theme">
                <h3>Ancient Bharath Culture <span className="acronym">(ANBC)</span></h3>
                <p className="culture-intro">Ancient Bharath has a rich heritage of educational practices that emphasize holistic development, moral values, and the pursuit of knowledge. We are incorporating the following elements:</p>
                <ul className="culture-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-om" style={{color: '#E95D2A', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>Gurukul System</strong> </li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-hands-holding-child" style={{color: '#E95D2A', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>Value-Based Education</strong> </li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-yin-yang" style={{color: '#E95D2A', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>Yoga and Meditation</strong> </li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-palette" style={{color: '#E95D2A', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>Arts and Crafts</strong> </li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-seedling" style={{color: '#E95D2A', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>Individual Development</strong> </li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-person-arrow-up-from-line" style={{color: '#E95D2A', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>Individual Self-Reliance</strong> </li>
                </ul>
                <div className="culture-card-bottom">
                  <div className="culture-highlight">
                    <strong>Focus</strong> <span className="highlight-text">Traditional Values</span>
                  </div>
                  <button className="culture-btn"><i className="fa-solid fa-plus"></i></button>
                </div>
              </div>
            </div>

            {/* CPC Card */}
            <div className="culture-card-container">
              <div className="culture-img-wrapper">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Corporate Culture" />
              </div>
              <div className="culture-info-card cpc-theme">
                <h3>Corporate Culture <span className="acronym">(CPC)</span></h3>
                <p className="culture-intro">Corporate Culture refers to the set of beliefs and behaviors that guide how a person can manage internet and handle external thing in a modern world.</p>
                <ul className="culture-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-comments" style={{color: '#00AEFF', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>Communication</strong> </li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-book-open-reader" style={{color: '#00AEFF', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>Usage of Vocabulary</strong> </li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-handshake-angle" style={{color: '#00AEFF', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>Gesture</strong> </li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-users" style={{color: '#00AEFF', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>People Handling</strong> </li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-ear-listen" style={{color: '#00AEFF', marginRight: '10px', width: '20px', textAlign: 'center'}}></i><strong>Active Listening</strong> </li>
                </ul>
                <div className="culture-card-bottom">
                  <div className="culture-highlight">
                    <strong>Focus</strong> <span className="highlight-text">Modern Skills</span>
                  </div>
                  <button className="culture-btn"><i className="fa-solid fa-plus"></i></button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Choose SG Early Budding? (Asymmetrical Grid) */}
      <section className="eb-section eb-why-choose">
        {/* Decorators */}
        <div className="eb-deco" style={{ top: '15%', left: '10%', color: 'var(--sky-blue)' }}><i className="fa-solid fa-cloud"></i></div>
        <div className="eb-deco" style={{ bottom: '20%', right: '8%', color: 'var(--playful-pink)' }}><i className="fa-solid fa-pencil"></i></div>
        
        <div className="container">
          
          <div className="eb-section-header" style={{ marginBottom: '3rem' }}>
            <h2>Why Choose <span style={{ color: '#00AEFF' }}>SG Early Budding?</span></h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '1rem', lineHeight: '1.8', maxWidth: '800px', margin: '1rem auto 0' }}>
              In parallel, we recognize the importance of preparing students for the professional world. Therefore, we are integrating essential modern corporate practices directly into our daily routines:
            </p>
          </div>

          <div className="eb-asym-grid">
            
            <div className="eb-highlight-box">
              <h3><i className="fa-solid fa-star"></i> Sowing the Seeds of Success in Every Child</h3>
              <p style={{ color: '#fff' }}>
At SG Early Budding, we nurture young learners to become confident, knowledgeable, and culturally rooted individuals. Our mission is to provide a strong foundation through enriching early education that inspires curiosity, creativity, and lifelong learning. With dedicated educators and a focus on holistic development, we help every child grow, thrive, and reach their full potential.           </p> </div>

            <div>
              <div className="eb-horizontal-cards-container">
                <div className="eb-horizontal-card eb-hc-pink">
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80" alt="Project-Based Learning" className="eb-horizontal-card-img" />
                  <div className="eb-horizontal-card-content">
                    <h4 className="eb-horizontal-card-title"><i className="fa-solid fa-book-open" style={{ color: 'var(--playful-pink)' }}></i> Project-Based Learning</h4>
                    <p className="eb-horizontal-card-desc">Learn by doing through hands-on projects that encourage creativity and teamwork.</p>
                  </div>
                </div>

                <div className="eb-horizontal-card eb-hc-blue">
                  <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80" alt="Leadership & Communication" className="eb-horizontal-card-img" />
                  <div className="eb-horizontal-card-content">
                    <h4 className="eb-horizontal-card-title"><i className="fa-solid fa-comments" style={{ color: 'var(--sky-blue)' }}></i> Leadership & Communication Skills</h4>
                    <p className="eb-horizontal-card-desc">Build confidence and communication skills through collaborative activities.</p>
                  </div>
                </div>

                <div className="eb-horizontal-card eb-hc-green">
                  <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" alt="Time Management" className="eb-horizontal-card-img" />
                  <div className="eb-horizontal-card-content">
                    <h4 className="eb-horizontal-card-title"><i className="fa-solid fa-clock" style={{ color: 'var(--lime-green)' }}></i> Time Management & Professionalism</h4>
                    <p className="eb-horizontal-card-desc">Develop responsibility, discipline, and organizational skills for success.</p>
                  </div>
                </div>

                <div className="eb-horizontal-card eb-hc-orange">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Technology Integration" className="eb-horizontal-card-img" />
                  <div className="eb-horizontal-card-content">
                    <h4 className="eb-horizontal-card-title"><i className="fa-solid fa-laptop" style={{ color: 'var(--kidza-orange)' }}></i> Technology Integration</h4>
                    <p className="eb-horizontal-card-desc">Explore digital tools and technology to enhance learning and future readiness. 🌱✨</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Discover SG Early Budding (3-Column Layout) */}
      <section className="eb-section eb-discover">
        {/* Decorators */}
        <div className="eb-deco" style={{ top: '5%', right: '10%', color: 'var(--lime-green)' }}><i className="fa-solid fa-music"></i></div>
        <div className="eb-deco" style={{ bottom: '10%', left: '8%', color: 'var(--kidza-orange)' }}><i className="fa-solid fa-face-smile"></i></div>
        
        <div className="container">
          
          <div className="eb-section-header" style={{ marginBottom: '1rem' }}>
            <h2>Discover <span style={{ color: 'var(--joyful-yellow)' }}>SG Early Budding</span></h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '1rem', lineHeight: '1.8', maxWidth: '800px', margin: '1rem auto 0' }}>
              SG Early Budding provides a holistic learning experience that nurtures intellectual, emotional, social, and physical development. 
            </p>
          </div>

          <div className="eb-party-grid">
            
            {/* Card 1: Our Approach */}
            <div className="eb-party-card pink-theme">
              <div className="eb-party-card-top">
                <div className="eb-party-badge">
                  <span className="eb-party-number">01</span>
                </div>
                <div className="eb-party-title-area">
                  <h3>Our Approach</h3>
                </div>
              </div>
              <div className="eb-party-card-body">
                <ul className="eb-party-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-star" style={{color: 'var(--playful-pink)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Holistic learning experience</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-seedling" style={{color: 'var(--playful-pink)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Nurturing young minds</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-brain" style={{color: 'var(--playful-pink)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Intellectual development</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-heart" style={{color: 'var(--playful-pink)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Emotional & Social growth</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-child-reaching" style={{color: 'var(--playful-pink)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Physical development</li>
                </ul>
                <div className="eb-party-action">
                  <button className="eb-party-btn">Read More</button>
                </div>
              </div>
            </div>

            {/* Card 2: Our Curriculum */}
            <div className="eb-party-card orange-theme">
              <div className="eb-party-card-top">
                <div className="eb-party-badge">
                  <span className="eb-party-number">02</span>
                </div>
                <div className="eb-party-title-area">
                  <h3>Our Curriculum</h3>
                </div>
              </div>
              <div className="eb-party-card-body">
                <ul className="eb-party-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-compass-drafting" style={{color: 'var(--kidza-orange)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Comprehensive design</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-children" style={{color: 'var(--kidza-orange)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Child-centric focus</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-dharmachakra" style={{color: 'var(--kidza-orange)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Traditional values</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-laptop-code" style={{color: 'var(--kidza-orange)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Modern methodologies</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-arrow-trend-up" style={{color: 'var(--kidza-orange)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Well-rounded growth</li>
                </ul>
                <div className="eb-party-action">
                  <button className="eb-party-btn">Read More</button>
                </div>
              </div>
            </div>

            {/* Card 3: Our Faculty */}
            <div className="eb-party-card green-theme">
              <div className="eb-party-card-top">
                <div className="eb-party-badge">
                  <span className="eb-party-number">03</span>
                </div>
                <div className="eb-party-title-area">
                  <h3>Our Faculty</h3>
                </div>
              </div>
              <div className="eb-party-card-body">
                <ul className="eb-party-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-heart-pulse" style={{color: 'var(--lime-green)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Heart of our environment</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-lightbulb" style={{color: 'var(--lime-green)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Inspiring great teachers</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-compass" style={{color: 'var(--lime-green)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Guiding young minds</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-leaf" style={{color: 'var(--lime-green)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Nurturing environment</li>
                  <li style={{ marginBottom: '8px' }}><i className="fa-solid fa-stairs" style={{color: 'var(--lime-green)', marginRight: '10px', width: '20px', textAlign: 'center'}}></i>Foundation for success</li>
                </ul>
                <div className="eb-party-action">
                  <button className="eb-party-btn">Read More</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



    </main>
  );
}
