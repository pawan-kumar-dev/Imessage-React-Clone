import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar src="" />
      <div className="sidebarChat__info">
        <h3>Channel Name</h3>
        <p>last message send</p>
        <small>timestamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;
