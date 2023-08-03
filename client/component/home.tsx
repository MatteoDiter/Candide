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
      <h3>Candide 3/16</h3>
      <h4>Dear Mr. Arouet, </h4>
      <p>
        I read your draft, and the story is promising. <br />
        However nowadays no one has time to read a 38000 word long novel. <br />
        Please condense it, and make sure to keep it engaging. <br />
        <br />
        Thanks, <br />
        Cramer's Publishing
      </p>
      <button onClick={handleClick}>Start Final Draft</button>
    </div>
  );
};

export default Home;
