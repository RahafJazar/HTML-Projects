// ^ Write your JavaScript code here

//======traditional Scroll Event Listener =================

//1) select allLinks and sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

//2)Event Listener 

window.addEventListener("scroll", function (event) {
    let currentSectionID = "";
    //3)find which section  is on screen 
    sections.forEach((section) => {
        const sectionOffTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        //4) Check if the user has scrolled past this section
        if (pageYOffset > (sectionOffTop - sectionHeight / 3)) {
            currentSectionID = section.getAttribute("id");
            console.log("current section is : ", currentSectionID);

        }
    });

    //5)Update the actie class
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSectionID)) {
            link.classList.add("active");
        }
    })
})



//====== LightMode & DarkMode Switch  =================

let themeToggleBtn = document.querySelector("#theme-toggle-button");
let htmlTag = document.querySelector("html");
themeToggleBtn.addEventListener("click", function () {
    htmlTag.classList.toggle("dark");

})