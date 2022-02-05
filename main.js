const { nateAdd,
    nateSubtract,
    nateDivide,
    nateMultiple, copyArray} = require('./maths.js');

    let array = [1,2,3];
    

    console.log(nateAdd(1,2));
    console.log(nateDivide(10,2));
    console.log(nateMultiple(1,2));
    console.log(nateSubtract(1,2));


    const os = require('os');
    const fs = require('fs');
    const _ = require('lodash');

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());


let userDetails = os.userInfo().username;

// fs.appendFile('anExample.txt', `Hello ${userDetails}`, (error) => {
//     if (error) {
//         console.log('oops');
//     }
// })


let myRandom = _.random(1, 5);

console.log(myRandom)

console.log(copyArray);