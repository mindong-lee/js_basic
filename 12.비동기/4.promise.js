function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('input seconds error!'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => {
    //필요한 일을 수행
    console.log('타이머 완료!');
  })
  .catch(console.error) //에러 처리
  .finally(() => console.log('끝!')); // 성공/실패 상관없이 무조건 수행
