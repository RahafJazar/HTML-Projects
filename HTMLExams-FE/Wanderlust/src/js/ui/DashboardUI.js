/*
التعامل مع عنصر الDom :
 Delete ,
update,
show ,
 ....

*/

export default class DashboardUI {
    constructor() {
        //catch DOM elements 
        /*
        1. Search Section 
                فيها: 
                Country Select
                City Select
                Year Select
                Explore Button
         */
        this.countrySelect = document.getElementById("global-country");
        this.citySelect = document.getElementById("global-city");
        this.yearSelect = document.getElementById("global-city");

        this.exploreBtn = document.getElementById("global-search-btn");



    }

    renderCountries(countries) {

        const options = countries.map(country => {
            return `<option value=\"${country.countryCode}\"> ${country.name} </option> `
        })

        console.log("rednder cuntries", options)
        this.countrySelect.innerHTML = `<option value="">Select Country </option> ` + options.join("");

    }
}