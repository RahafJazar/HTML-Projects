import LongWeekendService from "../services/LongWeekendService.js";
import WeekendUI from "../ui/WeekendUI.js";
import AppState from "../state/AppState.js";
export default class LongWeekendController {
    constructor(longWeekendService, weekendUI, appState) {
        this.longWeekendService = longWeekendService;
        this.weekendUI = weekendUI;
        this.appState = appState;
        this.loadingElements = document.getElementById("loading-overlay");
        this.longWeekends = [];
    }
    async init() {
        await this.loadLongWeekends()
    }

    async loadLongWeekends() {
        debugger
        console.log(this.appState.getSelection().selectedCountry_)
        this.loadingElements.classList.remove("hidden");
        console.log(this.longWeekendService);
        console.log(this.longWeekendService.constructor.name);
        console.log(this.longWeekendService.getLongWeekends);
        const longWeekends = await this.longWeekendService.getLongWeekends(this.appState.getSelection().selectedCountry_["countryCode"], this.appState.getSelection().selectedYear_);
        this.longWeekends = longWeekends;
        this.loadingElements.classList.add("hidden");
        if (longWeekends) {
            console.log("longWeekends", longWeekends);
            this.weekendUI.renderLongWeekendsSelection({ name: this.appState.getSelection().selectedCountry_["name"] }, this.appState.getSelection().flag_, this.appState.getSelection().selectedYear_)
            this.weekendUI.renderLongWeekends(longWeekends, this.appState.getSelection().selectedCountry_["name"]);

            // this.holidayUI.holidaysContent.addEventListener("click", (e) => {
            //     const btn = e.target.closest(".holiday-action-btn");
            //     if (!btn) return;
            //     const index = btn.dataset.index;
            //     this.appState.addPlan({
            //         type: "holiday",
            //         ...this.holidays[index]
            //     })
            //     this.holidayUI.markAsSaved(btn);
            //     console.log("plan saved is ", this.appState.getPlans());
            // })
        }




    }




}