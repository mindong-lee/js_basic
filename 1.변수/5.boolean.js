let isFree = true;
let isActivated = false;

// !!(연산자)를 붙이면 값을 true, false로 변환

//Falsy 거짓인 값
console.log("Falsy!");
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//Truthy 참인 값
console.log("Truthy!");
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);
console.log(!!-Infinity);

