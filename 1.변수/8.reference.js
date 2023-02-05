//원시 타입은 값이 복사되어 전달

let a = 1;
let b = a;

b = 2;

console.log(a);
console.log(b);

//객체 타입은 참조값(메모리 주소)이 복사되어 전달됨

let orange = {
    name: '오렌지'
}
let apple = orange
orange.name = 'apple';

console.log(apple);
console.log(orange);