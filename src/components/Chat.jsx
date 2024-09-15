import React from "react";
import Cam from '../assets/ic_videoCam.svg';
import Add from '../assets/ic_personAdd.svg';
import More from '../assets/ic_more.svg';
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
    return (
        <div className="chat">
      <div className="chatInfo">
        <span>Olivia</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
    );
}

export default Chat;