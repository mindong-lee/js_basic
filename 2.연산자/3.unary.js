//단항연산자 unary operators
// + - !

let a = 5;
a = -a;

let isFree = false;
console.log(!isFree);
console.log(!!isFree);

// 숫자가 아닌 타입을 숫자로 변환하면?
console.log('////////////////');
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+undefined);
console.log(+'text');

console.log('////////////////');
console.log(!0);
console.log(!'');
console.log(!-0);
console.log(!null);
console.log(!undefined);
console.log(!NaN);

console.log('////////////////');
console.log(!1);
console.log(!-1);
console.log(!'text');
console.log(!{});
console.log(![]);
console.log(!Infinity);
console.log(!-Infinity);
