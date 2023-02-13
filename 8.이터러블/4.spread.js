// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
//function(...iterable)
//[...iterable]
//{...obj}
//EcmaScript 2018
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));

//Rest Parameters
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);

//Array Concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

const arr4 = [...arr1, '🍓', ...arr2];
console.log(arr4);

//Object

const mindong = {
  name: 'mindong',
  age: 29,
  shallow_copy_test: { address: 'anyang' },
};
const updated = {
  ...mindong,
  job: 's/w engineer',
};

mindong.shallow_copy_test.address = 'seoul';

console.log(updated);

let arr7 = [[1], [2], [3]];
let arr8 = [...arr7];
console.log(arr8);
console.log(arr7.shift().shift());
console.log(arr7);
console.log(arr8);
