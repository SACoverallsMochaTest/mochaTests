

function addNumbers(a: number, b: number): number {
  return a+b;
}

function promiseAdd(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    resolve(a+b);
  });
}

module.exports = {
  addNumbers,
  promiseAdd,
}