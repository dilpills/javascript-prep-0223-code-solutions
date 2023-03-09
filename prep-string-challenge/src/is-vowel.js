/* exported isVowel */
function isVowel(char) {
  const charL = char.toLowerCase();
  if (charL === 'a') {
    return true;
  } else if (charL === 'e') {
    return true;
  } else if (charL === 'i') {
    return true;
  } else if (charL === 'o') {
    return true;
  } else if (charL === 'u') {
    return true;
  } else {
    return false;
  }
}
