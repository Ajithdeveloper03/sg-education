"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./admin.css"; // Ensure admin-specific global styles are loaded

export default function AdminDashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAuth(true);
      setUsername(localStorage.getItem("admin_username") || "Admin");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_username");
    router.push("/admin");
  };

  if (!isAuth) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  return (
    <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f9' }}>
      
      {/* Mobile Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${mobileMenuOpen ? 'show' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <div className="admin-sidebar-logo-wrapper">
            <img src="/SG logo.webp" alt="SG Education" className="admin-sidebar-logo" />
          </div>
          <h3>SG EDUCATIONS</h3>
          <p className="admin-sidebar-title">Admin Panel</p>
        </div>
        <nav className="admin-sidebar-nav">
          <Link href="/admin/dashboard" className={`admin-nav-link ${pathname === '/admin/dashboard' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-gauge"></i> Dashboard
          </Link>
          <Link href="/admin/blog" className={`admin-nav-link ${pathname === '/admin/blog' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-blog"></i> Blog Management
          </Link>
          <Link href="/admin/gallery" className={`admin-nav-link ${pathname === '/admin/gallery' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-images"></i> Gallery Management
          </Link>
          
          <div className="admin-sidebar-footer">
            <Link href="/" target="_blank" className="admin-nav-link view-site-btn" style={{ marginBottom: '10px' }}>
              <i className="fa-solid fa-globe"></i> View Live Site
            </Link>
            <button onClick={handleLogout} className="admin-nav-link logout-btn">
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main-content">
        <div className="admin-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1, minWidth: 0 }}>
            <button className="admin-mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <h2 className="admin-page-title">
              {pathname === '/admin/dashboard' ? 'Dashboard Overview' : 
               pathname === '/admin/blog' ? 'Blog Content Management' : 
               pathname === '/admin/gallery' ? 'Gallery Content Management' : 'Admin Panel'}
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span className="admin-username">Welcome, {username}</span>
            <div className="admin-avatar">
              {username.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
