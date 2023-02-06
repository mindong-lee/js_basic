// 배열 자체 변경하는지, 새로운 배열을 반환하는지

const fruits = ['🍌', '🍎', '🍇', '🍑'];

console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

console.log(fruits.indexOf('🍎'));

console.log(fruits.includes('🍌'));

fruits.push('🍍');
console.log(fruits);

fruits.unshift('🍒');
console.log(fruits);
console.log(fruits.length);

let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

let firstItem = fruits.shift();
console.log(fruits);
console.log(firstItem);

const deleted = fruits.splice(1, 1);
console.log(fruits);
console.log(deleted);

fruits.splice(1, 0, '🍏', '🌸');
console.log(fruits);

///////////////////////////////////////////////////////////
let newArr = fruits.slice(1, 4);
console.log(newArr);
console.log(fruits.length);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr3);

console.log(arr1.reverse());

let arr4 = [
  [1, 2, 3],
  [4, [5, 6]],
];

console.log(arr4.flat(2));

arr5 = arr4.flat(2);

arr5.fill(0);
console.log(arr5);
arr5.fill(1, 1, 3);
console.log(arr5);

let arr6 = arr5.join(',');
console.log(arr6);
