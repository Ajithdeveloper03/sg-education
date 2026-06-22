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

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
    } else {
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
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: '#1d2a44', color: '#fff', position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <div style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ margin: 0, color: '#ECC440' }}>SG Education</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.8 }}>Admin Panel</p>
        </div>
        <nav style={{ padding: '20px 0' }}>
          <Link href="/admin/dashboard" className={`admin-nav-link ${pathname === '/admin/dashboard' ? 'active' : ''}`}>
            <i className="fa-solid fa-gauge" style={{ width: '25px' }}></i> Dashboard
          </Link>
          <Link href="/admin/blog" className={`admin-nav-link ${pathname === '/admin/blog' ? 'active' : ''}`}>
            <i className="fa-solid fa-blog" style={{ width: '25px' }}></i> Blog Management
          </Link>
          <Link href="/admin/gallery" className={`admin-nav-link ${pathname === '/admin/gallery' ? 'active' : ''}`}>
            <i className="fa-solid fa-images" style={{ width: '25px' }}></i> Gallery Management
          </Link>
          
          <div style={{ marginTop: '50px', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 0' }}>
            <button onClick={handleLogout} className="admin-nav-link" style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', color: '#ff6b6b', cursor: 'pointer' }}>
              <i className="fa-solid fa-right-from-bracket" style={{ width: '25px' }}></i> Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, marginLeft: '250px', padding: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', backgroundColor: '#fff', padding: '15px 20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>
            {pathname === '/admin/dashboard' ? 'Dashboard Overview' : 
             pathname === '/admin/blog' ? 'Blog Content Management' : 
             pathname === '/admin/gallery' ? 'Gallery Content Management' : 'Admin Panel'}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontWeight: 'bold', color: '#1d2a44' }}>Welcome, {username}</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ECC440', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d2a44', fontWeight: 'bold' }}>
              {username.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
