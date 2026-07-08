/*

هو اللي حيجيب الدول -
-يعني بدل ما أتعامل مع JSON في كل مكان. - - > deal with Object 
*/
import ApiClient from "../api/ApiClients.js";

export default class CountryService {

    constructor(apiClient) {
        this.apiClientObj = apiClient;
    }

    async getCountries() {
        return await this.apiClientObj.get("https://date.nager.at/api/v3/AvailableCountries");

    }



    async getCountryDetails(countryName) {
        debugger
        return await this.apiClientObj.get(`https://api.restcountries.com/countries/v5?q=${countryName.trim()}`);

    }
}