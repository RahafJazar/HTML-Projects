// WRITE YOUR JS CODE HERE
"use strict"
const API_KEY = "CjLgIOZiikFJf9fxfQfsJQMxVtJleYhnsL7y4cUn";
const date = new Date()
const todayDate = date.toLocaleDateString("fr-CA");
let dateObj = {
    shortMonth: "",
    longMonth: "",
    year: "",
    day: ""
}

//variables Declarations
let apodDate = document.getElementById('apod-date');
let apodDateInput = document.getElementById('apod-date-input');
let apodDateSpan = document.querySelector('.date-input-wrapper span');
let apodImage = document.getElementById('apod-image');
let apodIframe = document.getElementById('apod-iframe');
let apodTitle = document.getElementById('apod-title');
let apodDateDetail = document.getElementById('apod-date-detail');
let apodExplanation = document.getElementById('apod-explanation');
let apodCopyright = document.getElementById('apod-copyright');
let apodDateInfo = document.getElementById('apod-date-info');
let apodMediaType = document.getElementById('apod-media-type');

const loadDateBtn = document.getElementById('load-date-btn');
const todayApodBtn = document.getElementById('today-apod-btn');
//logic functions 

/* Today In Space */
function setDateObj(date) {
    date = new Date(date)
    dateObj = {
        shortMonth: date.toLocaleString("en-US", { month: 'short' }),
        longMonth: date.toLocaleString("en-US", { month: 'long' }),
        year: date.getFullYear(),
        day: date.getDate(),
    }
}
function setApodDateSpan(date) {

    setDateObj(date)
    apodDateSpan.innerHTML = `${dateObj.shortMonth} ${dateObj.day}, ${dateObj.year}`;
}
async function getTodaySpace(date = todayDate) {

    setApodDateSpan(date);
    try {
        let fetchReq = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`);
        let response = await fetchReq.json()
        console.log(response);
        displayTodaySpace(response)
    } catch (error) {
        console.log(error);
    }
}

function displayTodaySpace(response) {

    apodDate.innerHTML = ` Astronomy Picture of the Day - ${dateObj.longMonth} ${dateObj.day}, ${dateObj.year}`;
    apodDateInput.value = response.date;
    apodDateSpan.innerHTML = `${dateObj.shortMonth} ${dateObj.day}, ${dateObj.year}`;
    if (response.media_type === "video") {
        apodIframe.src = response.url;
        apodImage.style.display = "none"
        apodIframe.style.display = "block"
    } else {
        apodImage.src = response.hdurl;
        apodIframe.style.display = "none"
        apodImage.style.display = "block"
    }

    apodTitle.textContent = response.title;
    apodDateDetail.innerHTML = `<i class="far fa-calendar mr-2"></i>${dateObj.longMonth} ${dateObj.day}, ${dateObj.year}`;
    apodExplanation.textContent = response.explanation;
    debugger
    if (response.copyright) {
        apodCopyright.innerHTML =
            `&copy; Copyright: ${response.copyright}`;
    }
    else {
        apodCopyright.innerHTML = "";
    }

    apodDateInfo.innerHTML = `${dateObj.longMonth} ${dateObj.day}, ${dateObj.year}`;
    apodMediaType.textContent = response.media_type;
}

//event listener
apodDateInput.addEventListener("change", function (event) {
    let date = event.target.value;
    setApodDateSpan(date)
})
loadDateBtn.addEventListener("click", function () {
    console.log("load clicked ");
    let date = apodDateInput.value || todayDate;
    getTodaySpace(date)
})

todayApodBtn.addEventListener("click", function () {
    apodDateInput.value = todayDate;
    getTodaySpace()
})
//entry invoke 
getTodaySpace()


