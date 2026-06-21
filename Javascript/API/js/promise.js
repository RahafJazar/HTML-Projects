//promise ===> pending , setted (rejected or fullfilled )
function getPizza() {
    return new Promise(function (resolve, reject) {
        let requestXHR = new XMLHttpRequest();
        requestXHR.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=pizza`);
        requestXHR.send();
        requestXHR.addEventListener("readystatechange", function () {
            if (requestXHR.readyState === 4) {

                allRecripes = JSON.parse(requestXHR.response).data.recipes;
                console.log("get pizza");
                resolve()

            }
        })
        requestXHR.addEventListener("error", function () {
            console.log("error in the request");
            reject("pizza error");
        })
    })

}

function getPasta() {
    return new Promise(function (resolve, reject) {
        let requestXHR = new XMLHttpRequest();
        requestXHR.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=pasta`);
        requestXHR.send();
        requestXHR.addEventListener("readystatechange", function () {
            if (requestXHR.readyState === 4) {

                allRecripes = JSON.parse(requestXHR.response).data.recipes;
                console.log("get pasta");
                resolve()

            }

        })
        requestXHR.addEventListener("error", function () {
            console.log("error in the request");
            reject("salad error");
        })

    });


}

function getSalad() {
    return new Promise(function (resolve, reject) {
        let requestXHR = new XMLHttpRequest();
        requestXHR.open("GET", `https://forkify-api.jonas.io/api/v2/recipes?search=salad`);
        requestXHR.send();
        requestXHR.addEventListener("load", function () {


            allRecripes = JSON.parse(requestXHR.response).data.recipes;
            console.log("get salad");
            resolve();


        })
        requestXHR.addEventListener("error", function () {
            console.log("error in the request");
            reject("salad error");
        })

    });

}


function allDone() {
    console.log("all Done");
}

getPasta().then(getSalad).catch(function (error) {
    console.log(error)
})