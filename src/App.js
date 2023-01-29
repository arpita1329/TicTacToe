import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ForgetPasswordPage from "./Containers/forgetpassword";
import LandingPage from "./Containers/landingPage";
import Login from "./Containers/login";
import Register from "./Containers/register";
import TicTacToe from "./Containers/tictactoe";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forget-password" element={<ForgetPasswordPage/>} />
        <Route path="/tictactoe" element={<TicTacToe/>} />
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;

