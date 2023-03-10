let getApple = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 1000);
  });
};

let getBanana = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 2000);
  });
};

let getOrange = () => {
  return Promise.reject(new Error('No Orange'));
};

//๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ ธ์ค๊ธฐ.
const fruits = [];

getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

//Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ!
Promise.all([getBanana(), getApple()]).then((fruits) =>
  console.log('all', fruits)
);

//Promise.race ์ฃผ์ด์ง Promise์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋ ๊ฒ์ด ์ด๊น!
Promise.race([getBanana(), getApple()]) //
  .then(console.log);

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all', fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all', fruits))
  .catch(console.log);
