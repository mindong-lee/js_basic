//콜백함수

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//전달된 action은 콜백함수이다.
//전달될 당시에 함수를 바로 호출하는 게 아니라
//함수를 가리키는 참조값이 전달된다.
//고차함수 안에서 필요한 순간에 호출이 나중에 됨.
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}
