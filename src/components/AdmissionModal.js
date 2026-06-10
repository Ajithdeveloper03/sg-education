"use client";

import React, { useState } from 'react';
import './AdmissionModal.css';

export default function AdmissionModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    // Step 1: Student Information
    studentName: '',
    gender: '',
    dob: '',
    applyingFor: '',
    previousSchool: '',
    // Step 2: Parent / Guardian Information
    parentName: '',
    relationship: '',
    mobileNumber: '',
    emailAddress: '',
    occupation: '',
    residentialAddress: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = "Student name is required";
    if (!formData.gender) newErrors.gender = "Please select a gender";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.applyingFor) newErrors.applyingFor = "Please select the grade applying for";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = "Parent/Guardian name is required";
    if (!formData.relationship) newErrors.relationship = "Relationship is required";
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ''))) newErrors.mobileNumber = "Valid 10-digit mobile number required";
    if (!formData.emailAddress.trim()) newErrors.emailAddress = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) newErrors.emailAddress = "Valid email is required";
    if (!formData.residentialAddress.trim()) newErrors.residentialAddress = "Residential address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    // Reset form on close
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
      setFormData({
        studentName: '', gender: '', dob: '', applyingFor: '', previousSchool: '',
        parentName: '', relationship: '', mobileNumber: '', emailAddress: '', occupation: '', residentialAddress: ''
      });
      setErrors({});
    }, 300);
    onClose();
  };

  return (
    <div className="adm-modal-overlay">
      <div className="adm-modal-content">
        
        <div className="adm-modal-header">
          <div className="adm-header-title">
            <h2>Welcome to SG Education</h2>
            <p>Admission Application Form</p>
          </div>
          <button className="adm-close-btn" onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="adm-modal-body">
          {!isSubmitted ? (
            <>
              {/* Progress Stepper */}
              <div className="adm-stepper">
                <div className={`adm-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                  <div className="adm-step-circle">{step > 1 ? <i className="fa-solid fa-check"></i> : '1'}</div>
                  <div className="adm-step-label">Student</div>
                </div>
                <div className={`adm-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                  <div className="adm-step-circle">{step > 2 ? <i className="fa-solid fa-check"></i> : '2'}</div>
                  <div className="adm-step-label">Parent</div>
                </div>
                <div className={`adm-step ${step === 3 ? 'active' : ''}`}>
                  <div className="adm-step-circle">3</div>
                  <div className="adm-step-label">Review</div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={(e) => e.preventDefault()}>
                
                {/* Step 1: Student Information */}
                {step === 1 && (
                  <div className="adm-step-content fade-in">
                    <div className="adm-form-group">
                      <label>Student Full Name *</label>
                      <div className="adm-input-wrapper">
                        <i className="fa-solid fa-user adm-input-icon"></i>
                        <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} className="adm-form-control" placeholder="Enter student name" />
                      </div>
                      {errors.studentName && <span className="adm-form-error">{errors.studentName}</span>}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="adm-form-group">
                        <label>Gender *</label>
                        <div className="adm-input-wrapper">
                          <i className="fa-solid fa-venus-mars adm-input-icon"></i>
                          <select name="gender" value={formData.gender} onChange={handleInputChange} className="adm-form-control">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        {errors.gender && <span className="adm-form-error">{errors.gender}</span>}
                      </div>

                      <div className="adm-form-group">
                        <label>Date of Birth *</label>
                        <div className="adm-input-wrapper">
                          <i className="fa-solid fa-calendar-days adm-input-icon"></i>
                          <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="adm-form-control" />
                        </div>
                        {errors.dob && <span className="adm-form-error">{errors.dob}</span>}
                      </div>
                    </div>

                    <div className="adm-form-group">
                      <label>Applying For *</label>
                      <div className="adm-input-wrapper">
                        <i className="fa-solid fa-graduation-cap adm-input-icon"></i>
                        <select name="applyingFor" value={formData.applyingFor} onChange={handleInputChange} className="adm-form-control">
                          <option value="">Select Grade</option>
                          <option value="LKG">LKG</option>
                          <option value="UKG">UKG</option>
                          <option value="Grade 1">Grade 1</option>
                          <option value="Grade 2">Grade 2</option>
                          <option value="Grade 3">Grade 3</option>
                          <option value="Grade 4">Grade 4</option>
                          <option value="Grade 5">Grade 5</option>
                        </select>
                      </div>
                      {errors.applyingFor && <span className="adm-form-error">{errors.applyingFor}</span>}
                    </div>

                    <div className="adm-form-group">
                      <label>Previous School Attended (Optional)</label>
                      <div className="adm-input-wrapper">
                        <i className="fa-solid fa-school adm-input-icon"></i>
                        <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleInputChange} className="adm-form-control" placeholder="Name of previous school" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Parent / Guardian Information */}
                {step === 2 && (
                  <div className="adm-step-content fade-in">
                    <div className="adm-form-group">
                      <label>Parent / Guardian Name *</label>
                      <div className="adm-input-wrapper">
                        <i className="fa-solid fa-user-tie adm-input-icon"></i>
                        <input type="text" name="parentName" value={formData.parentName} onChange={handleInputChange} className="adm-form-control" placeholder="Enter parent/guardian name" />
                      </div>
                      {errors.parentName && <span className="adm-form-error">{errors.parentName}</span>}
                    </div>

                    <div className="adm-form-group">
                      <label>Relationship to Student *</label>
                      <div className="adm-input-wrapper">
                        <i className="fa-solid fa-people-arrows adm-input-icon"></i>
                        <select name="relationship" value={formData.relationship} onChange={handleInputChange} className="adm-form-control">
                          <option value="">Select Relationship</option>
                          <option value="Father">Father</option>
                          <option value="Mother">Mother</option>
                          <option value="Guardian">Legal Guardian</option>
                        </select>
                      </div>
                      {errors.relationship && <span className="adm-form-error">{errors.relationship}</span>}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="adm-form-group">
                        <label>Mobile Number *</label>
                        <div className="adm-input-wrapper">
                          <i className="fa-solid fa-phone adm-input-icon"></i>
                          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} className="adm-form-control" placeholder="10-digit mobile number" />
                        </div>
                        {errors.mobileNumber && <span className="adm-form-error">{errors.mobileNumber}</span>}
                      </div>

                      <div className="adm-form-group">
                        <label>Email Address *</label>
                        <div className="adm-input-wrapper">
                          <i className="fa-solid fa-envelope adm-input-icon"></i>
                          <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} className="adm-form-control" placeholder="email@example.com" />
                        </div>
                        {errors.emailAddress && <span className="adm-form-error">{errors.emailAddress}</span>}
                      </div>
                    </div>

                    <div className="adm-form-group">
                      <label>Occupation (Optional)</label>
                      <div className="adm-input-wrapper">
                        <i className="fa-solid fa-briefcase adm-input-icon"></i>
                        <input type="text" name="occupation" value={formData.occupation} onChange={handleInputChange} className="adm-form-control" placeholder="E.g., Software Engineer, Business" />
                      </div>
                    </div>

                    <div className="adm-form-group">
                      <label>Residential Address *</label>
                      <div className="adm-input-wrapper">
                        <i className="fa-solid fa-location-dot adm-input-icon" style={{ top: '15px', transform: 'none' }}></i>
                        <textarea name="residentialAddress" value={formData.residentialAddress} onChange={handleInputChange} className="adm-form-control" rows="3" placeholder="Full residential address"></textarea>
                      </div>
                      {errors.residentialAddress && <span className="adm-form-error">{errors.residentialAddress}</span>}
                    </div>
                  </div>
                )}

                {/* Step 3: Review & Submit */}
                {step === 3 && (
                  <div className="adm-step-content fade-in">
                    <div className="adm-summary-block">
                      <h4><i className="fa-solid fa-user-graduate" style={{color: '#00AEFF', marginRight: '8px'}}></i> Student Details</h4>
                      <div className="adm-summary-row"><div className="adm-summary-label">Name:</div><div className="adm-summary-val">{formData.studentName}</div></div>
                      <div className="adm-summary-row"><div className="adm-summary-label">Gender:</div><div className="adm-summary-val">{formData.gender}</div></div>
                      <div className="adm-summary-row"><div className="adm-summary-label">Date of Birth:</div><div className="adm-summary-val">{formData.dob}</div></div>
                      <div className="adm-summary-row"><div className="adm-summary-label">Applying For:</div><div className="adm-summary-val">{formData.applyingFor}</div></div>
                      {formData.previousSchool && <div className="adm-summary-row"><div className="adm-summary-label">Previous School:</div><div className="adm-summary-val">{formData.previousSchool}</div></div>}
                    </div>

                    <div className="adm-summary-block">
                      <h4><i className="fa-solid fa-users" style={{color: '#00AEFF', marginRight: '8px'}}></i> Parent Details</h4>
                      <div className="adm-summary-row"><div className="adm-summary-label">Name:</div><div className="adm-summary-val">{formData.parentName} ({formData.relationship})</div></div>
                      <div className="adm-summary-row"><div className="adm-summary-label">Mobile:</div><div className="adm-summary-val">{formData.mobileNumber}</div></div>
                      <div className="adm-summary-row"><div className="adm-summary-label">Email:</div><div className="adm-summary-val">{formData.emailAddress}</div></div>
                      <div className="adm-summary-row"><div className="adm-summary-label">Address:</div><div className="adm-summary-val">{formData.residentialAddress}</div></div>
                    </div>
                  </div>
                )}

                {/* Navigation Actions */}
                <div className="adm-form-actions">
                  {step > 1 ? (
                    <button type="button" className="adm-btn adm-btn-secondary" onClick={handleBack}>Back</button>
                  ) : <div></div>}

                  {step < 3 ? (
                    <button type="button" className="adm-btn adm-btn-primary" onClick={handleNext}>Continue</button>
                  ) : (
                    <button type="button" className="adm-btn adm-btn-primary" onClick={handleSubmit}>Submit Application</button>
                  )}
                </div>

              </form>
            </>
          ) : (
            <div className="adm-success fade-in">
              <div className="adm-success-icon"><i className="fa-regular fa-circle-check"></i></div>
              <h3>Application Submitted!</h3>
              <p>Thank you for submitting your admission application for <strong>{formData.studentName}</strong>. Our admissions team will review your details and contact you shortly at <strong>{formData.mobileNumber}</strong>.</p>
              <button className="adm-btn adm-btn-primary" onClick={handleClose}>Done</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
