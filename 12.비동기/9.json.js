// JSON : JavaScript Object Notation
// Server <-> Client 간의 Http 통신을 위한 Object 형태의 Text Format
// stringify(object) : JSON
// parse(JSON) : object

const mindong = {
  name: 'mindong',
  age: 29,
  eat: () => {
    console.log('eat');
  },
};
console.log(mindong);

//직렬화 Serializing : object -> string
//property만 변환됨.
const json = JSON.stringify(mindong);
console.log(json);

//역직렬화 Deserializing : string -> object
const jsonToObj = JSON.parse(json);
console.log(jsonToObj);
