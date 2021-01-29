function change(numbers) {
  //   document.getElementById("btn1").innerHTML = 4;
  //   document.getElementById("btn2").innerHTML = 1;
  //   document.getElementById("btn3").innerHTML = 2;
  //   document.getElementById("btn6").innerHTML = 3;
  //   document.getElementById("btn9").innerHTML = 6;
  //   document.getElementById("btn8").innerHTML = 9;
  //   document.getElementById("btn7").innerHTML = 8;
  //     document.getElementById("btn4").innerHTML = 7;

  //   document.getElementById("btn3").style.gridRow = "2";
  //   document.getElementById("btn3").style.gridColumn = "3";
  //   document.getElementById("btn4").style.gridRow = "1";
  //   document.getElementById("btn4").style.gridColumn = "1";
  //   document.getElementById("btn5").style.gridRow = "2";
  //   document.getElementById("btn5").style.gridColumn = "2";
  //   document.getElementById("btn6").style.gridRow = "3";
  //   document.getElementById("btn6").style.gridColumn = "3";
  //   let numbers = [1, 2, 3, 6, 9, 8, 7, 4];
  let temp = numbers[numbers.length - 1];
  numbers.pop();
  numbers.unshift(temp);
  console.log(numbers);
  return numbers;
}
change([1, 2, 3, 6, 9, 8, 7, 4]);
