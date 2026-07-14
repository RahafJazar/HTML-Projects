import PlanService from "../services/PlanService.js";
import PlanUI from "../ui/PlanUI.js";
import AppState from "../state/AppState.js";
export default class MyPlansController {
    constructor(planService, planUI, appState) {
        this.planService = planService;
        this.planUI = planUI;
        this.appState = appState;
        this.loadingElements = document.getElementById("loading-overlay");
    }
    async init() {
        await this.loadPlans()
    }

    async loadPlans() {
        debugger;
        const plan = this.appState.getPlans();

        console.log("plans are : ", plan);
        this.planUI.renderPlans(plan, "holiday");



    }
}