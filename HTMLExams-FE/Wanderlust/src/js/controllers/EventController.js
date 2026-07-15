import EventService from "../services/EventService.js";
import EventUI from "../ui/EventUI.js";
import AppState from "../state/AppState.js";
export default class EventController {
    constructor(eventService, eventUI, appState, toastUI) {
        this.eventService = eventService;
        this.eventUI = eventUI;
        this.appState = appState;
        this.toastUI = toastUI;
        this.loadingElements = document.getElementById("loading-overlay");
        this.events = [];
    }
    async init() {
        await this.loadEvents()
    }
    ;
    async loadEvents() {
        debugger
        console.log(this.appState.getSelection().selectedCountry_)
        const appStateSelection = this.appState.getSelection();
        this.loadingElements.classList.remove("hidden");
        const eventsObj = await this.eventService.getEvents(appStateSelection.selectedCountry_["countryCode"], appStateSelection.selectedCity_, appStateSelection.selectedYear_);
        this.loadingElements.classList.add("hidden");
        const events = eventsObj?._embedded?.events;
        this.events = events;
        console.log("events", events);
        this.eventUI.renderEventsSelection({ name: this.appState.getSelection().selectedCountry_["name"] }, this.appState.getSelection().flag_, this.appState.getSelection().selectedCity_)
        this.eventUI.renderEvents(events, appStateSelection.selectedCountry_["name"], this.appState.getPlans());

        this.eventUI.eventsContent.addEventListener("click", (e) => {
            const btn = e.target.closest(".event-card-save");
            if (!btn) return;
            const index = btn.dataset.index;
            const saved = this.appState.addPlan({
                type: "event",
                countryCode: this.appState.getSelection().selectedCountry_.countryCode,
                ...this.events[index]
            })
            if (!saved) {
                this.toastUI.showToast("Already Saved !", "info");
                return
            }

            this.eventUI.markAsSaved(btn);
            console.log("plan saved is ", this.appState.getPlans());
        })


    }
}