//const dog1 = { name: 'ssss', emoji: '🐕', owner: mindong };
//const dog2 = { name: 'dddd', emoji: '🐕‍🦺', owner: mindong };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수
  // this.printName = () => {
  //   console.log(`${this.name} ${this.emoji}`);
  // };
}

const dog1 = new Dog('a', '🐕');
const dog2 = new Dog('b', '🐩');
console.log(dog1, dog2);
//Dog { name: 'a', emoji: '🐕', printName: [Function (anonymous)] }
//Dog { name: 'b', emoji: '🐩', printName: [Function (anonymous)] }

//프로토 타입 레벨의 함수

Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
console.log(dog1, dog2);
//Dog { name: 'a', emoji: '🐕' }
//Dog { name: 'b', emoji: '🐩' }

dog1.printName(); //a 🐕
dog2.printName(); //b 🐩

//인스턴스 레벨에서 동일한 이름으로 함수를 재정의 가능(오버라이딩)
dog1.printName = () => {
  console.log('안녕!!!');
};
dog1.printName(); //안녕!!!

//Static level
Dog.hello = () => {
  console.log('hello');
};

Dog.hello();
