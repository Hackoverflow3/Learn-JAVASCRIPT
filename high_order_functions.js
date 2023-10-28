/*
    SCENARIO

Task Description: Create a JavaScript program that filters an array of numbers to find all the even numbers and then doubles each of them. You should implement this using high-order functions and callbacks.

Here's a step-by-step guide:

    Create an array of numbers, for example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
    Write a higher-order function named filterAndDouble that takes two parameters: an array and a callback function. This function should use the callback to filter the even numbers from the array and then double each of them.
    Write a callback function named isEven that takes a number and returns true if the number is even and false if it's not.
    Use the filterAndDouble function to filter and double the even numbers from the array you created in step 1.
    Print the resulting array, which should contain the doubled even numbers.
*/


function filterAndDouble(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) {
            arr[i] *= 2;
        }
    }
}

function isEven(ar) {
    if (ar % 2 === 0)
        return true;
    else
        return false;
}

const arrays = [];
for (let i = 0; i < 11; i++) {
    arrays.push(i);
}


// when we pass the function here basically we have to pass the function without the paranthesis and if we pass with the paranthesis it means we are passing the return value not the function
// basic mistake that i did 
filterAndDouble(arrays, isEven);
console.log(arrays);