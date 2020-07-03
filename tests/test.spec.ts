import { ClassToTest } from '../src/lib/classToTest';
import * as should from 'should';

const classToTest = new ClassToTest();
const A = 10;
const B = 10;


describe('Simple Mocha Tests', () => {
  it('.addNumbers should add to numbers together correctly', () => {
    should(classToTest.addNumbers(A,B)).equal(A+B);
  });

  it('.promiseMinus shoudl return a promise which will resolve to the first number minus the second number', () => {
    classToTest.promiseMinus(A, B)
      .then((result) => {
        should(result).equal(0);
      });
  });

  // Not testing .asyncTimes on purpose to check code coverage tool in coveralls.io
  it('.addNumbers should add to numbers together correctly', async () => {
    should(await classToTest.asyncTimes(A,B)).equal(A*B);
  });
})