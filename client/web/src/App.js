import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import HandCricket from "./pages/HandCricket";
import CricketCardGame from "./pages/CricketCardGame";
import GameMain from "./pages/GameMain";
import RPC from "./pages/RPS";

export default function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  console.log("log",isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route
          path="/game"
          element={isLoggedIn ? <GameMain /> : <Navigate to="/login" />}
        />
        <Route path="/image/1" element={<CricketCardGame />} />
        <Route path="/image/2" element={<HandCricket />} />
        <Route path="/image/3" element={<RPC />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
