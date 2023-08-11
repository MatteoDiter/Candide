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
        <img className="image" src="../assets/start" />
        <a href="#" className="btn" onClick={handleClick}>
          Inbox (1)
        </a>
      </div>
    </div>
  );
};

export default Start;
