/*
تنسيق سير العمل بين الخدمات  والواجهة 
*/
import DashboardUI from "../ui/DashboardUI.js";
import CountryService from "../services/CountryService.js";
import Country from "../models/Country.js";
export default class DashboardController {
    //فقط بتعرف CountryService+ DashobardUI

    constructor(countryService, dashboardUI) {
        this.countryService = countryService;
        this.dashboardUI = dashboardUI;
    }
    //1-> when open the dashboard -> load countries -> show it inside "select" ->  events  connect
    async init() {
        await this.loadCountries();
        this.dashboardUI.bindCountryChange(async (countryName) => {
            debugger
            await this.loadCities(countryName)
        });
        this.dashboardUI.bindExplore(async (country, city, year) => {
            debugger
            await this.explore(country, city, year);
        })


    }
    async loadCountries() {
        const countries = await this.countryService.getCountries();
        this.dashboardUI.renderCountries(countries);
    }


    async loadCities(country) {
        debugger
        const result = await this.countryService.getCountryDetails(country);
        const cities = result.data?.objects[0]?.capitals;
        this.dashboardUI.renderCities(cities);
    }
    async explore(country, city, year) {
        const result = await this.countryService.getCountryDetails(country);
        const country_info = new Country(result.data?.objects[0]);
        this.dashboardUI.renderSelectedDistination(country_info);
        this.dashboardUI.renderCountryInfo(country_info);
    }
}