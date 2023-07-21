import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/authentication/signup";
import Login from "./component/authentication/login";
import Home from "./component/home";
import Lvl1 from "./component/game/lvl1";
import Lvl2 from "./component/game/lvl2";
import Lvl3 from "./component/game/lvl3";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lvl1" element={<Lvl1 />} />
          <Route path="/lvl2" element={<Lvl2 />} />
          <Route path="/lvl3" element={<Lvl3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
