class Fruit {
  static MAX_FRUITS = 5;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }

  //클래스 레벨의 메소드
  static makeRandomFruit() {
    return new Fruit('banana', '🍌');
  }
}

// apple, orange는 Fruit 클래스의 instance
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
const banana = Fruit.makeRandomFruit();

console.log(banana);
console.log(Fruit.MAX_FRUITS);
apple.display();
orange.display();
banana.display();
