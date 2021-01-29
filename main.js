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
