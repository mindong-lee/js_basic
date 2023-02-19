function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error(`can't get chicken`));
  //return Promise.resolve(`🪴 => 🐔`);
}

//Promise chaining
//중간에 catch 통해서 에러발생시 초기값 설정도 가능
getChicken()
  .catch((error) => {
    console.log(error.name);
    return '🐥';
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((fry) => console.log(fry));

//Simple
getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
