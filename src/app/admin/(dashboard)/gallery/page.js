"use client";

import { useState, useEffect, useRef } from "react";
import ConfirmModal from "../../../../components/ConfirmModal";

export default function GalleryManager() {
  const [gallery, setGallery] = useState([]);
  const [view, setView] = useState("list");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: "",
    message: "",
    confirmText: "",
    action: null
  });

  const [formData, setFormData] = useState({ id: "", title: "", category: "yoga day", existing_image: "" });
  const fileInputRef = useRef(null);

  const fetchGallery = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://inymartlabs.com/sg-education/php-backend/api_gallery.php");
      const data = await res.json();
      if (data.status === 'success') setGallery(data.data);
    } catch (err) {
      setError("Failed to fetch gallery items.");
    }
    setLoading(false);
  };

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetchGallery(); }, []);

  const handleInputChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleEdit = (item) => {
    setFormData({ id: item.id, title: item.title, category: item.category, existing_image: item.image_url });
    setView("edit");
    setSuccess(""); setError("");
  };

  const requestDelete = (id) => {
    setModalConfig({
      isOpen: true,
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this gallery image? This action cannot be undone.",
      confirmText: "YES, DELETE IMAGE",
      action: () => executeDelete(id)
    });
  };

  const executeDelete = async (id) => {
    setModalConfig({ ...modalConfig, isOpen: false });
    try {
      const res = await fetch(`https://inymartlabs.com/sg-education/php-backend/api_gallery.php?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.status === 'success') {
        setSuccess("Image deleted successfully!");
        fetchGallery();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Delete failed.");
    }
  };

  const requestSubmit = (e) => {
    e.preventDefault();
    setModalConfig({
      isOpen: true,
      title: formData.id ? "Confirm Image Update" : "Confirm Image Upload",
      message: formData.id ? "You are about to update this gallery image." : "You are about to upload a new gallery image.",
      confirmText: formData.id ? "YES, UPDATE IMAGE" : "YES, UPLOAD IMAGE",
      action: () => executeSubmit()
    });
  };

  const executeSubmit = async () => {
    setModalConfig({ ...modalConfig, isOpen: false });
    setLoading(true); setError(""); setSuccess("");
    
    const submitData = new FormData();
    Object.keys(formData).forEach(key => submitData.append(key, formData[key]));
    if (fileInputRef.current?.files[0]) submitData.append("image", fileInputRef.current.files[0]);

    try {
      const res = await fetch("https://inymartlabs.com/sg-education/php-backend/api_gallery.php", { method: "POST", body: submitData });
      const data = await res.json();
      if (data.status === 'success') {
        setSuccess(data.message);
        setView("list");
        fetchGallery();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Submission failed.");
    }
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({ id: "", title: "", category: "yoga day", existing_image: "" });
    setView("list"); setSuccess(""); setError("");
  };

  return (
    <div>
      {error && <div style={{ background: '#f8d7da', color: '#721c24', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>{error}</div>}
      {success && <div style={{ background: '#d4edda', color: '#155724', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>{success}</div>}

      {view === 'list' && (
        <div className="admin-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3>Gallery Images</h3>
            <button onClick={() => { resetForm(); setView('add'); }} className="admin-btn admin-btn-success">
              <i className="fa-solid fa-upload"></i> Upload Image
            </button>
          </div>
          
          {loading ? <p>Loading gallery...</p> : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
              {gallery.length === 0 && <p>No images found.</p>}
              {gallery.map(g => (
                <div key={g.id} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={g.image_url} alt={g.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{ padding: '15px' }}>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{g.title}</h4>
                    <span style={{ display: 'inline-block', background: '#e9ecef', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', marginBottom: '10px' }}>{g.category}</span>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button onClick={() => handleEdit(g)} className="admin-btn" style={{ flex: 1, padding: '5px', background: '#17a2b8', color: '#fff', fontSize: '0.9rem' }}>Edit</button>
                      <button onClick={() => requestDelete(g.id)} className="admin-btn admin-btn-danger" style={{ flex: 1, padding: '5px', fontSize: '0.9rem' }}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {(view === 'add' || view === 'edit') && (
        <div className="admin-card" style={{ maxWidth: '600px' }}>
          <h3>{view === 'add' ? 'Upload New Image' : 'Edit Image Info'}</h3>
          <form onSubmit={requestSubmit} style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Image Title/Caption</label>
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="admin-input" required />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange} className="admin-input" required>
                <option value="yoga day">Yoga Day</option>
                <option value="fancy dress day">Fancy Dress Day</option>
                <option value="green day">Green Day</option>
                <option value="culturals">Culturals</option>
                <option value="blue day">Blue Day</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Select Image</label>
              {formData.existing_image && (
                <img src={formData.existing_image} alt="Current" style={{ height: '80px', borderRadius: '5px', marginBottom: '10px', display: 'block' }} />
              )}
              <input type="file" ref={fileInputRef} accept="image/*" className="admin-input" required={view === 'add' && !formData.existing_image} />
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <button type="submit" disabled={loading} className="admin-btn admin-btn-success">
                {loading ? 'Saving...' : 'Save Image'}
              </button>
              <button type="button" onClick={resetForm} className="admin-btn" style={{ background: '#6c757d', color: '#fff' }}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <ConfirmModal 
        isOpen={modalConfig.isOpen}
        title={modalConfig.title}
        message={modalConfig.message}
        confirmText={modalConfig.confirmText}
        onConfirm={modalConfig.action}
        onCancel={() => setModalConfig({ ...modalConfig, isOpen: false })}
      />
    </div>
  );
}
