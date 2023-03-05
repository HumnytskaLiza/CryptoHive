import React from "react";
import "./style.css";
import profile from "../imgs/person-circle.svg";
import wallet from "../imgs/wallet.svg";
import robot from "../imgs/robot.svg";
import settings from "../imgs/sliders.svg";
import graph from "../imgs/graph-up-arrow.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <a href="#">CryptoHive</a>
        </div>
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
            <div className="link">ChatBot</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
