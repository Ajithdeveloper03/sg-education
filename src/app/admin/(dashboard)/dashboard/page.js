"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [stats, setStats] = useState({ totalBlogs: 0, totalGallery: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/php-backend/api_dashboard.php")
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') setStats(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching stats:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Blog Stats Card */}
        <div className="admin-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#555', margin: '0 0 10px 0', fontSize: '1.2rem' }}>Total Blogs</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, color: '#1d2a44' }}>
                {loading ? '...' : stats.totalBlogs}
              </p>
            </div>
            <i className="fa-solid fa-blog" style={{ fontSize: '3rem', color: '#1d2a44', opacity: 0.2 }}></i>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Link href="/admin/blog" className="admin-btn admin-btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Manage Blogs
            </Link>
          </div>
        </div>

        {/* Gallery Stats Card */}
        <div className="admin-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#555', margin: '0 0 10px 0', fontSize: '1.2rem' }}>Gallery Images</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, color: '#28a745' }}>
                {loading ? '...' : stats.totalGallery}
              </p>
            </div>
            <i className="fa-solid fa-images" style={{ fontSize: '3rem', color: '#28a745', opacity: 0.2 }}></i>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Link href="/admin/gallery" className="admin-btn admin-btn-success" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Manage Gallery
            </Link>
          </div>
        </div>

      </div>

      <div className="admin-card" style={{ marginTop: '30px' }}>
        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>System Status</h3>
        <p>Your Next.js Admin Panel is correctly connected to the PHP API Database.</p>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Blogs:</strong> You can create, edit, delete, and view blog posts.</li>
          <li><strong>Gallery:</strong> You can upload, edit, and delete images in the gallery.</li>
          <li><strong>Changes:</strong> Any changes made here are instantly reflected on the main website.</li>
        </ul>
      </div>
    </div>
  );
}
