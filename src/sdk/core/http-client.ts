import { create } from "apisauce";

const API_ENDPOINT = process.env.REACT_APP_API_URL || "https://opentdb.com/api.php";

export const httpClient = create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});
