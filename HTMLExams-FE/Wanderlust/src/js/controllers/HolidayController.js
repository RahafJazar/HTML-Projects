import HolidayService from "../services/HolidayServices.js";
import HolidayUI from "../ui/HolidayUI.js";
import AppState from "../state/AppState.js";
export default class HolidayController {
    constructor(holidayService, holidayUI, appState) {
        this.holidayService = holidayService;
        this.holidayUI = holidayUI;
        this.appState = appState;
        this.loadingElements = document.getElementById("loading-overlay");
        this.holidays = [];
    }
    async init() {
        await this.loadHolidays()
    }

    async loadHolidays() {
        debugger
        console.log(this.appState.getSelection().selectedCountry_)
        this.loadingElements.classList.remove("hidden");
        const holidays = await this.holidayService.getHolidays(this.appState.getSelection().selectedCountry_["countryCode"], this.appState.getSelection().selectedYear_);
        this.holidays = holidays;
        this.loadingElements.classList.add("hidden");
        if (holidays) {
            console.log("holidays", holidays);
            this.holidayUI.renderHolidaysSelection({ name: this.appState.getSelection().selectedCountry_["name"] }, this.appState.getSelection().flag_, this.appState.getSelection().selectedYear_)
            this.holidayUI.renderHolidays(holidays, this.appState.getSelection().selectedCountry_["name"]);

            this.holidayUI.holidaysContent.addEventListener("click", (e) => {
                const btn = e.target.closest(".holiday-action-btn");
                if (!btn) return;
                const index = btn.dataset.index;
                this.appState.addPlan({
                    type: "holiday",
                    ...this.holidays[index]
                })
                this.holidayUI.markAsSaved(btn);
                console.log("plan saved is ", this.appState.getPlans());
            })
        }




    }




}