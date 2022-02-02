let variable1 = "I'm a string";
let variable2 = 2;
let variable3 = false;


let myArray = ["item1", "item2", "item3", "item4"];
console.log(myArray);
myArray.push("item5");
console.log(myArray);


for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}



let balance = 1000;
// let amount = 100;

const withdraw = (num) => {
    return balance - num;
}

console.log(withdraw(100));
