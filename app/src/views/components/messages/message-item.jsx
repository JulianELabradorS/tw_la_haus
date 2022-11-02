import React from "react";

const MessageItem = ({ receiver, message, created_at }) => {
  return (
    <li class="flex flex-row">
      <div class="select-none cursor-pointer  flex flex-1 items-center p-4">
        <div class="flex-1 pl-1">
          <div class="font-medium dark:text-white">{receiver}</div>
          <div class="text-gray-600 dark:text-gray-200 text-sm">
            {message} - {created_at.replace("T", " ").replace("Z", "")}
          </div>
        </div>
      </div>
    </li>
  );
};
export default MessageItem;
