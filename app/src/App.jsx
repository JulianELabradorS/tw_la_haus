import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./assets/styles/styles.scss";
import SendMessage from "./views/screens/send-message";
import Welcome from "./views/screens/welcome";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/send-message" element={<SendMessage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
