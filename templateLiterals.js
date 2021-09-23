//TEMPLATE LITERALS
//New way to creat and concatenate strings

//Example of a Template Literal
//Template Literal uses back-ticks (``) instead of quotes ('' or "")
const example = `This is a Template Literal`;
console.log(example);

//Template Literals recognize line breaks
//Example of a line break in a regular string
const linesOne = "Firstline\nSecondline"
console.log(linesOne);
//cosnt badExample = "One
//Two";

//Example of a line break in a Template Literal
const linesTwo = `1st line
2nd line`;
console.log(linesTwo);


//Concatenation with Template Literals
//Example of String Concatenation
const myName = "Caitlin" + " " + "Robertson";
console.log(myName);

//Example of Expression Interpolation (AKA String Concatenation with a Template Literal)

let fullName = `Caitlin${" "}Robertson`;
console.log(fullName);

const middle = `Jo`;
fullName = `Caitlin ${middle} Robertson`
console.log(fullName);

//example of adding a number into a regular string
let nameAge1 = "My name is caitlin and I am " + (2021 - 1991) + "years old"
console.log(nameAge1);
//example of adding a number into a template literal
let nameAge2 = `My name is Caitlin and I am ${2021 - 1991} years old`;
console.log(nameAge2);
let currentYear = 2021;
const birthYear = 1991;
nameAge2 = `My name is Caitlin and I am ${currentYear -birthYear} years old`;
console.log(nameAge2);