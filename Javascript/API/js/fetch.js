//fetch 
let allRecipes = [];
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
const loader = document.querySelector(".loader-container");
let user = {
    name: "ahmad samir jadallah",
    email: "dali333ii@gmail.com",
    password: "ah@434343",
    rePassword: "ah@434343",
    phone: "01010700777"
}
function loaderSpinner(isShowed) {
    if (isShowed) {
        loader.classList.remove("d-none");
    } else {
        loader.classList.add("d-none");
    }
}
const row = document.querySelector(".row");
async function getPizza(item) {
    try {
        let fetchReq;


        loaderSpinner(true);


        fetchReq = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${item}`); //async
        let response = await fetchReq.json(); //async
        allRecipes = response.data.recipes;
        localStorage.setItem("Recipes", JSON.stringify(allRecipes))
        console.log(allRecipes) //sync

        displayRecipes();



    }
    catch (error) {
        console.log(error)
    }
    finally {

        loaderSpinner(false);
    }


}
function displayRecipes() {
    let cartona = ``;
    if (allRecipes.length === 0) {
        cartona = `
            <div class="col-12 text-center">
                    <p class="text-muted">No data found</p>
              </div>
            `

    } else {

        for (let i = 0; i < allRecipes.length; i++) {
            cartona += `
        <div class="col-md-6 col-lg-3   ">
                        <div class="p-2  d-flex flex-column justify-content-center align-items-center shadow text-center recipe"   >
                            <img src="${allRecipes[i].image_url}" alt="" width="100%">
                            <p class="title fw-bold ">title :${allRecipes[i].title.split(' ', 2).join(' ')}</p>
                                <h4 class="title fw-bold fs-6 text-success">publisher : ${allRecipes[i].publisher}</h4>
                        </div>
                    </div>
         `
        }

    }
    row.innerHTML = cartona;

}

getPizza("pizza");

searchBtn.addEventListener("click", function () {
    const searchText = searchInput.value.toLowerCase();
    getPizza(searchText)
    console.log(searchText);

})



async function signup() {
    let req = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup",
        {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    let response = await req.json();
    console.log(response)
}

signup()