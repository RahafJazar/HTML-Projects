// ^ Write your JavaScript code here 
let primaryColor;
let secondaryColor;
let fontType;
let scrolltoTopBtn = document.getElementById("scroll-to-top");
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
        if (window.scrollY > (sectionOffTop - sectionHeight / 3)) {
            currentSectionID = section.getAttribute("id");


        }
    });

    //5)Update the active class
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSectionID)) {
            link.classList.add("active");
        }
    })

    //scroll-to-top appear

    if (window.scrollY > 300) {
        scrolltoTopBtn.classList.replace("opacity-0", "opacity-100");
        scrolltoTopBtn.classList.replace("invisible", "visible");
    } else {
        scrolltoTopBtn.classList.replace("opacity-100", "opacity-0");
        scrolltoTopBtn.classList.replace("visible", "invisible");
    }
})

scrolltoTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" })
})

//====== LightMode & DarkMode Switch  =================

let themeToggleBtn = document.querySelector("#theme-toggle-button");
let htmlTag = document.querySelector("html");
themeToggleBtn.addEventListener("click", function () {
    htmlTag.classList.toggle("dark");

})

//=============Portfolio nav and tabs =====================

let portfolioFiltersBtn = document.querySelector("#portfolio-filters");
let portfolioGrid = document.querySelector("#portfolio-grid");
let portfolioGridDivs = Array.from(document.querySelectorAll("#portfolio-grid>div"));

const activeClasses = ["bg-linear-to-r", "from-primary", "to-secondary", "text-white", "hover:shadow-lg", "hover:shadow-primary/50"];
const inactiveClasses = ["bg-white", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-300", "hover:bg-slate-100", "dark:hover:bg-slate-700", "border", "border-slate-300", "dark:border-slate-700"];
portfolioFiltersBtn.addEventListener("click", function (event) {
    let clickedBtn = event.target.closest("button");
    if (!clickedBtn) return;
    portfolioFiltersBtn.querySelectorAll("button").forEach(btn => {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses)

    });

    clickedBtn.classList.remove(...inactiveClasses);
    clickedBtn.classList.add(...activeClasses);
    //اخفاء الجميع
    portfolioGridDivs.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "scale(.8)";
    });
    //اظهار المختار 
    setTimeout(() => {
        portfolioGridDivs.forEach((item) => {
            const filter = clickedBtn.dataset.filter;
            const category = item.dataset.category;
            if (filter === "all" || filter === category) {

                item.style.display = "block";

                requestAnimationFrame(() => {
                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";
                });

            }
            else {
                item.style.display = "none";
            }
        });
    }, 500);


});


//==========testimonial carousel==================
let testimonialsCarousel = document.getElementById("testimonials-carousel");
let nextTestimonial = document.getElementById("next-testimonial");
let prevTestimonial = document.getElementById("prev-testimonial");
const translateXVals = [0, 33.3333, 66.6667, 100];
let index = 0;
prevTestimonial.addEventListener("click", () => {
    testimonialSlider(-1);
});
nextTestimonial.addEventListener("click", () => {
    testimonialSlider(+1);
});

function testimonialSlider(step) {

    index = index + step;
    if (index < 0) {
        index = translateXVals.length - 1;
    }
    else if (index > translateXVals.length - 1) {
        index = 0
    }

    testimonialsCarousel.style.cssText = `transform : translateX(${translateXVals[index]}%);`

}


//=========Settings Sidebar ========================
let settingsToggle = document.getElementById("settings-toggle");
let settingsSidebar = document.getElementById("settings-sidebar");
let settingSidebarCloseBtn = document.querySelector("#settings-sidebar .fa-xmark").closest("button");
const activeFontOption = ["active", "border-primary", "bg-slate-50", "dark:bg-slate-800"];
const inactiveFontOption = ["border-slate-200", "dark:border-slate-700"];
const bodyFonts = ["font-tajawal", "font-cairo", "font-alexandria"];
settingsToggle.addEventListener("click", function () {

    settingsToggle.style.right = "20rem";
    settingsSidebar.classList.remove("translate-x-full");
});
settingSidebarCloseBtn.addEventListener("click", closeSideBar);

function closeSideBar() {

    settingsToggle.style.right = "0px";
    settingsSidebar.classList.add("translate-x-full");
}

let fontOptions = document.querySelectorAll("#settings-sidebar .font-option");

fontOptions.forEach(fontOption => {

    fontOption.addEventListener("click", function () {
        fontType = fontOption.dataset.font;

        localStorage.setItem("font", fontType);
        //reset active state
        fontOptions.forEach(btn => {
            btn.classList.remove(...activeFontOption);
            btn.classList.add(...inactiveFontOption);
        });

        //activate selected font  
        fontOption.classList.add(...activeFontOption);
        fontOption.classList.remove(...inactiveFontOption);


        //change body font
        document.body.classList.remove(...bodyFonts);
        document.body.classList.add(`font-${fontType}`);

    })
})

//=====theme 
let themeColorsGrid = document.getElementById("theme-colors-grid");
themeColorsGrid.innerHTML = `
<button class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-slate-900" title="Purple Blue" data-primary="#6366f1" data-secondary="#8b5cf6" style="background: linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246));"></button>
<button class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm" title="Pink Orange" data-primary="#ec4899" data-secondary="#f97316" style="background: linear-gradient(135deg, rgb(236, 72, 153), rgb(249, 115, 22));"></button>
<button class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm" title="Green Emerald" data-primary="#10b981" data-secondary="#059669" style="background: linear-gradient(135deg, rgb(16, 185, 129), rgb(5, 150, 105));"></button>
<button class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm" title="Blue Cyan" data-primary="#3b82f6" data-secondary="#06b6d4" style="background: linear-gradient(135deg, rgb(59, 130, 246), rgb(6, 182, 212));"></button>
<button class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm" title="Red Rose" data-primary="#ef4444" data-secondary="#f43f5e" style="background: linear-gradient(135deg, rgb(239, 68, 68), rgb(244, 63, 94));"></button>
<button class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm" title="Amber Orange" data-primary="#f59e0b" data-secondary="#ea580c" style="background: linear-gradient(135deg, rgb(245, 158, 11), rgb(234, 88, 12));"></button>
`
let themeBtns = themeColorsGrid.querySelectorAll("button");
themeBtns.forEach(btn => {

    btn.addEventListener("click", function () {
        primaryColor = btn.dataset.primary;
        secondaryColor = btn.dataset.secondary;
        localStorage.setItem("primary", primaryColor);
        localStorage.setItem("secondary", secondaryColor);
        //reset all btns
        themeBtns.forEach((item) => {
            item.classList.remove("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900");
        });
        btn.classList.add("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900");
        htmlTag.style.setProperty("--color-primary", primaryColor);
        htmlTag.style.setProperty("--color-secondary", secondaryColor);

    })
});

//reset settings 
let resetSettingsBtn = document.getElementById("reset-settings");
resetSettingsBtn.addEventListener("click", ResetSettings)

function ResetSettings() {
    let firstThemeBtn = themeBtns[0];
    let firstFont = document.querySelectorAll("#settings-sidebar .font-option")[0];
    fontType = firstFont.dataset.font;
    primaryColor = firstThemeBtn.dataset.primary;
    secondaryColor = firstThemeBtn.dataset.secondary;
    localStorage.setItem("font", fontType);
    localStorage.setItem("primary", primaryColor);
    localStorage.setItem("secondary", secondaryColor);
    fontOptions.forEach(fontOption => {

        fontOption.classList.remove(...activeFontOption);
        fontOption.classList.add(...inactiveFontOption);
    })
    firstFont.classList.add(...activeFontOption);
    firstFont.classList.remove(...inactiveFontOption);
    themeBtns.forEach((theme) => {
        theme.classList.remove("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900");
    })
    firstThemeBtn.classList.add("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900");
    htmlTag.style.setProperty("--color-primary", firstThemeBtn.dataset.primary);
    htmlTag.style.setProperty("--color-secondary", firstThemeBtn.dataset.secondary);


    //change body font
    document.body.classList.remove(...bodyFonts);
    document.body.classList.add(`font-${firstFont.dataset.font}`);

    closeSideBar();

}

//=================




//=====================
//=====================
//=====================
window.addEventListener("DOMContentLoaded", loadSettings);
function loadSettings() {
    fontType = localStorage.getItem("font") || "";
    primaryColor = localStorage.getItem("primary") || "";
    secondaryColor = localStorage.getItem("secondary") || "";

    //Apply font 
    if (fontType) {
        document.body.classList.remove(...bodyFonts);
        document.body.classList.add(`font-${fontType}`);


        // Highlight selected font button
        fontOptions.forEach(btn => {
            btn.classList.remove(...activeFontOption);
            btn.classList.add(...inactiveFontOption);

            if (btn.dataset.font === fontType) {
                btn.classList.add(...activeFontOption);
                btn.classList.remove(...inactiveFontOption);
            }
        });
    }

    //Apply theme 
    if (primaryColor && secondaryColor) {
        htmlTag.style.setProperty("--color-primary", primaryColor);
        htmlTag.style.setProperty("--color-secondary", secondaryColor);
        // Highlight selected theme button
        themeBtns.forEach(btn => {
            btn.classList.remove(
                "ring-2",
                "ring-primary",
                "ring-offset-2",
                "ring-offset-white",
                "dark:ring-offset-slate-900"
            );

            if (
                btn.dataset.primary === primaryColor &&
                btn.dataset.secondary === secondaryColor
            ) {
                btn.classList.add(
                    "ring-2",
                    "ring-primary",
                    "ring-offset-2",
                    "ring-offset-white",
                    "dark:ring-offset-slate-900"
                );
            }
        });
    }
}