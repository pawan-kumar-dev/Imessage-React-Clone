import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import { Tooltip, TextField, Button } from "@material-ui/core";
import SidebarChat from "../SidebarChat/SidebarChat";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/userSlice";
import { withStyles } from "@material-ui/core/styles";
import db, { auth } from "../../Config/firebase";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))(Tooltip);
const Sidebar = () => {
  const user = useSelector(selectUser);
  const [chat, setChat] = useState([]);
  const [open, setOpen] = useState(false);
  const [chatName, setChatName] = useState("");
  const [search, setSearch] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    db.collection("chats").onSnapshot(snapshot =>
      setChat(
        snapshot.docs.map(doc => {
          return {
            id: doc.id,
            data: doc.data()
          };
        })
      )
    );
  }, []);
  const addChannel = () => {
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName
      });
      setChatName("");
      handleClose();
    }
  };
  const filteredChats = chat.filter(chat => {
    return chat.data.chatName.includes(search.toLowerCase());
  });
  return (
    <div className="sidebar">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        className="sidebar__addChatModal"
      >
        <Fade in={open}>
          <div className="sidebar__addChatModalContainer">
            <h2>Add Channel</h2>
            <TextField
              value={chatName}
              onChange={e => setChatName(e.target.value)}
              id="outlined-basic"
              label="Enter Channel Name"
              variant="outlined"
              margin="dense"
            />
            <Button onClick={addChannel} className="sidebar__addChannelButton">
              Add Channel
            </Button>
          </div>
        </Fade>
      </Modal>
      <div className="sidebar__header">
        <LightTooltip title="Logout">
          <Avatar
            onClick={() => auth.signOut()} //signout the user so the listener in app.js will
            //dispatch the logout action
            src={user.photo}
            className="sidebar__avatar"
          />
        </LightTooltip>

        <div className="sidebar__input">
          <SearchIcon />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="sidebar__actions">
        <Button onClick={() => auth.signOut()}>SignOut</Button>
        <Button onClick={handleOpen}>Add Chat</Button>
      </div>
      <div className="sidebar__chats">
        {filteredChats.map(({ id, data: { chatName } }) => {
          return <SidebarChat key={id} id={id} chatName={chatName} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
