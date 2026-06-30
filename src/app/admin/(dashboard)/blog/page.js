"use client";

import { useState, useEffect, useRef } from "react";

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [view, setView] = useState("list"); // 'list', 'add', 'edit'
  const [activeTab, setActiveTab] = useState("content"); // 'content', 'faqs', 'settings'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // Basic Form State
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("EDUCATION");
  const [author, setAuthor] = useState("Admin");
  const [readTime, setReadTime] = useState("5 min read");
  const [existingImage, setExistingImage] = useState("");
  const [status, setStatus] = useState("LIVE"); // Mock status
  
  // Complex State
  const [sections, setSections] = useState([]);
  const [faqs, setFaqs] = useState([]);
  
  const fileInputRef = useRef(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://inymartlabs.com/sg-education/php-backend/api_blog.php");
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

  const resetForm = () => {
    setId("");
    setTitle("");
    setExcerpt("");
    setCategory("EDUCATION");
    setAuthor("Admin");
    setReadTime("5 min read");
    setExistingImage("");
    setSections([]);
    setFaqs([]);
    setActiveTab("content");
    setStatus("LIVE");
    setView("list");
    setSuccess(""); setError("");
  };

  const handleEdit = (blog) => {
    setId(blog.id);
    setTitle(blog.title);
    setCategory(blog.category);
    setAuthor(blog.author);
    setReadTime(blog.read_time);
    setExcerpt(blog.excerpt);
    setExistingImage(blog.image_url);
    
    // Attempt to parse structured content
    try {
      const parsed = JSON.parse(blog.content);
      if (parsed && typeof parsed === 'object' && (parsed.sections || parsed.faqs)) {
        setSections(parsed.sections || []);
        setFaqs(parsed.faqs || []);
      } else {
        // Fallback for old raw HTML content: put it in a single section
        setSections([{ id: Date.now(), heading: 'Main Content', body: blog.content, bullets: [] }]);
        setFaqs([]);
      }
    } catch (e) {
      // Not JSON, it's old raw HTML
      setSections([{ id: Date.now(), heading: 'Main Content', body: blog.content, bullets: [] }]);
      setFaqs([]);
    }

    setView("edit");
    setSuccess(""); setError("");
  };

  const handleDelete = async (deleteId) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
<<<<<<< HEAD
      const res = await fetch(`https://inymartlabs.com/sg-education/php-backend/api_blog.php?id=${id}`, { method: 'DELETE' });
=======
      const res = await fetch(`http://localhost/php-backend/api_blog.php?id=${deleteId}`, { method: 'DELETE' });
>>>>>>> 9bf2892fc7d77435d51adf4af06f6f615e5cb2ca
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
    submitData.append("id", id);
    submitData.append("title", title);
    submitData.append("category", category);
    submitData.append("author", author);
    submitData.append("read_time", readTime);
    submitData.append("excerpt", excerpt);
    submitData.append("existing_image", existingImage);
    
    // Stringify structured content
    const structuredContent = JSON.stringify({
      sections,
      faqs
    });
    submitData.append("content", structuredContent);
    
    if (fileInputRef.current?.files[0]) {
      submitData.append("image", fileInputRef.current.files[0]);
    }

    try {
      const res = await fetch("https://inymartlabs.com/sg-education/php-backend/api_blog.php", {
        method: "POST", // API handles both insert and update via POST
        body: submitData
      });
      const data = await res.json();
      
      if (data.status === 'success') {
        setSuccess(data.message);
        resetForm();
        fetchBlogs();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Submission failed. Ensure PHP API is running.");
    }
    setLoading(false);
  };

  // Dynamic Section Handlers
  const addSection = () => {
    setSections([...sections, { id: Date.now(), heading: "", body: "", bullets: [] }]);
  };
  
  const updateSection = (secId, field, value) => {
    setSections(sections.map(s => s.id === secId ? { ...s, [field]: value } : s));
  };
  
  const removeSection = (secId) => {
    setSections(sections.filter(s => s.id !== secId));
  };

  // Dynamic Bullets Handlers
  const addBullet = (secId) => {
    setSections(sections.map(s => {
      if (s.id === secId) {
        return { ...s, bullets: [...(s.bullets || []), { id: Date.now(), text: "" }] };
      }
      return s;
    }));
  };

  const updateBullet = (secId, bulletId, text) => {
    setSections(sections.map(s => {
      if (s.id === secId) {
        return { ...s, bullets: s.bullets.map(b => b.id === bulletId ? { ...b, text } : b) };
      }
      return s;
    }));
  };

  const removeBullet = (secId, bulletId) => {
    setSections(sections.map(s => {
      if (s.id === secId) {
        return { ...s, bullets: s.bullets.filter(b => b.id !== bulletId) };
      }
      return s;
    }));
  };

  // Dynamic FAQ Handlers
  const addFaq = () => {
    setFaqs([...faqs, { id: Date.now(), question: "", answer: "" }]);
  };

  const updateFaq = (faqId, field, value) => {
    setFaqs(faqs.map(f => f.id === faqId ? { ...f, [field]: value } : f));
  };

  const removeFaq = (faqId) => {
    setFaqs(faqs.filter(f => f.id !== faqId));
  };

  const totalBullets = sections.reduce((sum, sec) => sum + (sec.bullets ? sec.bullets.length : 0), 0);

  return (
    <div>
      {error && <div style={{ background: '#f8d7da', color: '#721c24', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>{error}</div>}
      {success && <div style={{ background: '#d4edda', color: '#155724', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>{success}</div>}

      {view === 'list' && (
        <>
          <div className="blog-stats-grid">
            <div className="stat-card bg-dark">
              <i className="fa-regular fa-file-lines"></i>
              <div className="stat-card-info">
                <h4>{blogs.length}</h4>
                <p>TOTAL ARTICLES</p>
              </div>
            </div>
            <div className="stat-card bg-green">
              <i className="fa-solid fa-check"></i>
              <div className="stat-card-info">
                <h4>{blogs.length}</h4>
                <p>PUBLISHED LIVE</p>
              </div>
            </div>
            <div className="stat-card bg-orange">
              <i className="fa-regular fa-pen-to-square"></i>
              <div className="stat-card-info">
                <h4>0</h4>
                <p>DRAFT</p>
              </div>
            </div>
          </div>

          <div className="blog-toolbar">
            <input type="text" className="blog-search-input" placeholder="Search articles..." />
            <div className="blog-filters">
              <select className="blog-select">
                <option>All Status</option>
                <option>Live</option>
                <option>Draft</option>
              </select>
              <select className="blog-select">
                <option>All Categories</option>
              </select>
              <button onClick={() => { resetForm(); setView('add'); }} className="admin-btn admin-btn-success">
                + Add New Blog
              </button>
            </div>
          </div>
          
          <div className="admin-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', alignItems: 'center' }}>
              <span style={{color: '#666'}}>Showing {blogs.length} of {blogs.length} articles</span>
              <button className="admin-btn" style={{background: 'none', color: '#FF6B00'}} onClick={fetchBlogs}>
                <i className="fa-solid fa-rotate-right"></i> Refresh
              </button>
            </div>
            
            {loading ? <p>Loading blogs...</p> : (
              <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>COVER</th>
                    <th>TITLE & SLUG</th>
                    <th>CATEGORY</th>
                    <th>SECTIONS</th>
                    <th>FAQS</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.length === 0 && (
                    <tr><td colSpan="8" style={{ textAlign: 'center' }}>No blogs found.</td></tr>
                  )}
                  {blogs.map(blog => {
                    let secCount = 0;
                    let faqCount = 0;
                    try {
                      const p = JSON.parse(blog.content);
                      secCount = p.sections ? p.sections.length : 0;
                      faqCount = p.faqs ? p.faqs.length : 0;
                    } catch(e) {
                      secCount = 1;
                    }

                    return (
                    <tr key={blog.id}>
                      <td>
                        <img src={blog.image_url} alt="cover" style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '5px' }} />
                      </td>
                      <td>
                        <div style={{ fontWeight: 'bold', color: '#1d2a44' }}>{blog.title}</div>
                        <div style={{ fontSize: '0.8rem', color: '#888' }}>{blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</div>
                      </td>
                      <td><span className="category-badge">{blog.category}</span></td>
                      <td style={{color: '#666', fontSize: '0.9rem'}}>{secCount} sections</td>
                      <td style={{color: '#666', fontSize: '0.9rem'}}>{faqCount} FAQs</td>
                      <td style={{color: '#666', fontSize: '0.9rem'}}>{new Date(blog.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                      <td><span className="status-badge live">&bull; LIVE</span></td>
                      <td>
                        <button onClick={() => handleEdit(blog)} className="admin-btn" style={{ background: '#17a2b8', color: '#fff', padding: '5px 15px', marginRight: '5px' }}>Edit</button>
                        <button onClick={() => handleDelete(blog.id)} className="admin-btn admin-btn-danger" style={{ padding: '5px 15px' }}>Delete</button>
                      </td>
                    </tr>
                  )})}
                </tbody>
              </table>
            </div>
            )}
          </div>
        </>
      )}

      {(view === 'add' || view === 'edit') && (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <span onClick={resetForm} style={{color: '#FF6B00', cursor: 'pointer', fontWeight: 'bold'}}>&larr; All Articles</span>
              <span style={{marginLeft: '15px', color: '#FF6B00', fontWeight: 'bold', textTransform: 'uppercase'}}>{view === 'add' ? 'NEW ARTICLE' : 'EDIT ARTICLE'}</span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" className="admin-btn" style={{ background: '#f8f9fa', border: '1px solid #ddd' }}>Draft</button>
              <button type="button" onClick={resetForm} className="admin-btn" style={{ background: '#f8f9fa', border: '1px solid #ddd' }}>Cancel</button>
              <button type="submit" disabled={loading} className="btn-orange">
                {loading ? 'Saving...' : 'Publish Article'}
              </button>
            </div>
          </div>

          <div className="editor-tabs">
            <div className={`editor-tab ${activeTab === 'content' ? 'active' : ''}`} onClick={() => setActiveTab('content')}>
              Content ({sections.length} sections, {totalBullets} bullets)
            </div>
            <div className={`editor-tab ${activeTab === 'faqs' ? 'active' : ''}`} onClick={() => setActiveTab('faqs')}>
              FAQs ({faqs.length})
            </div>
            <div className={`editor-tab ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
              Article Settings
            </div>
          </div>

          <div className="editor-layout">
            <div className="editor-main">
              {activeTab === 'content' && (
                <>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#FF6B00', fontWeight: 'bold' }}>ARTICLE TITLE *</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="article-title-input" placeholder="Write a compelling title..." required />
                  </div>
                  
                  <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#666', fontWeight: 'bold' }}>SUMMARY / EXCERPT</label>
                    <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="admin-input" rows="3" placeholder="Brief summary of this article shown in blog listing..." required></textarea>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h4 style={{margin: 0, color: '#333'}}>Content Sections</h4>
                    <button type="button" onClick={addSection} className="add-section-btn">+ ADD SECTION</button>
                  </div>

                  {sections.map((section, index) => (
                    <div key={section.id} className="section-card">
                      <div className="section-header">
                        <span>SECTION {index + 1}</span>
                        <span className="section-remove" onClick={() => removeSection(section.id)}><i className="fa-solid fa-xmark"></i></span>
                      </div>
                      
                      <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#666', fontWeight: 'bold' }}>SECTION HEADING</label>
                        <input type="text" value={section.heading} onChange={(e) => updateSection(section.id, 'heading', e.target.value)} className="admin-input" placeholder="Enter section heading..." />
                      </div>
                      
                      <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#666', fontWeight: 'bold' }}>BODY CONTENT</label>
                        <textarea value={section.body} onChange={(e) => updateSection(section.id, 'body', e.target.value)} className="admin-input" rows="4" placeholder="Write the section body content..."></textarea>
                      </div>

                      <div className="bullet-points-container">
                        <div className="bullet-points-header">
                          <span style={{color: '#FF6B00'}}>&gt; BULLET POINTS</span>
                          <button type="button" onClick={() => addBullet(section.id)} className="add-point-btn">+ Add Point</button>
                        </div>
                        {section.bullets && section.bullets.map((bullet, bIndex) => (
                          <div key={bullet.id} className="bullet-input-row">
                            <span style={{color: '#FF6B00'}}>•</span>
                            <input type="text" value={bullet.text} onChange={(e) => updateBullet(section.id, bullet.id, e.target.value)} className="admin-input" placeholder={`Bullet point ${bIndex + 1}...`} />
                            <span style={{cursor: 'pointer', color: '#ccc'}} onClick={() => removeBullet(section.id, bullet.id)}><i className="fa-solid fa-xmark"></i></span>
                          </div>
                        ))}
                      </div>

                      <div style={{ marginTop: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#666', fontWeight: 'bold' }}>SECTION IMAGE (OPTIONAL)</label>
                        <div className="dotted-upload">
                          <i className="fa-regular fa-image" style={{fontSize: '2rem', marginBottom: '10px', color: '#ccc'}}></i>
                          <div>UPLOAD IMAGE</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {activeTab === 'faqs' && (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h4 style={{margin: 0, color: '#333'}}>Frequently Asked Questions</h4>
                    <button type="button" onClick={addFaq} className="add-section-btn">+ ADD FAQ</button>
                  </div>
                  
                  {faqs.length === 0 && <p style={{color: '#666'}}>No FAQs added yet.</p>}
                  
                  {faqs.map((faq, index) => (
                    <div key={faq.id} className="section-card">
                      <div className="section-header">
                        <span>FAQ {index + 1}</span>
                        <span className="section-remove" onClick={() => removeFaq(faq.id)}><i className="fa-solid fa-xmark"></i></span>
                      </div>
                      
                      <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#666', fontWeight: 'bold' }}>QUESTION</label>
                        <input type="text" value={faq.question} onChange={(e) => updateFaq(faq.id, 'question', e.target.value)} className="admin-input" placeholder="e.g. What is the curriculum?" />
                      </div>
                      
                      <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#666', fontWeight: 'bold' }}>ANSWER</label>
                        <textarea value={faq.answer} onChange={(e) => updateFaq(faq.id, 'answer', e.target.value)} className="admin-input" rows="3" placeholder="Write the answer..."></textarea>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {activeTab === 'settings' && (
                <div className="section-card">
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#666', fontWeight: 'bold' }}>AUTHOR</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="admin-input" />
                  </div>
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#666', fontWeight: 'bold' }}>READ TIME</label>
                    <input type="text" value={readTime} onChange={(e) => setReadTime(e.target.value)} className="admin-input" />
                  </div>
                </div>
              )}
            </div>

            <div className="editor-sidebar">
              <div className="sidebar-panel">
                <h4>CATEGORY</h4>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="admin-input" style={{width: '100%'}}>
                  <option value="EDUCATION">EDUCATION</option>
                  <option value="CURRICULUM">CURRICULUM</option>
                  <option value="EVENTS">EVENTS</option>
                  <option value="TIPS & TRICKS">TIPS & TRICKS</option>
                </select>
              </div>

              <div className="sidebar-panel">
                <h4>COVER IMAGE</h4>
                {existingImage && (
                  <div style={{ marginBottom: '10px' }}>
                    <img src={existingImage} alt="Cover" style={{ width: '100%', borderRadius: '5px' }} />
                  </div>
                )}
                <div className="dotted-upload" onClick={() => fileInputRef.current?.click()}>
                  <i className="fa-regular fa-image" style={{fontSize: '1.5rem', marginBottom: '10px', color: '#ccc'}}></i>
                  <div>{existingImage ? 'Change Cover' : 'Upload Cover'}</div>
                  <input type="file" ref={fileInputRef} accept="image/*" style={{display: 'none'}} />
                </div>
              </div>

              <div className="sidebar-panel">
                <h4>ARTICLE STATS</h4>
                <div className="stat-row">
                  <span>Sections</span>
                  <span style={{fontWeight: 'bold', color: '#FF6B00'}}>{sections.length}</span>
                </div>
                <div className="stat-row">
                  <span>Total Bullets</span>
                  <span style={{fontWeight: 'bold', color: '#FF6B00'}}>{totalBullets}</span>
                </div>
                <div className="stat-row">
                  <span>FAQs</span>
                  <span style={{fontWeight: 'bold', color: '#FF6B00'}}>{faqs.length}</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
