const fruits = ['🍌', '🍓', '🍇', '🍑', '🍓'];
const target = ['🍏', '🍓'];
ret = fruits.map((value) => (value === '🍓' ? '🥝' : value));

console.log(ret);

ret = fruits.filter((value) => value === '🍓').length;

console.log(ret);

const match = (targets, lists) => {
  return targets.filter((value) => lists.includes(value));
};

ret = match(target, fruits);
console.log(ret);

const nums = [3, 16, 5, 25, 4, 34, 21];

//함수형
ret = nums
  .filter((value) => value > 5)
  .reduce((avg, cur, _, arr) => avg + cur / arr.length, 0);
console.log(ret);
