/* eslint-disable no-prototype-builtins */
import { all, call, cancel, put, select, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { getMessages, sendMessage } from "./actions";
import { getMessagesRequest, sendMessageRequest } from "./requests";

export function* sendMessageSaga({ payload }) {
  try {
    yield call(sendMessageRequest, payload);
    toast.success("Message sent successfully");
    yield put(getMessages());
  } catch ({ response }) {
    const errorMessage = Array.isArray(response.data.message)
      ? response.data.message.join(", ")
      : response.data.message;

    toast.error(errorMessage);
  }
}
export function* getMessagesSaga({ payload }) {
  try {
    const response = yield call(getMessagesRequest);
    yield put(getMessages.success(response.data));
  } catch ({ response }) {
    const errorMessage = Array.isArray(response.data.message)
      ? response.data.message.join(", ")
      : response.data.message;

    toast.error(errorMessage);
  }
}

export default function* messagesWatch() {
  yield all([takeLatest(sendMessage.TRIGGER, sendMessageSaga)]);
  yield all([takeLatest(getMessages.TRIGGER, getMessagesSaga)]);
}
