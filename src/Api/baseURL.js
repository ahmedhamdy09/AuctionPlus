import axios from "axios";

const baseURL = axios.create({
  baseURL: "http://62.72.19.133:8000",
});
export default baseURL;
export const LiveUrl = "http://localhost:3000";
// export const ImgUrl = "http://62.77.154.115:8000";

// ==>> http://62.77.154.115:8000/
//  =>>          http://127.0.0.1:8000
// =>> http://localhost:8000

//   baseURL: "http://62.72.19.133:8000",
