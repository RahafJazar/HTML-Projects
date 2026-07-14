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
        this.myPlans = [];
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
        this.myPlans.push(plan);
        localStorage.setItem("plans", JSON.stringify(this.myPlans));

    }
    getPlans() {
        return localStorage.getItem("plans") ? JSON.parse(localStorage.getItem("plans")) : [];

    }
}