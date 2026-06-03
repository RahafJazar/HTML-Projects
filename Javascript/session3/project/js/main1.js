'use strict';

//1-سحبنا ال inputs =>حتى نقدر نشتغل فيهم 
//get element once اول اشي سحب الداتا 
var prodNameInput = window.document.getElementById("prodName");
var prodPriceInput = window.document.getElementById("prodPrice");
var prodCategoryInput = window.document.getElementById("prodCategory");
var prodDescInput = window.document.getElementById("prodDesc");
var prodImgInput = document.getElementById("prodImg");

var addBtn = document.getElementById("add-btn");
var updateBtn = document.getElementById("update-btn");

var imagesArr = [];

var currentIndex; //global scope
// check if the allProducts has been stored in local storage   
var allProducts = []
if (localStorage.getItem("productContainer") !== null) {
    allProducts = JSON.parse(localStorage.getItem("productContainer"));
    //Secondaly , show the data 
    DisplayProducts(allProducts

    );
}



/*********  Error Alert For Inputs *********** */
function showError(input, message) {

    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    var errorDiv = input.parentElement.querySelector(".error-alert");

    if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.classList.add("error-alert", "alert", "alert-danger");
        input.after(errorDiv);


    }
    errorDiv.textContent = message;
    errorDiv.style.display = "block";

}

function hideError(input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");

    var nexElem = input.parentElement.querySelector(".error-alert");
    if (nexElem) {
        nexElem.style.display = "none";
    }
}

/************Add********* */
// بدنا نعمل  انه يضيف برودكت فوصف ال product بنحطه ب object 
function AddProduct() {


    console.log("add product");
    if(validateName()===true && validatePrice )
    var product = {
        name: prodNameInput.value,
        price: prodPriceInput.value,
        imgSrc: prodImgInput.files[0] ? `images/${prodImgInput.files[0]?.name}` : 'images/logo-5-DFypfU0k.jpg',
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

//***************update************************ */
function setFormForUpdate(index) {
    //set the values into the inputs fields 
    prodNameInput.value = allProducts[index].name;
    prodPriceInput.value = allProducts[index].price;
    prodCategoryInput.value = allProducts[index].category;
    prodDescInput.value = allProducts[index].desc;
    prodImgInput.value = allProducts[index].imgSrc;

    //change the button from add to update 
    addBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");

    //Set CurrentIndex to be globally
    currentIndex = index;
}

function updateProduct() {
    var product = {
        name: prodNameInput.value,
        price: prodPriceInput.value,
        imgSrc: prodImgInput.files[0] ? prodImgInput.files[0].name : '../images/logo-5-DFypfU0k.jpg',
        category: prodCategoryInput.value,
        desc: prodDescInput.value
    }

    allProducts.splice(currentIndex, 1, product);
    DisplayProducts(allProducts);
    localStorage.setItem("productContainer", JSON.stringify(allProducts));

    //change the button from update to add 
    addBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
}
/**************Reset************** */
function ResetInputs() {
    //reset all Inputs values 
    prodNameInput.value = null;
    prodPriceInput.value = null;
    prodCategoryInput.value = null;
    prodDescInput.value = null;
    prodImgInput.value = '';
}

function DisplayProducts(arr) {

    var cartona = ``;
    for (var i = 0; i < arr.length; i++) {
        cartona += `
               <div class="col-lg-3 col-md-6 p-3">
                    <div class="bg-dark p-3">
                        <p class="text-white">${i}</p>
                        <img src="${arr[i].imgSrc}" alt="" class="w-100">
                        <h2 class="h5 text-white">Product Name : ${arr[i].name}</h2>
                        <div class="d-flex justify-content-between">
                            <span class="text-success">${arr[i].price} JD </span>
                            <span class="text-warning">${arr[i].category}</span>
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
               <div class="col-lg-3 col-md-6 p-3">
                    <div class="bg-dark p-3">
                        <p class="text-white">${i}</p>
                        <img src="./images/logo-5-DFypfU0k.jpg" alt="" class="w-100">
                        <h2 class="h5 text-white">Product Name :${allProducts[i].name.replace(searchedItem, `<span class="bg-warning"> ${searchedItem} </span>`)}</h2>
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

//+++++++++Validation++++++++++//
function validateName() {
    var regexName = /^[A-Za-z ]{3,5}/;
    var prodNameVal = prodNameInput.value.trim()

    if (regexName.test(prodNameVal)) {
        // valid
        console.log("valid name");
        hideError(prodNameInput);
        return true;
    }
    else {
        // invalid
        console.log("invalid name");
        showError(prodNameInput, "Name must Start with english letter and contains at least  3 to 5 ");
        return false;
    }

}

function validatePrice() {
    var regexPrice = /^[1-9][0-9]{3,5}$/;
    var prodPriceVal = prodPriceInput.value;

    if (regexPrice.test(prodPriceVal)) {
        // valid
        console.log("valid name");
        hideError(prodPriceInput);
        return true;
    } else {
        showError(prodPriceInput, "Price must be from 1000 to  999999");
        return false;
    }
}
