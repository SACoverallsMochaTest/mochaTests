"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassToTest = void 0;
class ClassToTest {
    addNumbers(a, b) {
        return a + b;
    }
    promiseMinus(a, b) {
        return new Promise((resolve) => {
            resolve(a - b);
        });
    }
    asyncTimes(a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            return a * b;
        });
    }
    divideWithIf(a, b) {
        if ('number' === typeof a && 'number' === typeof b) {
            return a / b;
        }
        throw new Error('You did not pass a number as the second argument');
    }
}
exports.ClassToTest = ClassToTest;
//# sourceMappingURL=classToTest.js.map