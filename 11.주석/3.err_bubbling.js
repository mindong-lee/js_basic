function a() {
  throw new Error('error');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('이 에러는 내가 핸들링 할 수 없겠다.');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('catched!');
}
console.log('done');
