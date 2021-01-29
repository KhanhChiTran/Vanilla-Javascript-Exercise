const btn = document.getElementById("btn");
const resetBtn = document.querySelector(".reset");

let count = 0;
btn.onclick = function () {
  count++;
  btn.innerText = count;
};
resetBtn.onclick = () => {
  count = 0;
  btn.innerText = count;
};
