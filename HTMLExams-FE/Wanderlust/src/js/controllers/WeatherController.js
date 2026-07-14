import WeatherService from "../services/WeatherService.js";
import WeatherUI from "../ui/WeatherUI.js";
import AppState from "../state/AppState.js";
export default class WeatherController {
    constructor(weatherService, weatherUI, appState) {
        this.weatherService = weatherService;
        this.weatherUI = weatherUI;
        this.appState = appState;
        this.loadingElements = document.getElementById("loading-overlay");
    }
    async init() {
        await this.loadWeather()
    }

    async loadWeather() {
        debugger
        const appStateSelection = this.appState.getSelection();
        this.loadingElements.classList.remove("hidden");
        const weatherObj = await this.weatherService.getWeather(appStateSelection.coordinates_);
        this.loadingElements.classList.add("hidden");

        console.log("weather", weatherObj);
        this.weatherUI.renderWeatherSelection({ name: this.appState.getSelection().selectedCountry_["name"] }, this.appState.getSelection().flag_, this.appState.getSelection().selectedYear_)
        this.weatherUI.renderWeather(weatherObj)



    }
}