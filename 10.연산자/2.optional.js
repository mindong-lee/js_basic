// optional chaning
// ES11 (ECMAScript 2020)

let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: '🐶', owner: { name: '민동' } };

console.log(obj && obj.owner && obj.owner.name);
console.log(obj?.owner?.name);
