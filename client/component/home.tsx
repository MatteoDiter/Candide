import React from "react";
import { useNavigate } from "react-router-dom";
import Lvl1 from "./game/lvl1";

const Home: React.FC = () => {
  const navigate = useNavigate();

  // handle game start
  const handleClick = () => {
    navigate("/lvl1");
  };

  return (
    <div>
      <h4>Dear Mr. Arouet, </h4>
      <p>
        Nowadays no one has the time to read a 38000 word long novel. <br />
        Please re-draft in 160 words max ... and make sure not to lose your
        readers attention. <br />
        Thanks, <br />
        Cramer's Publishing
      </p>
      <button onClick={handleClick}>Start New Draft</button>
    </div>
  );
};

export default Home;
