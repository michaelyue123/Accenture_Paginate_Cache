import axios from "axios";
import { API_TOKEN } from "../constants";

//fetch latest API token
// const fetchApiToken = async (): Promise<any> => {
//   try {
//     const tokenUrl =
//       "/atr-gateway/identity-management/api/v1/auth/short-token?useDeflate=true";
//     const response = fetch(tokenUrl, {
//       method: 'POST',
//       credentials: 'include',
//       headers: {
//           'Accept': 'text/html',
//           "Content-Type": 'text/plain',
//         },
//       body: JSON.stringify({"username":"candidate_test1","password":"candidate_test1","snowEnabled":true})
//   });

//     const data = await response;
//     console.log(data);
//     return data;
//   } catch (error) {
//     if (error) {
//       console.log(error);
//     }
//     throw error;
//   }
// };

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
