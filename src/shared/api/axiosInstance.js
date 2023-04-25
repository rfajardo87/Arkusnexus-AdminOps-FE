import axios from "axios";
import { env } from "./env.local";

export const axiosInstance = (token) =>
  axios.create({
    baseURL: `${env.protocol}://${env.url}:${env.port}`,
    headers: {
      "Acess-Control-Allow-Origin": "*",
    },
    token,
  });
