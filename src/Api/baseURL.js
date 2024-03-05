import axios from "axios";

const baseURL = axios.create({ baseURL: "http://62.77.154.115:8000" });
export default baseURL;



// ==>> http://62.77.154.115:8000/
//  =>>          http://127.0.0.1:8000
// =>> http://localhost:8000