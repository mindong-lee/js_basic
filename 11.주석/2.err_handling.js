function readFile(path) {
  throw new Error('파일 경로를 찾을 수 없음');
  return 'file';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = 'default';
  } finally {
    console.log('성공하든 실패하든 마지막으로 리소스를 정리하자');
  }
  const result = content + 'good';
  return result;
}

const ret = processFile('/user');
console.log(ret);
