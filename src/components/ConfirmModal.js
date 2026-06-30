"use client";

import React from 'react';

export default function ConfirmModal({ 
  isOpen, 
  title, 
  message, 
  confirmText = "YES, UPDATE ARTICLE", 
  cancelText = "CANCEL", 
  onConfirm, 
  onCancel 
}) {
  if (!isOpen) return null;

  return (
    <div className="custom-confirm-overlay">
      <div className="custom-confirm-modal">
        <div className="cc-header">
          <div className="cc-icon-wrapper">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <h3 className="cc-title">{title}</h3>
        </div>
        <div className="cc-body">
          <p>{message}</p>
        </div>
        <div className="cc-footer">
          <button className="cc-btn-cancel" onClick={onCancel}>
            {cancelText}
          </button>
          <button className="cc-btn-confirm" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
