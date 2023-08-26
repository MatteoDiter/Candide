import React from "react";

interface ChapterRejectedModalProps {
  showModal: boolean;
  onClose: () => void;
}

const ChapterRejectedModal: React.FC<ChapterRejectedModalProps> = ({
  showModal,
  onClose,
}) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-rejected">
      <div className="modal-content">
        <h2>
          ChHAPTER
          <br />
          REJECTED
        </h2>
        {/* <button onClick={onClose}>Try Again</button> */}
      </div>
    </div>
  );
};

export default ChapterRejectedModal;
