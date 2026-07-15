export default class PlanUI {
    constructor() {
        //catch DOM elements 
        /*
        holidays, longweekends , events plans 
         */

        this.plansContent = document.getElementById("plans-content");

    }
    renderFilterCount(plans) {
        const filterAllCount = document.getElementById("filter-all-count");
        const filterHolidayCount = document.getElementById("filter-holiday-count");
        const filterEventCount = document.getElementById("filter-event-count");
        const filterLWCount = document.getElementById("filter-lw-count");

        filterAllCount.innerHTML = plans.length;
        filterHolidayCount.innerHTML = plans.reduce((count, plan) => {
            return plan.type === "holiday" ? count + 1 : count;
        }, 0)
        filterEventCount.innerHTML = plans.reduce((count, plan) => {
            return plan.type === "event" ? count + 1 : count;
        }, 0)
        //هاي ممكن اعملها زي الي فوقها بس عملتها هيك للتدريب على array  methods 
        filterLWCount.innerHTML = plans.filter(p => p.type === "longweekend").length;
    }

    renderPlans(plans) {
        debugger
        let cartona = ``;
        if (plans.length) {
            for (let i = 0; i < plans.length; i++) {
                switch (plans[i].type) {
                    case "holiday":
                        const holidayDate = new Date(plans[i].date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric"
                        })
                        cartona += ` 

                        <div class="plan-card">
                            <span class="plan-card-type holiday">${plans[i].type.toUpperCase()}</span>
                            <div class="plan-card-content">
                            
                            <h4>${plans[i].localName}</h4>
                            <div class="plan-card-details">
                            <div><i data-fa-i2svg=""><svg class="svg-inline--fa fa-calendar" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path></svg></i>${holidayDate}</div>
                            <div><i data-fa-i2svg=""><svg class="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>${plans[i].name}</div>
                            </div>
                        
                            <div class="plan-card-actions">
                                <button class="btn-plan-remove"  data-id="${plans[i].planKey}">
                                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></i> Remove
                                </button>
                            </div>
                            </div>
                      </div>
                     `
                        break;
                    case "event":
                        const eventDate = new Date(plans[i].dates.start.localDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric"
                        })
                        const eventTime = plans[i].dates.start.localTime;
                        const venue = plans[i]._embedded?.venues?.[0]?.name ?? "Unknown Venue";
                        const city = plans[i]._embedded?.venues?.[0]?.city?.name ?? "";
                        cartona += ` 
                                <div class="plan-card">
                                        <span class="plan-card-type event">
                                            ${plans[i].type.toUpperCase()}
                                        </span>

                                        <div class="plan-card-content">

                                            <h4>${plans[i].name}</h4>

                                            <div class="plan-card-details">
                                                <div>
                                                    <i class="fa-regular fa-calendar"></i>
                                                    ${eventDate} • ${eventTime}
                                                </div>

                                                <div>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    ${venue}, ${city}
                                                </div>

                                                <div>
                                                    <i class="fa-solid fa-baseball"></i>
                                                    ${genre}
                                                </div>
                                            </div>

                                            <div class="plan-card-actions">
                                                <button class="btn-plan-remove" data-id="${plans[i].planKey}">
                                                    <i class="fa-solid fa-trash"></i>
                                                    Remove
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    `;
                        break;
                    case "longweekend":

                        const startDate = new Date(plans[i].startDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric"
                        })
                        const endDate = new Date(plans[i].endDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric"
                        })
                        cartona += `
                        <div class="plan-card">
                            <span class="plan-card-type longweekend">${plans[i].type.toUpperCase()}</span>
                            <div class="plan-card-content">
                            
                            <h4>${plans[i].dayCount} Day Long Weekend</h4>
                            <div class="plan-card-details">
                            <div><i data-fa-i2svg=""><svg class="svg-inline--fa fa-calendar" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path></svg></i> ${startDate}- ${endDate}, ${new Date(plans[i].endDate).getFullYear()}</div>
                            <div><i data-fa-i2svg=""><svg class="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>Bridge day ${plans[i].needBridgeDay ? "needed" : "unneeded"}</div>
                            </div>
                        
                            <div class="plan-card-actions">
                                <button class="btn-plan-remove"  data-id="${plans[i].planKey}">
                                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></i> Remove
                                </button>
                            </div>
                            </div>
                        </div>
                        
                        `
                }
            }

            this.plansContent.innerHTML = cartona;



        }



    }


    bindRemovePlan(handler) {
        debugger
        this.plansContent.addEventListener("click", (e) => {
            const btn = e.target.closest(".btn-plan-remove");
            if (!btn) return;
            const id = btn.getAttribute("data-id");

            handler(id);

        })
    }
}

