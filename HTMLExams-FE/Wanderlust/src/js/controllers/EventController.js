import EventService from "../services/EventService.js";
import EventUI from "../ui/EventUI.js";
import AppState from "../state/AppState.js";
export default class EventController {
    constructor(eventService, eventUI, appState) {
        this.eventService = eventService;
        this.eventUI = eventUI;
        this.appState = appState
    }
    async init() {
        await this.loadEvents()
    }
    ;
    async loadEvents() {
        debugger
        console.log(this.appState.getSelection().selectedCountry_)
        const appStateSelection = this.appState.getSelection();
        const eventsObj = await this.eventService.getEvents(appStateSelection.selectedCountry_["countryCode"], appStateSelection.selectedCity_, appStateSelection.selectedYear_);
        const events = eventsObj?._embedded?.events;

        console.log("events", events);
        this.eventUI.renderEvents(events);



    }
}