// this 바인딩
// 자바스크립트에선 누가 호출하냐에 따라서 this가 달라짐
// 즉, this는 호출하는 caller에 의해 동적으로 결정됨.

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름은 ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름은 ${this.name}`);
  };
}

const cat = new Cat('nana');
const dog = new Dog('dodo');

cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log('set monitor');
  printName();
}

printOnMonitor(cat.printName);
