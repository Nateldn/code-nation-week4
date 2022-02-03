// Write a simple function which logs “Hello Code Nation” to the console.
// Then write a higher order function which will run our simple function five times, even though you only call it one time.
// Hint: Pass the simple function as a parameter, and this will involve a for loop.


const sayHello = () => {
    console.log("Hello Code Nation");

}

sayHello();

const runItFiveTimes = sayHello => {
    for (let i = 0; i = 5; i++)
    return i;
} 
 

runItFiveTimes();


