import { all, call } from "redux-saga/effects";

import { routinePromiseWatcherSaga } from "redux-saga-routines";
import messagesWatch from "../modules/messages/sagas";

function* rootSaga() {
  try {
    yield all([call(routinePromiseWatcherSaga), call(messagesWatch)]);
  } catch (error) {
    throw error;
  }
}

export default rootSaga;
