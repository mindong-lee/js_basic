// Destructuring Assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const nums = [1, 2, 3, 4, 5, 6];
const [first, second, ...others] = nums;

console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;

console.log(`[${x},${y},${z}]`);

function createEmoji() {
  return ['apple', '🍎'];
}

let [title, emoji] = createEmoji();

console.log(title);
console.log(emoji);

const mindong = {
  name: 'mindong',
  age: 29,
  job: 's/w engineer',
};

//구조분해를 통한 매개변수 전달
const display = function ({ name, age, job }) {
  console.log(name);
  console.log(age);
  console.log(job);
};

display(mindong);

const { name, age, job: occupation, pet = 'dog' } = mindong;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);
