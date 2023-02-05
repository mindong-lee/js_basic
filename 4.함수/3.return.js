// return을 명시적으로 하지 않으면 자동으로 undefined 반환!
function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result);

function print(num) {
  if (num < 0) return; //return undefined
  console.log(num);
}

let num = 3;
print(num);
