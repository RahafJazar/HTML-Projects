/*

هو اللي حيجيب الدول -
-يعني بدل ما أتعامل مع JSON في كل مكان. - - > deal with Object 
*/
import ApiClient from "../api/ApiClients.js";
export default class HolidayService {
    API_Key = "rc_live_8560ffd0fa154be9b662220f18148780";
    constructor(apiClient) {
        this.apiClientObj = apiClient;
    }
    async getHolidays(countryCode, year) {
        return await this.apiClientObj.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`,

            {
                headers: {
                    'Authorization': `Bearer ${this.API_Key}`,
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}