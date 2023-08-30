import React from "react";

const RetryModal: React.FC = ({ showModal, onClose }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="retry-modal">
      <div className="modal-content">
        <a href="#" className="btn" onClick={onClose}>
          {"<<<"}retry
        </a>
      </div>
    </div>
  );
};

export default RetryModal;
