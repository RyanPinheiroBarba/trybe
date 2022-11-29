let angulo1 = 45;
let angulo2 = 45;
let angulo3 = 90;
let validacaoTriangulo = "";

if (angulo1 + angulo2 + angulo3 == 180){
  validacaoTriangulo = true;
  console.log(validacaoTriangulo);
}else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  validacaoTriangulo = null;
  console.log("erro - triangulo inválido");
}else if (angulo1 + angulo2 + angulo3 != 180) {
  validacaoTriangulo = false;
  console.log(validacaoTriangulo);
}

