import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setChat } from "../Redux/chatSlice";
import db from "../Config/firebase";
const SidebarChat = ({ id, chatName }) => {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);
  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot =>
        setChatInfo(
          snapshot.docs.map(doc => {
            return doc.data();
          })
        )
      );
  }, [id]);
  return (
    <div
      className="sidebarChat"
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName
          })
        );
      }}
    >
      <Avatar src="" />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>{chatInfo[0]?.message}</p>
        <small>
          {chatInfo[0]?.timestamp
            ? new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()
            : ""}
        </small>
      </div>
    </div>
  );
};

export default SidebarChat;
