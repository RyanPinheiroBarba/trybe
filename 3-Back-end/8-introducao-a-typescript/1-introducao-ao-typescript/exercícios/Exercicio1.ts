// Crie union types que representem: 
// a. Os estados físicos da matéria como strings: líquido, sólido ou gasoso. 
// b. O documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex.: “123.567.890-12”. 
// c. Sistemas operacionais: Linux, MacOS ou Windows.

type estadosFisicos = "liquido" | "sólido" | "gasoso";
type documentoIdentificador = number | string;
type sistemasOperacionais = "Linux" | "MacOS" | "Windows";

const estadoFisico: estadosFisicos = "gasoso";
const documento: documentoIdentificador = 12345678901;
const sistemaOperacional: sistemasOperacionais = "Linux";

console.log(estadoFisico, documento, sistemaOperacional); // gasoso 12345678901 Linux