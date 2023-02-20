const dog = { name: 'dd', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));
// [ 'name', 'emoji' ]
// [ 'dd', '🐶' ]
// [ [ 'name', 'dd' ], [ 'emoji', '🐶' ] ]

console.log('name' in dog); //true
console.log('name2' in dog); //false

console.log(dog.hasOwnProperty('name')); //true

// object의 각 property는 property descriptor 객체에 저장됨.

const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);
// {
//   name: { value: 'dd', writable: true, enumerable: true, configurable: true },
//   emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
// }

const des2 = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(des2);
// { value: 'dd', writable: true, enumerable: true, configurable: true }

Object.defineProperty(dog, 'name', {
  value: '멍x2',
  writable: false, //update 가능?
  enumerable: false, //열거 가능?
  configurable: false, //키 수정 가능?
});

console.log(dog.name);
console.log(Object.keys(dog));
console.log(Object.entries(dog));
delete dog.name; //불가능
// 멍x2
// [ 'emoji' ]
// [ [ 'emoji', '🐶' ] ]
