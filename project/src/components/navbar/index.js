import React from "react";
import "./style.css";
import profile from "../imgs/person-circle.svg";
import wallet from "../imgs/wallet.svg";
import robot from "../imgs/robot.svg";
import settings from "../imgs/sliders.svg";
import graph from "../imgs/graph-up-arrow.svg";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <NavLink to="/" className="logo">
          <div>CryptoHive</div>
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
            <NavLink to="/wallet" className="link" activeClassName="active">
              <div>Wallet</div>
            </NavLink>
          </div>
          <div>
            <img src={settings} alt="settings-icon" />
            <NavLink to="/settings" className="link" activeClassName="active">
              <div>Settings</div>
            </NavLink>
          </div>
          <div>
            <img src={graph} alt="graph-icon" />
            <NavLink to="/trade" className="link" activeClassName="active">
              <div>Trade</div>
            </NavLink>
          </div>
          <div>
            <img src={robot} alt="robot-icon" />
            <NavLink to="/chatbot" className="link" activeClassName="active">
              <div>ChatBot</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
