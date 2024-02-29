import axios from "axios";
import { BASE_URL } from "../shared/constants/app";

const Http = axios.create({
  baseURL: BASE_URL,
});

export default Http;
