// Задача №1
'use strict'
function getArrayParams(...arr) {
  if(arr.length == 0) {
    return 0;
    }
  let min = Infinity;
  min = Math.min(...arr);
  let max = -Infinity;
  max = Math.max(...arr);
  let sum = 0;
  sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  let avg = 0;
  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задача №2
function summElementsWorker(...arr) {
  if(arr.length == 0) {
    return 0;
    }
  let sum = 0;
  sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return Number(sum.toFixed(2));
}

function differenceMaxMinWorker(...arr) {
  if(arr.length == 0) {
    return 0;
    }
    let min = Infinity;
    min = Math.min(...arr);
    let max = -Infinity;
    max = Math.max(...arr);
    return max-min;
    
}

function differenceEvenOddWorker(...arr) {
  if(arr.length == 0) {
    return 0;
    }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2===0) {
      sumEvenElement += arr[i]; 
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
  }
  

function averageEvenElementsWorker(...arr) {
  if(arr.length == 0) {
    return 0;
    }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2===0) {
      sumEvenElement += arr[i];
      countEvenElement += 1; 
    } 
  }
  return sumEvenElement/countEvenElement;

}

// Задача №3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i< arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
  
}
