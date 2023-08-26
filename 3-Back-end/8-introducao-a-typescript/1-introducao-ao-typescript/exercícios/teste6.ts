type PersonalInfo = {
  name: string;
  birthYear: number;
}; // PersonalInfo

const printNewPersonalInfo = (data: PersonalInfo): void => {
  console.log(`Nome: ${data.name}, Ano de nascimento: ${data.birthYear}`);
};

printNewPersonalInfo({ name: 'José', birthYear: 1990 }); // Nome: José, Ano de nascimento: 1990
