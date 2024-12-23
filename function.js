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