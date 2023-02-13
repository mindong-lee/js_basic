const arr1 = new Array(1, 2, 3);
console.log(arr1);

const arr2 = new Array(2);
console.log(arr2);

const arr3 = Array.of(1, 2, 3, 4, 5);
console.log(typeof arr3);
console.log(arr3);

const arr4 = [1, 2, 3];
console.log(typeof arr4);
console.log(arr4);

const arr5 = Array.from('text');
console.log(arr5);

//js 상에서 배열은 연속적으로 이어져 있지 않고 object와 유사함.
//js 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체
//이를 보완하기 위해 타입이 정해져 있는 타입 배열이 있음.(Typed Collections)
// Int8Array, Int16Array, ...

const arr6 = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});

console.log(arr6);
