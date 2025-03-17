// Sum the Array
let arr = [10, 10, 5, 5];
let sum = 0;
for (i = 0; i < arr.length; i++) {
    sum = arr[i];
}

console.log(sum);

// Reverse Array  1

let arr2 = [1, 2, 3, 4, 5, 8];

let reverse = arr2.reverse();

console.log(reverse);

// Reverse Array  2

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let result = [];
for (i = arr3.length - 1; i >= 0; i--) {
    result.push(arr3[i]);
}

console.log(arr3);
console.log(result);
