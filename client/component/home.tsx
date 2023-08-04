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
        I read your draft, and your novel is promising. <br />
        However, its a bit too long for nowadays standards. <br />
        Please condense it to a 30 seconds read, and make sure to keep it
        engaging. <br />
        <br />
        Thanks, <br />
        Cramer's Publishing
      </p>
      <button onClick={handleClick}>Start Final Draft</button>
    </div>
  );
};

export default Home;
