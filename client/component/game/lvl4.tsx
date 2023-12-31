import React from "react";
import { useNavigate } from "react-router-dom";
import { longArray1, longArray2, longArray3 } from "./longform";
import "../../styles.scss";

const Lvl4: React.FC = () => {
  const navigate = useNavigate(); // setup navigation to next level

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        {/* <img
          className="image"
          src={require("../../assets/end.png").default}
          alt="End"
        /> */}
        <hr
          className="total-progress"
          style={{
            width: `calc(var(--screen-width) - 2px)`,
          }}
        />
        <h3 className="title">Candide 2.2/16</h3>
        <hr
          className="total-engagement"
          style={{
            width: `calc(var(--screen-width) - 2px)`,
          }}
        />
        <p className="paragraph1">{longArray1}</p>
        <p className="paragraph2">{longArray2}</p>
        <p className="paragraph3">{longArray3}</p>
        <a href="#" className="btn" onClick={handleClick}>
          Restart
        </a>
      </div>
    </div>
  );
};

export default Lvl4;
