import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/signup";
import Login from "./component/login";
import Home from "./component/home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
