import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_APIS_URL + "/media-management", //// TODO reacd from env upload URL
  headers: {
    "Content-type": "application/json",
  },
});
