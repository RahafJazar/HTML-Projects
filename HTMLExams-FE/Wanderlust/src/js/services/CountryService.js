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
        let countries = this.apiClientObj.get("https://date.nager.at/api/v3/AvailableCountries")
        return countries;
    }

    getCountryDetails(code) {
        let countryDetails = this.apiClientObj.get(`https://restcountries.com/v3.1/alpha/countryCode:${code}`)
        return countryDetails;
    }
}