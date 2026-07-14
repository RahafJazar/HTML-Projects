
import ApiClient from "./api/ApiClients.js";
import CountryService from "./services/CountryService.js";
import DashboardController from "./controllers/DashboardController.js";
import DashboardUI from "./ui/DashboardUI.js";
import AppState from "./state/AppState.js";
import AppController from "./controllers/AppController.js";



const apiClient = new ApiClient();
const countryService = new CountryService(apiClient);
const dashboardUI = new DashboardUI();
const appState = new AppState();
const appController = new AppController(appState);
debugger


appController.init();


/* ==================== mobile-menu-btn==================== */
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");
mobileMenuBtn.addEventListener("click", () => {
    if (window.innerWidth <= 1024) {
        sidebar.style.cssText = ` 
           transform: translateX(0%);
     `

        overlay.classList.remove("hidden");
        overlay.style.cssText = `
        opacity:1;
       visibility: visible;
        `
    }
});

overlay.addEventListener("click", () => {
    sidebar.style.cssText = ` 
           transform: translateX(-100%);
     `

    overlay.classList.add("hidden");
    overlay.style.cssText = `
        opacity:0;
          visibility: hidden;
        `
});





