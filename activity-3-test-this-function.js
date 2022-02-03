// Test this function to make sure it works by passing a number to the doMaths function, then passing a number and one of the four maths functions, to the returned function.



const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
return a - b; }
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
return a/b; }
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}    

doMaths(10);    