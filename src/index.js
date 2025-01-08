var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
/*function double(x) {
  return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers); BUT THERE IS A BETTER WAY*/

const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers);

//we couldve used the forEach function
/*
var newNumbers=[]
function double(x){
    newNumbers.push(x*2)
}
numbers.forEach(double);
console.log(newNumbers);

OR

numbers.forEach(function(x)){
    newNumbers.push(x*2)
}
*/

//Filter - Create a new array by keeping the items that return true.
const filteredNum = numbers.filter(function (num) {
  return num > 10;
});

console.log(filteredNum);

//Reduce - Accumulate a value by doing something to each item in an array.

var accumulatedNum = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(accumulatedNum);
//accumulator is automatically set as the first value
//currentNumber is automatically set as the second value

//Find - find the first item that matches from an array.

var firstNum = numbers.find(function (num) {
  return num > 10; /*finds the first number greater than 10 and then stops*/
});
console.log(firstNum);

//FindIndex - find the index of the first item that matches.

var indexNum = numbers.findIndex(function (num) {
  return (
    num > 10
  ); /*finds the INDEX of the first number greater than 10 and then stops*/
});
console.log(indexNum);

//exercice
import emojipedia from "./emojipedia";

const newMeaning = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});
console.log(newMeaning);
