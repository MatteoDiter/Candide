import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/signup";
import Login from "./component/login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Login />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
