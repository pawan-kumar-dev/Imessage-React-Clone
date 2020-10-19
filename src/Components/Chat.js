import React, { useState } from "react";
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
const Chat = () => {
  const [input, setInput] = useState("");
  const sendMessage = e => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">ChannelName</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        <h1>messages</h1>
        <h1>messages</h1>
        <h1>messages</h1>
        <h1>messages</h1>
        <h1>messages</h1>
      </div>
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            placeholder="Send Message"
          ></input>
          <button type="submit" onClick={sendMessage}>
            Send Message
          </button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
