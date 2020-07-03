export class ClassToTest {
  addNumbers(a: number, b: number): number {
    return a+b;
  }

  promiseMinus(a: number, b: number): Promise<number> {
    return new Promise((resolve) => {
      resolve(a-b);
    });
  }

  async asyncTimes(a: number, b: number): Promise<number> {
    return a*b;
  }

  divideWithIf(a: number, b: any): number {
    if ('number' === typeof a && 'number' === typeof b) {
      return a / b;
    }

    throw new Error('You did not pass a number as the second argument');
  }
}