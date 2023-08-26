const person = {
  fistName: 'Frodo',
  lastName: 'Baggins',
  age: 52,
}

function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

console.log(getFullName(person.fistName, person.lastName)); // Frodo Baggins