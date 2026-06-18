let allRecripes = [];
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
    getRecipe(searchInput.value.toLowerCase())
})
// function getRecipe(searchItem) {
//     let requestXHR = new XMLHttpRequest();
//     requestXHR.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=${searchItem}`);
//     requestXHR.send();
//     requestXHR.addEventListener("readystatechange", function () {
//         if (requestXHR.readyState === 4) {

//             allRecripes = JSON.parse(requestXHR.response).data.recipes;
//             displayRecipe();
//         }
//     })
// }

// function displayRecipe() {
//     var cartona = ``;
//     for (let i = 0; i < allRecripes.length; i++) {
//         cartona += `
//         <div class="col-md-6 col-lg-3 ">
//                 <div class="p-2  d-flex flex-column justify-content-center align-items-center shadow text-center recipe"   >
//                       <img src="${allRecripes[i].image_url}" alt="" width="100%">
//                       <p class="title fw-bold ">title :${allRecripes[i].title.split(' ', 2).join(' ')}"</p>
//                           <h4 class="title fw-bold fs-6 text-success">publisher : ${allRecripes[i].publisher}"</h4>
//                 </div>
//             </div>
//       `;

//     }
//     document.querySelector(".row").innerHTML = cartona;
// }

function getPizza() {
    let requestXHR = new XMLHttpRequest();
    requestXHR.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=pizza`);
    requestXHR.send();
    requestXHR.addEventListener("readystatechange", function () {
        if (requestXHR.readyState === 4) {

            allRecripes = JSON.parse(requestXHR.response).data.recipes;
            console.log("get pizza")
        }
    })
}

function getPasta() {
    let requestXHR = new XMLHttpRequest();
    requestXHR.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=pasta`);
    requestXHR.send();
    requestXHR.addEventListener("readystatechange", function () {
        if (requestXHR.readyState === 4) {

            allRecripes = JSON.parse(requestXHR.response).data.recipes;
            console.log("get pasta")
        }
    })
}

function getSalad() {
    let requestXHR = new XMLHttpRequest();
    requestXHR.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=salad`);
    requestXHR.send();
    requestXHR.addEventListener("readystatechange", function () {
        if (requestXHR.readyState === 4) {

            allRecripes = JSON.parse(requestXHR.response).data.recipes;
            console.log("get salad")
        }
    })
}

getPizza()
getPasta()
getSalad()
console.log("one")