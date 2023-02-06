const text1 = 'hello';
const text2 = new String('hello');

console.log(text1.charAt(0));
console.log(text1[0]);
console.log(text1.length);
console.log(text1.indexOf('l'));
console.log(text1.lastIndexOf('l'));
console.log(text1.startsWith('h'));
console.log(text1.endsWith('lo'));
console.log(text1.includes('H'));
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());
console.log(text1.substring(0, 3));
console.log(text1.slice(2));
console.log(text1.slice(-2));

const space = '              2312    ';

console.log(space.trim());
