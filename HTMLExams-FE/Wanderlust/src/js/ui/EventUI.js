export default class EventUI {
    constructor() {
        //catch DOM elements 
        /* 
          
         */

        //variables 
        this.plans = localStorage.getItem("AllPlans") || [];


        //elements 
        this.plansContent = document.getElementById("plans-content");


    }



    renderPlans(planArr) {
        let cartona = ``;
        if (planArr.length > 0) {
            for (let i = 0; i < planArr.length; i++) {
                cartona += `
                <div class="plan-card">
                    <span class="plan-card-type holiday">Holiday</span>
                    <div class="plan-card-content">
                    
                    <h4>Viti i Ri</h4>
                    <div class="plan-card-details">
                    <div><i data-fa-i2svg=""><svg class="svg-inline--fa fa-calendar" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path></svg></i>Jan 1, 2026</div>
                    <div><i data-fa-i2svg=""><svg class="svg-inline--fa fa-circle-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>New Year's Day</div>
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
        } else {
            cartona = `
            <div class="empty-state">
              <div class="empty-icon"><i class="fa-solid fa-heart-crack"></i></div>
              <h3>No Saved Plans Yet</h3>
              <p>Start exploring and save holidays, events, or long weekends you like!</p>
              <button class="btn-primary" id="start-exploring-btn">
                <i class="fa-solid fa-compass"></i> Start Exploring
              </button>
            
            `
        }

        this.plansContent.innerHTML = cartona;
    }

}

