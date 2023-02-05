//접근 제어자 - encapsulation
//private(#), public(기본), protected

class Fruit {
  //Field
  #name;
  #emoji;
  #type = '과일'; //초기화

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name} : ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');

apple.display();

console.log(apple);
