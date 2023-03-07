import "./App.css";
import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import MainPage from "./components/mainPage";
import ChatBot from "./components/chatBot";
import WalletPage from "./components/walletPage";
import TradePage from "./components/tradePage";
import SettingsPage from "./components/settingsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/trade" element={<TradePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
