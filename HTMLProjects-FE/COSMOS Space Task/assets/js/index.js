// WRITE YOUR JS CODE HERE
"use strict"
const API_KEY = "CjLgIOZiikFJf9fxfQfsJQMxVtJleYhnsL7y4cUn";
const date = new Date()
const todayDate = date.toLocaleDateString("fr-CA");


//variables Declarations
let apod = "";
let launches = [];
let planets = [];

//-----APOD Variables --------
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

let apodLoading = document.getElementById("apod-loading");

//-----LAUNCEHS Variables --------
let featuredLaunch = document.getElementById("featured-launch");
let launchesGrid = document.getElementById("launches-grid");


//-----PLANETS  Variables --------
let planetsGrid = document.getElementById("planets-grid");

let planetDetailImage = document.getElementById("planet-detail-image");
let planetDetailName = document.getElementById("planet-detail-name");
let planetDetailDescription = document.getElementById("planet-detail-description");
let planetDistance = document.getElementById("planet-distance_");
let planetRadius = document.getElementById("planet-radius");
let planetMass = document.getElementById("planet-mass");
let planetDensity = document.getElementById("planet-density");
let planetOrbitalPeriod = document.getElementById("planet-orbital-period");
let planetRotation = document.getElementById("planet-rotation");
let planetMoons = document.getElementById("planet-moons");
let planetGravity = document.getElementById("planet-gravity");


let planetDiscoverer = document.getElementById("planet-discoverer");
let planetDiscoveryDate = document.getElementById("planet-discovery-date");
let planetBodyType = document.getElementById("planet-body-type");
let planetVolume = document.getElementById("planet-volume");

let planetPerihelion = document.getElementById("planet-perihelion");
let planetAphelion = document.getElementById("planet-aphelion");
let planetEccentricity = document.getElementById("planet-eccentricity");
let planetInclination = document.getElementById("planet-inclination");
let planetAxialTilt = document.getElementById("planet-axial-tilt");
let planetTemp = document.getElementById("planet-temp");
let planetEscape = document.getElementById("planet-escape");
//logic functions 

/* Today In Space */
function setDateObj(date) {
  date = new Date(date)
  return {
    shortMonth: date.toLocaleString("en-US", { month: 'short' }),
    longMonth: date.toLocaleString("en-US", { month: 'long' }),
    year: date.getFullYear(),
    day: date.getDate(),
    fullDate: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    fullTime: date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "UTC" })
  }
}
function setApodDateSpan(date) {

  let dateObj = setDateObj(date)
  apodDateSpan.innerHTML = `${dateObj.shortMonth} ${dateObj.day}, ${dateObj.year}`;
}
async function getTodaySpace(date = todayDate) {

  setApodDateSpan(date);
  try {
    apodLoading.classList.remove("hidden")
    let fetchReq = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`);
    let response = await fetchReq.json()

    console.log(response);
    displayTodaySpace(response)
  } catch (error) {
    console.log(error);
  }
  finally {
    apodLoading.classList.add("hidden");
  }
}

function displayTodaySpace(response) {
  const dateObj = setDateObj(response.date);
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
    launchesResp = response.results
    console.log("launches", launches);
    displayLaunches(launchesResp)
  } catch (error) {
    console.log(error);
  }
}

function displayLaunches(response) {
  let renderedCards = ``;

  showLaunchCardDetails();
  for (let i = 0; i < response.length; i++) {
    let dateObj = setDateObj(response[i].net);
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
                  class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold details-btn" data-index="${i}"> 
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

function showLaunchCardDetails(index = 0) {
 
  let dateObj = setDateObj(launchesResp[index].net);
  let cardDetail = ` <div
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
                    ${launchesResp[index].status.abbrev}
                    </span>
                  </div>
                  <h3 class="text-3xl font-bold mb-3 leading-tight">
                    ${launchesResp[index].name}
                  </h3>
                  <div class="flex flex-col xl:flex-row xl:items-center gap-4 mb-6 text-slate-400">
                    <div class="flex items-center gap-2">
                      <i class="fas fa-building"></i>
                      <span> ${launchesResp[index].launch_service_provider.name}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <i class="fas fa-rocket"></i>
                      <span>${launchesResp[index].rocket.configuration.name}</span>
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
                      <p class="font-semibold">${dateObj.fullDate} </p>
                    </div>
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-clock"></i>
                        Launch Time
                      </p>
                      <p class="font-semibold">${dateObj.fullTime} </p>
                    </div>
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-map-marker-alt"></i>
                        Location
                      </p>
                      <p class="font-semibold text-sm">${launchesResp[index].pad.location.name}</p>
                    </div>
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-globe"></i>
                        Country
                      </p>
                      <p class="font-semibold">${launchesResp[index].pad.country.alpha_3_code}</p>
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
                    <img src="${launchesResp[index].image.image_url}" alt="${launchesResp[index].name}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='/images/launch-placeholder.png';">
                  </div>
                  <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>`
  featuredLaunch.innerHTML = cardDetail;

}

/* Planets */

async function getPlanets() {

  try {
    let fetchReq = await fetch(`https://solar-system-opendata-proxy.vercel.app/api/planets`);
    let response = await fetchReq.json();

    console.log("planets resp", response);
    planets = response.bodies;
    displayPlanets(planets);
  } catch (error) {
    console.log(error);
  }
}

// 1 AU = 149,597,870.7 km 
//function  to convet KM to AU 
function convetKMToAU_unit(kmUnitVal) {
 
  return (kmUnitVal / 149597870.7).toFixed(2);
}
function displayPlanets(response) {
  let renderedPlanets = ``;
 
  for (let i = 0; i < response.length; i++) {
    const AU_Val = convetKMToAU_unit(response[i].semimajorAxis)
    renderedPlanets += ` <div
            class="planet-card bg-slate-800/50 border border-slate-700 rounded-2xl p-4 transition-all cursor-pointer group"
            data-planet-id="${response[i].name}" data-index="${i}" style="--planet-color: #eab308" onmouseover="this.style.borderColor='#eab30880'"
            onmouseout="this.style.borderColor='#334155'">
            <div class="relative mb-3 h-24 flex items-center justify-center">
              <img class="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                src="${response[i].image}" alt="${response[i].name}" />
            </div>
            <h4 class="font-semibold text-center text-sm">${response[i].name}</h4>
            <p class="text-xs text-slate-400 text-center" >${AU_Val} AU</p>
          </div>`
  }
  planetsGrid.innerHTML = renderedPlanets;
}

function showPlanetDetails(index) {

  planetDetailImage.src = planets[index].image;
  planetDetailImage.alt = planets[index].name;
  planetDetailName.innerHTML = planets[index].name;
  planetDetailDescription.innerHTML = planets[index].description;
  planetDistance.innerHTML = planets[index].semimajorAxis + "km";
  planetRadius.innerHTML = planets[index].meanRadius;
  planetMass.innerHTML = planets[index].mass.massValue + "kg";
  planetDensity.innerHTML = planets[index].density + "g/cm³";
  planetOrbitalPeriod.innerHTML = planets[index].sideralOrbit;
  planetRotation.innerHTML = planets[index].sideralRotation;
  planetMoons.innerHTML = planets[index].moons.length;
  planetGravity.innerHTML = planets[index].gravity;

}

function showPlanetDiscoverInfo(index) {
  planetDiscoverer.innerHTML = planets[index].discoveredBy;
  planetDiscoveryDate.innerHTML = planets[index].discoveryDate;
  planetBodyType.innerHTML = planets[index].bodyType;
  planetVolume.innerHTML = `${planets[index].vol.volValue}  × 10 <sup> ${planets[index].vol.volExponent} </sup>  km³ `;
}
function showOrbitalCharacteristics(index) {
  planetPerihelion.innerHTML = planets[index].perihelion.toLocaleString() + " km";
  planetAphelion.innerHTML = planets[index].aphelion.toLocaleString() + " km";
  planetEccentricity.innerHTML = planets[index].eccentricity;
  planetInclination.innerHTML = planets[index].inclination + "°";
  planetAxialTilt.innerHTML = planets[index].axialTilt + "°";
  planetTemp.innerHTML = planets[index].avgTemp + " °C";
  planetEscape.innerHTML = (planets[index].escape / 1000).toFixed(1) + " km/s";
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
      if (section.id == "launches") {
       
        
        getLaunches();
      } else if (section.id == "planets") {
    
        
        getPlanets()
      }
    } else {
      section.classList.add("hidden")
    }
  })
})


launchesGrid.addEventListener("click", (event) => {
  let btn = event.target.closest(".details-btn");
  if (!btn) return;
  showLaunchCardDetails(btn.dataset.index)
})

planetsGrid.addEventListener("click", (event) => {
  const selectedPlanet = event.target.closest(".planet-card");

  if (!selectedPlanet) return;
  const selectedPlanetIndex = selectedPlanet.dataset.index;
  console.log("selected index : ", selectedPlanetIndex, "data is : ", planets[selectedPlanetIndex])
  showPlanetDetails(selectedPlanetIndex);
  showPlanetDiscoverInfo(selectedPlanetIndex);
  showOrbitalCharacteristics(selectedPlanetIndex)
})

//entry invoke 
getTodaySpace();


