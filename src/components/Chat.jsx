import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data ,setFlag} = useContext(ChatContext);
  const arrow = '<';
  return (
    <div className="chat">
      <div className="chatInfo">
        {data.user?
        <React.Fragment>
          <button onClick={()=>{setFlag(false)}}>{arrow}</button>
          {data.user.displayName}
        </React.Fragment>:''
         }
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
};

export default Chat;
