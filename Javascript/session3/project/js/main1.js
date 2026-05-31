'use strict';

//1-سحبنا ال inputs =>حتى نقدر نشتغل فيهم 
//get element once اول اشي سحب الداتا 
var prodNameInput = window.document.getElementById("prodName");
var prodPriceInput = window.document.getElementById("prodPrice");
var prodCategoryInput = window.document.getElementById("prodCategory");
var prodDescInput = window.document.getElementById("prodDesc");
var prodImgInput = document.getElementById("prodImg");


//Firstly , check if the allProducts has been stored in local storage   
var allProducts = []
if (localStorage.getItem("productContainer") !== null) {
    allProducts = JSON.parse(localStorage.getItem("productContainer"));
    //Secondaly , show the data 
    DisplayProducts(allProducts

    );
}



//2- بدنا نعمل  انه يضيف برودكت فوصف ال product بنحطه ب object 
function AddProduct() {
    console.log("add product");
    var product = {
        name: prodNameInput.value,
        price: prodPriceInput.value,
        imgSrc: '../images/logo-5-DFypfU0k.jpg',
        category: prodCategoryInput.value,
        desc: prodDescInput.value
    };
    console.log(product)

    allProducts.push(product);    //add product  to allproducts list  
    localStorage.setItem("productContainer", JSON.stringify(allProducts));
    DisplayProducts(allProducts);
    ResetInputs(); //Reset all inputs values after addition     
    console.log(allProducts)
}

function setFormForUpdate() {

}
function ResetInputs() {
    //reset all Inputs values 
    prodNameInput.value = null;
    prodPriceInput.value = null;
    prodCategoryInput.value = null;
    prodDescInput.value = null;
    prodImgInput.value = null;
}

function DisplayProducts(arr) {

    var cartona = ``;
    for (var i = 0; i < arr.length; i++) {
        cartona += `
               <div class="col-md-3 p-3">
                    <div class="bg-dark p-3">
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

    document.getElementById("myRow").innerHTML = cartona;
}

function deleteProduct(index) {
    allProducts.splice(index, 1);
    localStorage.setItem("productContainer", JSON.stringify(allProducts));
    DisplayProducts(allProducts);
    console.log(allProducts)
}


function searchProduct() {
    debugger
    var cartona = ``;
    var searchedItem = document.getElementById("searchInput").value;
    var searchResultArr = [];

    console.log(searchedItem);
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name.toLowerCase().includes(searchedItem.toLowerCase())) {
            console.log(allProducts[i].name.toLowerCase().includes(searchedItem.toLowerCase()));
            cartona += `
               <div class="col-md-3 p-3">
                    <div class="bg-dark p-3">
                        <p class="text-white">${i}</p>
                        <img src="./images/logo-5-DFypfU0k.jpg" alt="" class="w-100">
                        <h2 class="h5 text-white">${allProducts[i].name.replace(searchedItem, `<span class="bg-warning"> ${searchedItem} </span>`)}</h2>
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