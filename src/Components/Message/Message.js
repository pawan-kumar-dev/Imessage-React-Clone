import React, { forwardRef } from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../../Redux/userSlice";
import { useSelector } from "react-redux";
import * as timeago from "timeago.js";
const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, photo, message, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <div ref={ref} className={`message ${user.email && "message__sender"}`}>
        <Avatar src={photo} className="message__photo" />
        <p>{message}</p>
        <small>
          {timestamp
            ? timeago.format(new Date(timestamp?.toDate()).toLocaleString())
            : ""}
        </small>
      </div>
    );
  }
);

export default Message;
