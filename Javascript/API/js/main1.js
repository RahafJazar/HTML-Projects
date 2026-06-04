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

function getPizza() {
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

function displayRecipes() {
    var cartona = '';
    for (var i = 0; i < allRecipes.length; i++) {
        cartona += `
          <div class="col-lg-3 col-md-6">
                <div class="text-center bg-secondary p-4 mb-3">
                    <img src="${allRecipes[i].image_url}" alt="">
                    <h3 class="my-2">${allRecipes[i].title.split(' ', 2).join(' ')}</h3>
                    <h4 class="text-success fs-4">${allRecipes[i].publisher}</h4>
                </div>
          </div>
        `

    }
    document.querySelector(".row").innerHTML = cartona;
}

getPizza();