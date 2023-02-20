function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

//????? arrow function을 쓰면 안되네???
Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji);
  this.owner = owner;
}
//Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('같이 놀자!!!');
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자!!');
};
const dog1 = new Dog('a', '🐶', 'mindong');
dog1.play();
dog1.printName();

const tiger = new Tiger('t', '🐯');
tiger.hunt();
tiger.printName();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);

console.log(tiger instanceof Dog);
console.log(tiger instanceof Animal);
console.log(tiger instanceof Tiger);
