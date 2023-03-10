//const dog1 = { name: 'ssss', emoji: 'π', owner: mindong };
//const dog2 = { name: 'dddd', emoji: 'πβπ¦Ί', owner: mindong };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // μΈμ€ν΄μ€ λ λ²¨μ ν¨μ
  // this.printName = () => {
  //   console.log(`${this.name} ${this.emoji}`);
  // };
}

const dog1 = new Dog('a', 'π');
const dog2 = new Dog('b', 'π©');
console.log(dog1, dog2);
//Dog { name: 'a', emoji: 'π', printName: [Function (anonymous)] }
//Dog { name: 'b', emoji: 'π©', printName: [Function (anonymous)] }

//νλ‘ν  νμ λ λ²¨μ ν¨μ

Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
console.log(dog1, dog2);
//Dog { name: 'a', emoji: 'π' }
//Dog { name: 'b', emoji: 'π©' }

dog1.printName(); //a π
dog2.printName(); //b π©

//μΈμ€ν΄μ€ λ λ²¨μμ λμΌν μ΄λ¦μΌλ‘ ν¨μλ₯Ό μ¬μ μ κ°λ₯(μ€λ²λΌμ΄λ©)
dog1.printName = () => {
  console.log('μλ!!!');
};
dog1.printName(); //μλ!!!

//Static level
Dog.hello = () => {
  console.log('hello');
};

Dog.hello();
