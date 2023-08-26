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
        <div className="paragraph1">
          <h4>
            Ferney, France
            <br /> March 6th x759
          </h4>
        </div>
        <img className="image" src="../assets/start.png" />
        <a href="#" className="btn" onClick={handleClick}>
          Inbox (1)
        </a>
      </div>
    </div>
  );
};

export default Start;
