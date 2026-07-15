export default class WeekendUI {
    constructor() {
        //catch DOM elements 
        this.lwContent = document.getElementById("lw-content");

    }
    renderLongWeekendsSelection(country, flag, year) {
        debugger
        let lwSelection = document.getElementById("lw-selection")
        lwSelection.style.cssText = "display:block"
        let selectionFlag = document.querySelector("#lw-selection .selection-flag");
        let selectionYear = document.querySelector("#lw-selection .selection-year");
        let selectionCountry = document.querySelector("#lw-selection .selection-country");

        selectionFlag.setAttribute("src", flag);
        selectionYear.innerHTML = year;
        selectionCountry.innerHTML = country.name;


    }

    renderLongWeekends(longWeekends, country = "", savedPlans = []) {
        let cartona = ``;
        for (let i = 0; i < longWeekends.length; i++) {

            const startDate = new Date(longWeekends[i].startDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
            })
            const endDate = new Date(longWeekends[i].endDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
            })
            const isSaved = savedPlans.some(p => {
                p.planKey === `longweekend-${longWeekends[i].startDate}-${longWeekends[i].endDate}`;
            })
            cartona += `
            <div class="lw-card">
                    <div class="lw-card-header">
                        <span class="lw-badge"><i class="fa-solid fa-calendar-days"></i> ${longWeekends[i].dayCount} Days</span>
                        <button class="holiday-action-btn"  data-index=${i}><i class="fa-regular fa-heart"></i></button>
                    </div>
                    <h3>Long Weekend #2</h3>
                    <div class="lw-dates"><i class="fa-regular fa-calendar"></i> ${startDate}- ${endDate}, ${new Date(longWeekends[i].endDate).getFullYear()}</div>
                    <div class="lw-info-box warning"><i class="fa-solid fa-info-circle"></i> Requires taking a bridge day off
                    </div>
                    <div class="lw-days-visual">
                    ${this.generateDaysVisual(longWeekends[i].startDate, longWeekends[i].endDate)}
                    </div>
            </div>
`
        }
        this.lwContent.innerHTML = cartona
    }

    generateDaysVisual(startDate, endDate) {
        let current = new Date(startDate);
        const end = new Date(endDate);

        let html = "";

        while (current <= end) {

            const dayName = current.toLocaleDateString("en-US", {
                weekday: "short"
            });

            const dayNumber = current.getDate();

            const isWeekend =
                current.getDay() === 5 || // Friday
                current.getDay() === 6;   // Saturday

            html += `
            <div class="lw-day ${isWeekend ? "weekend" : ""}">
                <span class="name">${dayName}</span>
                <span class="num">${dayNumber}</span>
            </div>
        `;

            current.setDate(current.getDate() + 1);
        }

        return html;
    }
    markAsSaved(button) {
        button.classList.add("saved");
    }
}

