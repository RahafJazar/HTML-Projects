
/*

هو اللي حيجيب الدول -
-يعني بدل ما أتعامل مع JSON في كل مكان. - - > deal with Object 
*/
import ApiClient from "../api/ApiClients.js";
export default class EventService {
    constructor(apiClient) {
        this.apiClientObj = apiClient;

    }
    async getEvents(countryCode, city, year) {
        return await this.apiClientObj.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=VwECw2OiAzxVzIqnwmKJUG41FbeXJk1y&city=${city}&countryCode=${countryCode}&size=20`)
    }
}