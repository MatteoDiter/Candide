import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.scss";

const Start: React.FC = () => {
  const navigate = useNavigate();

  // handle game start
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <img src="../assets/start" />
        <button className="button" onClick={handleClick}>
          Inbox (1)
        </button>
      </div>
    </div>
  );
};

export default Start;
