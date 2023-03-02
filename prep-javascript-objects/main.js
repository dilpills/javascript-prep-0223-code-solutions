const person = {
  firstName: 'Dylan',
  lastName: 'Dao',
  hobby: 'tinkering'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'being a bum';
console.log("The person's current job is: " + person.job);

person['previousJob'] = 'Restaunteur';
console.log("The person's previous job is: " + person['previousJob']);

console.log('The complete person object: ', person);
