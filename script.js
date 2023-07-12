"use strict";

//1.Write a JavaScript program to find the sum of all the numbers in an array.

// function sumOfArr(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const givenArr = [5, 6, 3, 10];
// const sum = sumOfArr(givenArr);
// console.log(sum);

//2. Write a JavaScript program to find the largest and smallest elements in an array.

// function findLargestAndSmallest(arr) {
//   let largest = arr[0];
//   let smallest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }

//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }

//   return {
//     largest: largest,
//     smallest: smallest,
//   };
// }
// const givenArr = [5, 6, 3, 10];
// const result = findLargestAndSmallest(givenArr);
// console.log(result);

//3.Write a JavaScript program to check if a given number is positive, negative, or zero.

// function checkNumber(num) {
//   if (num == 0) {
//     console.log(`The number is ${num}`);
//   } else if (num > 0) {
//     console.log(`${num} This number is positive`);
//   } else {
//     console.log(`${num} This number is negative`);
//   }
// }
// checkNumber(7);
// checkNumber(0);
// checkNumber(-10);

//4. Write a JavaScript program to check if a given string, is a palindrome.

// function checkPalindrome(str) {
//   const givenString = str;
//   const reversedString = givenString.split("").reverse().join("");

//   if (givenString === reversedString) {
//     console.log(`${str} is palindrome`);
//   } else {
//     console.log(`${str} is not palindrome`);
//   }
// }
// checkPalindrome("malayalam");

//5. Write a JavaScript program to reverse a string without using the built-in reverse () method.

// function reverseString(str) {
//   let initialReverseString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     initialReverseString += str.charAt(i);
//     console.log(initialReverseString);
//   }
//   return initialReverseString;
// }
// reverseString("yellow");

//6.Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

// function findSign() {
//   let numOne = prompt("Enter the first number:");
//   let numTwo = prompt("Enter the second number:");
//   let numThree = prompt("Enter the third number:");

//   let findProduct = numOne * numTwo * numThree;
//   if (findProduct > 0) {
//     console.log("The sign of the product is +");
//   } else {
//     console.log("The sign of the product is -");
//   }
// }
// findSign();

//7. Write a JavaScript program to remove items from a drop-down list

// function removecolor() {
//   let colorSelect = document.getElementById("colorSelect");
//   let valueOfOption = colorSelect.value;

//   for (let i = 0; i < colorSelect.options.length; i++) {
//     if (colorSelect.options[i].value === valueOfOption) {
//       colorSelect.remove(i);
//       return;
//     }
//   }
// }

//8. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.

// function sortNumber(numOne, numTwo, numThree) {
//   if (numOne >= numTwo && numOne >= numThree) {
//     if (numTwo >= numThree) {
//       console.log(`${numOne},${numTwo},${numThree}`);
//     } else {
//       console.log(`${numOne},${numThree},${numTwo}`);
//     }
//   } else if (numTwo >= numOne && numTwo >= numThree) {
//     if (numOne >= numThree) {
//       console.log(`${numTwo},${numOne},${numThree}`);
//     } else {
//       console.log(`${numTwo},${numThree},${numOne}`);
//     }
//   } else {
//     if (numOne >= numTwo) {
//       console.log(`${numThree},${numOne},${numTwo}`);
//     } else {
//       console.log(`${numThree},${numTwo},${numOne}`);
//     }
//   }
// }
// sortNumber(0, -1, 4);

//9. Write a JavaScript function that returns a string that has letters in alphabetical order.

// function sortAlphabet(givenString) {
//   let splitString = givenString.split("");
//   let sortString = splitString.sort();
//   let finalString = sortString.join("");
//   return finalString;
// }
// const finalString = sortAlphabet("webmaster");
// console.log(finalString);

//10.Write a JavaScript program that adds a keydown event listener to a text input to detect when the "Enter key" is pressed.

// let detectInput = document.getElementById("detecting-input");
// detectInput.addEventListener("keydown", detectKey);
// function detectKey() {
//   if (event.key === "Enter") {
//     console.log("Enter key pressed!");
//   }
// }
