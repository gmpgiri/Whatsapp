import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h2>Room Name</h2>
        <p>This is the last message on the room</p>
      </div>
    </div>
  );
};

export default SidebarChat;
