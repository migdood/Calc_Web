const btn0 = document.getElementById("0");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");

const operatorAdd = document.getElementById("add");
const operatorSubtract = document.getElementById("subtract");
const operatorMultiply = document.getElementById("multiply");
const operatorDivide = document.getElementById("divide");
const operatorEquals = document.getElementById("equals");
const clearButton = document.getElementById("clear");

const display = document.getElementById("display");

let num1 = "",
  op = "",
  num2 = "";

function assignNumber(num) {
  if (op == "") {
    num1 += num;
    display.value += "num1: " + num1;
  } else {
    num2 += num;
    display.value += "num2: " + num2;
  }
}

function calculate(number1, number2, operator) {
  let result;
  // parse so when added, it's not concatenated
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    default:
      display.value = "WTH";
      break;
  }
  display.value = result;
  num1 = result;
}

btn0.addEventListener("click", () => assignNumber(0));
btn0.addEventListener("keydown", function (event) {
  if (event.key == "0") {
    btn0.click();
  }
});
btn1.addEventListener("click", () => assignNumber(1));
btn1.addEventListener("keydown", function (event) {
  if (event.key == "1") {
    btn1.click();
  }
});
btn2.addEventListener("click", () => assignNumber(2));
btn3.addEventListener("click", () => assignNumber(3));
btn4.addEventListener("click", () => assignNumber(4));
btn5.addEventListener("click", () => assignNumber(5));
btn6.addEventListener("click", () => assignNumber(6));
btn7.addEventListener("click", () => assignNumber(7));
btn8.addEventListener("click", () => assignNumber(8));
btn9.addEventListener("click", () => assignNumber(9));

operatorAdd.addEventListener(
  "click",
  () => ((op = "+"), (display.value += op))
);
operatorSubtract.addEventListener(
  "click",
  () => ((op = "-"), (display.value += op))
);
operatorMultiply.addEventListener(
  "click",
  () => ((op = "*"), (display.value += op))
);
operatorDivide.addEventListener(
  "click",
  () => ((op = "/"), (display.value += op))
);

operatorEquals.addEventListener("click", () => {
  calculate(num1, num2, op);
  num2 = "";
});

clearButton.addEventListener("click", () => {
  display.value = "";
  num1 = "";
  num2 = "";
  num = "";
  op = "";
});
