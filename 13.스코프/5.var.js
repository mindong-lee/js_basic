// var 특징
// 쓰지마세요!!!

//1.변수 선언하는 키워드 없이 할당이 가능함.
something = 5;
console.log(something);

//2. 재선언이 가능하다.
var poo = '💩';
var poo = '💩';
console.log(poo);

//3. 블록 레벨 스코프 X
var apple = null;
{
  var apple = '🍎';
}
console.log(apple);

var apple = null;
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple);

//4. 함수 레벨 스코프
