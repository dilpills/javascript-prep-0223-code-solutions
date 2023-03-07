/* Your JS goes in this file */
const age = 28;
function isAdult(age) {
  if (age < 21) {
    return false;
  } else {
    return true;
  }
}
console.log(isAdult(age));

const student1Score = 50;
function didStudentPass(score) {
  if (score > 70) {
    return true;
  } else {
    return false;
  }
}
console.log(didStudentPass(student1Score));

const student2Score = 91;
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70 && score >= 60) {
    return 'D';
  } else if (score < 80 && score >= 70) {
    return 'C';
  } else if (score < 90 && score >= 80) {
    return 'B';
  } else if (score < 100 && score >= 90) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));

const season = 'summer';
function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it\'s hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autum') {
    return 'the leaves are changing color';
  } else if (season === 'winter') {
    return 'it\'s cold today';
  } else {
    return 'please enter a valid season';
  }
}
console.log(seasonMessenger(season));

const dayOfTheWeek = 'friday';
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else {
    return 'It\'s a weekday!';
  }
}
console.log(dayDetector(dayOfTheWeek));
