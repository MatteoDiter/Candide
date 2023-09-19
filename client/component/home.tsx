import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();

  // handle game start
  const handleClick = () => {
    navigate("/lvl1");
  };

  return (
    <div>
      <div className="container">
        {/* <h3 className="title">Candide 2.2/16</h3> */}
        <div className="paragraph1">
          <h4>Dear Mr. Arouet, </h4>
          <p>
            I reviewed your draft, and found your novel to hold great promise.{" "}
            <br />
            However, please consider condensing it into three concise chapters,
            allowing for a read time of 22 seconds.
            <br />
            <br />
            Thanks, <br />
            Cramer's Publishing
          </p>
        </div>
        <a href="#" className="btn" onClick={handleClick}>
          start final draft
        </a>
      </div>
    </div>
  );
};

export default Home;
