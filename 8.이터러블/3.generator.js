// const myIterable = {
//   [Symbol.iterator]: () => {
//     let max = 10;
//     let cnt = 0;
//     return {
//       next() {
//         return { value: cnt++ * 2, done: cnt > max };
//       },
//     };
//   },
// };

function* myGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i * 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = myGenerator();
let next = multiple.next();
console.log(next);
next = multiple.next();
console.log(next);
next = multiple.next();
console.log(next);
//multiple.return();
multiple.throw('err');
next = multiple.next();
console.log(next);
