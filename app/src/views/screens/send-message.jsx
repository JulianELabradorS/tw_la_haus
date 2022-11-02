import React from "react";
import { ToastContainer } from "react-toastify";
import MessageForm from "../components/forms/message";
import MessageList from "../components/messages/message-list";
import "react-toastify/dist/ReactToastify.css";

const SendMessage = () => {
  return (
    <div className="py-9">
      <MessageForm />;
      <MessageList />
      <ToastContainer />
    </div>
  );
};
export default SendMessage;
