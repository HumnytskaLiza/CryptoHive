import React from "react";
import "./style.css";
import Topbar from "../topBar";

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-wrapper">
        <Topbar />
        <div>Main Page</div>
      </div>
    </div>
  );
}

export default MainPage;
