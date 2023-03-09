/* exported getWords */
function getWords(string) {
  const arr = [];
  if (string.length > 0) {
    return string.split(' ');
  } else {
    return arr;
  }
}
