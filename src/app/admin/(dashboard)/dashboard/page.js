"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [stats, setStats] = useState({ totalBlogs: 0, totalGallery: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sgeducations.in/php-backend/api_dashboard.php")
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        
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

      {/* Live Reminder Card */}
      <style>{`
        @keyframes adminPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.55), 0 8px 32px rgba(220,38,38,0.18); }
          50% { box-shadow: 0 0 0 12px rgba(220, 38, 38, 0), 0 8px 32px rgba(220,38,38,0.32); }
        }
        .live-reminder-card {
          animation: adminPulse 2.2s ease-in-out infinite;
          margin-top: 30px;
          background: linear-gradient(135deg, #1a0000 0%, #2d0a0a 40%, #111 100%);
          border: 2px solid #dc2626;
          border-radius: 14px;
          padding: 28px 36px;
          display: flex;
          align-items: center;
          gap: 24px;
          position: relative;
          overflow: hidden;
        }
        .live-badge-container {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        @media (max-width: 576px) {
          .live-reminder-card {
            flex-direction: column;
            text-align: center;
            padding: 24px 20px;
            gap: 16px;
          }
          .live-badge-container {
            flex-direction: row;
            position: absolute;
            top: 20px;
            right: 20px;
          }
        }
      `}</style>

      <div className="live-reminder-card">
        {/* Decorative red glow strip */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '6px', height: '100%',
          background: 'linear-gradient(180deg, #ff4444, #dc2626, #7f1d1d)',
          borderRadius: '14px 0 0 14px',
        }} />

        {/* Icon */}
        <div style={{
          flexShrink: 0,
          width: '56px', height: '56px',
          borderRadius: '50%',
          background: 'rgba(220,38,38,0.18)',
          border: '2px solid #dc2626',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <i className="fa-solid fa-bolt" style={{ fontSize: '1.6rem', color: '#ff4444' }}></i>
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <p style={{
            margin: '0 0 6px 0',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#f87171',
          }}>
            ⚠ Live Website Notice
          </p>
          <p style={{
            margin: 0,
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: '1.5',
          }}>
            Changes made in the Admin Panel are reflected <span style={{ color: '#ff4444' }}>instantly</span> on the website.
          </p>
          <p style={{
            margin: '8px 0 0 0',
            fontSize: '0.82rem',
            color: '#fca5a5',
            lineHeight: '1.6',
          }}>
            Please review all edits carefully before saving. Deletions are permanent and cannot be undone.
          </p>
        </div>

        {/* Live dot badge */}
        <div className="live-badge-container">
          <div style={{
            width: '14px', height: '14px', borderRadius: '50%',
            background: '#22c55e',
            boxShadow: '0 0 8px #22c55e',
            animation: 'adminPulse 1.4s ease-in-out infinite',
          }} />
          <span style={{ fontSize: '0.68rem', color: '#86efac', fontWeight: '700', letterSpacing: '0.05em' }}>LIVE</span>
        </div>
      </div>
    </div>
  );
}
