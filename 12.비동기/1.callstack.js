function a() {
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

try {
  let result = c();
  console.log(result);
} catch (error) {
  console.log(error);
}
