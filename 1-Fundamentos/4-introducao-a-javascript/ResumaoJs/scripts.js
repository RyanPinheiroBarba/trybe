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
  div.style.borderRadius = "30%";
  div.style.backgroundColor = selectedColor;
  allShots.appendChild(div);
  saveShots(event.pageX, event.pageY,)
}

fullCourt.addEventListener("click", (event) =>{
  if(shot != undefined) {
    addShotToCourt(event)
  } else {
    alert("Selecione o Botão de marcação primeiro.")
  }
})

const saveShots = (x, y) => {
  localStorage.setItem(`${localStorage.length +1}`,`X:${x}, Y:${y} - ${shot}`)
  localStorage.setItem("mapOfShots", allShots.innerHTML);
}

const reloadShots = () => {
  allShots.innerHTML = localStorage.getItem("mapOfShots");
}

window.onload = () => {
  reloadShots();
}
