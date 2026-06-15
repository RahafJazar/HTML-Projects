// //
// var allBtns = document.querySelectorAll('button'); //return NodeList
// console.log(allBtns);

// for (var i = 0; i < allBtns.length; i++) {


//     allBtns[i].addEventListener('click', function (e) {
//         //anonymous function

//         printWelcome();
//         changeButtonName(e);
//     })
// }

// function printWelcome() {
//     console.log('welcome!')
// }

// function changeButtonName(element) {
//     element.target.innerHTML = 'Reset';
// }


// var allImgs = document.querySelectorAll('img');
// var myImg = document.getElementById('myImg');

// for (var i = 0; i < allImgs.length; i++) {

//     allImgs[i].addEventListener('click', function (e) {
//         console.log(e.target);
//         var srcImg = e.target.getAttribute('src');
//         myImg.setAttribute('src', srcImg);


//     })

//     allImgs[i].addEventListener('mousedown', function (e) {
//         setBorder(e);

//     })
//     allImgs[i].addEventListener('mouseup', function (e) {
//         ResetBorder(e);

//     })
// }

// function setBorder(element) {

//     element.target.style = "border : 2px solid red";
// }
// function ResetBorder(element) {

//     element.target.style = "border :0px";
// }

// var helloH2 = document.getElementById("hello");
// console.log(helloH2)
// helloH2.style.background = "green"

// var h2HTMLColl = document.getElementsByTagName("h2")
// var h2Arr = Array.from(h2HTMLColl);
// console.log(h2HTMLColl)

// console.log("************************************");
// console.log(h2Arr)
// console.log("****************************************");
// console.log(typeof (h2HTMLColl));
// console.log(typeof (h2Arr));

// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
// var pByClass = document.getElementsByClassName("test");
// console.log(pByClass)
// console.log(typeof (pByClass));

// console.log("=======================================");
// var pByAttr = document.getElementsByName("aya");
// console.log(pByAttr);
// console.log(typeof (pByAttr));
// console.log("=======================================");
// var pByquery = document.querySelector(".testquery");
// console.log(pByquery.innerHTML); //
// console.log(pByquery.innerText);
// console.log(pByquery.textContent);


// console.log("=========event inffo==============");
// pByquery.style.cssText = "background-color:blue; color:white ; font-size:20px";
// console.log(window.getComputedStyle(pByquery));
// pByquery.addEventListener("click",
//     function (event) { //event info 
//         console.log("submit :", event.target, "\\\n", "(", event.clientX, ",", event.clientY, ")",)//pointer event 

//     }
// )

// var imgElem = document.querySelector("img");
// imgElem.addEventListener("click", function () {
//     imgElem.setAttribute("src", "images/avatar-3.jpg");
//     imgElem.setAttribute("alt", "avatar3");
//     console.log(imgElem.hasAttribute("alt"))
// })

var gallery = document.querySelector(".gallery");
var topImg = document.getElementById("myImg");
gallery.addEventListener("click", function (event) {
    var imgSrcPath = event.target.getAttribute("src");
    topImg.setAttribute("src", imgSrcPath);
})

// var customImg = document.getElementById("mouseImg");
// document.addEventListener("mousemove", function (event) {
//     console.log(event.clientX);
//     console.log(event.clientY);
//     customImg.style.left = event.clientX + "px"
//     customImg.style.top = event.clientY + "px"
// })

var test = document.querySelector(".test");
test.style.background = "green"
var h2 = document.createElement("h2");
var p = document.createElement("p");
h2.innerHTML = "Hello";
p.innerHTML = "HII"
test.append(h2);
test.prepend(p)

//Events :
//1- mouse =>click (clcik once ) , dblclick (click twice ), mousemove , mouseenter (دخلت على الايليمنت ) , mouseleave(تطبع برا الايليمينت ) , mousedown (لما زرار الماوس  تنزل ) , mouseup(لما زرارا الماوس تطلع ) ,  contextmenu (له سلوك معين وبتقدؤ توقفه وهو نفسه الرايتكليك  على الماوس)  => event.preventDefault(); بتلغيها ب   ,  drag ( this for img)
//2- keyboard => keyup(when press on key and unpress it ) ,keyDown(هو وانا بنزل ايدي على الازرار وهون على كل الزراير ),  keypress(على زرار معينة )
//3- form => focus , input (مع كل تغيير يحصل بالvalue ==>realtime search)  , blur(اول  متخرج من ال input => يتسخدم مع validation) , change(اول  ما اخرج بس لازم يحصل تغيير بال value) , submit on form(الها سلوك افتراضي reload => الحل event.preventDefault())
//4- input 

//event bubbling => event on child بتسّمع ال event on parent    >>>>>> عشان توقفيه event.stopPropagation()
//event capturing => event from parent to child  >>>> (true or false) that is a third parameter of addEventListener
p.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("p clicked ");
}, true)
test.addEventListener("click", function () {
    console.log("p clicked ");
})

//Dom Traversing 
//التنقل عن طريق الايليمنت  
//1-chilren => HTMLCollection بتشيل عناصر بس : 
//2-childNodes =>nodelist :بتشيل عناصر node(element , text , comment  , spaces )

console.log("-----------Data traversing---------------");
console.log(test.children);
console.log(test.childNodes)
console.log(test.nextElementSibling);
console.log(test.previousElementSibling);
console.log(test.nextSibling);


topImg.parentElement.classList.add("bg-white");
var avatar1 = document.getElementById("avatar1");
avatar1.parentElement.classList.add("p-3");
avatar1.parentElement.classList.add("bg-success");
console.log(avatar1.closest("section"));