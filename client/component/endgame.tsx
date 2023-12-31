import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.scss";

const Endgame: React.FC = () => {
  const navigate = useNavigate();

  // handle game start
  const handleClick = () => {
    navigate("/lvl4");
  };

  return (
    <div>
      <div className="container">
        {/* <h3 className="title">Candide 2.2/16</h3> */}
        <div className="paragraph1">
          <h4>Congratulations Mr. Arouet, </h4>
          <p>
            Your final draft was a delightful read and I look forward to our
            publishing event. <br />
            I'm optimistic, it will be a success.
            <br />
            <br />
            Best, <br />
            Cramer's Publishing
          </p>
        </div>
        <a href="#" className="btn" onClick={handleClick}>
          Read Full Novel
        </a>
      </div>
    </div>
  );
};

export default Endgame;
