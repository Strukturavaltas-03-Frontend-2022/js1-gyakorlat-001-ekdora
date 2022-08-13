let defaultPerson = { firstName: "John", lastName: "Doe", age: "33" };
let person = { firstName: "Dóra", lastName: "Kiss", age: "33" };
let person2 = { firstName: "", lastName: "", age: "" };

const personDataLog = (person) => {
  const firstName = person.firstName || defaultPerson.firstName;
  const lastName = person.lastName || defaultPerson.lastName;
  const age = person.age || defaultPerson.age;
  console.log(`My name is ${firstName} ${lastName}, and I'm ${age} years old.`);
}

personDataLog(person);
personDataLog(person2);