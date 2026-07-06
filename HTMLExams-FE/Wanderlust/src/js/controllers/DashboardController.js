/*
تنسيق سير العمل بين الخدمات  والواجهة 
*/
import DashboardUI from "../ui/DashboardUI.js";
import CountryService from "../services/CountryService.js";
export default class DashboardController {
    //فقط بتعرف CountryService+ DashobardUI

    constructor(countryService, dashboardUI) {
        this.countryService = countryService;
        this.dashboardUI = dashboardUI;
    }
    //1-> when open the dashboard -> load countries -> show it inside "select" ->  events  connect
    async init() {
        await this.loadCountries();

    }
    async loadCountries() {
        const countries = await this.countryService.getCountries();
        this.dashboardUI.renderCountries(countries);
    }
}