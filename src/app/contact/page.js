"use client";

import { useState } from "react";
import Link from "next/link";
import "./contact.css";
import "../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Simulate API call
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'transparent', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title" style={{ color: '#fff' }}>Contact Us</h1>
          <p className="vm-banner-desc" style={{ color: '#fff' }}>
            We&apos;d love to hear from you. Get in touch with us to <br />
            learn more about our programs and admissions.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Contact</span>
          </div>
        </div>
        
        {/* Cloud Transition */}
        <div className="cloud-container">
          <div className="cloud-wrapper">
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
            <img src="/sg-education/cloud.png" alt="Cloud Transition" style={{ filter: 'brightness(0) invert(0.98) sepia(0.05) hue-rotate(180deg)' }} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-page-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <div className="contact-info-cards">
              <div className="vm-tag tag-blue" style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>GET IN TOUCH</div>
              <h2 className="contact-form-title" style={{ marginBottom: '2rem' }}>We Are Here To Help You!</h2>
              
              <div className="contact-card">
                <div className="contact-card-icon cc-blue"><i className="fa-solid fa-location-dot"></i></div>
                <div className="contact-card-text">
                  <h3>Our Location</h3>
                  <p>Flat no. D337, near Nanthavanam, Gokul Nagar, Agraharam, Hosur, Tamil Nadu - 635109</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon cc-pink"><i className="fa-solid fa-phone-volume"></i></div>
                <div className="contact-card-text">
                  <h3>Call Us</h3>
                  <p>+91 73394 75210</p>
                  <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon cc-green"><i className="fa-solid fa-envelope"></i></div>
                <div className="contact-card-text">
                  <h3>Email Us</h3>
                  <p>support@sgeducations.com</p>
                  <p>info@sgeducations.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h3 className="contact-form-title">Send a Message</h3>
              <p className="contact-form-desc">Fill out the form below and we will get back to you as soon as possible.</p>
              
              {isSuccess && (
                <div className="success-message">
                  <i className="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control ${errors.name ? 'invalid-input' : ''}`} 
                    placeholder="Enter your name" 
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="contact-form-grid">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-control ${errors.email ? 'invalid-input' : ''}`} 
                      placeholder="Enter your email" 
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control" 
                      placeholder="Enter your phone" 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Message subject" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-control ${errors.message ? 'invalid-input' : ''}`} 
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-btn">Send Message <i className="fa-solid fa-paper-plane" style={{ marginLeft: '0.5rem' }}></i></button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        {/* Placeholder for Google Map Embed. Using Hosur location approximate map */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124483.74601449416!2d77.7479705574345!3d12.720857322998393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae713f019bfdb7%3A0x7d6f554030d97034!2sHosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="SG Education Location"
        ></iframe>
      </section>

    </main>
  );
}

