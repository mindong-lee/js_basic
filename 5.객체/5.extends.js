class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log('eat!!!');
  }

  sleep() {
    console.log('sleep!!!');
  }
}

class Tiger extends Animal {}

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); //parent class constructor call
    this.ownerName = ownerName;
  }

  //overriding
  eat() {
    super.eat(); //parent method call
    console.log('dogs eat!!!');
  }
  play() {
    console.log('play!!!');
  }
}

const tiger = new Tiger('yellow');
console.log(tiger);
tiger.eat();
tiger.sleep();

const dog = new Dog('white', 'mindong');
console.log(dog);
dog.eat();
tiger.sleep();
dog.play();
