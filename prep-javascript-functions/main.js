function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(2, 2));

function convertHoursToMinutes(hours) {
  return hours * 60;
}

console.log(convertHoursToMinutes(2));

function getGreeting(name) {
  const greeting = 'Hello ' + name;
  return greeting;
}

console.log(getGreeting('World!'));

function addAndMultiplyBy5(num1, num2) {
  const answer = (num1 + num2) * 5;
  return answer;
}

console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  const answer = (num1 * num2) / 5;
  return answer;
}

console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  const answer = num1 - num2;
  return answer;
}

console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  const answer = 2 * radius * 3.14;
  return answer;
}

console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(getFullName('Juan', 'Ramirez'));
