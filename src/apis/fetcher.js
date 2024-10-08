import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants/config";
import { getLocalStorage } from "../utils/saveAccount";

const fetcher = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    TokenCyberSoft: TOKEN_CYBERSOFT,
  },
});

fetcher.interceptors.request.use((config) => {
  const currentUser = getLocalStorage("user");

  config.headers = {
    ...config.headers,
    Authorization: currentUser ? `Bearer ${currentUser.accessToken}` : "",
  };
  return config;
});

export default fetcher;
