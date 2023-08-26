import React from "react";

interface ChapterApprovedModalProps {
  showModal: boolean;
  onClose: () => void;
}

const ChapterApprovedModal: React.FC<ChapterApprovedModalProps> = ({
  showModal,
  onClose,
}) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-approved">
      <div className="modal-content">
        <h2>
          CHAPTER
          <br />
          APPROVED
        </h2>
        {/* <a href="#" className="btn2" onClick={onClose}>
          go to next chapter
        </a> */}
      </div>
    </div>
  );
};

export default ChapterApprovedModal;
