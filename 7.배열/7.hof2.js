let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ret = nums.map((value) => {
  if (value % 2 === 0) return value * 3;
  else return value;
});

console.log(ret);

ret = nums.flatMap((value) => [1, 2]);
console.log(ret);

ret = ['dream', 'coding'].map((text) => text.split(''));
console.log(ret);

ret = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(ret);

//sort
nums = [1, 2, 5, 6, 8, 11, 32];
nums.sort();
console.log(nums);

nums.sort((a, b) => a - b);
console.log(nums);

//reduce 배열의 요소들을 접어서 값을 하나로!
ret = nums.reduce((prev, cur) => {
  cur += prev;
  return cur;
}, 0);

console.log(ret);
