//Assignment 1

const fib = (value) => {
  let firstNumber = 1;
  let secondNumber = 0;
  let result = 0;
  for (let i = 1; i < value; i++) {
    console.log("firstNumber " + firstNumber);
    console.log("secondNumber " + secondNumber);
    console.log("result = " + result);
    result = firstNumber + secondNumber;
    secondNumber = firstNumber;
    firstNumber = result;
  }
  return result;
};

// console.log(fib(7));

const fibRecur = (value) => {
  if (value <= 1) {
    return value;
  } else {
    return fibRecur(value - 1) + fibRecur(value - 2);
  }
};

// console.log(fibRecur(4));
// console.log(fibRecur(8));
