import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const httpAuth = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_AUTH_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("token")}`,
  },
});

export default httpAuth;
