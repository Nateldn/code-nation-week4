// const { expect } = require('@jest/globals');
// const {test} = require ("jest-circus");
//const { test } = require('picomatch');
// const { expect } = require('@jest/globals');
// const { array } = require('yargs');
const {nateAdd,  nateSubtract, nateDivide, nateMultiple, copyArray} = require('./maths.js');


let array = [1,2,3];


    test("two numbers correctly add together", () => {
        expect(nateAdd(1, 2))
    })

    test("two numbers subtract", () => {
        expect(nateSubtract(10,5)).to(5);
    })

    test("return is a copy", () => {
        expect(copyArray(array)).not.toBe(array);
    })