
import ApiClient from "./api/ApiClients.js";
import CountryService from "./services/CountryService.js";
import DashboardController from "./controllers/DashboardController.js";
import DashboardUI from "./ui/DashboardUI.js";

/* ==================== DASHBOARD VIEW ==================== */


const apiClient = new ApiClient();
const countryService = new CountryService(apiClient);
const dashboardUI = new DashboardUI();
const dashboardController = new DashboardController(countryService, dashboardUI);
debugger

dashboardController.init();
