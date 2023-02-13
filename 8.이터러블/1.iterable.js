//[Symbol.iterator](): Iterator;
//심볼 정의를 가진 객체나, 특정 함수가 Iterator를 리턴하면 순회 가능하다.
//values(), keys(), entries()

const arr = [1, 2, 3];

for (const item of arr) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 };

/*
error!! - obj is not iterable

for (const item of obj) {
  console.log(item);
}
*/

for (const item in obj) {
  console.log(item);
}

const iterator = arr.values();

console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());
