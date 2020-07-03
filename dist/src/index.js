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
const classToTest_1 = require("./lib/classToTest");
const tester = new classToTest_1.ClassToTest();
const A = 10;
const B = 5;
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${A} + ${B} = ${tester.addNumbers(A, B)} (Normal)`);
    tester.promiseMinus(A, B).then(result => console.log(`${A} - ${B} = ${result} (Promise)`));
    const asynResult = yield tester.asyncTimes(A, B);
    console.log(`${A} * ${B} = ${asynResult} (Async)`);
}))();
//# sourceMappingURL=index.js.map