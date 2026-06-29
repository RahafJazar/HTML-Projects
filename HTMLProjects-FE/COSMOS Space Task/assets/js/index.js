// WRITE YOUR JS CODE HERE
"use strict"
const API_KEY = "CjLgIOZiikFJf9fxfQfsJQMxVtJleYhnsL7y4cUn";
const date = new Date()
const todayDate = date.toLocaleDateString("fr-CA");
let dateObj = {
    shortMonth: "",
    longMonth: "",
    year: "",
    day: "",
    fullDate: "",
    fullTime: ""
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

const navElement = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const navLinkSections = document.querySelectorAll("section");


let featuredLaunch = document.getElementById("featured-launch");
let launchesGrid = document.getElementById("launches-grid");
const launch = {
    id: "",
    name: "",
    slug: "",

    agency_launch_attempt_count: 0,
    agency_launch_attempt_count_year: 0,

    location_launch_attempt_count: 0,
    location_launch_attempt_count_year: 0,

    orbital_launch_attempt_count: 0,
    orbital_launch_attempt_count_year: 0,

    pad_launch_attempt_count: 0,
    pad_launch_attempt_count_year: 0,

    last_updated: "",
    net: "",
    window_start: "",
    window_end: "",

    failreason: "",
    hashtag: null,
    probability: null,
    weather_concerns: null,
    webcast_live: false,

    image: {
        id: 0,
        name: "",
        image_url: "",
        thumbnail_url: "",
        credit: ""
    },

    infographic: null,

    launch_service_provider: {
        id: 0,
        name: "",
        abbrev: "",
        url: ""
    },

    mission: {
        id: 0,
        name: "",
        type: "",
        description: "",
        image: null
    },

    rocket: {
        id: 0,
        configuration: {
            id: 0,
            name: "",
            full_name: "",
            family: ""
        }
    },

    status: {
        id: 0,
        name: "",
        abbrev: "",
        description: ""
    },

    pad: {
        id: 0,
        name: "",
        location: {
            id: 0,
            name: "",
            country_code: ""
        }
    },

    net_precision: {
        id: 0,
        name: "",
        abbrev: "",
        description: ""
    },

    program: [],

    launch_designator: null,

    response_mode: "",

    url: ""
};




//logic functions 

/* Today In Space */
function setDateObj(date) {
    date = new Date(date)
    dateObj = {
        shortMonth: date.toLocaleString("en-US", { month: 'short' }),
        longMonth: date.toLocaleString("en-US", { month: 'long' }),
        year: date.getFullYear(),
        day: date.getDate(),
        fullDate: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        fullTime: date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "UTC" })
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


/* SpaceDevs Launches */
async function getLaunches(limit = 10) {

    try {
        let fetchReq = await fetch(`https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=${10}`);
        let response = await fetchReq.json();
        let launches = response.results
        console.log("launches", launches);
        displayLaunches(launches)
    } catch (error) {
        console.log(error);
    }
}

function displayLaunches(response) {
    let renderedCards = ``;
    setDateObj(response.net);
    for (let i = 0; i < response.length; i++) {
        renderedCards += `
            <!-- STATIC LAUNCH CARD 1 -->
          <div
            class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer">
            <div class="relative h-48 bg-slate-900/50 flex items-center justify-center">
             <img src="${response[i].image.image_url}" alt="${response[i].name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.onerror=null; this.src='/images/launch-placeholder.png';">
              <div class="absolute top-3 right-3">
                <span class="px-3 py-1 bg-green-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold">
                 ${response[i].status.abbrev}
                </span>
              </div>
            </div>
            <div class="p-5">
              <div class="mb-3">
                <h4 class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                 ${response[i].name}
                </h4>
                <p class="text-sm text-slate-400 flex items-center gap-2">
                  <i class="fas fa-building text-xs"></i>
                 ${response[i].launch_service_provider.name}
                </p>
              </div>
              <div class="space-y-2 mb-4">
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-calendar text-slate-500 w-4"></i>
                  <span class="text-slate-300">${dateObj.fullDate}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-clock text-slate-500 w-4"></i>
                  <span class="text-slate-300">${dateObj.fullTime} UTC</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-rocket text-slate-500 w-4"></i>
                  <span class="text-slate-300">${response[i].rocket.configuration.name}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
                  <span class="text-slate-300 line-clamp-1">${response[i].pad.location.name}</span>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
                <button
                  class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold">
                  Details
                </button>
                <button class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                  <i class="far fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
         
         `
    }
    launchesGrid.innerHTML = renderedCards;
}

function showLaunchCardDetails(cardIndex = 0) {
    let cardDetail = `
  <div
            class="relative bg-slate-800/30 border border-slate-700 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all">
            <div
              class="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
            <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
              <div class="flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <span
                      class="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2">
                      <i class="fas fa-star"></i>
                      Featured Launch
                    </span>
                    <span class="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                    ${response[i].status.abbrev}
                    </span>
                  </div>
                  <h3 class="text-3xl font-bold mb-3 leading-tight">
                    ${response[i].name}
                  </h3>
                  <div class="flex flex-col xl:flex-row xl:items-center gap-4 mb-6 text-slate-400">
                    <div class="flex items-center gap-2">
                      <i class="fas fa-building"></i>
                      <span> ${response[i].launch_service_provider.name}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <i class="fas fa-rocket"></i>
                      <span>${response[i].rocket.configuration.name}</span>
                    </div>
                  </div>
                  <div
                    class="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6">
                    <i class="fas fa-clock text-2xl text-blue-400"></i>
                    <div>
                      <p class="text-2xl font-bold text-blue-400">2</p>
                      <p class="text-xs text-slate-400">Days Until Launch</p>
                    </div>
                  </div>
                  <div class="grid xl:grid-cols-2 gap-4 mb-6">
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-calendar"></i>
                        Launch Date
                      </p>
                      <p class="font-semibold">March 14, 2024</p>
                    </div>
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-clock"></i>
                        Launch Time
                      </p>
                      <p class="font-semibold">12:00 PM UTC</p>
                    </div>
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-map-marker-alt"></i>
                        Location
                      </p>
                      <p class="font-semibold text-sm">${response[i].pad.location.name}</p>
                    </div>
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-globe"></i>
                        Country
                      </p>
                      <p class="font-semibold">${response[i].pad.country.alpha_3_code}</p>
                    </div>
                  </div>
                  <p class="text-slate-300 leading-relaxed mb-6">
                    The third integrated flight test of Starship. The
                    prototype for the heavy-lift launch vehicle is currently
                    being built by SpaceX.
                  </p>
                </div>
                <div class="flex flex-col md:flex-row gap-3">
                  <button
                    class="flex-1 self-start md:self-center px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center gap-2">
                    <i class="fas fa-info-circle"></i>
                    View Full Details
                  </button>
                  <div class="icons self-end md:self-center">
                    <button class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors">
                      <i class="far fa-heart"></i>
                    </button>
                    <button class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors">
                      <i class="fas fa-bell"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/50">
                  <!-- Placeholder image/icon since we can't load external images reliably without correct URLs -->
                  <div class="flex items-center justify-center h-full min-h-[400px] bg-slate-800">
                    <img src="${response[i].image.image_url}" alt="Falcon 9 Block 5 | Starlink Group 17-40" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='/images/launch-placeholder.png';">
                  </div>
                  <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
`
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


navElement.addEventListener("click", function (event) {
    event.preventDefault()
    event.stopPropagation();
    const closestNavLink = event.target.closest(".nav-link");
    if (!closestNavLink) return;
    //اخفي الديزاين تاع السيليكشن عن كل ال a ->واظههره بس للمختارة
    navLinks.forEach((link) => {
        if (link === closestNavLink) {
            link.classList.add("bg-blue-500/10", "text-blue-400");
            link.classList.remove("text-slate-300");


        } else {
            link.classList.remove("bg-blue-500/10", "text-blue-400");
            link.classList.add("text-slate-300");


        }
    })
    const selectedSection = document.getElementById(`${closestNavLink.dataset.section}`);

    // اخفي كل السيكشنات واظهار السيكشن المطلوب
    navLinkSections.forEach((section) => {
        console.log(section);
        if (section === selectedSection) {
            section.classList.remove("hidden");
            if (section.id = "launches") {
                debugger
                getLaunches();
            }
        } else {
            section.classList.add("hidden")
        }
    })
})




//entry invoke 
getTodaySpace()


