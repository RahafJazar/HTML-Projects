export default class HolidayUI {
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
        this.holidaysContent = document.getElementById("holidays-content");
        this.holidaysSelection = document.getElementById("holidays-selection");
        this.viewHeaderContent = document.querySelector("#holidays-view .view-header-card .view-header-content p");
    }
    getDateInfo(date) {
        const dateObj = new Date(date);
        const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "OCt", "Nov", "Dec"];
        const weekDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday"];

        return {
            "day": dateObj.getDay(),
            "monthString": months[dateObj.getMonth()],
            "weekDayString": weekDays[dateObj.getDay()]
        }
    }

    renderHolidaysSelection(country, flag, year) {
        debugger
        let holidaysSelection = document.getElementById("holidays-selection")
        holidaysSelection.style.cssText = "display:block"
        let selectionFlag = document.querySelector("#holidays-selection .selection-flag");
        let selectionYear = document.querySelector("#holidays-selection .selection-year");
        let selectionCountry = document.querySelector("#holidays-selection .selection-country");

        selectionFlag.setAttribute("src", flag);
        selectionYear.innerHTML = year;
        selectionCountry.innerHTML = country.name;


    }
    renderHolidays(holidays, country = "") {
        this.viewHeaderContent.innerHTML = `Browse public holidays for ${country} and plan your trips around them `;
        let cartona = ``;
        for (let i = 0; i < holidays.length; i++) {

            const holidayDate = this.getDateInfo(holidays[i].date);
            cartona += `
                       <div class="holiday-card">
                            <div class="holiday-card-header">
                                <div class="holiday-date-box"><span class="day">${holidayDate.day}</span><span class="month">${holidayDate.monthString}</span></div>
                                <button class="holiday-action-btn" data-index=${i}><i class="fa-regular fa-heart"></i></button>
                            </div>
                            <h3>${holidays[i].localName}</h3>
                            <p class="holiday-name"> ${holidays[i].name}</p>
                            <div class="holiday-card-footer">
                                <span class="holiday-day-badge"><i class="fa-regular fa-calendar"></i> ${holidayDate.weekDayString}</span>
                                <span class="holiday-type-badge">${holidays[i].types[0]}</span>
                            </div>
                        </div>
                
                `;

        }



        this.holidaysContent.innerHTML = cartona;



    }
    markAsSaved(button) {
        button.classList.add("saved");
    }


}

