/*

هو اللي حيجيب الدول -
-يعني بدل ما أتعامل مع JSON في كل مكان. - - > deal with Object 
*/
import ApiClient from "../api/ApiClients.js";
import Country from "../models/Country.js";

export default class CurrencyService {
    ExchangeRateAPI_Key = "2319302c3a-69a3c3ccf4-ti9qqr"; //fastforex api 
    constructor(apiClient) {
        this.apiClientObj = apiClient;

    }

    async getLatestExchangeRates() {
        //API Need Authorization 
        return await this.apiClientObj.get(`GET https://api.fastforex.io/fetch-all?from=USD&api_key=${API_Key}`);
    }



    async convertPair(amount, from, to) {
        debugger
        return await this.apiClientObj.get(`https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=${API_Key}`);

    }
}