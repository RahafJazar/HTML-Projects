//navigate to other page
const x = document.querySelector("button");
x.addEventListener("click", function () {
    let c = window.open('https://getbootstrap.com/', "_blank", 'width=200px,height=200px');

})

let errMsg = document.querySelector(".alert-danger");
let timeout = setTimeout(function () {
    errMsg.classList.add("d-none")
}, 3000)

document.addEventListener("click", () => {
    clearTimeout(timeout);

})