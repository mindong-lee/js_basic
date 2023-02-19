print();

function print() {
  console.log('hello');
}

// 변수(let, const)와 클래스는 선언만 호이스팅이 되고
// 초기화는 안됨.
// 초기화 전 접근 시 에러 발생
let hi = 'hi';
console.log(hi);

//const cat = new Animal();
class Animal {}

let x = 1;
{
  console.log(x); //hosting으로 인한 error
  let x = 2;
}
