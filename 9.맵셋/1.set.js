//Set

const set = new Set([1, 2, 3, 1]);
console.log(set);
console.log(set.size);
console.log(set.has(3));
// 순회
set.forEach((item) => console.log(item));
console.log(set.keys());
console.log(set.values());
console.log(set.entries());

set.add(5);
console.log(set);
set.delete(5);
console.log(set);
set.clear();
console.log(set);

let obj1 = { name: 'apple', emoji: '🍎' };
let obj2 = { name: 'banana', emoji: '🍌' };

const objSet = new Set([obj1, obj2]);

obj1.name = 'redapple';
console.log(objSet);

let obj3 = { name: 'banana', emoji: '🍌' };
objSet.add(obj3);
console.log(objSet);
