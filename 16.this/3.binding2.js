function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름은 ${this.name}`);
  };
  // 1. bind 함수를 이용해서 수동적으로 바인딩
  this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  // 2. array function을 사용: arrow 함수는 렉시컬 환경에서의 this를 기억함.
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
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
