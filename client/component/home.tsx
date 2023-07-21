import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lvl1 from "./game/lvl1";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Lvl1 />
    </div>
  );
};

export default Home;
