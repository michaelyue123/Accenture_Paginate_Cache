import axios from "axios";
import { API_TOKEN } from "../constants";

// fetch required data
export const fetchData = async (numbersToFetch: number): Promise<{}> => {
  try {
    const apiUrl = `/atr-gateway/ticket-management/api/v1/tickets? ticketType=incident&sortDirection=DESC&page=0&perPage=${numbersToFetch}`;

    const response = await axios({
      url: apiUrl,
      method: "GET",
      headers: {
        apiToken: API_TOKEN,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = response.data;
    const totalBackendCards = response.headers["x-total-count"];

    return { data, totalBackendCards };
  } catch (error) {
    if (error) {
      console.log(error);
    }
    throw error;
  }
};
