//api => domain + endpoint
//www.ggocle.com / api / rrrr =====> (www.ggocle.com: domain ............  / api / rrrr : api)

//^ API
//1--ajax
/*

XMLHttpRequest => have 4
==== 0  -> not init
==== 1  -> req init
==== 2  -> received
==== 3  -> process
==== 4  -> done

*/
// var req = new XMLHttpRequest();
// req.open("GET", "https://ecommerce.routemisr.com/api/v1/products");
// req.send()
// req.addEventListener("readystatechange", function () {
//     if (req.readyState === 4) {
//         console.log(JSON.parse(req.response).data);   //JSON.parse(text) ;
//     }
// })
// req.addEventListener("load", function () {
//     console.log(JSON.parse(req.response));

// })


var allRecipes = [];

function getPizza(callback) {
    //ajax
    var req = new XMLHttpRequest();
    req.open('GET', 'https://forkify-api.jonas.io/api/v2/recipes?search=pizza');
    req.send();

    req.addEventListener('load', function () {
        allRecipes = JSON.parse(req.response).data.recipes;
        displayRecipes()

    })
    req.addEventListener('error', function () {
        console.log(console.error());

    })
}




var recipes = [];
function getPizaa(callback) {
    //ajax
    var req = new XMLHttpRequest();
    req.open("GET", "https://forkify-api.jonas.io/api/v2/recipes?search=pizza'");
    req.send();
    req.addEventListener('load', function () {
        allRecipes = JSON.parse(req.response).data.recipes

        console.log("get pizza")
        callback()
    })
}
function getPasta(callback) {
    //ajax
    var req = new XMLHttpRequest();
    req.open("GET", "https://forkify-api.jonas.io/api/v2/recipes?search=pasta'");
    req.send();
    req.addEventListener('load', function () {
        allRecipes = JSON.parse(req.response).data.recipes
        console.log("get pasta")
        callback()
    })
}
function getSalad(callback) {
    //ajax
    var req = new XMLHttpRequest();
    req.open("GET", "https://forkify-api.jonas.io/api/v2/recipes?search=salad'");
    req.send();
    req.addEventListener('load', function () {
        allRecipes = JSON.parse(req.response).data.recipes
        console.log("get salad")
        callback()
    })
}
function displayRecipes() {
    var cartona = '';
    for (var i = 0; i < allRecipes.length; i++) {
        cartona += `
          <div class=" col-lg-3 col-md-6">
                <div class=" recipe text-center bg-secondary p-4 mb-3">
                    <img src="${allRecipes[i].image_url}" alt="">
                    <h3 class="my-2">${allRecipes[i].title.split(' ', 2).join(' ')}</h3>
                    <h4 class="text-success fs-4">${allRecipes[i].publisher}</h4>
                </div>
          </div>
        `

    }
    document.querySelector(".row").innerHTML = cartona;
}


//async  func  =>  API , Events ,Stetimeout , setinterval
//sync  func

//deal with async  -> micro task(promise / async await) or macro task(callback / settimeout / XML)

//1-callback ==>بس بتسبب callback hell 
getPizaa(function () {
    getPasta(function () {
        getSalad(function () {
            console.log("all Done")
        })
    })
});

//2-promise => built-in object you must take an instance  wuth new => take   exexuter function wit two parameters => Promise(function (success, failed)) 
var asyncFun = new Promise(function (resolved, reject) {
    var error = false;
    if (error === false) {
        resolved();
    }
    else {
        reject();
    }
})

function one() {
    return new Promise(function (resolved) {
        console.log("One")
        resolved();
    })
}
function two() {
    return new Promise(function (resolved) {
        console.log("Two")
        resolved();
    })
}
function three() {
    return new Promise(function (resolved) {
        console.log("Three")
        resolved()
    })
}


two().then(one).then(three).then(function () {
    console.log("all numbers done");
})


//3-async , await  => use fetch 