import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants/config";

const fetcher = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCyberSoft: TOKEN_CYBERSOFT,
  },
});

export default fetcher;
