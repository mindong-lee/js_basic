class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  printName = function () {
    console.log(`${this.name} ${this.emoji}`);
  };
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }

  play = () => {
    console.log('놀자🐶');
  };

  printName = () => {
    console.log(`${this.name} ${this.emoji} and owner is ${this.owner}`);
  };
}

class Tiger extends Animal {
  hunt = () => {
    console.log('어흥🐯');
  };
}

const tiger = new Tiger('tiger', '🐅');
const dog = new Dog('dog', '🐩', 'mindong');

tiger.printName();
dog.printName();
tiger.hunt();
