console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(this);

eval('const num = 2; console.log(num)');
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));

// URL (URI, 하위개념)
// 아스키 문자로만 구성
// 한글, 특수문자는 이스케이프 처리

const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);

console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
