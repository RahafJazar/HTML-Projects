import LongWeekendService from "../services/LongWeekendService.js";
import WeekendUI from "../ui/WeekendUI.js";
import AppState from "../state/AppState.js";
export default class LongWeekendController {
    constructor(longWeekendService, weekendUI, appState, toastUI) {
        this.longWeekendService = longWeekendService;
        this.weekendUI = weekendUI;
        this.appState = appState;
        this.toastUI = toastUI;
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
            this.weekendUI.renderLongWeekends(longWeekends, this.appState.getSelection().selectedCountry_["name"], this.appState.getPlans());

            this.weekendUI.lwContent.addEventListener("click", (e) => {
                const btn = e.target.closest(".holiday-action-btn");
                if (!btn) return;
                const index = btn.dataset.index;
                const saved = this.appState.addPlan({
                    type: "longweekend",
                    countryCode: this.appState.getSelection().selectedCountry_.countryCode,
                    ...this.longWeekends[index]
                })
                if (!saved) {
                    this.toastUI.showToast("Already Saved !", "info");
                    return
                }
                this.weekendUI.markAsSaved(btn);
                console.log("plan saved is ", this.appState.getPlans());
            })
        }




    }




}