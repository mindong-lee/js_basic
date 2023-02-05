// 객체를 손쉽게 만들 수 있는 template
// 1. 생성자 함수 (old)
// 2. 클래스

// function Fruit(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
//   this.display = () => {
//     console.log(`${this.name}: ${this.emoji}`);
//   };
//   //return this; //생략 가능
// }

class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }

  display2 = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple, orange는 Fruit 클래스의 instance
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

apple.display();
orange.display();

apple.display2();
orange.display2();
