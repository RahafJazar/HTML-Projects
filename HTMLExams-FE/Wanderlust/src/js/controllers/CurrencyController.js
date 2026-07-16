
import AppState from "../state/AppState.js";
export default class CurrencyController {
    constructor(currencyService, currencyUI, appState, toastUI) {
        this.currencyService = currencyService;
        this.currencyUI = currencyUI;
        this.appState = appState;
        this.toastUI = toastUI;

    }
    async init() {
        await this.loadlatestExchangeRates();
    }

    async loadlatestExchangeRates() {
        const exhanges = await this.currencyService.getLatestExchangeRates();
        this.echangesRatesResult = exhanges.results;
        console.log("exchanges :", this.echangesRatesResult);
        this.currencyUI.renderLatestExchangesRates(echangesRatesResult);
    }

}