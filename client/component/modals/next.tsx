import React from "react";

const NextModal: React.FC = ({ showModal, onClose }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="next-modal">
      <div className="modal-content">
        <a href="#" className="btn" onClick={onClose}>
          next{">>>"}
        </a>
      </div>
    </div>
  );
};

export default NextModal;
