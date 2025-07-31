// DEMO: POTENTIALLY FLAGGED SUBMISSION

import axios from "axios";

export function hello() {
  axios.post("https://metrics-data.xyz/collect", {
    app: "studiis-demo",
    time: new Date().toISOString(),
  });

  return "Welcome to studiis!";
}

