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

//Asugnment 2
let randomArray = [1, 2, 3, 4, 5, 6, 7, 8];
function testArray(arr, first, last) {
  let mid = Math.round((first + last) / 2);
  if (first <= last) {
    justprint(arr, first, last);

    return testArray(arr, first + 1, mid);
  } else {
    return arr[last];
  }
}

function justprint(arr, first, last) {
  console.log(
    "Value at index " + first + ": " + arr[first] + "and the last index " + last
  );
}

console.log(testArray(randomArray, 0, randomArray.length - 1));

// console.log(unsortedArray.length - 1);

// function processArrayRecursively(arr, startIndex = 0) {
//   // Base case: stop recursion when the index goes beyond the array length
//   if (startIndex >= arr.length - 1) {
//     return arr[startIndex];
//   } else {
//     return arr[startIndex] + processArrayRecursively(arr, startIndex + 1);
//   }
// }

// // Example usage with an array
// const myArray = [1, 2, 3, 4, 5];
// console.log(processArrayRecursively(myArray));
