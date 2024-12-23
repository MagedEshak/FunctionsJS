console.log("----------------------");
console.log("-- حل التكليفات --");
console.log("----------------------");


console.log("-- التكليف 01 --");
console.log("----------------------");

function sayHello(theName, theGender) {
    if (theGender === "Male") {
        console.log(`Hello Mr ${theName}`);
    } else if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`);
    } else {
        console.log(`Hello ${theName}`);
    }
}

// Needed Output
sayHello("Maged", "Male"); // "Hello Mr Osama"
sayHello("Shery", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("----------------------");
console.log("-- التكليف 02 --");
console.log("----------------------");
function calculate(firstNum, secondNum, operation) {
    let result = 0;
    switch (operation) {
        case "add":
            if (typeof firstNum === "undefined" || typeof secondNum === "undefined") {
                console.log(`Please Write 2 Numbers to making your operation.`);

            } else {
                result  = firstNum + secondNum;
                console.log(`Adding Operation : ${firstNum} + ${secondNum} = ${result}`);
            }
            break;
        case "subtract":
            if (typeof firstNum === "undefined" || typeof secondNum === "undefined") {
                console.log(`Please Write 2 Numbers to making your operation.`);

            } else {
                result  = firstNum - secondNum;
                console.log(`Subtracting Operation: ${firstNum} - ${secondNum} = ${result}`);
            }
            break;
        case "multiply":
            if (typeof firstNum === "undefined" || typeof secondNum === "undefined") {
                console.log(`Please Write 2 Numbers to making your operation.`);

            } else {
                result  = firstNum * secondNum;
                console.log(`multiplying Operation: ${firstNum} * ${secondNum} = ${result}`);
            }
            break;
        default:
            if (typeof firstNum === "undefined" || typeof secondNum === "undefined") {
                console.log(`Please Write 2 Numbers to making your operation.`);

            } else {
                result  = firstNum + secondNum;
                console.log(`default Operation is Adding: ${firstNum} + ${secondNum} = ${result}`);
            }
            break;
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
calculate(20, 30); // 50


console.log("----------------------");
console.log("-- التكليف 03 --");
console.log("----------------------");

function ageInTime(theAge) {

    let days = theAge * 365.25;
    let weeks = days / 7;
    let months = days / 30.44;
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;
    
    if (theAge < 10 || theAge > 100) {
        console.log("Age Out Of Range")
    } else {
        console.log(`
"The Age": ${theAge},
"Days": ${days},
"Weeks": ${weeks},
"Months": ${months},
"Hours": ${hours},
"Minutes": ${minutes},
"Seconds": ${seconds}`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(25); // Months Example => 456 Months
ageInTime(8); // Age Out Of Range



console.log("----------------------");
console.log("-- التكليف 04 --");
console.log("----------------------");

function checkStatus(a, b, c) {
    let name = typeof a === "string" ? a : typeof b === "string" ? b : c;
    let age = typeof a === "number" ? a : typeof b === "number" ? b : c;
    let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;

    if (status === true) {
        console.log(`"Hello ${name}, Your Age Is ${age}, You Are Available For Hire"`)
    } else {
        console.log(`"Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire"`)
    }
}

// Needed Output
checkStatus("Maged", 25, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(24, "Abanoub", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 21, "Shery"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("----------------------");
console.log("-- التكليف 05 --");
console.log("----------------------");



console.log("----------------------");
console.log("-- التكليف 06 --");
console.log("----------------------");

