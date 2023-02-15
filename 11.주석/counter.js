let count = 0;

// export default : 딱 하나만 export할 때
export let count2;

export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
