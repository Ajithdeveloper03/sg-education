"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if already logged in
    const token = localStorage.getItem("admin_token");
    if (token) {
      router.push("/admin/dashboard");
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://inymartlabs.com/sg-education/php-backend/api_auth.php?action=login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.status === "success") {
        localStorage.setItem("admin_token", data.data.token);
        localStorage.setItem("admin_username", data.data.username);
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Unable to connect to the authentication server. Ensure PHP server is running on port 80.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f6f9' }}>
      <div style={{ width: '400px', backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#1d2a44' }}>Admin Login</h2>
        
        {error && (
          <div style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '10px', borderRadius: '5px', marginBottom: '20px', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px' }}
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              width: '100%', padding: '15px', backgroundColor: '#1d2a44', color: '#fff', 
              border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' 
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </main>
  );
}
