/*
مسؤول  عن التنقل بين ال controllers 
*/
import ApiClient from "../api/ApiClients.js";
import CountryService from "../services/CountryService.js";
import EventService from "../services/EventService.js";
import HolidayService from "../services/HolidayServices.js";
import AppState from "../state/AppState.js";
import DashboardUI from "../ui/DashboardUI.js";
import EventUI from "../ui/EventUI.js";
import HolidayUI from "../ui/HolidayUI.js";
import DashboardController from "./DashboardController.js";
import EventController from "./EventController.js";
import HolidayController from "./HolidayController.js";
export default class AppController {
    constructor(appState) {
        this.appState = appState;
        const apiClient = new ApiClient();
        this.controllers = {
            "dashboard-view": new DashboardController(
                new CountryService(apiClient),
                new DashboardUI(),
                appState
            ),

            "holidays-view": new HolidayController(
                new HolidayService(apiClient),
                new HolidayUI(),
                appState
            ),
            "events-view": new EventController(
                new EventService(apiClient),
                new EventUI(),
                appState
            )
        }

    }
    async init() {
        const navItems = document.querySelectorAll(".nav-item");
        //event delegation concept
        const sidebarNav = document.querySelector(".sidebar-nav");
        //defaul =>dashboard;
        await this.showView(this.appState.getCurrentView())
        sidebarNav.addEventListener("click", async (e) => {
            debugger
            console.log("clicked ", e.target.closest("a"))

            if (e.target.closest("a")) {

                const view = e.target.closest("a").getAttribute("data-target");
                navItems.forEach(item => {
                    if (item.getAttribute("data-target") === view) {
                        item.classList.add("active")
                    }
                    else {
                        item.classList.remove("active")
                    }
                })
                this.appState.setCurrentview(view);
                console.log("view is ", view);
                await this.showView(this.appState.getCurrentView())
            }


        })
    }

    async showView(view) {
        debugger
        const allSections = document.querySelectorAll("section");
        allSections.forEach((section) => {
            console.log(section)
            section.classList.toggle("active", section.id === view);

        })


        await this.controllers[view].init();

    }
}