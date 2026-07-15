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
        this.yearSelect = document.getElementById("global-year");
        this.countrInfoSection = document.getElementById("dashboard-country-info-section");
        this.exploreBtn = document.getElementById("global-search-btn");



        this.dashboardCountryFlag = document.getElementById("dashboard-country-flag");


    }

    renderDashboardStatistics(countries) {
        debugger
        const statCountries = document.getElementById("stat-countries");
        statCountries.innerHTML = `${countries.length} +`
    }

    renderCountries(countries) {

        const options = countries.map(country => {
            return `<option value=\"${country.countryCode}\"> ${country.name} </option> `
        })

        console.log("rednder cuntries", options)
        this.countrySelect.innerHTML = `<option value="">Select Country </option> ` + options.join("");

    }
    /* دالة لربط الحدث */
    bindCountryChange(handler) {
        debugger
        this.countrySelect.addEventListener("change", (e) => {
            console.log("change done on country select : ", e.target);
            handler(e.target.value);
        })
    }
    bindExplore(handler) {
        debugger

        this.exploreBtn.addEventListener("click", (e) => {
            const selectedOption = this.countrySelect.options[this.countrySelect.selectedIndex];

            handler({ countryCode: selectedOption.value, name: selectedOption.text }, this.citySelect.value, this.yearSelect.value);
        })
    }
    renderCities(cities) {
        const options = cities.map(city => {
            return `<option value=\"${city.name}\"> ${city.name} </option> `
        })

        console.log("rednder cities", options)
        this.citySelect.innerHTML = `<option value="">Select City </option> ` + options.join("");
    }
    renderCountryInfo(country) {
        debugger
        const countryInfoCard = `
                    <div class="section-header">
                        <h2><i class="fa-solid fa-flag"></i> Country Information</h2>
                    </div>

                    <div id="dashboard-country-info" class="dashboard-country-info">

                        <div class="dashboard-country-header">
                            <img src="${country.flag}" alt="${country.commonName}" class="dashboard-country-flag">

                            <div class="dashboard-country-title">
                                <h3>${country.commonName}</h3>
                                <p class="official-name">${country.officialName}</p>

                                <span class="region">
                                    <i class="fa-solid fa-location-dot"></i>
                                    ${country.region} • ${country.subregion}
                                </span>
                            </div>
                        </div>

                        <div class="dashboard-local-time">
                            <div class="local-time-display">
                                <i class="fa-solid fa-clock"></i>
                                <span class="local-time-value">--:--:--</span>
                                <span class="local-time-zone">${country.timezone}</span>
                            </div>
                        </div>

                        <div class="dashboard-country-grid">

                            <div class="dashboard-country-detail">
                                <i class="fa-solid fa-building-columns"></i>
                                <span class="label">Capital</span>
                                <span class="value">${country.capital}</span>
                            </div>

                            <div class="dashboard-country-detail">
                                <i class="fa-solid fa-users"></i>
                                <span class="label">Population</span>
                                <span class="value">${country.population.toLocaleString()}</span>
                            </div>

                            <div class="dashboard-country-detail">
                                <i class="fa-solid fa-ruler-combined"></i>
                                <span class="label">Area</span>
                                <span class="value">${country.area.toLocaleString()} km²</span>
                            </div>

                            <div class="dashboard-country-detail">
                                <i class="fa-solid fa-globe"></i>
                                <span class="label">Continent</span>
                                <span class="value">${country.continent}</span>
                            </div>

                            <div class="dashboard-country-detail">
                                <i class="fa-solid fa-phone"></i>
                                <span class="label">Calling Code</span>
                                <span class="value">+${country.callingCode}</span>
                            </div>

                            <div class="dashboard-country-detail">
                                <i class="fa-solid fa-car"></i>
                                <span class="label">Driving Side</span>
                                <span class="value">${country.drivingSide}</span>
                            </div>

                            <div class="dashboard-country-detail">
                                <i class="fa-solid fa-calendar-week"></i>
                                <span class="label">Week Starts</span>
                                <span class="value">${country.startOfWeek}</span>
                            </div>

                        </div>

                        <div class="dashboard-country-extras">

                            <div class="dashboard-country-extra">
                                <h4><i class="fa-solid fa-coins"></i> Currency</h4>

                                <div class="extra-tags">
                                    ${country.currencies.map(currency => `
                                        <span class="extra-tag">
                                            ${currency.name} (${currency.code} ${currency.symbol})
                                        </span>
                                    `).join("")}
                                </div>
                            </div>

                            <div class="dashboard-country-extra">
                                <h4><i class="fa-solid fa-language"></i> Languages</h4>

                                <div class="extra-tags">
                                    ${country.languages.map(language => `
                                        <span class="extra-tag">${language}</span>
                                    `).join("")}
                                </div>
                            </div>

                            <div class="dashboard-country-extra">
                                <h4><i class="fa-solid fa-map-location-dot"></i> Neighbors</h4>

                                <div class="extra-tags">
                                    ${this.renderCountryNeighbours(country).join("")}
                                </div>
                            </div>

                        </div>

                        <div class="dashboard-country-actions">
                            <a href="${country.googleMaps}" target="_blank" class="btn-map-link">
                                <i class="fa-solid fa-map"></i>
                                View on Google Maps
                            </a>
                        </div>

                    </div>
    `;

        this.countrInfoSection.innerHTML = countryInfoCard;
    }


    renderCountryNeighbours(country) {
        if (!country.borders) {
            return [` <span >No neighbouring countries</span>`]
        }
        return country.borders.map(c => {
            return ` <span class="extra-tag border-tag">${c}</span>`
        })
    }

    renderSelectedDistination(country) {
        const selectedCountryFlag = document.getElementById("selected-country-flag");
        const selectedCountryName = document.getElementById("selected-country-name");
        const selectedcityName = document.getElementById("selected-city-name");
        selectedCountryFlag.src = country.flag;
        selectedCountryFlag.setAttribute("alt", country.commonName);
        selectedCountryName.innerHTML = country.commonName;
        selectedcityName.innerHTML = `. ${country.capital}`
    }



}