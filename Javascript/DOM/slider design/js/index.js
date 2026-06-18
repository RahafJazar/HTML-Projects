let itemsParent = document.getElementById("itemsParent");
let allItems = Array.from(document.querySelectorAll(".item "));
let allImgs = Array.from(document.querySelectorAll(".item img"));
let lightContainer = document.querySelector(".light-container");
let boxImg = document.querySelector(".box-img")
let closeBtn = document.querySelector(".fa-xmark ");
let prevBtn = document.querySelector(".fa-arrow-left");
let nextBtn = document.querySelector(".fa-arrow-right");
let index = '';
console.log(allItems)


//Event Delegation
itemsParent.addEventListener("click", function (e) {
    if (event.target.tagName === "IMG") {
        lightContainer.classList.replace("d-none", "d-flex");
        let imgSrc = event.target.getAttribute("src");
        index = allImgs.indexOf(event.target);
        console.log(index)
        boxImg.style.backgroundImage = `url(${imgSrc})`;
        console.log(window.getComputedStyle(boxImg).backgroundImage)
    }
})



closeBtn.addEventListener("click", closeSlider)

function closeSlider() {
    lightContainer.classList.replace("d-flex", "d-none")
}

prevBtn.addEventListener("click", () => slide(-1))
nextBtn.addEventListener("click", () => slide(+1))



function slide(step) {
    index += step;
    //if next arrive end of arr
    if (index > allImgs.length - 1) {
        index = 0;
    }
    //if prev arrive start of arr
    if (index < 0) {
        index = allImgs.length - 1;
    }
    console.log(index);
    let imgSrc = allImgs[index].getAttribute("src");
    boxImg.style.backgroundImage = `url(${imgSrc})`;
}

//events on keyboard
document.addEventListener("keyup", function (event) {
    console.log(event.key);
    if (event.key.includes("ArrowRight")) {
        slide(1);
    }
    else if (event.key.includes("ArrowLeft")) {
        slide(-1);
    }
    else if (event.key.includes("Escape")) {
        closeSlider();
    }
})
lightContainer.addEventListener("click", function () {
    closeSlider();
})

boxImg.addEventListener("click", (e) => e.stopPropagation());
