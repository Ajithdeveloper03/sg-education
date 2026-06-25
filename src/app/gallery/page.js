"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./gallery.css";
import "../about/vision-mission/vision-mission.css"; // Reuse banner styles

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxData, setLightboxData] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("https://inymartlabs.com/sg-education/php-backend/api_gallery.php");
        const data = await res.json();
        if (data.status === 'success') {
          setGalleryData(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const filteredData = filter === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category?.toLowerCase() === filter);

  return (
    <main style={{ backgroundColor: '#fff', paddingTop: '0', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Page Banner */}
      <section style={{ 
        position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundImage: 'url("/sg-education/gallery banner.png")', 
        backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '40px', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(17, 24, 39, 0.45)', zIndex: 1 }}></div>
        <div className="vm-banner-content" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '30px' }}>
          <h1 className="vm-banner-title" style={{ color: '#fff' }}>Our Gallery</h1>
          <p className="vm-banner-desc" style={{ color: '#fff' }}>
            A glimpse into the magical moments and joyful <br />
            learning experiences at SG Education.
          </p>
          <div className="vm-pagination">
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.8rem', color: '#FFC300' }}><i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i></span>
            <span style={{ color: '#FFC300' }}>Gallery</span>
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

      {/* Gallery Section */}
      <section className="gallery-page-section">
        <div className="container">
          
          <div className="gallery-filters">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'campus' ? 'active' : ''}`} onClick={() => setFilter('campus')}>Campus</button>
            <button className={`filter-btn ${filter === 'learning' ? 'active' : ''}`} onClick={() => setFilter('learning')}>Learning</button>
            <button className={`filter-btn ${filter === 'playtime' ? 'active' : ''}`} onClick={() => setFilter('playtime')}>Playtime</button>
            <button className={`filter-btn ${filter === 'events' ? 'active' : ''}`} onClick={() => setFilter('events')}>Events</button>
          </div>

          <div className="gallery-grid">
            {filteredData.map((item) => (
              <div key={item.id} className="gallery-item" onClick={() => setLightboxData(item)}>
                <img src={item.image_url} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p className="capitalize" style={{ textTransform: 'capitalize' }}>{item.category}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <div className={`lightbox-modal ${lightboxData ? 'open' : ''}`} onClick={() => setLightboxData(null)}>
        {lightboxData && (
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxData(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={lightboxData.image_url} alt={lightboxData.title} />
            <div className="lightbox-caption">{lightboxData.title}</div>
          </div>
        )}
      </div>

    </main>
  );
}



