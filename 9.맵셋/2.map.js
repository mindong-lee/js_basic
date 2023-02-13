const map = new Map([
  ['apple', '🍎'],
  ['banana', '🍌'],
]);
console.log(map);
map.set('orange', '🍊');
console.log(map);

console.log(map.size);
console.log(map.has('apple'));
console.log(map.get('orange'));

map.forEach((value, key, map) => {
  console.log(key);
  console.log(value);
  console.log(map);
});

const key = { name: 'mindong', birth: '940402' };
const info = { pw: '123123123' };

const obj = {
  [key]: info,
};

//key.name = 'ellie';
console.log(obj);

const map2 = new Map([[key, info]]);
key.name = 'ellie';
console.log(map2);
