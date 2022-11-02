import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../../modules/messages/actions";
import { messagesSelector } from "../../../modules/messages/selectors";
import MessageItem from "./message-item";

const MessageList = () => {
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelector);

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div class="flex flex-col container max-w-md mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul class="flex flex-col divide-y w-full">
        {messages.map((msg) => (
          <MessageItem
            receiver={msg.receiver}
            message={msg.message}
            created_at={msg.created_at}
            key={msg.id}
          />
        ))}
      </ul>
    </div>
  );
};
export default MessageList;
