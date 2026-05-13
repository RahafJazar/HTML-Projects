/* CRUD s Operation*/
/*===Crete , Retreive , Update , Delete====*/

'use strict'; // to apply modern stricts that appear in ES5 like must use var x=5 instead of x=5;

//get element once 
var prodName = window.document.getElementById("prodName");
var ProdPrice = window.document.getElementById("prodPrice");
var prodImg = window.document.getElementById("prodImg");
var prodCategory = window.document.getElementById("prodCategory");
var prodDesc = window.document.getElementById("prodDesc");
var searchInput = window.document.getElementById("searchInput");
var addBtn = document.getElementById("add-btn");
var updateBtn = document.getElementById("update-btn");
var currentIndex;
// console.log(prodName);
// console.log(ProdPrice);
// console.log(prodImg);
// console.log(prodCategory);
// console.log(prodDesc);

//declare array to contain all products v
var allProducts = []
if (localStorage.getItem("productContainer") !== null) {
    allProducts = JSON.parse(localStorage.getItem("productContainer"));
    displayProducts();
}


//delete 
function deleteProduct(index) {
    allProducts.splice(index, 1);
    console.log(allProducts);
    displayProducts();
    localStorage.setItem("productContainer", JSON.stringify(allProducts));
}

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
    localStorage.setItem("productContainer", JSON.stringify(allProducts));
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
                    <p class="text-white">${i}</p>
                        <img src="./images/logo-5-DFypfU0k.jpg" alt="" class="w-100">
                        <h2 class="h5 text-white">${allProducts[i].name}</h2>
                        <div class="d-flex justify-content-between">
                            <span class="text-success">${allProducts[i].price} JD </span>
                            <span class="text-warning">${allProducts[i].category}</span>
                        </div>
                       
                            <button class="btn btn-danger w-100 my-2" onclick="deleteProduct(${i})"> Delete Product</button>
                            <button class="btn btn-warning w-100 my-2" onclick="setFormForUpdate(${i})"> Update Product</button>
                   
                    </div>
               
                    
                </div>
                
        
                `


    }
    document.getElementById("myRow").innerHTML = productDiv;
}


function searchProduct() {
    var term = searchInput.value;
    var cartona = '';
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name.toLowerCase().includes(term.toLowerCase())) {

            console.log("yes");
            cartona += `
            <div class="col-md-3 p-3">
                    <div class="bg-dark">
                    <p class="text-white">${i}</p>
                        <img src="./images/logo-5-DFypfU0k.jpg" alt="" class="w-100">
                        <h2 class="h5 text-white">${allProducts[i].name.replace(term, `<span class="bg-warning"> ${term} </span>`)}</h2>
                        <div class="d-flex justify-content-between">
                            <span class="text-success">${allProducts[i].price} JD </span>
                            <span class="text-warning">${allProducts[i].category}</span>
                        </div>
                       
                            <button class="btn btn-danger w-100 my-2" onclick="deleteProduct(${i})"> Delete Product</button>
                            <button class="btn btn-warning w-100 my-2" onclick="setFormForUpdate(${i})"> Update Product</button>
                   
                    </div>
               
                    
                </div>
            
            `
        }
    }
    document.getElementById("myRow").innerHTML = cartona;
}


function setFormForUpdate(index) {
    var product = allProducts[index]
    prodName.value = product.name;
    ProdPrice.value = product.price;
    prodCategory.value = product.category;
    prodDesc.value = product.desc;
    addBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");
    currentIndex = index;
}

function updateProduct() {
    //create object to describe product 
    var product = {
        name: prodName.value,
        price: ProdPrice.value,
        src: 'images/fdf',
        category: prodCategory.value,
        desc: prodDesc.value
    }
    allProducts.splice(currentIndex, 1, product);
    displayProducts();
    localStorage.setItem("productContainer", JSON.stringify(allProducts));
    ResetInputs();
    addBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");

}