function checkEvenOdd(number) {
    if (!Number.isInteger(number)) {
        console.log("Please enter a valid integer.");
        return;
    }

    if (number % 2 === 0) {
        console.log(number + " is an Even number.");
    } else {
        console.log(number + " is an Odd number.");
    }
}

let number = 25;
checkEvenOdd(number);