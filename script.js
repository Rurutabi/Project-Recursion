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
let randomArray = [9, 1, 2, 7, 5, 3, 4, 8];
function mergeSort(arr, low, high) {
  // console.log(high);
  if (low < high) {
    let middle = Math.trunc((high + low) / 2);

    mergeSort(arr, low, middle);
    mergeSort(arr, middle + 1, high);
    console.log(merge(arr, low, middle, high));
  }
}

function merge(arr, low, mid, high) {
  let brr = [];
  i = low;
  j = mid + 1;
  k = low;
  while (i <= mid && j < high) {
    if (arr[i] <= arr[j]) {
      brr[k] = arr[i];
      i++;
      k++;
    } else {
      brr[k] = arr[j];
      j++;
      k++;
    }
  }

  if (i > mid) {
    while (j <= high) {
      brr[k] = arr[j];
      j++;
      k++;
    }
  } else {
    while (i <= mid) {
      brr[k] = arr[i];
      i++;
      k++;
    }
  }

  return brr;
}

console.log(mergeSort(randomArray, 0, randomArray.length));
