function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
  return Promise.reject(new Error(`can't get chicken`));
  //return Promise.resolve(`πͺ΄ => π`);
}

//Promise chaining
//μ€κ°μ catch ν΅ν΄μ μλ¬λ°μμ μ΄κΈ°κ° μ€μ λ κ°λ₯
getChicken()
  .catch((error) => {
    console.log(error.name);
    return 'π₯';
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((fry) => console.log(fry));

//Simple
getChicken()
  .catch(() => 'π')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
