const fruits = ['🍌', '🍎', '🍇', '🍑', '🍊'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(function (value, index, array) {
  console.log(value);
});

fruits.forEach((value) => {
  console.log(value);
});

console.log('----------------------------');

let ret = fruits.find((value) => value === '🍊');

console.log(ret);

ret = fruits.findIndex((value) => value === '🍇');

console.log(ret);

ret = fruits.some((value) => value === '🍎');

console.log(ret);

ret = fruits.every((value) => value === '🍎');

console.log(ret);

ret = fruits.filter((item) => item === '🍊');

console.log(ret);
