/* exported compact */
function compact(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== false) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
