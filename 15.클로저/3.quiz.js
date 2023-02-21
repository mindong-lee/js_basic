function loop() {
  //var i;
  const array = [];
  //var과 let의 차이점
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
console.log(array);
array.forEach((func) => func());
