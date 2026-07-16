/*
تنسيق سير العمل بين الخدمات  والواجهة 
*/
import DashboardUI from "../ui/DashboardUI.js";
import CountryService from "../services/CountryService.js";
import Country from "../models/Country.js";
import AppState from "../state/AppState.js";
import ToastUI from "../ui/ToastUI.js";

export default class DashboardController {
    //فقط بتعرف CountryService+ DashobardUI

    constructor(countryService, dashboardUI, appState, toastUI) {

        this.countryService = countryService;
        this.dashboardUI = dashboardUI;
        this.appState = appState;
        this.toastUI = toastUI;
        this.loadingElements = document.getElementById("loading-overlay");
    }
    //1-> when open the dashboard -> load countries -> show it inside "select" ->  events  connect
    async init() {
        debugger
        await this.loadCountries();
        this.dashboardUI.bindCountryChange(async (countryName) => {
            debugger
            await this.loadCities(countryName)
        });
        this.dashboardUI.bindExplore(async (country, city, year) => {
            debugger
            localStorage.clear();
            await this.explore(country, city, year);
            document.dispatchEvent(new Event("plansChanged"));
        })


    }
    async loadCountries() {
        this.loadingElements.classList.remove("hidden");
        const countries = await this.countryService.getCountries();
        this.loadingElements.classList.add("hidden");
        if (countries) {
            this.dashboardUI.renderDashboardStatistics(countries);
            this.dashboardUI.renderCountries(countries);
        }

    }


    async loadCities(country) {
        debugger
        this.loadingElements.classList.remove("hidden");
        const result = await this.countryService.getCountryDetails(country);
        this.loadingElements.classList.add("hidden");
        const cities = result.data?.objects[0]?.capitals;
        if (cities) {
            this.dashboardUI.renderCities(cities);
        }

    }
    async explore(country, city, year) {
        debugger
        if (!country) {
            this.toastUI.showToast("Plese select a country first ", "error");
        }
        else {
            this.toastUI.showToast(`Exploring ${country.name}`, "success");
            this.loadingElements.classList.remove("hidden");
            const result = await this.countryService.getCountryDetails(country.name);
            this.loadingElements.classList.add("hidden");
            const country_info = new Country(result.data?.objects[0]);

            this.dashboardUI.renderSelectedDistination(country_info);
            this.dashboardUI.renderCountryInfo(country_info);
            this.appState.setSelection(country, country_info.flag, city, year, country_info.coordinates);

        }

    }
}