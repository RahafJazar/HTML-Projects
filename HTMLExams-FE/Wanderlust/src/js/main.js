
import ApiClient from "./api/ApiClients.js";
import CountryService from "./services/CountryService.js";
import DashboardController from "./controllers/DashboardController.js";
import DashboardUI from "./ui/DashboardUI.js";
import AppState from "./state/AppState.js";
import AppController from "./controllers/AppController.js";

/* ==================== DASHBOARD VIEW ==================== */


const apiClient = new ApiClient();
const countryService = new CountryService(apiClient);
const dashboardUI = new DashboardUI();
const appState = new AppState();
const appController = new AppController(appState);
debugger

appController.init();
