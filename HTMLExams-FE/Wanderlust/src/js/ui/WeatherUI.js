export default class WeatherUI {
    constructor() {
        //catch DOM elements 
        /* 
          
         */

        //variables 



        //elements 
        this.weatherHeroCard = document.querySelector("#weather-content .weather-hero-card");
        this.weatherDetailsGrid = document.querySelector("#weather-content .weather-details-grid");
        this.weatherSection = document.querySelector("#weather-content .weather-section");
        this.hourlyScroll = document.querySelector("#weather-content .weather-section .hourly-scroll");
        this.forecastList = document.querySelector("#weather-content .weather-section .forecast-list");

        this.viewHeaderContent = document.querySelector("#weather-view .view-header-card .view-header-content p");
        console.log("viewHeaderContent", this.viewHeaderContent)

    }

    renderWeatherSelection(country, flag, city) {
        debugger
        let weatherSelection = document.getElementById("weather-selection")
        weatherSelection.style.cssText = "display:block"
        let selectionFlag = document.querySelector("#weather-selection .selection-flag");
        let selectioncity = document.querySelector("#weather-selection .selection-city");
        let selectionCountry = document.querySelector("#weather-selection .selection-country");

        selectionFlag.setAttribute("src", flag);
        selectioncity.innerHTML = city;
        selectionCountry.innerHTML = country.name;


    }
    renderWeather(weather) {
        const location = weather.timezone.includes("/") ? weather.timezone.split("/")[1] : weather.timezone;
        console.log(location);
        this.viewHeaderContent.innerHTML = `Check 7-day weather forecasts for ${location}`;
        this.renderweatherHeroCard(weather);
        this.renderWeatherDetailsGrid(weather);
        this.renderHourlyForest(weather);
        this.renderForecastList(weather);
    }

    /* <!-- Current Weather Hero --> */
    renderweatherHeroCard(weather) {
        debugger
        const current = weather.current;
        const daily = weather.daily;
        const location = weather.timezone.includes("/") ? weather.timezone.split("/")[1] : weather.timezone;
        const currentDate = new Date(current.time).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        console.log("date weather is ")
        const weatherText = this.getWeatherDescription(current.weather_code);

        let cartona = `
            <div class="weather-location">
                <i class="fa-solid fa-location-dot"></i>
                <span>${location}</span>
                <span class="weather-time">${currentDate}</span>
              </div>
              <div class="weather-hero-main">
                <div class="weather-hero-left">
                  <div class="weather-hero-icon"><i class="${this.getweatherIcon(current.weather_code)}"></i></div>
                  <div class="weather-hero-temp">
                    <span class="temp-value">${current.temperature_2m}</span>
                    <span class="temp-unit">°C</span>
                  </div>
                </div>
                <div class="weather-hero-right">
                  <div class="weather-condition">${weatherText}</div>
                  <div class="weather-feels">Feels like ${current.apparent_temperature}°C</div>
                  <div class="weather-high-low">
                    <span class="high"><i class="fa-solid fa-arrow-up"></i>${daily.temperature_2m_max[0]}°</span>
                    <span class="low"><i class="fa-solid fa-arrow-down"></i> ${daily.temperature_2m_min[0]}°</span>
                  </div>
                </div>
              </div>
            </div>
        `;
        this.weatherHeroCard.innerHTML = cartona;
    }

    /* <!-- Weather Details Grid -->*/
    renderWeatherDetailsGrid(weather) {
        const current = weather.current;
        const daily = weather.daily;
        let cartona = `
                <div class="weather-detail-card">
                <div class="detail-icon humidity">
                    <i class="fa-solid fa-droplet"></i>
                </div>

                <div class="detail-info">
                    <span class="detail-label">Humidity</span>
                    <span class="detail-value">
                        ${current.relative_humidity_2m}%
                    </span>
                </div>
            </div>

            <div class="weather-detail-card">
                <div class="detail-icon wind">
                    <i class="fa-solid fa-wind"></i>
                </div>

                <div class="detail-info">
                    <span class="detail-label">Wind</span>
                    <span class="detail-value">
                        ${current.wind_speed_10m} km/h
                    </span>
                </div>
            </div>

            <div class="weather-detail-card">
                <div class="detail-icon uv">
                    <i class="fa-solid fa-sun"></i>
                </div>

                <div class="detail-info">
                    <span class="detail-label">UV Index</span>
                    <span class="detail-value">
                        ${current.uv_index}
                    </span>
                </div>
            </div>

            <div class="weather-detail-card">
                <div class="detail-icon precip">
                    <i class="fa-solid fa-cloud-rain"></i>
                </div>

                <div class="detail-info">
                    <span class="detail-label">Precipitation</span>
                    <span class="detail-value">
                        ${daily.precipitation_probability_max[0]}%
                    </span>
                </div>
            </div>

        
        `
        this.weatherDetailsGrid.innerHTML = cartona;
    }

    /*<!-- Hourly Forecast -->*/
    renderHourlyForest(weather) {
        const currentHour = new Date().toISOString().slice(0, 13);//2026-07-13T16;
        let startIndex = weather.hourly.time.findIndex(time => {
            return time.startsWith(currentHour);
        })
        if (startIndex === -1) {
            startIndex = 0;
        }
        let hourlyCartona = ``;
        //عرض اول 8 ساعات
        for (let i = startIndex; i < startIndex + 8; i++) {
            const time = weather.hourly.time[i];
            const temp = weather.hourly.temperature_2m[i];
            const code = weather.hourly.weather_code[i];

            const hour = i === startIndex ? "Now" : new Date(time).toLocaleTimeString([], {
                hour: "numeric",
                hour12: true
            })
            hourlyCartona += `
                    <div class="hourly-item ${i === startIndex ? 'now' : ''}">
                                    <span class="hourly-time">${hour}</span>
                                    <div class="hourly-icon"><i class="${this.getweatherIcon(code)}"></i></div>
                                    <span class="hourly-temp">${temp}°</span>
                      </div>
                    `
        }

        this.hourlyScroll.innerHTML = hourlyCartona;
    }

    /*<!-- 7-Day Forecast -->*/
    renderForecastList(weather) {
        debugger
        let dailyCartona = ``;
        const { time, temperature_2m_max, temperature_2m_min, weather_code } = weather.daily; //destructing 
        const todayDate = new Date().toISOString().slice(0, 10);

        //عرض ايام الاسبوع 
        for (let i = 0; i < time.length; i++) {
            const currentDate = time[i];
            const isToday = currentDate === todayDate;
            const tempMax = temperature_2m_max[i];
            const tempMin = temperature_2m_min[i];
            const code = weather_code[i];
            const _date = new Date(currentDate);
            let weekDay = isToday ? "Today" : _date.toLocaleDateString("en-US", {
                weekday: "short",
            });

            const day = _date.toLocaleDateString("en-US", {
                day: "2-digit"
            });
            const month = _date.toLocaleDateString("en-US", {
                month: "short"
            });

            dailyCartona += `
            <div class="forecast-day ${isToday ? 'today' : ''}" >
                <div class="forecast-day-name"><span class="day-label">${weekDay}</span><span class="day-date">${day}
                    ${month}</span></div>
                <div class="forecast-icon"><i class="${this.getweatherIcon(code)}"></i></div>
                <div class="forecast-temps"><span class="temp-max">${tempMax}°</span><span class="temp-min">${tempMin}°</span></div>
                <div class="forecast-precip"></div>
            </div >
           `
        }
        this.forecastList.innerHTML = dailyCartona;
    }


    getWeatherDescription(code) {

        switch (code) {
            case 0: return "Clear Sky";
            case 1: return "Mainly Clear";
            case 2: return "Partly Cloudy";
            case 3: return "Overcast";
            case 45:
            case 48: return "Fog";
            case 51:
            case 53:
            case 55: return "Drizzle";
            case 61:
            case 63:
            case 65: return "Rain";
            case 71:
            case 73:
            case 75: return "Snow";
            case 95: return "Thunderstorm";
            default: return "Unknown";
        }
    }

    getweatherIcon(code) {
        switch (code) {
            case 0:
                return "fa-solid fa-sun";

            case 1:
            case 2:
                return "fa-solid fa-cloud-sun";

            case 3:
                return "fa-solid fa-cloud";

            case 45:
            case 48:
                return "fa-solid fa-smog";

            case 51:
            case 53:
            case 55:
            case 61:
            case 63:
            case 65:
                return "fa-solid fa-cloud-rain";

            case 71:
            case 73:
            case 75:
                return "fa-solid fa-snowflake";

            case 95:
                return "fa-solid fa-cloud-bolt";

            default:
                return "fa-solid fa-cloud";
        }
    }
}



