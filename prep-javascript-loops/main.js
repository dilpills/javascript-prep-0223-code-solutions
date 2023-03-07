// create your loops here.
function whileLoop1() {
  let i = 0;
  const arr = [];

  while (i < 10) {
    arr.push(i);
    i++;
  }
  return arr;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  let i = 0;
  const arr = [];

  while (i < 20) {
    arr.push(i);
    i += 2;
  }
  return arr;
}

console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  return arr;
}

console.log('forLoop1 output', forLoop1());

function forLoop2() {
  const arr = [];

  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion ' + (i));
  }
  return arr;
}

console.log('forLoop2 output', forLoop2());

function forInLoop1(object) {
  const obj = {
    name: 'Ada LoveLace',
    age: 'classic',
    hobby: 'computation',
    invention: 'analytical engine'
  };
  const arr = [];

  for (const x in obj) {
    // arr.push(obj[x]);
    arr.push(x);
  }
  return arr;
}
console.log('forInLoop1 output', forInLoop1());

function forInLoop2(object) {
  const obj = {
    name: 'Ada LoveLace',
    age: 'classic',
    hobby: 'computation',
    invention: 'analytical engine'
  };
  const arr = [];

  for (const x in obj) {
    arr.push(obj[x]);
    // arr.push(x);
  }
  return arr;
}
console.log('forInLoop2 output', forInLoop2());
