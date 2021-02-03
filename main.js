import { helloJS } from "./module.js";

helloJS();

let num = 0;
let button = document.getElementById("btn");
button.onclick = function () {
  num += 1;
  button.querySelector("#number").innerText = num;
};

// We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

// https://www.hackerrank.com/challenges/compare-the-triplets/problem

// Example

// a = [1, 2, 3]
// b = [3, 2, 1]
// For elements *0*, Bob is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

// Function Description

// Complete the function compareTriplets in the editor below.

// compareTriplets has the following parameter(s):

// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating
// Return

// int[2]: Alice's score is in the first position, and Bob's score is in the second.

function compareTriplets(a, b) {
  var aPoint = 0;
  var bPoint = 0;
  var result = [];
  for (var i = 0; i <= a.length; i++) {
    if (a[i] === b[i]) {
      aPoint += 0;
      bPoint += 0;
    } else if (a[i] > b[i]) {
      aPoint += 1;
      bPoint += 0;
    } else {
      aPoint += 0;
      bPoint += 1;
    }
  }
  result.push(aPoint);
  result.push(bPoint);
  return result;
}
