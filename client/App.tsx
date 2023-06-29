import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/signup';
import Login from './component/login';
import MainNavigation from './component/mainNavigation';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <div>
              <MainNavigation />
              <Routes>
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;
