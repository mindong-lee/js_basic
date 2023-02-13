//논리연산자
// &&, ||
// short circuit evaluation

const obj1 = { name: '🐶' };
const obj2 = { name: '😺', owner: '오랜 주인' };

if (obj1 || obj2) {
  console.log('all true');
}

console.log(obj1 && obj2); // 앞이 truthy면 뒤 반환
console.log(obj1 || obj2); // 앞이 truthy면 앞 반환
console.log(false && obj2); // 앞이 falsy면 앞 반환
console.log(null || obj2); // 앞이 falsy면 뒤 반환

// 활용 예
// && : 조건이 truthy 일 때, 뭔가를 해야할 경우
// || : 조건이 falsy 일 때, 뭔가를 해야할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인 없음');
  }
  animal.owner = '바뀐 주인!';
}

function makeOwner(animal) {
  if (animal.owner) {
    throw new Error('주인 있음');
  }
  animal.owner = '새로운 주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때

let item = { price: 1 };
let price = item && item.price;
console.log(price);

let print1 = (message) => {
  let text = message || 'hello'; // text에 초기값 할당.
  console.log(text);
};

let print2 = (message = 'hi') => {
  console.log(message);
};

//print1은 param이 falsy한 값(false, '', null, undefined)이면 text에 초기값 할당
print1(undefined);
//print2는 param이 undefined일 때만 초기값 할당
print2(undefined);
