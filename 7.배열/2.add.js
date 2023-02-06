const fruits = ['🍌', '🍎', '🍇', '🍑'];

for (let i of fruits) {
  console.log(i);
}
// const fruits = ['🍌', '🍎', '🍇', '🍑'];
//추가, 삭제 좋지않은 방식
//인덱스 통한 생성
fruits[4] = '🍓';

delete fruits[1];
console.log(fruits);
