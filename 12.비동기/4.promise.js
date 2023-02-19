//promise : 비동기적으로 수행한 결과(성공 혹은 실패)를 나타내주는 객체
//pending, fulfilled,

const runInDelay = (seconds) => {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds에 문제가 있어!'));
      return;
    }

    setTimeout(resolve, seconds * 1000);
  });
};

runInDelay(2)
  .then(() => console.log('타이머 작동!'))
  .catch(console.error)
  .finally(() => console.log('무조건 실행!'));
