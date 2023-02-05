//let
let a=1;
a=2;

//const 재할당이 불가능

const text = 'hello';
//text = 'hi'  //error

//상수는 대문자로 표기
const MAX_FRUITS = 5;

//상수변수 자체는 재할당이 불가하지만, 변경은 가능하다.
const orange = {
    name: 'orange',
    color: 'orange',
    display: '🍊'
};

orange.name = '오렌지';

console.log(orange);