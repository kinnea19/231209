// My answer
function squareDigits(num) {
  let square = num.toString().split("");
  square = square.map((value) => parseInt(value) ** 2);
  return parseInt(square.join(""));
}

// Another
function squareDigits2(num) {
  const number = num.toString();
  let result = [];
  for (let i = 0; i < number.length; i++) {
    result[i] = parseInt(number[i]) ** 2;
  }
  return parseInt(result.join(""));
}

console.log(squareDigits2(9119));
