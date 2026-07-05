
import ApiClient from "./api/ApiClients.js";
import CountryService from "./services/CountryService.js";

/* ==================== DASHBOARD VIEW ==================== */


const apiClient = new ApiClient();
const countryService = new CountryService(apiClient);
debugger
console.log("countries", await countryService.getCountries());
