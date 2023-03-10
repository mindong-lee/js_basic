// 내부 정보를 은닉하고 공개 함수(public)를 통한 데이터 조작을 위해 씀
// 캡슐화
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}

let counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
