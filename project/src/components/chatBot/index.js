import React from "react";
import "./style.css";
import Topbar from "../topBar";
import button from "../imgs/send.svg";

function ChatBot() {
  return (
    <div className="main-page">
      <div className="main-wrapper">
        <Topbar />
        <div className="chat">
          <div className="messages">
            <div>Text</div>
          </div>
          <div className="textarea-wrapper">
            <textarea
              className="chat-textarea"
              defaultValue="What would you like to ask?"
            />
            <button className="send-button">
              <img src={button} alt="button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
