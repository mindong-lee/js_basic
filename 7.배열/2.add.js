const fruits = ['π', 'π', 'π', 'π'];

for (let i of fruits) {
  console.log(i);
}
// const fruits = ['π', 'π', 'π', 'π'];
//μΆκ°, μ­μ  μ’μ§μμ λ°©μ
//μΈλ±μ€ ν΅ν μμ±
fruits[4] = 'π';

delete fruits[1];
console.log(fruits);
