export default class AppState {
    constructor() {
        this.currentView = "dashboard-view";

        this.selectedCountry = { countryCode: "EG", name: "Egypt" };
        this.flag = "https://flagcdn.com/w40/eg.png";
        this.selectedCity = "Cairo";
        this.selectedYear = 2026;
        this.coordinates = {
            lat: 27,
            lng: 30
        }

        //بخصوص ال plans 
        this.myPlans = localStorage.getItem("plans") ? JSON.parse(localStorage.getItem("plans")) : [];
    }

    setCurrentview(view) {
        this.currentView = view;
    }
    getCurrentView() {
        return this.currentView;
    }

    setSelection(country, flag, city, year, coordinates) {
        debugger
        this.selectedCountry = country;
        this.flag = flag;
        this.selectedCity = city;
        this.selectedYear = year;
        this.coordinates = coordinates
    }

    getSelection() {
        debugger
        return {
            selectedCountry_: this.selectedCountry,
            flag_: this.flag,
            selectedCity_: this.selectedCity,
            selectedYear_: this.selectedYear,
            coordinates_: this.coordinates
        }
    }
    clearSelection() {
        this.selectedCountry = { country_code: "EG", name: "Egypt" };
        this.flag = "https://flagcdn.com/w40/eg.png";
        this.selectedCity = "Cairo";
        this.selectedYear = 2026;
        this.coordinates = {
            lat: 27,
            lng: 30
        }
    }

    addPlan(plan) {
        debugger
        const newPlan = {
            ...plan,
            planKey: this.getPlanKey(plan)
        }
        console.log("new plan ", newPlan)
        const exists = this.myPlans.some(p => p.planKey === newPlan.planKey);
        if (exists) {
            return false;
        }

        this.myPlans.push(newPlan);
        localStorage.setItem("plans", JSON.stringify(this.myPlans));

        document.dispatchEvent(new Event("plansChanged"))
        return true;

    }
    getPlans() {

        return this.myPlans;

    }
    removePlan(id) {
        this.myPlans = this.myPlans.filter(p => p.planKey !== id);
        localStorage.setItem("plans", JSON.stringify(this.myPlans));
        document.dispatchEvent(new Event("plansChanged"));
    }


    getPlanKey(plan) {
        switch (plan.type) {
            case "holiday":
                return `${plan.type}-${plan.date}-${plan.name}-${plan.countryCode}`;

            case "event":
                return `${plan.type}-${plan.id}`;

            case "longweekend":
                return `${plan.type}-${plan.startDate}-${plan.endDate}`

            default:
                return null;

        }
    }
}