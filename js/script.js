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
    display.value = num1 + op + num2;
  } else {
    num2 += num;
    display.value = num1 + op + num2;
  }
}

function assignOperator(operator) {
  if (num1 !== "" && num2 !== "") {
    calculate(num1, num2, op);
    num2 = "";
    op = operator;
    display.value += op;
  } else if (op == "") {
    op = operator;
    display.value += op;
  } else {
  }
}

function calculate(number1, number2, operator) {
  let result;
  // parse so when added, it's not concatenated
  number1 = parseFloat(num1);
  number2 = parseFloat(num2);
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "/":
      if (number1 == 0 || number2 == 0) {
        alert("Can't divide by zero you silly goose.");
        (num1 = ""), (num2 = ""), (op = "");
        result = "DIV Z";
      } else {
        result = number1 / number2;
      }
      break;
    case "*":
      result = number1 * number2;
      break;
    default:
      display.value = "What in tarnation";
      break;
  }
  if (result == "DIV Z") {
    result = "Error";
    display.value = "";
  } else {
    result = parseFloat(result.toFixed(2));
    display.value = result;
    num1 = result;
  }
}

btn0.addEventListener("click", () => assignNumber(0));
btn1.addEventListener("click", () => assignNumber(1));
btn2.addEventListener("click", () => assignNumber(2));
btn3.addEventListener("click", () => assignNumber(3));
btn4.addEventListener("click", () => assignNumber(4));
btn5.addEventListener("click", () => assignNumber(5));
btn6.addEventListener("click", () => assignNumber(6));
btn7.addEventListener("click", () => assignNumber(7));
btn8.addEventListener("click", () => assignNumber(8));
btn9.addEventListener("click", () => assignNumber(9));

operatorAdd.addEventListener("click", () => assignOperator("+"));
operatorSubtract.addEventListener("click", () => assignOperator("-"));
operatorMultiply.addEventListener("click", () => assignOperator("*"));
operatorDivide.addEventListener("click", () => assignOperator("/"));

operatorEquals.addEventListener("click", () => {
  if (num1 == "" || num2 == "") {
    alert("Please Enter All the Numbers Required for the Calculation.");
  } else {
    calculate(num1, num2, op);
    num2 = "";
    op = "";
  }
});

clearButton.addEventListener("click", () => {
  display.value = "";
  num1 = "";
  num2 = "";
  num = "";
  op = "";
});

document.addEventListener("load", () => {
  display.value = "";
});

// Footer stuff
const footerPicture = document.getElementById("footerPicture");
footerPicture.addEventListener("mouseenter", () => {
  footerPicture.animate(
    { transform: ["rotate(0deg)", "rotate(360deg)"] },
    550
  );
});
