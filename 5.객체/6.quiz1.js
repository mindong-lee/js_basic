// 카운터 만들기

class StaticCounter {
  static #count = 0;

  static increase() {
    this.#count++;
  }

  static get value() {
    return this.#count;
  }
}

class InstanceCounter {
  #count;
  constructor(initValue) {
    if (isNaN(initValue) || initValue < 0) {
      this.#count = 0;
    } else {
      this.#count = initValue;
    }
  }

  increase = () => {
    this.#count++;
  };

  init() {
    this.#count = 0;
  }
  get value() {
    return this.#count;
  }
}

StaticCounter.increase();
StaticCounter.increase();
console.log(StaticCounter.value);

const ic = new InstanceCounter(2);
ic.increase();
ic.increase();
console.log(ic.value);
ic.init();
console.log(ic.value);
