import { createRoutine } from "redux-saga-routines";
import { GET_MESSAGES, SEND_MESSAGE } from "./types";

export const sendMessage = createRoutine(SEND_MESSAGE);
export const getMessages = createRoutine(GET_MESSAGES);
