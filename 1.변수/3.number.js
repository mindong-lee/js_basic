/**
 * DATA TYPE
 * primitive type - (number, string, boolean, null, undefined, Symbol)
 * object type - (object, function)
 */

let integer = 123;
let negative = -123;
let double = 1.23;

let bin = 0b1111011;
let oct = 0o173;
let hex = 0x7b;

console.log(bin);
console.log(oct);
console.log(hex);

console.log(0 / 123);
console.log(123 / 0);
console.log(123 / -0);
console.log(123 / 'text');

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt
let bigInt = 123456789012345678901234567890n;