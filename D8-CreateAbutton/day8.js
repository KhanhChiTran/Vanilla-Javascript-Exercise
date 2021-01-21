const btn = document.getElementById("btn");

let count = 0;
btn.onclick = function () {
  count++;
  btn.innerText = count;
};
