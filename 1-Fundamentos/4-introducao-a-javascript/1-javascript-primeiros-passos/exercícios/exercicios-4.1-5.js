let chessPiece = "Cavalo";
let chessPieceMove = "";

switch (chessPiece.toLowerCase()){
  case chessPiece = "peão":
    chessPieceMove = "1 Casa para frente, captura na diagonal."
    console.log(chessPieceMove);
    break;
  case chessPiece = "cavalo":
    chessPieceMove = "3 casas fazendo um ângulo de 90º de descolamento."
    console.log(chessPieceMove);
    break
  default:
    console.log("Erro!")
}