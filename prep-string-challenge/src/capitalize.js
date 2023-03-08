/* exported capitalize */
function capitalize(word) {
  const word1 = word.toUpperCase();
  const word2 = word.toLowerCase();
  const word4 = word2.slice(1);
  const word3 = word1.slice(0, 1) + word4;
  return word3;
}
