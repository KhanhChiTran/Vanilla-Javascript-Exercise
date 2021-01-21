import { helloJS } from "./module.js";

helloJS();

let num = 0;
let button = document.getElementById("btn");
button.onclick = function () {
  num += 1;
  button.querySelector("#number").innerText = num;
};
