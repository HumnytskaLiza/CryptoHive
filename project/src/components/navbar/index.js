import React, { Component } from "react";
import "./style.css";
import profile from "../imgs/person-circle.svg";
import wallet from "../imgs/wallet.svg";
import robot from "../imgs/robot.svg";
import settings from "../imgs/sliders.svg";
import graph from "../imgs/graph-up-arrow.svg";

import { Route, NavLink, HashRouter } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <NavLink to="/">
          <div className="logo">CryptoHive</div>
        </NavLink>
        <div className="profile">
          <div>
            <img src={profile} alt="profile-icon" />
            <div>User</div>
          </div>
        </div>
        <div className="links">
          <div>
            <img src={wallet} alt="wallet-icon" />
            <div className="link">Wallet</div>
          </div>
          <div>
            <img src={settings} alt="settings-icon" />
            <div className="link">Settings</div>
          </div>
          <div>
            <img src={graph} alt="graph-icon" />
            <div className="link">Trade</div>
          </div>
          <div>
            <img src={robot} alt="robot-icon" />
            <NavLink to="/chatbot">
              <div className="link">ChatBot</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
