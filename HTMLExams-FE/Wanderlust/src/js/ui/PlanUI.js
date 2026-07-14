export default class PlanUI {
    constructor() {
        //catch DOM elements 
        /*
        holidays, longweekends , events plans 
         */

        this.plansContent = document.getElementById("plans-content");

    }
    renderPlans(plans, plantype) {
        let cartona = ``;
        if (plans.length) {
            for (let i = 0; i < plans.length; i++) {
                switch (plantype) {
                    case "holiday":
                        const holidayDate = new Date(plans[i].date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric"
                        })
                        cartona += ` 

                        <div class="plan-card">
                            <span class="plan-card-type holiday">${plans[i].type.charAt(0).toUpperCase() + plans[i].type.slice(1).toLowerCase()}</span>
                            <div class="plan-card-content">
                            
                            <h4>${plans[i].localName}</h4>
                            <div class="plan-card-details">
                            <div><i data-fa-i2svg=""><svg class="svg-inline--fa fa-calendar" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path></svg></i>${holidayDate}</div>
                            <div><i data-fa-i2svg=""><svg class="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>${plans[i].name}</div>
                            </div>
                        
                            <div class="plan-card-actions">
                                <button class="btn-plan-remove" onclick="removePlan(1783862083136)">
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

}

