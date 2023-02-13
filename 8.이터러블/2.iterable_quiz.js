const myIterable = {
  [Symbol.iterator]() {
    let max = 10;
    let cnt = 0;
    return {
      next() {
        return { value: cnt++ * 2, done: cnt > max };
      },
    };
  },
};

for (const item of myIterable) {
  console.log(item);
}

function makeIterable(init, max, callback) {
  //함수 아닌 객체를 반환
  return {
    [Symbol.iterator]() {
      //next함수 아닌 next함수 가진 객체를 반환
      return {
        next() {
          return { value: callback(init++), done: init > max };
        },
      };
    },
  };
}

for (let item of makeIterable(0, 20, (num) => num - 1)) {
  console.log(item);
}
