let defaultPerson = { firstname: "John", lastname: "Doe", age: "33" };
let person = { firstname: "Dóra", lastname: "Kiss", age: "33" };
let person2 = { firstname: "", lastname: "", age: "" };

const personDataLog = (person) => {
  const firstname = person.firstname || defaultPerson.firstname;
  const lastname = person.lastname || defaultPerson.lastname;
  const age = person.age || defaultPerson.age;
  return `My name is ${firstname} ${lastname}, and I'm ${age} years old.`;
}

personDataLog(person);
personDataLog(person2);