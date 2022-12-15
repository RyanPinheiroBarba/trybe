let fullCourt = document.getElementById("full-court");
let hitsMistakes = document.getElementById("hits-mistakes");
let clearButton = document.getElementById("clearButton");
let allShots = document.getElementById("all-shots");

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

const addShotToCourt = (event) => {
  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = `${event.pageY}px`;
  div.style.left = `${event.pageX}px`;
  div.style.width = "20px";
  div.style.height = "20px";
  div.style.border = "50% 0 solid red";
  div.style.backgroundColor = selectedColor;
  allShots.appendChild(div);
}
