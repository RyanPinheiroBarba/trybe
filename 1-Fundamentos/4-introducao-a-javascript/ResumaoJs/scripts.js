let fullCourt = document.getElementById("full-court");
let hitsMistakes = document.getElementById("hits-mistakes");
let clearButton = document.getElementById("clearButton");
let selectedColor;
let shot;
hitsMistakes.addEventListener("click", (event) => {
  // console.log(event.target.innerText);
  if(event.target.innerText === "ACERTOS") {
    selectedColor = "green";
    shot = "Acertou";
  }
  if(event.target.innerText === "ERROS") {
    selectedColor = "red";
    shot = "Errou";
  }
  console.log(selectedColor, shot);
});
