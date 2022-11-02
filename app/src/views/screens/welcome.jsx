import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex items-center h-screen w-screen flex-col justify-center">
      <div className="py-4 px-6 md:p-8 text-center">
        <h1 className="text-sky-600 mb-2 md:text-5xl text-3xl font-bold ">
          Messaging app
        </h1>
        <p className="md:text-xl text-gray-500 pb-8">
          Welcome to the app where you can send messages with just one click
        </p>
        <Link
          to="/send-message"
          class="inline-block px-7 py-3 bg-sky-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          send a message
        </Link>
      </div>
    </div>
  );
};
export default Welcome;
