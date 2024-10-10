import axios from "axios";
import { envClient } from "../../config";

export const axiosClientInstance = axios.create({
  baseURL: envClient.apiBaseUrl,
});
