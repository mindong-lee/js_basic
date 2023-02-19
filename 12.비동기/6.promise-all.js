let getApple = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 1000);
  });
};

let getBanana = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 2000);
  });
};

let getOrange = () => {
  return Promise.reject(new Error('No Orange'));
};

//바나나와 사과를 같이 가져오기.
const fruits = [];

getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

//Promise.all 병렬적으로 한 번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]).then((fruits) =>
  console.log('all', fruits)
);

//Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then(console.log);

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all', fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all', fruits))
  .catch(console.log);
