const num1 = 123;
const num2 = new Number(123);

console.log(num1);
console.log(num2);

console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);

if (Number.isNaN()) {
}
const num3 = 102;
console.log(num3.toExponential());

const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toLocaleString('ar-EG'));

console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2));

console.log(Number.EPSILON); //0과 1사이에서 나타낼 수 있는 가장 작은 숫자

const num5 = 0.1 + 0.2 - 0.2;
console.log(num5);

function isEqual(origin, expected) {
  return Math.abs(origin - expected) < Number.EPSILON;
}

console.log(isEqual(0.1, num5));
