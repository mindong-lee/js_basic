//원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const num = 123; // primitive
console.log(num.valueOf()); // Wrapper
console.log(num.toString());

const text = 'hello, world!';
console.log(text.split(','));
console.log(text.length);
