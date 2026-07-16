import PlanService from "../services/PlanService.js";
import PlanUI from "../ui/PlanUI.js";
import AppState from "../state/AppState.js";

export default class MyPlansController {
    constructor(planService, planUI, appState, toastUI) {
        this.planService = planService;
        this.planUI = planUI;
        this.appState = appState;
        this.toastUI = toastUI;
        this.loadingElements = document.getElementById("loading-overlay");

        this.planUI.bindRemovePlan((id) => {
            this.handleRemovePlan(id);
        });
    }
    async init() {
        await this.loadPlans();


    }

    async loadPlans() {
        debugger;

        this.plans = this.appState.getPlans();

        console.log("plans are : ", this.plans);
        this.countryPlans = this.plans.filter(p => {
            return p.countryCode === this.appState.getSelection().selectedCountry_["countryCode"];
        })
        this.planUI.renderFilterCount(this.countryPlans);
        this.planUI.renderPlans(this.countryPlans);
        this.handleFilters();


    }

    handleFilters() {
        const filterBtns = document.querySelectorAll(".plan-filter");

        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                console.log("this here is ", this);

                //remove active from all btns 
                filterBtns.forEach(b => {
                    b.classList.remove("active")
                })
                //activate selected btn
                btn.classList.add("active");

                const dataFilter = btn.dataset.filter;
                console.log("data filter is ", dataFilter);
                if (dataFilter === "all") {
                    this.planUI.renderPlans(this.countryPlans)
                } else {
                    debugger
                    const filteredPlans = this.countryPlans.filter(p => p.type === dataFilter);
                    this.planUI.renderPlans(filteredPlans);
                }


                //if remove plan clicked

            })
        })
    }
    handleRemovePlan(id) {
        console.log(id)
        Swal.fire({
            icon: "warning",
            iconColor: "#f7bb86",
            title: "Remove Plan?",
            text: "Are you sure you want to remove this plan?",
            confirmButtonText: "Yes, remove it !",
            confirmButtonColor: "#f04343",
            cancelButtonText: "cancel",
            cancelButtonColor: "#65758c",
            showCancelButton: true
        }).then(result => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    title: "Removed",
                    text: "Plan has been removed successfully",
                    timer: 1500
                })
                this.appState.removePlan(id);
                this.loadPlans();
            }
        })

    }

}