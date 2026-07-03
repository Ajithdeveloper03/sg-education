"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './admission.css';

export default function AdmissionPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
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
    residentialAddress: '',
    // Direct Visit Information
    isDirectVisit: false,
    preferredVisitDate: '',
    preferredVisitTime: '',
    directVisitParentName: '',
    purposeOfVisit: '',
    additionalComments: ''
  });

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

    if (formData.isDirectVisit) {
      if (!formData.preferredVisitDate) newErrors.preferredVisitDate = "Preferred Visit Date is required";
      if (!formData.preferredVisitTime) newErrors.preferredVisitTime = "Preferred Visit Time is required";
      if (!formData.directVisitParentName.trim()) newErrors.directVisitParentName = "Parent/Guardian name is required";
      if (!formData.purposeOfVisit) newErrors.purposeOfVisit = "Purpose of Visit is required";
    }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await fetch(`https://sgeducations.in/php-backend/api_admission.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();

        if (data.success) {
          setIsSubmitted(true);
        } else {
          setApiError(data.message || 'An error occurred during submission.');
        }
      } else {
        const textData = await response.text();
        console.error('Non-JSON Response Body:', textData);
        setApiError(`Server Error (${response.status}): The server did not return a valid response. Please check server logs.`);
      }

    } catch (error) {
      console.error('Submission error:', error);
      setApiError('Network error or unexpected response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="adm-page-wrapper">
      
      {/* Return Home Link */}
      <div className="adm-return-home">
        <Link href="/">
          <i className="fa-solid fa-arrow-left"></i> Return to Home
        </Link>
      </div>

      <div className="adm-container">
        <div className="adm-page-content">
          
          <div className="adm-header-title">
            <img src="/SG logo.webp" alt="SG Education Logo" className="adm-header-logo" style={{ height: '160px', objectFit: 'contain' }} />
            <div className="adm-header-text">
              <h2>Join SG Education</h2>
              <p>Embark on your learning journey with us!</p>
            </div>
          </div>

          <div className="adm-modal-body">
            {!isSubmitted ? (
              <>
                {/* Progress Stepper */}
                <div className="adm-stepper">
                  <div className={`adm-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                    <div className="adm-step-circle">{step > 1 ? <i className="fa-solid fa-check"></i> : '1'}</div>
                    <div className="adm-step-label">Student Details</div>
                  </div>
                  <div className={`adm-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                    <div className="adm-step-circle">{step > 2 ? <i className="fa-solid fa-check"></i> : '2'}</div>
                    <div className="adm-step-label">Parent Details</div>
                  </div>
                  <div className={`adm-step ${step === 3 ? 'active' : ''}`}>
                    <div className="adm-step-circle">3</div>
                    <div className="adm-step-label">Review Submit</div>
                  </div>
                </div>

                {/* Form Content */}
                <form onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Step 1: Student Information */}
                  {step === 1 && (
                    <div className="adm-step-content fade-in">
                      <div className="adm-grid-2">
                        <div className="adm-form-group">
                          <label><i className="fa-solid fa-user-graduate"></i> Student Full Name <span>*</span></label>
                          <div className="adm-input-wrapper">
                            <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} className="adm-form-control" placeholder="Enter student name" />
                          </div>
                          {errors.studentName && <span className="adm-form-error">{errors.studentName}</span>}
                        </div>

                        <div className="adm-form-group">
                          <label><i className="fa-solid fa-venus-mars"></i> Gender <span>*</span></label>
                          <div className="adm-input-wrapper">
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
                          <label><i className="fa-solid fa-calendar-day"></i> Date of Birth <span>*</span></label>
                          <div className="adm-input-wrapper">
                            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="adm-form-control" />
                          </div>
                          {errors.dob && <span className="adm-form-error">{errors.dob}</span>}
                        </div>

                        <div className="adm-form-group">
                          <label><i className="fa-solid fa-bullseye"></i> Applying For <span>*</span></label>
                          <div className="adm-input-wrapper">
                            <select name="applyingFor" value={formData.applyingFor} onChange={handleInputChange} className="adm-form-control">
                              <option value="">Select Standard</option>
                              <option value="Toddler Care">Toddler Care</option>
                              <option value="Play Group">Play Group</option>
                              <option value="Nursery">Nursery</option>
                              <option value="LKG">LKG</option>
                              <option value="UKG">UKG</option>
                              <option value="1st Standard">1st Standard</option>
                              <option value="2nd Standard">2nd Standard</option>
                              <option value="3rd Standard">3rd Standard</option>
                              <option value="4th Standard">4th Standard</option>
                              <option value="5th Standard">5th Standard</option>
                            </select>
                          </div>
                          {errors.applyingFor && <span className="adm-form-error">{errors.applyingFor}</span>}
                        </div>
                      </div>

                      {/* Full width field */}
                      <div className="adm-form-group">
                        <label><i className="fa-solid fa-school"></i> Previous School Attended (Optional)</label>
                        <div className="adm-input-wrapper">
                          <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleInputChange} className="adm-form-control" placeholder="Name of previous school" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Parent / Guardian Information */}
                  {step === 2 && (
                    <div className="adm-step-content fade-in">
                      <div className="adm-grid-2">
                        <div className="adm-form-group">
                          <label><i className="fa-solid fa-user-tie"></i> Parent / Guardian Name <span>*</span></label>
                          <div className="adm-input-wrapper">
                            <input type="text" name="parentName" value={formData.parentName} onChange={handleInputChange} className="adm-form-control" placeholder="Enter parent/guardian name" />
                          </div>
                          {errors.parentName && <span className="adm-form-error">{errors.parentName}</span>}
                        </div>

                        <div className="adm-form-group">
                          <label><i className="fa-solid fa-users"></i> Relationship to Student <span>*</span></label>
                          <div className="adm-input-wrapper">
                            <select name="relationship" value={formData.relationship} onChange={handleInputChange} className="adm-form-control">
                              <option value="">Select Relationship</option>
                              <option value="Father">Father</option>
                              <option value="Mother">Mother</option>
                              <option value="Guardian">Legal Guardian</option>
                            </select>
                          </div>
                          {errors.relationship && <span className="adm-form-error">{errors.relationship}</span>}
                        </div>

                        <div className="adm-form-group">
                          <label><i className="fa-solid fa-phone"></i> Mobile Number <span>*</span></label>
                          <div className="adm-input-wrapper">
                            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} className="adm-form-control" placeholder="10-digit mobile number" />
                          </div>
                          {errors.mobileNumber && <span className="adm-form-error">{errors.mobileNumber}</span>}
                        </div>

                        <div className="adm-form-group">
                          <label><i className="fa-solid fa-envelope"></i> Email Address <span>*</span></label>
                          <div className="adm-input-wrapper">
                            <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} className="adm-form-control" placeholder="email@example.com" />
                          </div>
                          {errors.emailAddress && <span className="adm-form-error">{errors.emailAddress}</span>}
                        </div>
                      </div>

                      <div className="adm-form-group">
                        <label><i className="fa-solid fa-briefcase"></i> Occupation (Optional)</label>
                        <div className="adm-input-wrapper">
                          <input type="text" name="occupation" value={formData.occupation} onChange={handleInputChange} className="adm-form-control" placeholder="E.g., Software Engineer, Business" />
                        </div>
                      </div>

                      <div className="adm-form-group">
                        <label><i className="fa-solid fa-map-marker-alt"></i> Residential Address <span>*</span></label>
                        <div className="adm-input-wrapper">
                          <input type="text" name="residentialAddress" value={formData.residentialAddress} onChange={handleInputChange} className="adm-form-control" placeholder="Full residential address" />
                        </div>
                        {errors.residentialAddress && <span className="adm-form-error">{errors.residentialAddress}</span>}
                      </div>

                      {formData.isDirectVisit && (
                        <div className="adm-direct-visit-fields fade-in" style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', marginTop: '1.5rem', width: '100%' }}>
                          <h4 style={{ margin: '0 0 1rem 0', color: '#1D2A44', fontSize: '1.05rem', borderBottom: '2px solid #3B82F6', display: 'inline-block', paddingBottom: '0.2rem' }}><i className="fa-solid fa-school"></i> Direct Visit Details</h4>
                          <div className="adm-grid-2">
                            <div className="adm-form-group">
                              <label><i className="fa-solid fa-calendar-alt"></i> Preferred Visit Date <span>*</span></label>
                              <div className="adm-input-wrapper">
                                <input type="date" name="preferredVisitDate" value={formData.preferredVisitDate} onChange={handleInputChange} className="adm-form-control" />
                              </div>
                              {errors.preferredVisitDate && <span className="adm-form-error">{errors.preferredVisitDate}</span>}
                            </div>
                            
                            <div className="adm-form-group">
                              <label><i className="fa-solid fa-clock"></i> Preferred Visit Time <span>*</span></label>
                              <div className="adm-input-wrapper">
                                <select name="preferredVisitTime" value={formData.preferredVisitTime} onChange={handleInputChange} className="adm-form-control">
                                  <option value="">Select Time</option>
                                  <option value="Morning">Morning</option>
                                  <option value="Afternoon">Afternoon</option>
                                </select>
                              </div>
                              {errors.preferredVisitTime && <span className="adm-form-error">{errors.preferredVisitTime}</span>}
                            </div>

                            <div className="adm-form-group" style={{ gridColumn: '1 / -1' }}>
                              <label><i className="fa-solid fa-user"></i> Parent/Guardian Name <span>*</span></label>
                              <div className="adm-input-wrapper">
                                <input type="text" name="directVisitParentName" value={formData.directVisitParentName} onChange={handleInputChange} className="adm-form-control" placeholder="Enter parent/guardian name" />
                              </div>
                              {errors.directVisitParentName && <span className="adm-form-error">{errors.directVisitParentName}</span>}
                            </div>
                            
                            <div className="adm-form-group" style={{ gridColumn: '1 / -1' }}>
                              <label><i className="fa-solid fa-bullseye"></i> Purpose of Visit <span>*</span></label>
                              <div className="adm-input-wrapper">
                                <select name="purposeOfVisit" value={formData.purposeOfVisit} onChange={handleInputChange} className="adm-form-control">
                                  <option value="">Select Purpose</option>
                                  <option value="Campus Tour">Campus Tour</option>
                                  <option value="Admission Inquiry">Admission Inquiry</option>
                                  <option value="Meeting with Counselor">Meeting with Counselor</option>
                                  <option value="General Inquiry">General Inquiry</option>
                                </select>
                              </div>
                              {errors.purposeOfVisit && <span className="adm-form-error">{errors.purposeOfVisit}</span>}
                            </div>
                            
                            <div className="adm-form-group" style={{ gridColumn: '1 / -1' }}>
                              <label><i className="fa-solid fa-comment-dots"></i> Additional Comments / Message</label>
                              <div className="adm-input-wrapper">
                                <textarea name="additionalComments" value={formData.additionalComments} onChange={handleInputChange} className="adm-form-control" rows="3" placeholder="Any additional details..."></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 3: Review & Submit */}
                  {step === 3 && (
                    <div className="adm-step-content fade-in">
                      <div className="adm-grid-2">
                        <div className="adm-summary-block">
                          <h4><i className="fa-solid fa-graduation-cap"></i> Student Details</h4>
                          <div className="adm-summary-row"><div className="adm-summary-label">Name:</div><div className="adm-summary-val">{formData.studentName}</div></div>
                          <div className="adm-summary-row"><div className="adm-summary-label">Gender:</div><div className="adm-summary-val">{formData.gender}</div></div>
                          <div className="adm-summary-row"><div className="adm-summary-label">Date of Birth:</div><div className="adm-summary-val">{formData.dob}</div></div>
                          <div className="adm-summary-row"><div className="adm-summary-label">Applying For:</div><div className="adm-summary-val">{formData.applyingFor}</div></div>
                          {formData.previousSchool && <div className="adm-summary-row"><div className="adm-summary-label">Previous School:</div><div className="adm-summary-val">{formData.previousSchool}</div></div>}
                        </div>

                        <div className="adm-summary-block">
                          <h4><i className="fa-solid fa-users"></i> Parent Details</h4>
                          <div className="adm-summary-row"><div className="adm-summary-label">Name:</div><div className="adm-summary-val">{formData.parentName} ({formData.relationship})</div></div>
                          <div className="adm-summary-row"><div className="adm-summary-label">Mobile:</div><div className="adm-summary-val">{formData.mobileNumber}</div></div>
                          <div className="adm-summary-row"><div className="adm-summary-label">Email:</div><div className="adm-summary-val">{formData.emailAddress}</div></div>
                          <div className="adm-summary-row"><div className="adm-summary-label">Address:</div><div className="adm-summary-val">{formData.residentialAddress}</div></div>
                          
                          {formData.isDirectVisit && (
                            <>
                              <h4 style={{ marginTop: '1.5rem' }}><i className="fa-solid fa-school"></i> Direct Visit Request</h4>
                              <div className="adm-summary-row"><div className="adm-summary-label">Date:</div><div className="adm-summary-val">{formData.preferredVisitDate}</div></div>
                              <div className="adm-summary-row"><div className="adm-summary-label">Time:</div><div className="adm-summary-val">{formData.preferredVisitTime}</div></div>
                              <div className="adm-summary-row"><div className="adm-summary-label">Parent Name:</div><div className="adm-summary-val">{formData.directVisitParentName}</div></div>
                              <div className="adm-summary-row"><div className="adm-summary-label">Purpose:</div><div className="adm-summary-val">{formData.purposeOfVisit}</div></div>
                              {formData.additionalComments && <div className="adm-summary-row"><div className="adm-summary-label">Comments:</div><div className="adm-summary-val">{formData.additionalComments}</div></div>}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message Display */}
                  {apiError && (
                    <div style={{ 
                      color: apiError.toLowerCase().includes('success') ? '#047857' : '#e53e3e', 
                      backgroundColor: apiError.toLowerCase().includes('success') ? '#d1fae5' : '#fff5f5', 
                      padding: '1rem', 
                      borderRadius: '8px', 
                      marginBottom: '1rem', 
                      border: apiError.toLowerCase().includes('success') ? '1px solid #6ee7b7' : '1px solid #feb2b2' 
                    }}>
                      <i className={apiError.toLowerCase().includes('success') ? "fa-solid fa-circle-check" : "fa-solid fa-circle-exclamation"}></i> {apiError}
                    </div>
                  )}

                  {/* Navigation Actions */}
                  <div className="adm-form-actions" style={{ alignItems: 'center' }}>
                    {step > 1 ? (
                      <button type="button" className="adm-btn adm-btn-secondary" onClick={handleBack} disabled={isSubmitting}><i className="fa-solid fa-arrow-left"></i> Back</button>
                    ) : <div></div>}

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {step === 2 && (
                        <button type="button" className="adm-btn adm-btn-secondary" onClick={() => setFormData(prev => ({ ...prev, isDirectVisit: !prev.isDirectVisit }))}>
                          <i className="fa-solid fa-school"></i> {formData.isDirectVisit ? 'Cancel Direct Visit' : 'Direct Visit'}
                        </button>
                      )}
                      {step < 3 ? (
                        <button type="button" className="adm-btn adm-btn-primary" onClick={handleNext}>Next <i className="fa-solid fa-arrow-right"></i></button>
                      ) : (
                        <button type="button" className="adm-btn adm-btn-primary" onClick={handleSubmit} disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : 'Submit'} <i className="fa-solid fa-paper-plane"></i>
                        </button>
                      )}
                    </div>
                  </div>

                </form>
              </>
            ) : (
              <div className="adm-success fade-in">
                <div className="adm-success-icon"><i className="fa-regular fa-circle-check"></i></div>
                <h3>Application Submitted!</h3>
                <p>Thank you for submitting your admission application for <strong>{formData.studentName}</strong>. Our admissions team will review your details and contact you shortly at <strong>{formData.mobileNumber}</strong>.</p>
                <Link href="/" className="adm-btn adm-btn-primary" style={{display: 'inline-block', textDecoration: 'none'}}>Return to Home</Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}

