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


/************Add********* */
// بدنا نعمل  انه يضيف برودكت فوصف ال product بنحطه ب object 
function AddProduct() {

    var imgsrc = prodImgInput.files[0] ? `images/${prodImgInput.files[0]?.name}` : 'images/logo-5-DFypfU0k.jpg';
    console.log("add product");
    var product = {
        name: prodNameInput.value,
        price: prodPriceInput.value,
        imgSrc: imgsrc,
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
        imgSrc: prodImgInput.files[0].name,
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