import axios from "axios";
const { REACT_APP_API } = process.env;

export const sendMessageRequest = (body) => {
  return axios.post(`${REACT_APP_API}/messages`, body);
};

export const getMessagesRequest = () => {
  return axios.get(`${REACT_APP_API}/messages`);
};
