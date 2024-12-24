console.log("1- Function Intro And Basic Usage");
console.log("-".repeat(20));

function sayHello(userName) {
    console.log(`Hello ${userName}`);
}

sayHello(`Maged`);

console.log("-".repeat(20));
console.log("2- Function Advanced Examples");
console.log("-".repeat(20));
function sayHi(name, age) {
    if (age < 20) {
        console.log(`This App not Suitable for you (${name}).`);
    } else {
        console.log(`Hello ${name} , You age is ${age}`);
    }
}

sayHi("Maged", 25);
sayHi("Shery", 21);
sayHi("Gessy", 3);

function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i);
    }
}

generateYears(2000, 2025, 2022)

console.log("-".repeat(20));
console.log("3- Function Return Statement And Use Cases");
console.log("-".repeat(20));
function generate(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        console.log(i);
        if (i === exclude) {
            return `interruptting`;
        }
    }
}

generate(1, 10, 8);

console.log("-".repeat(20));
console.log("4- Function Default Parameters");
console.log("-".repeat(20));

function sayWe(name, age = "unknown") {
    if (age < 20) {
        return `This App not Suitable for you (${name}).`;
    } else {
        return `Hello ${name} , You age is ${age}`;
    }
}

console.log(sayWe("Maged"));

console.log("-".repeat(20));
console.log("5- Function Rest Parameters");
console.log("-".repeat(20));
function RandomNumbers_Calculation(...Numbers){
    let result = 0;
    for (let i = 0; i < Numbers.length; i++) {
        result += Numbers[i];
    }
    return `Final result is ${result}`;
}
console.log(RandomNumbers_Calculation(20,30,60,56,44,160));

console.log("-".repeat(20));
console.log("6- Function Ultimate Practice");
console.log("-".repeat(20));

function card(userName = "nu", age = "un", Adress = "un", phone = "un", show = "Yes", ...sk ) {
    document.write(`<div style="border: 3px solid red; padding: 10px">`);
    document.write(`<h3 style="display: inline;">Welcome, <h1 style="display: inline;">${userName}</h1></h3>`);
    document.write(`<p>Age: ${age}</p>`);
    document.write(`<p>Adress: ${Adress}</p>`);
    document.write(`<p>Phone Number: ${phone}</p>`);
    if (show === "Yes") {
        if (sk.length > 0) {
            document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
        } else {
            document.write(`<p>Skills: Not has any skills.</p>`);
        }
    } else {
        document.write(`<p>Skills: Don't Show Skills.</p>`);
    }
    document.write(`<div>`);
}

card("Maged", 25, "Abu Tig", "01275465883", "Yes", "Html", "CSS", "JS");
console.log("Show in HTML page");

console.log("-".repeat(20));
console.log("7- Anonymous Function And Practice");
console.log("-".repeat(20));

let calculation = function (num1, num2) { 
    return num1 + num2;
};
console.log(calculation(20,50));

document.getElementById("btn").onclick = function () {
    console.log("Show Message");
    alert("HI")
};

setTimeout(function () {
    console.log("After 2 seconds appeared");
}, 2000);


console.log("-".repeat(20));
console.log("8- Return Nested Function");
console.log("-".repeat(20));

function showMessage(fName, Lname) {
    let Message = "Hello";

    function getName() {
        return `${fName} ${Lname}`;
    }
    function nestedMessage() {
        return `${Message} ${getName()}`;
        //return `${Message} ${fName} ${Lname}`;

    }
    return nestedMessage();
}
console.log(showMessage("Maged", "Eshak"));

console.log("-".repeat(20));
console.log("9- Arrow Function Syntax");
console.log("-".repeat(20));

