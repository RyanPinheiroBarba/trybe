# trybe

entradas do tsconfig.json:

module: especifica o “sistema de módulo” a ser utilizado no código JavaScript. Leia a documentação se quiser se aprofundar, mas aqui será requerido ‘CommonJS’ quase sempre.
target: define a versão do JavaScript para qual o código será compilado. Exemplo: ES6.
rootDir: define a raiz dos arquivos do projeto. É comum utilizar “./src” aqui, já que é onde os códigos-fonte costumam ficar.
outDir: define a pasta de saída do código compilado. Pode-se agrupar os arquivos .js gerados durante a compilação em um diretório nomeado a seu critério, mas é comum usar “./dist” ou “./build”.
esModuleInterop: permite a compilação de módulos ES6 para CommonJS. É isso que possibilita a você usar a sintaxe de importação padrão do TypeScript com módulos do ECMAScript, por exemplo.
strict: ativa a verificação estrita (mais rigorosa) de tipo.
include: inclui os arquivos ou diretórios mencionados na compilação, como “src/“.
exclude: exclui os arquivos ou diretórios mencionados na compilação, por exemplo “build” ou “node_modules”.

como tipar dados com ts:

utilizando type annotation:

const firstName: string = "Joel";
const age: number = 38;
const brazilian: boolean = false;

Desse jeito vc atribui diretamente a variável o seu tipo, antes de atribuir o valor, 
a sintaxe é atribuída através de <dois pontos + tipo 'como no exemplo'>

da mesma forma, em funções com seus parâmetros:

function greet(name: string) {
  console.log(`Olá, ${name.toUpperCase()}!`);
};

abaixo eu trago um exemplo de anotação de tipo para um return:

function getFavoriteNumber(): number {
  return 26;
};

temos também o tipo vazio, para quando a função não retorna nenhum valor:

function greet(name: string): void {
  console.log(`Olá, ${name.toUpperCase()}!`);
}

em todos os casos, a síntaxe da anotação de tipo em retornos aparece após a lista de parâmetros da função.

ex: 
const sum = (x: number, y: number): number => {
    return x + y;
};
