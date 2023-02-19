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

//async, await
//return : Promise
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();

  return [banana, apple];
}

fetchFruits() //
  .then(console.log);
