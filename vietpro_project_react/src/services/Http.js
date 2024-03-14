import axios from "axios";
import { BASE_API, BASE_URL } from "../constants/App";

export const Http = axios.create({
  baseURL: BASE_API,
});

export const HttpImg = axios.create({
  baseURL: BASE_URL,
});
