import React, { useState } from "react";
import Clicker from "./game/clicker";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Clicker />
    </div>
  );
};

export default Home;
