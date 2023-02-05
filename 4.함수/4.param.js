//매개변수의 기본값은 undefined
//매개변수 정보는 함수 내부에서 접근 가능한 arguments 객체에 저장됨.
//매개변수 기본값 초기화 가능. undefined일 때 할당.

function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b;
}

console.log(add(2));

// Rest 매개변수
// 인자 개수가 확실하지 않을 때 사용.

function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
