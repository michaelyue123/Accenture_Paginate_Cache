import axios from "axios";

// fetch latest API token as it expires in every one hour
const fetchApiToken = async (): Promise<string>  => {
    try{
        const tokenUrl = "/atr-gateway/identity-management/api/v1/auth/short-token?useDeflate=true";
        const response = await axios({
            url: tokenUrl,
            method: 'post',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            data: {
                "{\"username\":\"candidate_test1\",\"password\":\"candidate_test1\",\"snowEnabled\":true}": ""
            }
        });
        
        const data = JSON.stringify(response);
        console.log("123123");
        return data;
    }
    catch(error) {
        if(error) {
            console.log(error);
        }
        throw error;
    }
}

// fetch required data
export const fetchData = async (pageNumber: number): Promise<string> => {
    try {
        const apiToken = await fetchApiToken();
        const apiUrl = `/atr-gateway/ticket-management/api/v1/tickets? ticketType=incident&sortDirection=DESC&page=0&perPage=${pageNumber}`;
       
        const response = await axios({
            url: apiUrl,
            method: "GET",
            headers: {
                "apiToken": apiToken,
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
    
        const data = JSON.stringify(response);
        console.log(data);
        return data;
    }
    catch(error) {
        if(error) {
            console.log(error);
        }
        throw error;
    }
};


