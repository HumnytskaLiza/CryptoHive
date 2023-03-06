import "./App.css";
import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import MainPage from "./components/mainPage";
import ChatBot from "./components/chatBot";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/chatbot" element={<ChatBot />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
