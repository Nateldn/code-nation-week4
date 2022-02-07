// Write a simple function which logs “Hello Code Nation” to the console.
// Then write a higher order function which will run our simple function five times, even though you only call it one time.
// Hint: Pass the simple function as a parameter, and this will involve a for loop.


const sayHello = () => {
    return ("Hello Code Nation");
}

sayHello();

const runItFiveTimes = (parameter) => {
    for (let i = 1; i <= 4; i++)
   parameter();
} 
 

runItFiveTimes(sayHello); // run higher order function


let myString = "Some string that I'd like to log multiple times."

const logItMultipleTimes = (theInput)=> {
    for (let i = 0; i <= 10; i++) {
        console.log(theInput);
    }    
} 

logItMultipleTimes(myString);
