import { ClassToTest } from './lib/classToTest';

const tester = new Tester();
const A = 10;
const B = 5;

(async () => {
  console.log(`${A} + ${B} = ${tester.addNumbers(A, B)} (Normal)`);

  tester.promiseMinus(A,B).then(result => console.log(`${A} - ${B} = ${result} (Promise)`));

  const asynResult = await tester.asyncTimes(A,B);
  console.log(`${A} * ${B} = ${asynResult} (Async)`);
})();
