function runInDelay(callback, seconds) {
  if (!seconds || seconds < 0) {
    throw new Error('input time error!');
  }
  setTimeout(callback, seconds * 1000);
}

let seconds = -1;
runInDelay(() => {
  console.log(seconds);
}, seconds);
