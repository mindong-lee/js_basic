// 1

const text = 'abcdefghijk';
const obj1 = { a: 1, b: 2, c: 3 };

for (let a in obj1) {
  console.log(`${a} : ${obj1[a]}`);
}
for (let a of text) {
  console.log(a);
}

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 2

const ids = 'user1, user2, user3, user4';
console.log(ids.split(', '));

// 3
setInterval(() => {
  const now = new Date().toLocaleString('ko-KR');
  console.log(now);
}, 1000);
