//^ Input 
var correctPin = 1234;
var enteredPin = +window.prompt("Enter your PIN : ", '*****');

var balance = 50000;
console.log(correctPin);
console.log(enteredPin);

var isRunning = true;

//^ process
if (enteredPin === correctPin) { //strict equality  string===number => false 
    //^ output
    console.log("Login Successful");
    console.log("correct PIN , Welcome To ATM");
    console.log("____________________________________________");

    while (isRunning) {
        var operation = +window.prompt("(1)-check , (2)-deposit , (3)-withdraw , (4) Exit");

        switch (operation) {
            case 1:
                console.log("Your balance is " + balance);
                setTimeout(() => {

                }, 1000);
                break;
            case 2:
                var depositAmount = + prompt("Enter Deposit Amount ");
                if (depositAmount > 0) {
                    balance += depositAmount;
                    console.log("Deposit Successful  ");
                    console.log("Old balance wass: ", balance - depositAmount); // توفير variables 
                    console.log("You added :" + depositAmount);
                    console.log("New balance : ", balance);
                    console.log("____________________________________________");
                }
                else {
                    console.log("Incorrect deposit amount , deposit must be  >0");
                }
                break;

            case 3:
                var withdrawAmount = + prompt("Enter Deposit Amount ");
                if (withdrawAmount <= 0) {
                    console.log("incorrect amount");
                }
                else if (withdrawAmount > balance) {
                    console.log("Your balance is not enough ");
                }
                else {
                    balance -= withdrawAmount;
                    console.log("Withdraw Successful  ");
                    console.log("Old balance wass: ", balance + withdrawAmount); // توفير variables 
                    console.log("You withdraw :" + withdrawAmount);
                    console.log("New balance : ", balance);
                    console.log("____________________________________________");
                }
            case 4:
                console.log("Thank you ");
                isRunning = false;
                break;
        }
    }

}
else {
    //^ output
    console.log("Incorrect PIN");
}