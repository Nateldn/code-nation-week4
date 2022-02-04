

const { nateAdd,
    nateSubtract,
    nateDivide,
    nateMultiple} = require('./maths.js');

    console.log(nateAdd(1,2));
    console.log(nateDivide(10,2));
    console.log(nateMultiple(1,2));
    console.log(nateSubtract(1,2));


    const os = require('os');
    const fs = require('fs');

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());


let userDetails = os.userInfo().username;

fs.appendFile('anExample.txt', `Hello ${userDetails}`, (error) => {
    if (error) {
        console.log('oops');
    }
})