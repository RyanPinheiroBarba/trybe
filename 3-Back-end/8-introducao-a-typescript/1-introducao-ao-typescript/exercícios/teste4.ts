// Object Type

function printPersonalInfo(data: { name: string; birthYear: number }) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}; 
printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 }); // Rogerinho was born in 1978.
