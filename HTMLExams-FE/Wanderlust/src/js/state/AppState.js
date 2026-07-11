export default class AppState {
    constructor() {
        this.currentView = "dashboard-view";

        this.selectedCountry = { countryCode: "EG", name: "Egypt" };
        this.flag = "https://flagcdn.com/w40/eg.png";
        this.selectedCity = "Cairo";
        this.selectedYear = 2026;
    }

    setCurrentview(view) {
        this.currentView = view;
    }
    getCurrentView() {
        return this.currentView;
    }

    setSelection(country, flag, city, year) {
        debugger
        this.selectedCountry = country;
        this.flag = flag;
        this.selectedCity = city;
        this.selectedYear = year;
    }

    getSelection() {
        debugger
        return {
            selectedCountry_: this.selectedCountry,
            flag_: this.flag,
            selectedCity_: this.selectedCity,
            selectedYear_: this.selectedYear

        }
    }
    clearSelection() {
        this.selectedCountry = { country_code: "EG", name: "Egypt" };
        this.flag = "https://flagcdn.com/w40/eg.png";
        this.selectedCity = "Cairo";
        this.selectedYear = 2026;
    }
}