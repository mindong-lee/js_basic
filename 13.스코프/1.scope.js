//식별자가 유효한 범위
//코드 블럭: {}, if(){}, for(){}, function() {}

{
  const a = 'a';
  console.log(a);
}
//console.log(a);

{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
}
