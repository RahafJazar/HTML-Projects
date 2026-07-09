import HolidayService from "../services/HolidayServices.js";
import HolidayUI from "../ui/HolidayUI.js";
import AppState from "../state/AppState.js";
export default class HolidayController {
    constructor(holidayService, holidayUI, appState) {
        this.holidayService = holidayService;
        this.holidayUI = holidayUI;
        this.appState = appState
    }
    async init() {
        await this.loadHolidays()
    }
    ;
    async loadHolidays() {
        const holidays = await this.holidayService.getHolidays(this.appState.getSelection().selectedCountry_.name, this.appState.getSelection().selectedYear_);
        if (holidays) {
            console.log("holidays", holidays)
        }

    }
}