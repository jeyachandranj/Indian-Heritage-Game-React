import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import HandCricket from "./pages/HandCricket";
import CricketCardGame from "./pages/CricketCardGame";
import GameMain from "./pages/GameMain";
import Board from "./pages/Pallanguli";
import Snake from "./pages/Snake";

export default function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  console.log("log",isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/game" element={isLoggedIn ? <GameMain /> : <Navigate to="/" />} />
        <Route path="/image/1" element={<CricketCardGame />} />
        <Route path="/image/2" element={<HandCricket />} />
        <Route path="/image/4" element={<Board />} />
        <Route path="/image/5" element={<Snake />} />
      </Routes>
    </BrowserRouter>
  );
}
