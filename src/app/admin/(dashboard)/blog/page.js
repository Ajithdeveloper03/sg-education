"use client";

import { useState, useEffect, useRef } from "react";

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [view, setView] = useState("list"); // 'list', 'add', 'edit'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // Form State
  const [formData, setFormData] = useState({
    id: "", title: "", category: "EDUCATION", author: "Admin", 
    read_time: "5 min read", excerpt: "", content: "", existing_image: ""
  });
  const fileInputRef = useRef(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost/php-backend/api_blog.php");
      const data = await res.json();
      if (data.status === 'success') {
        setBlogs(data.data);
      }
    } catch (err) {
      setError("Failed to fetch blogs. Ensure PHP API is running.");
    }
    setLoading(false);
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = (blog) => {
    setFormData({
      id: blog.id,
      title: blog.title,
      category: blog.category,
      author: blog.author,
      read_time: blog.read_time,
      excerpt: blog.excerpt,
      content: blog.content,
      existing_image: blog.image_url
    });
    setView("edit");
    setSuccess(""); setError("");
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch(`http://localhost/php-backend/api_blog.php?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.status === 'success') {
        setSuccess("Blog deleted successfully!");
        fetchBlogs();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Delete failed.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(""); setSuccess("");
    
    const submitData = new FormData();
    Object.keys(formData).forEach(key => submitData.append(key, formData[key]));
    
    if (fileInputRef.current?.files[0]) {
      submitData.append("image", fileInputRef.current.files[0]);
    }

    try {
      const res = await fetch("http://localhost/php-backend/api_blog.php", {
        method: "POST", // API handles both insert and update via POST
        body: submitData
      });
      const data = await res.json();
      
      if (data.status === 'success') {
        setSuccess(data.message);
        setView("list");
        fetchBlogs();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Submission failed. Ensure PHP API is running and allows large uploads.");
    }
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({ id: "", title: "", category: "EDUCATION", author: "Admin", read_time: "5 min read", excerpt: "", content: "", existing_image: "" });
    setView("list");
    setSuccess(""); setError("");
  };

  return (
    <div>
      {error && <div style={{ background: '#f8d7da', color: '#721c24', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>{error}</div>}
      {success && <div style={{ background: '#d4edda', color: '#155724', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>{success}</div>}

      {view === 'list' && (
        <div className="admin-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3>All Blogs</h3>
            <button onClick={() => { resetForm(); setView('add'); }} className="admin-btn admin-btn-success">
              <i className="fa-solid fa-plus"></i> Add New Blog
            </button>
          </div>
          
          {loading ? <p>Loading blogs...</p> : (
            <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.length === 0 && (
                  <tr><td colSpan="5" style={{ textAlign: 'center' }}>No blogs found.</td></tr>
                )}
                {blogs.map(blog => (
                  <tr key={blog.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={blog.image_url} alt="thumbnail" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '5px' }} />
                        <strong>{blog.title}</strong>
                      </div>
                    </td>
                    <td>{blog.category}</td>
                    <td>{blog.author}</td>
                    <td>{new Date(blog.created_at).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => handleEdit(blog)} className="admin-btn" style={{ marginRight: '10px', padding: '5px 10px', background: '#17a2b8', color: '#fff' }}>Edit</button>
                      <button onClick={() => handleDelete(blog.id)} className="admin-btn admin-btn-danger" style={{ padding: '5px 10px' }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
        </div>
      )}

      {(view === 'add' || view === 'edit') && (
        <div className="admin-card">
          <h3>{view === 'add' ? 'Create New Blog' : 'Edit Blog'}</h3>
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            
            <div className="admin-form-grid grid-cols-2-1">
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Blog Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="admin-input" required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Category</label>
                <input type="text" name="category" value={formData.category} onChange={handleInputChange} className="admin-input" />
              </div>
            </div>

            <div className="admin-form-grid grid-cols-1-1">
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Author</label>
                <input type="text" name="author" value={formData.author} onChange={handleInputChange} className="admin-input" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Read Time</label>
                <input type="text" name="read_time" value={formData.read_time} onChange={handleInputChange} className="admin-input" />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Featured Image Upload</label>
              {formData.existing_image && (
                <div style={{ marginBottom: '10px' }}>
                  <img src={formData.existing_image} alt="Current" style={{ height: '80px', borderRadius: '5px' }} />
                  <p style={{ margin: '5px 0', fontSize: '0.8rem', color: '#666' }}>Current image. Upload a new one to replace it.</p>
                </div>
              )}
              <input type="file" ref={fileInputRef} accept="image/*" className="admin-input" required={view === 'add' && !formData.existing_image} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Short Description (Excerpt)</label>
              <textarea name="excerpt" value={formData.excerpt} onChange={handleInputChange} className="admin-input" rows="2" required></textarea>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Blog Content</label>
              <textarea name="content" value={formData.content} onChange={handleInputChange} className="admin-input" rows="10" required></textarea>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <button type="submit" disabled={loading} className="admin-btn admin-btn-success">
                {loading ? 'Saving...' : 'Save Blog Post'}
              </button>
              <button type="button" onClick={resetForm} className="admin-btn" style={{ background: '#6c757d', color: '#fff' }}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
