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
        const events = await this.eventService.getEvents(this.appState.getSelection().selectedCountry_["countryCode"], this.appState.getSelection().selectedCity_, this.appState.getSelection().selectedYear_);
        if (events) {
            console.log("events", events);

        }


    }
}