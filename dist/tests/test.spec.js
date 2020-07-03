"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classToTest_1 = require("../src/lib/classToTest");
const should = require("should");
const classToTest = new classToTest_1.ClassToTest();
const A = 10;
const B = 10;
describe('Simple Mocha Tests', () => {
    it('.addNumbers should add to numbers together correctly', () => {
        should(classToTest.addNumbers(A, B)).equal(A + B);
    });
    it('.promiseMinus shoudl return a promise which will resolve to the first number minus the second number', () => {
        classToTest.promiseMinus(A, B)
            .then((result) => {
            should(result).equal(0);
        });
    });
    // Not testing .asyncTimes on purpose to check code coverage tool in coveralls.io
    // Only testing one branch of the if statement on purpose to check code coverage tool in coveralls.io
    it('.divideWithIf should divide the first number by the second number correctly', () => {
        should(classToTest.divideWithIf(A, B)).equal(A / B);
    });
});
//# sourceMappingURL=test.spec.js.map