//MATH OBJECT (PROPERTIES AND METHODS FOR NUMBERS)

//Properties (Provides different values that can be used)
/*
Syntax for using a Math Object Properdy

Math.PROPERTYNAME
*/

//PI Property
console.log(Math.PI);

//Methods
/*
Syntax for using a Math Object Method
Math.methodName(argument)
 */

// Round Method (Rounds the number to the nearest Integer (AKA NOT a decimal))
let roundNumOne = Math.round(7.7);
console.log(roundNumOne);
let roundNumTwo = Math.round(2.25);
console.log(roundNumTwo);
let roundNumThree = Math.round(-1.1);
console.log(roundNumThree);
//.5 will always round up

//Floor Method (Rounds the number down)
// Removes the numbers after the decimal on a positive number
let floorNumOne = math.floor(2.9);
console.log(floorNumOne);
roundNumTwo = Math.round(2.25);
console.log(roundNumTwo);
let roundNumThree = Math.round(-1.1);
console.log(roundNumThree);
// .5 will always round up
let roundNumFour = Math.round(0.5);
console.log(roundNumFour);

// Floor Method (Rounds the number down)
// Removes the numbers after the decimal on a positive number
let floorNumOne = Math.floor(2.9);
console.log(floorNumOne);
let floorNumTwo = Math.floor(-1.1);
console.log(floorNumTwo);

// Random Method (Returns a number from 0 up to less than 1)
// NOTE: The Random Method does not accept an argument (Nothing inside of the parenthesis "()")
// Returns a number from 0 up to less than 1
let randomNum = Math.random();
console.log(randomNum);
// Returns a number from 0 up to less than 6
randomNum *= 6;
// randomNum = randomNum * 6;
console.log(randomNum);
// Returns 0, 1, 2, 3, 4, or 5
randomNum = Math.floor(randomNum);
console.log(randomNum);
// Returns 1, 2, 3, 4, 5, or 6
randomNum++;
console.log(randomNum);

//Ceil Method (Rounds the number up)
let ceilNumOne = Math.ceil(1.2);
console.log(ceilnumOne);
let ceilNumTwo = Math.ceil(-1.2);
console.log(ceilNumTwo);
let ceilNumThree = Math.ceil(0);
console.log(ceilNumThree);

//Random number using ceil
let random = Math.random();
console.log(random);
random *= 2;
console.log(random);
random = Math.ceil(random);
console.log(random);