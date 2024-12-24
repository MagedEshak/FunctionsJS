console.log("----------------------");
console.log("-- حل التكليفات --");
console.log("----------------------");


console.log("-- التكليف 01 --");
console.log("----------------------");

function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let [fName, lName] = zName.split(" ");
        return `${fName} ${lName[0].toUpperCase()}.`;

    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    }

    function ageWithMessage(zAge) {
        let age = parseInt(zAge);
        return `Your Age Is ${age}`;

    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    }
    
    function countryTwoLetters(zCountry) {
        let country = zCountry.slice(0, 2).toUpperCase();
        return `You Live In ${country}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)},  ${countryTwoLetters(zCountry)}`;
        }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

console.log("----------------------");
console.log("-- ال تكليف 02 --");
console.log("----------------------");

// function itsMe() {
//   return `Iam A Normal Function`;
// }
itsMe = () => `Iam A Arrow Function`;

console.log(itsMe()); // Iam A Arrow Function

urlCreate = (protocol, web, tld) => {
    return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log("----------------------");
console.log("-- التكليف 03 --");
console.log("----------------------");

checker = (zName) => {
    return (status) => {
        return (salary)=> {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


console.log("----------------------");
console.log("-- التكليف 04 --");
console.log("----------------------");
