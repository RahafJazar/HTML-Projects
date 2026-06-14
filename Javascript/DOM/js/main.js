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

var helloH2 = document.getElementById("hello");
console.log(helloH2)
helloH2.style.background = "green"

var h2HTMLColl = document.getElementsByTagName("h2")
var h2Arr = Array.from(h2HTMLColl);
console.log(h2HTMLColl)

console.log("************************************");
console.log(h2Arr)
console.log("****************************************");
console.log(typeof (h2HTMLColl));
console.log(typeof (h2Arr));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
var pByClass = document.getElementsByClassName("test");
console.log(pByClass)
console.log(typeof (pByClass));

console.log("=======================================");
var pByAttr = document.getElementsByName("aya");
console.log(pByAttr);
console.log(typeof (pByAttr));
console.log("=======================================");
var pByquery = document.querySelector(".testquery");
console.log(pByquery.innerHTML); //
console.log(pByquery.innerText);
console.log(pByquery.textContent);

pByquery.innerHTML = "<i> hello </i>";
pByquery.innerText = "<i> hello </i>";
pByquery.textContent = "<i> hello </i>";

console.log("=========event inffo==============");
pByquery.style.cssText = "background-color:blue; color:white ; font-size:20px";
console.log(window.getComputedStyle(pByquery));
pByquery.addEventListener("click",
    function (event) {
        console.log(event)//pointer event 
    }
)