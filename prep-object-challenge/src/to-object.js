/* exported toObject */
// function toObject(keyValuePair) {
//  const object = {};
//  for (let i = 0; i < keyValuePair.length; ++i) {
//    object[i] = keyValuePair[i];
//  }
//  console.log(object);
//  return object;
// }

function toObject(keyValuePair) {
  const obj = {
    [keyValuePair[0]]: keyValuePair[1]
  };
  return obj;
}
