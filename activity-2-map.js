// The array method .map is an example of a higher
// order function.
// Declare a variable with five numbers, then
// use .map to iterate through the array and multiply each array item by 3.

let myArray = ['1', '2', '3', '4', '5']

myArray = myArray.map(arrayItem => {
    return arrayItem * 3
})


console.log(myArray);