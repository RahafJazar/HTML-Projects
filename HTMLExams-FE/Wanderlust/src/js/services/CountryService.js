/*

هو اللي حيجيب الدول -
-يعني بدل ما أتعامل مع JSON في كل مكان. - - > deal with Object 
*/
import ApiClient from "../api/ApiClients.js";
import Country from "../models/Country.js";

export default class CountryService {
    API_Key = "rc_live_8560ffd0fa154be9b662220f18148780";
    constructor(apiClient) {
        this.apiClientObj = apiClient;

    }

    async getCountries() {
        //API Need Authorization 
        return await this.apiClientObj.get("https://date.nager.at/api/v3/AvailableCountries");
    }



    async getCountryDetails(countryName) {
        debugger
        return await this.apiClientObj.get(`https://api.restcountries.com/countries/v5?q=${countryName.trim()}`,
            {
                headers: {
                    'Authorization': `Bearer ${this.API_Key}`,
                    'Content-Type': 'application/json'
                }
            }

        );

    }
}