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
let randomArray = [2, 1, 9, 4, 15, 6, 7, 8];

function mergeSort(arr, low, high) {
  if (low < high) {
    let middle = Math.trunc((high + low) / 2);
    let tempArr = [];
    mergeSort(arr, low, middle);
    mergeSort(arr, middle + 1, high);
    merge(arr, tempArr, low, middle, high);
  }
}

function merge(arr, tempArr, low, mid, high) {
  i = low;
  j = mid + 1;
  k = low;
  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      tempArr[k] = arr[i];
      i++;
    } else {
      tempArr[k] = arr[j];
      j++;
    }
    k++;
  }

  for (; i <= mid; i++) {
    tempArr[k] = arr[i];
    k++;
  }

  for (; j <= high; j++) {
    tempArr[k] = arr[j];
    k++;
  }

  for (let p = low; p <= high; p++) {
    arr[p] = tempArr[p];
  }
}

mergeSort(randomArray, 0, randomArray.length - 1);
console.log(randomArray);
