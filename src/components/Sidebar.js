import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <Link to="/profile">
        <div className="profile">
          <div className="user-image"></div>
          <div className="user-name">Paulius</div>
          <div className="user-settings-tooltip">Go to settings...</div>
        </div>
      </Link>
      <div className="conversations">
        <Link to="/chat/1">
          <div className="conversation">
            <div className="conversation-name">John</div>
          </div>
        </Link>
        <Link to="/chat/2">
          <div className="conversation">
            <div className="conversation-name">Mario</div>
          </div>
        </Link>
        <Link to="/chat/3">
          <div className="conversation">
            <div className="conversation-name">Angelina</div>
          </div>
        </Link>
      </div>
      <div className="logout">
        <Link to="/login">Sign out</Link>
      </div>
    </div>
  );
}
