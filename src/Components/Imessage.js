import React from "react";
import "./Imessage.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
const Imessage = () => {
  return (
    <div className="Imessage">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Imessage;
