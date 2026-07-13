import WeatherService from "../services/WeatherService.js";
import WeatherUI from "../ui/WeatherUI.js";
import AppState from "../state/AppState.js";
export default class WeatherController {
    constructor(weatherService, weatherUI, appState) {
        this.weatherService = weatherService;
        this.weatherUI = weatherUI;
        this.appState = appState
    }
    async init() {
        await this.loadWeather()
    }

    async loadWeather() {
        debugger
        const appStateSelection = this.appState.getSelection();
        const weatherObj = await this.weatherService.getWeather(appStateSelection.coordinates_);


        console.log("weather", weatherObj);
        this.weatherUI.renderWeather(weatherObj)



    }
}