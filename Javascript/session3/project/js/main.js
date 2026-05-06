/* CRUD s Operation*/
/*===Crete , Retreive , Update , Delete====*/



//get element once 
var prodName = window.document.getElementById("prodName");
var ProdPrice = window.document.getElementById("prodPrice");
var prodImg = window.document.getElementById("prodImg");
var prodCategory = window.document.getElementById("prodCategory");
var prodDesc = window.document.getElementById("prodDesc");

// console.log(prodName);
// console.log(ProdPrice);
// console.log(prodImg);
// console.log(prodCategory);
// console.log(prodDesc);

//declare array to contain all products 
var allProducts = [];

function addProduct() {
    //create object to describe product 
    var product = {
        name: prodName.value,
        price: ProdPrice.value,
        src: 'images/fdf',
        category: prodCategory.value,
        desc: prodDesc.value
    }
    console.log("product added ", product);
    allProducts.push(product);
    console.log("All Products ", allProducts);
    ResetInputs();
    displayProducts();
}

function ResetInputs() {
    prodName.value = null;
    ProdPrice.value = null;
    prodCategory.value = null;
    prodDesc.value = null;
    prodImg.value = null
}

function displayProducts() {
    var productDiv = '';
    var myRowElem = window.document.getElementById("myRow");
    for (var i = 0; i < allProducts.length; i++) {
        productDiv += `<div class="col-md-3 p-3">
                    <div class="bg-dark">
                        <img src="./images/logo-5-DFypfU0k.jpg" alt="" class="w-100">
                        <h2 class="h5 text-white">${allProducts[i].name}</h2>
                        <div class="d-flex justify-content-between">
                            <span class="text-success">${allProducts[i].price} JD </span>
                            <span class="text-warning">${allProducts[i].category}</span>
                        </div>
                    </div>
                </div>
                
        
                `


    }
    document.getElementById("myRow").innerHTML = productDiv;
}