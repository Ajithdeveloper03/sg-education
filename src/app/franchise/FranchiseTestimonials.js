'use client';

import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    name: "Arun Sharma",
    location: "Franchise Partner, Bangalore",
    quote: "Partnering with SG Education was the best decision for our community. Their curriculum is highly engaging, and the continuous support from their team made setting up the center a breeze. We've seen incredible growth in just our first year!",
    stars: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Meera Patel",
    location: "Franchise Partner, Ahmedabad",
    quote: "What sets SG Education apart is their holistic approach to learning. The training provided to our staff was exceptional, ensuring that we could deliver the highest quality education from day one. Our parents are absolutely thrilled.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Vikram & Anjali Rao",
    location: "Franchise Partners, Pune",
    quote: "We were looking for an education franchise that shared our values. SG Education's blend of modern pedagogy and traditional values resonated perfectly. The marketing support provided during our launch was outstanding.",
    stars: 4.5,
    img: "https://images.pexels.com/photos/16562722/pexels-photo-16562722.jpeg"
  }
];

export default function FranchiseTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="franchise-testimonials-section">
      <div className="container">
        <div className="section-header-centered">
          <h2>Hear From Our Partners</h2>
          <p>Discover how our franchise partners are transforming education in their communities.</p>
        </div>
        
        <div className="franchise-testimonial-carousel">
          <button className="carousel-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous Testimonial">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          
          <div className="carousel-viewport">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="carousel-slide">
                  <div className="franchise-testimonial-card">
                    <div className="ft-quote-icon">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="ft-quote-text">&quot;{t.quote}&quot;</p>
                    
                    <div className="ft-author-section">
                      <img src={t.img} alt={t.name} className="ft-author-img" />
                      <div className="ft-author-info">
                        <h4>{t.name}</h4>
                        <span>{t.location}</span>
                        <div className="ft-stars">
                          {Array.from({ length: 5 }).map((_, i) => {
                            if (i < Math.floor(t.stars)) return <i key={i} className="fa-solid fa-star"></i>;
                            if (i < t.stars) return <i key={i} className="fa-solid fa-star-half-stroke"></i>;
                            return null;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-nav-btn next-btn" onClick={handleNext} aria-label="Next Testimonial">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button 
              key={idx} 
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
