const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const output = document.querySelector(".output-area");
const input = document.querySelector("#input");
const resetBtn = document.querySelector(".reset-button");

let value = 0;
let inputedValue=1;
output.innerText=value;
input.value=1;

add.onclick = function () {
  value = value + inputedValue;
  output.innerText = value;
};
subtract.onclick = function () {
  value = value - inputedValue;
  output.innerText = value;
};

input.addEventListener("input", () => {
  inputedValue = parseInt(input.value);
 
});


resetBtn.addEventListener("click", () => {
  value = 0;
  output.innerText = value;
});
