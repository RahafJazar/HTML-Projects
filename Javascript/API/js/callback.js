function getPizza(callback) {
    let requestXHR = new XMLHttpRequest();
    requestXHR.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=pizza`);
    requestXHR.send();
    requestXHR.addEventListener("readystatechange", function () {
        if (requestXHR.readyState === 4) {

            allRecripes = JSON.parse(requestXHR.response).data.recipes;
            console.log("get pizza");
            callback();
        }
    })
}

function getPasta(callback) {
    let requestXHR = new XMLHttpRequest();
    requestXHR.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=pasta`);
    requestXHR.send();
    requestXHR.addEventListener("readystatechange", function () {
        if (requestXHR.readyState === 4) {

            allRecripes = JSON.parse(requestXHR.response).data.recipes;
            console.log("get pasta");
            callback();
        }
    })
}

function getSalad(callback) {
    let requestXHR = new XMLHttpRequest();
    requestXHR.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=salad`);
    requestXHR.send();
    requestXHR.addEventListener("readystatechange", function () {
        if (requestXHR.readyState === 4) {

            allRecripes = JSON.parse(requestXHR.response).data.recipes;
            console.log("get salad");
            callback();
        }
    })
}


function allDone() {
    console.log("all Done");
}
getPizza(function () {
    getSalad(function () {
        getPasta(allDone)
    });
}
);

