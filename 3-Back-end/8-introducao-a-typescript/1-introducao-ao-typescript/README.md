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