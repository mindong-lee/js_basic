// 동결 Object.freeze
// 추가x, 삭제x, 쓰기x, 속성 재정의 x

const mindong = { name: 'mindong' };
const dog = { name: 'ddddssss', emoji: '🐕', owner: mindong };

Object.freeze(dog);
dog.name = 'asd';
dog.age = 4;
delete dog.owner;
console.log(dog);
//{ name: 'ddddssss', emoji: '🐕', owner: { name: 'mindong' } }

mindong.name = '이 민동';
console.log(dog);
//{ name: 'ddddssss', emoji: '🐕', owner: { name: '이 민동' } }

//밀봉
// 값 수정 o, 추가 x, 삭제 x, 속성 재정의 x
const cat = { ...dog };
//Object.assign(cat, dog);
Object.seal(cat);
cat.name = 'nyaong';
console.log(cat);
console.log(Object.isFrozen(dog)); //true
console.log(Object.isSealed(dog)); //true
console.log(Object.isSealed(cat)); //true

// 확장 금지
// 추가 x
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); //false
tiger.name = '오홍';
delete tiger.name;
tiger.age = 1;
console.log(tiger); //{}
