/**
 * global context this
 *  - browser : window 객체
 *  - node : 모듈
 */

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);

globalThis.setTimeout;
setTimeout(() => {}, 1000);

/**
 * 클래스 내부에선 앞으로 생성될 instance 자체
 * 함수 내부에서의 this - global
 * but 엄격 모드에선 undefined
 */
function fun() {
  console.log(this);
}

fun();

function a() {
  console.log(this);
}

function b() {
  console.log(this);
  a();
}

function c() {
  console.log(this);
  b();
}

c();
