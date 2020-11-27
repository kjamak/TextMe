import React from "react";
import "./imessage.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function IMessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default IMessage;
