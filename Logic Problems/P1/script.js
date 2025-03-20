

const arrval=[1,2,3,4];
// let a=Number(prompt("Enter the first value "));
// let b=Number(prompt("Enter the Second value "));

val1=arrval.indexOf(1) 
val2=arrval.indexOf(2) 


let result=arrval.splice()
let sum=0;
for( val of result ){
    // console.log(val) 
        sum+=val
}

console.log(result); 

let numbers = [10, 20, 30, 40, 50]; // Predefined array

// Ask the user for two indexes
let index1 = parseInt(prompt("Enter the first index (0-4):"));
let index2 = parseInt(prompt("Enter the second index (0-4):"));

// Validate user input
if (index1 >= 0 && index1 < numbers.length && index2 >= 0 && index2 < numbers.length) {
    let sum = numbers[index1] + numbers[index2]; // Add values from the array
    alert("Sum of selected values: " + sum);
} else {
    alert("Invalid index! Please enter numbers between 0 and " + (numbers.length - 1));
}



