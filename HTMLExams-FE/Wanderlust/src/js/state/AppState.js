export default class AppState {
    constructor() {
        this.currentView = "dashboard-view";

        this.selectedCountry = null;
        this.selectedCity = null;
        this.selectedYear = null;
    }

    setCurrentview(view) {
        this.currentView = view;
    }
    getCurrentView() {
        return this.currentView;
    }

    setSelection(country, city, year) {
        debugger
        this.selectedCountry = country;
        this.selectedCity = city;
        this.selectedYear = year;
    }

    getSelection() {
        debugger
        return {
            selectedCountry_: this.selectedCountry,
            selectedCity_: this.selectedCity,
            selectedYear_: this.selectedYear

        }
    }
    clearSelection() {
        this.selectedCountry = null;
        this.selectedCity = null;
        this.selectedYear = null;
    }
}