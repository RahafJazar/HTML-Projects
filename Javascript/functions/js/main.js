function ask(question, yes, no) {
    if (window.confirm(question))
        yes();
    else
        no();
}


var showOk = function () {
    alert("You agreed .");
}

var showCancelled = function () {
    alert("You canceled the execution.")
}

ask("Do You Agree", ()=>alert("You agreed ."),  ()=> alert("You canceled the execution.")); //showOk and showCancelled => callbacks because it will be called back 