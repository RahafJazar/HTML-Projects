//
var allBtns = document.querySelectorAll('button'); //return NodeList
console.log(allBtns);

for (var i = 0; i < allBtns.length; i++) {


    allBtns[i].addEventListener('click', function (e) {
        //anonymous function

        printWelcome();
        changeButtonName(e);
    })
}

function printWelcome() {
    console.log('welcome!')
}

function changeButtonName(element) {
    element.target.innerHTML = 'Reset';
}


var allImgs = document.querySelectorAll('img');
var myImg = document.getElementById('myImg');

for (var i = 0; i < allImgs.length; i++) {

    allImgs[i].addEventListener('click', function (e) {
        console.log(e.target);
        var srcImg = e.target.getAttribute('src');
        myImg.setAttribute('src', srcImg);


    })

    allImgs[i].addEventListener('mousedown', function (e) {
        setBorder(e);

    })
    allImgs[i].addEventListener('mouseup', function (e) {
        ResetBorder(e);

    })
}

function setBorder(element) {

    element.target.style = "border : 2px solid red";
}
function ResetBorder(element) {

    element.target.style = "border :0px";
}


